import React from 'react';
import s from './authorization.module.css';
import {NavLink} from "react-router-dom";

const Authorization = () => {
    return (
      <div className="wrapper">
      <div className={s.login_form}> 
      <h1>Авторизация</h1>
        <fieldset>
            <form action="" method="get">
                <input type="email" required value="Логин" />
                <input type="password" required value="Пароль" />
                <input type="submit" value="Войти" />
            </form>
        </fieldset>
    </div> 
    </div> 
    
    )
};

export default Authorization;