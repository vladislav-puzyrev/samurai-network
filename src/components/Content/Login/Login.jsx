import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {formControl} from "../../common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Input = formControl('input');

function Login(props) {
    const onSubmit = (formData) => {
        const {login, password, rememberMe} = formData;
        props.login(login, password, rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to='/profile'/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

function LoginForm({handleSubmit, error}) {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field type='text' placeholder='Логин' name='login' component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type='password' placeholder='Пароль' name='password' component={Input} validate={[required]}/>
            </div>
            <Field type='checkbox' name='rememberMe' id='rememberMe' component={Input}/>
            <label htmlFor="rememberMe">Запомнить меня</label>
            {error ? <div style={{'color': 'red'}}>{error}</div> : null}
            <div>
                <button>Войти</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default connect((state) => ({isAuth: state.auth.isAuth}), {login})(Login);