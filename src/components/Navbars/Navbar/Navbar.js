import React from "react";
import "./Navbar.scss";

import MenuLink from "./MenuLink";

function ToggleNav(){
  let Menu = document.querySelector(".Mobile-Nav");
  Menu.classList.toggle("Mobile-Nav-On");
}

function Links(props){
    return (
      <ul className={props.clsname}>
        <MenuLink name="Home" hrefLink="/index.html#Home" />
        <MenuLink name="Services" hrefLink="/index.html#Services" />
        <MenuLink name="Projects" hrefLink="/index.html#Projects" />
        <MenuLink name="Contact" hrefLink="/index.html#Contact" />
      </ul>
    );
}

function Navbar(props) {
  return (
    <div className="NavContainer">
      <div className="Navbar">
        <div id="logo">&#60; mr.devSam &#62;</div>
        <Links clsname="Main-Nav" />
        <div id="Hamburger" onClick={ToggleNav}></div>
      </div>
      <Links clsname="Mobile-Nav" />
    </div>
  );
}

export default Navbar;