import {useState} from "react";


function About() {
    const [isShown, setIsShown] = useState(false)
    const handleClick = event => {
        //toggle shown state
        setIsShown(current => !current)
        //setIsShown(true)
    }
    return (
        <>
            <button className='button' onClick={handleClick}>About</button>
            {isShown && (
                <div className='about'>
                    <p>
                        We have created a web-based application that provides comprehensive<br/>
                        information about a particular neighborhood in a city.<br/>
                        This can be a great help for people who are planning to move or rent out a flat.<br/>
                        Our application is designed to provide information on the building's condition,<br/>
                        the neighborhood's population density, the availability and cost of parking, public
                        transportation<br/>
                        options, and infrastructure. <br/>
                        Additionally, we are including new functionalities such as reviews from people who<br/>
                        live in the area,<br/>
                        which could offer valuable insights and help others make informed decisions.<br/>
                    </p>
                </div>)}

        </>
    )
}

export default About