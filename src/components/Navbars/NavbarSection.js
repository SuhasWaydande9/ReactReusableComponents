import React from 'react';
import Navbar1 from './navbar1/navbar1.js';
import Navbar2 from './navbar2/navbar2.js';
import Navbar3 from './navbar3/navbar3.js';
import Navbar4 from './Navbar/Navbar.js';
import "./MainStyle.scss"

class NavbarSection extends React.Component {

    render() {
        return (
            <div>
                <Navbar1 />
                <Navbar2 />
                <Navbar3 />
                <div className="NavbarContainer">
                    <Navbar4 />
                </div>
            </div>
        )
    }
}

export default NavbarSection;
