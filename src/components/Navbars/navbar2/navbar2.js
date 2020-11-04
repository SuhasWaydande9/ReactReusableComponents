import React from 'react';
import "./navbar2.scss";
import Menu from './Menu.js';

function Navbar1(props) {
    return (
        <div className="NavbarContainer2">
            <div className="Navigator2">
                <Menu />
                <div id="Logo"> Logo </div>
            </div>
        </div>
    )
}

export default Navbar1;