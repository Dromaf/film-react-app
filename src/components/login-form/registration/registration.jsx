import React from 'react';
import s from './registration.module.css';
import {NavLink} from "react-router-dom";

const Registration = () => {
    return (
      <div className="wrapper">
      <div className={s.registr_form}> 
      <h1>Регистрация</h1>
        <fieldset>
            <form action="" method="get">
                <input type="email" required value="Логин" />
                <input type="password" required value="Пароль" />
                <input type="submit" value="Зарегистрироватся" />
            </form>
        </fieldset>
    </div> 
    </div>
    )
};

export default Registration;