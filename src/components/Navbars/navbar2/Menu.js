import React from 'react';
import './Menu.scss';

export default function Menu(props) {

    function handleClick(e) {
        let Menu = document.querySelector(".Links2");
        Menu.classList.toggle("menu-on2");
    }

    return (
        <div className="Menu2">
            <div id="MenuIcon2" onClick={handleClick}></div>
            <ul className="Links2">
                <li style={{ borderTop: "none" }}><a href="/">Home</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </div >
    )
}