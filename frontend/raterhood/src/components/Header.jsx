import React from "react";
import MenuBar from "./MenuBar.jsx";

const Header = () => {
    return (
        <header className='header'>
            <MenuBar/>
            <h1 className='first-heading'>Raterhood</h1>
        </header>
    )
}
export default Header