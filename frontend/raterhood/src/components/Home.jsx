import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import About from "./About.jsx";
import Login from "./register-login/Login.jsx";
import Register from "./register-login/Register.jsx";
import {useState} from "react";

function Home() {
    const [loginVisible, setLoginVisible] = useState(false);
    const [registerVisible, setRegisterVisible] = useState(false);

    function handleLoginClick() {
        setLoginVisible(true);
        setRegisterVisible(false);
    }

    function handleRegisterClick() {
        setRegisterVisible(true);
        setLoginVisible(false);
    }

    return (
        <div>
            <div>
                <button className='login-button' onClick={handleLoginClick}>Login</button>
                <button className='sign-up-button' onClick={handleRegisterClick}>Register</button>
                {loginVisible && <Login/>}
                {registerVisible && <Register/>}
            </div>
            <Header/>
            <About/>
            <Footer/>
        </div>
    )
}

export default Home