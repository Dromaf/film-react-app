import React from 'react';
import s from './login-form.module.css';
import {NavLink} from "react-router-dom";

const LoginForm = () => {
    return (
        <div className={s.header_login}>
            <NavLink to="/authorization"  className={s.header_login_enter}>Вход</NavLink>
            <NavLink to="/registration"className={s.header_login_authorization}>Регистрация</NavLink>
        </div>
    )
};

export default LoginForm;