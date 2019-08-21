import React from "react";
import Header from "../header/header";
import Menu from "../menu/menu";
import Content from "../content/content";
import LoginForm from "../login-form/login-form";
import "normalize.css";
import "./app.css";
import Registration from "../login-form/registration/registration";
import Autorization from "../login-form/autorization/autorization";

const App = () => {
  return (
    <div id="container">
      <header id="header">
        <div class="wrapper">
          <Header />
          <LoginForm />
        </div>
        <Menu />
      </header>
      <Content />
     {/*<div>
        <Registration />
        <Autorization />
      </div>*/}
    </div>
  );
};

export default App;
