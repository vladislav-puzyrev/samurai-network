import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { createField } from '../../common/FormsControls/createField'
import { required } from '../../../utils/validators'
import { connect } from 'react-redux'
import { login } from '../../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'

const Input = createField('input')

type PropTypes = {
  isAuth: boolean
  captchaUrl: string
  login: (login: string, password: string, rememberMe: boolean, captcha: string) => void
}

function Login (props: PropTypes) {
  const onSubmit = (formData: any) => {
    const { login, password, rememberMe, captcha } = formData
    props.login(login, password, rememberMe, captcha)
  }

  if (props.isAuth) {
    return <Redirect to='/profile'/>
  }

  return (
    <div>
      <h1>Login</h1>
      // @ts-ignore
      <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
    </div>
  )
}

function LoginForm ({ handleSubmit, error, captchaUrl }: any) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          type='text' placeholder='Логин' name='login' component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          type='password' placeholder='Пароль' name='password'
          component={Input} validate={[required]}
        />
      </div>
      <Field
        type='checkbox' name='rememberMe' id='rememberMe'
        component={Input} checked
      />
      <label htmlFor='rememberMe'>Запомнить меня</label>

      {captchaUrl && <img src={captchaUrl} alt='captcha'/>}
      {captchaUrl &&
      <Field
        type='text' placeholder='Капча' name='captcha' component={Input}
        validate={[required]}
      />}

      {error ? <div style={{ color: 'red' }}>{error}</div> : null}
      <div>
        <button>Войти</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

export default connect((state: any) => ({ isAuth: state.auth.isAuth, captchaUrl: state.auth.captchaUrl }), { login })(Login)