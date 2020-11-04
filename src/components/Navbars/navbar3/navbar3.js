import React from 'react';
import "./navbar3.scss";
import Menu from './Menu.js';

function Navbar1(props) {
    return (
        <div className="NavbarContainer3">
            <div className="Navigator3">
                <div id="Logo3"> Logo </div>
                <Menu />
            </div>
            <ul className="Mobile-Nav">
                <li><a href="/">Home</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar1;