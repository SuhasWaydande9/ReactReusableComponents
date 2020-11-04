import React from 'react';
import "./navbar1.scss";
import Menu from './Menu.js';

function Navbar1(props) {
    return (
        <div className="NavbarContainer">
            <div className="Navigator">
                <div id="Logo"> Logo </div>
                <Menu />
            </div>
        </div>
    )
}

export default Navbar1;