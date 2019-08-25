import React from "react";
import logo from "./img/logo.png";
import Menu from "./menu/menu";
import LoginForm from "../login-form/login-form";
import Search from "../search/search";

const Header = () => {
  return (
    <header id="header">
      <div >
      <div className="wrapper">
        <div className="header_logo">
          <img src={logo} alt={logo} />
        </div>
        <Menu />
        <LoginForm />
        
      </div>
      <Search />
      </div>
    </header>
    
  );
};

export default Header;
