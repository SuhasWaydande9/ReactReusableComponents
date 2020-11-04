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
        let Menu = document.querySelector(".Links");
        Menu.classList.toggle("menu-on");
    }

    return (
        <div className="Menu">
            <div id="MenuIcon" onClick={handleClick}></div>
            <ul className="Links">
                <li><a href="/">Home</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </div >
    )
}