import React from "react";
import MenuBar from "./MenuBar.jsx";

const Header = () => {
    return (

        <header className='header'>
            <MenuBar/>
            <h1 className='first-heading'>Raterhood</h1>
            <div>
                {/*<img className="neighborhood-photo"
                     alt='neighborhood-photo'
                     src="https://media.discordapp.net/attachments/958408165509169153/1097888298476781670/houses4.png?width=610&height=610"/>
          */}  </div>

        </header>
    )
}
export default Header