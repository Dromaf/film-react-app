import React from "react";
import logo from "./img/logo.png";
import Menu from "./menu/menu";
import LoginForm from "../login-form/login-form";
import SearchBar from "material-ui-search-bar";

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
      <SearchBar
        onChange={() => console.log("onChange")}
        onRequestSearch={() => console.log("onRequestSearch")}
        style={{
          margin: "15px auto",
          maxWidth: 1700
        }}
      />
      </div>
    </header>
    
  );
};

export default Header;
