import React from "react";

function MenuLink(props) {
  function ToggleNav() {
    let Menu = document.querySelector(".Mobile-Nav");
    Menu.classList.toggle("Mobile-Nav-On");
  }
  return (
    <li onClick={ToggleNav}>
      <a href={props.hrefLink}>{props.name}</a>
    </li>
  );
}

export default MenuLink;
