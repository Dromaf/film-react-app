import React from "react";
import Header from "../header/header";
import Content from "../content/content";
import Home from "../home/home";
import "normalize.css";
import "./app.css";
import Registration from "../login-form/registration/registration";
import Authorization from "../login-form/authorization/authorization";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div id="container">
        <Header />
        <Route exact path='/' component={Home} />
        <Route path="/info" component={Content} />
        <Route path="/authorization" component={Authorization} />
        <Route path="/registration" component={Registration} />
        
      </div>
    </BrowserRouter>
  );
};

export default App;
