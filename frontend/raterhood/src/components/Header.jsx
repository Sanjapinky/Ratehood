import React from "react";
import MenuBar from "./MenuBar.jsx";

function Header() {
    return (
        <header className='header'>
            <MenuBar/>
            <h1 className='first-heading'>RaterHood</h1>
        </header>
    )
}

export default Header