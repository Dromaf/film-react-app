import React from 'react';
import s from './login-form.module.css';

const LoginForm = () => {
    return (
        <div className={s.header_login}>
            <a href="/1" className={s.header_login_enter}>Вход</a>
            <a href="/1" className={s.header_login_autorization}>Регистрация</a>
        </div>
    )
};

export default LoginForm;