import {useState} from "react";

const About = () => {
    const [isShown, setIsShown] = useState(false)
    const handleClick = event => {
        //toggle shown state
        setIsShown(current => !current)
        //setIsShown(true)
    }
    return (
        <div>
            <button className='button' onClick={handleClick}>About</button>
            {isShown && (
                <div className='about'>
                    <p>
                        We have created a web-based application that provides comprehensive
                        information about a particular neighborhood in a city.
                        This can be a great help for people who are planning to move or rent out a flat.
                        Our application is designed to provide information on the building's condition,
                        the neighborhood's population density, the availability and cost of parking, public transportation
                        options,
                        and infrastructure. Additionally, we are including new functionalities such as reviews from people who
                        live in the area,
                        which could offer valuable insights and help others make informed decisions.
                    </p>
                </div>)}

        </div>
    )
}
export default About