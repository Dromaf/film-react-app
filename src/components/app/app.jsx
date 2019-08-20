import React from "react";
import Header from "../header/header";
import Menu from "../menu/menu";
import Content from "../content/content";
import LoginForm from "../login-form/login-form";
import "normalize.css";
import "./app.css";

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
     
    </div>
  );
};

export default App;
