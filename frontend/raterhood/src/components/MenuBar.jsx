import {useState} from "react";
import Login from "./Login.jsx";
import Register from "./Register.jsx";

function MenuBar() {
    return (
        <div className='menu-div'>

            <div className='menu-bar'>

                <ul className='list-components'>
                    <li><a href="/">Home</a></li>
                    <li><a href="https://www.youtube.com/watch?v=87p2vnOz7_c&t=1s">Review</a></li>
                    <li><a href="/">Locations</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/staff">Staff</a></li>
                </ul>
            </div>
        </div>

    )
}

export default MenuBar