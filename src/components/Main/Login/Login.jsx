import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../../utils/validators'
import { connect } from 'react-redux'
import { login } from '../../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import Input from '../../common/Input/Input'
import styles from './Login.module.css'
import Button from '../../common/Button/Button'

function Login ({ login, isAuth, captchaUrl }) {
  const onSubmit = (formData) => {
    const { userLogin, password, rememberMe, captcha } = formData
    login(userLogin, password, rememberMe, captcha)
  }

  const logTestAccount = () => {
    login('free@samuraijs.com', 'free', true, '')
  }

  if (isAuth) {
    return <Redirect to='/profile'/>
  }

  return (
    <div>
      <h1>Авторизация</h1>
      <LoginReduxForm logTestAccount={logTestAccount} captchaUrl={captchaUrl} onSubmit={onSubmit}/>
    </div>
  )
}

function LoginForm ({ handleSubmit, error, captchaUrl, logTestAccount }) {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label htmlFor='loginLogin'>Email</label>
        <Field
          width='250px'
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
          width='250px'
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
        <Button width='100px'>Войти</Button>
        <Button type='button' margin='0 0 0 10px' onClick={logTestAccount}>Войти под тестовым аккаунтом</Button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

export default connect((state) => ({
  isAuth: state.auth.isAuth, captchaUrl: state.auth.captchaUrl
}), { login })(Login)
