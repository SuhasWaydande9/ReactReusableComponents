import React from 'react';
import './Menu.scss';

export default function Menu(props) {

    // function useNavMenu(e) {
    //     e.preventDefault();
    //     useEffect(() => {
    //         let MenuIcon = document.querySelector("#MenuIcon");
    //         MenuIcon.addEventListener("click", () => {
    //             console.log("clicked");
    //         })
    //     })
    // }
    function handleClick(e) {
        let Menu = document.querySelector(".Mobile-Nav");
        Menu.classList.toggle("menu-on3");
    }

    return (
        <div className="Menu3">
            <div id="MenuIcon3" onClick={handleClick}></div>
            <ul className="Main-Nav">
                <li><a href="/">Home</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </div >
    )
}