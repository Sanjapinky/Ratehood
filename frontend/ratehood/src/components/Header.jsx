import React from "react";
import './logo.jpg'



const Header = () => {
    return (
        <header className='header'>

            <h1 className='first-heading'>Raterhood</h1>
            <div>
                <img className="neighborhood-photo"
                     alt='neighborhood-photo'
                     src="https://www.upack.com/sites/www/files/styles/landscape__m/public/2020-03/upk_0010_59835%20copy_content_image.jpg?h=3096947f&itok=IdySYlRL"/>
            </div>

        </header>
    )
}
export default Header