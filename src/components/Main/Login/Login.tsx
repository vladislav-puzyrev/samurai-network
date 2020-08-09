import React from 'react'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import { required } from '../../../utils/validators'
import { connect } from 'react-redux'
import { login } from '../../../redux/auth/thunks'
import { Redirect } from 'react-router-dom'
import Input from '../../common/Input/Input'
import styles from './Login.module.css'
import Button from '../../common/Button/Button'
import { RootReducerType } from '../../../redux/store'

type MapStatePropTypes = {
  isAuth: boolean
  captchaUrl: string | null
}

type MapDispatchPropTypes = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

const Login: React.FC<MapStatePropTypes & MapDispatchPropTypes> = ({ login, isAuth, captchaUrl }) => {
  document.title = 'Авторизация'

  const onSubmit = (formData: formNames) => {
    const { userLogin, password, rememberMe, captcha } = formData
    login(userLogin, password, rememberMe, captcha)
  }

  const loginTestAccount = () => {
    login('free@samuraijs.com', 'free', true, '')
  }

  if (isAuth) {
    return <Redirect to='/profile'/>
  }

  return (
    <div>
      <h1>Авторизация</h1>
      <LoginReduxForm
        initialValues={{ rememberMe: true }}
        logTestAccount={loginTestAccount}
        captchaUrl={captchaUrl}
        onSubmit={onSubmit}
      />
    </div>
  )
}

type formProps = {
  captchaUrl: string | null
  logTestAccount: () => void
}

type formNames = {
  userLogin: string
  password: string
  rememberMe: boolean
  captcha: string
}

const LoginForm: React.FC<InjectedFormProps<formNames, formProps> & formProps> = ({ handleSubmit, error, captchaUrl, logTestAccount }) => {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label htmlFor='loginLogin'>Email</label>
        <Field
          type='text'
          placeholder='Email'
          name='userLogin'
          component={Input}
          validate={[required]}
          id='loginLogin'
        />
      </div>

      <div>
        <label htmlFor='loginPassword'>Пароль</label>
        <Field
          type='password'
          placeholder='Пароль'
          name='password'
          component={Input}
          validate={[required]}
          id='loginPassword'
        />
      </div>

      <div>
        <Field type='checkbox' name='rememberMe' id='rememberMe' component={Input}/>
        <label htmlFor='rememberMe'>Запомнить меня</label>
      </div>

      <div>
        {captchaUrl && <img src={captchaUrl} alt='captcha'/>}
        {
          captchaUrl && (
            <>
              <label htmlFor='loginCaptcha'>Капча</label>
              <Field
                type='text'
                placeholder='Капча'
                name='captcha'
                component={Input}
                validate={[required]}
                id='loginCaptcha'
              />
            </>
          )
        }
      </div>

      {error ? <div style={{ color: 'red' }}>{error}</div> : null}
      <div>
        <Button type='submit' style={{ width: '100px' }}>Войти</Button>
        <Button type='button' style={{ marginLeft: '10px' }} onClick={logTestAccount}>
          Войти под тестовым аккаунтом
        </Button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm<formNames, formProps>({ form: 'login' })(LoginForm)

export default connect<MapStatePropTypes, MapDispatchPropTypes, unknown, RootReducerType>((state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
}), { login })(Login)
