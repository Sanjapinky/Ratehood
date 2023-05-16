import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import About from "./About.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import {useState} from "react";

function Home(){
    const [componentVisible, setComponentVisible] = useState(false);
    function handleClick(){
        setComponentVisible(true);
    }
    return(
        <div>
            <div>
                <button className='login-button' onClick={handleClick}>Login</button>
                {componentVisible && <Login/>}
                <button className='sign-up-button' onClick={handleClick}>Sign up</button>
                {componentVisible && <Register/>}
            </div>
            <Header/>
            <About/>
            <Footer/>
        </div>
    )
}
export  default Home