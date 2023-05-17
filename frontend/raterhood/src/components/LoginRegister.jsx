import Login from "./register-login/Login.jsx";
import Register from "./register-login/Register.jsx";
import {useEffect, useState} from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';



function LoginRegister() {
    const [loginVisible, setLoginVisible] = useState(false);
    const [registerVisible, setRegisterVisible] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    function handleLoginClick() {
        setLoginVisible(true);
        setRegisterVisible(false);
    }

    function handleRegisterClick() {
        setRegisterVisible(true);
        setLoginVisible(false);
    }

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <>
            {isLoggedIn ? (
                <div>
                    <p>Welcome, User!</p>
                    <button onClick={() => firebase.auth().signOut()}>Logout</button>
                </div>) : (
                <div>
                    <button className='login-button' onClick={handleLoginClick}>Login</button>
                    <button className='sign-up-button' onClick={handleRegisterClick}>Register</button>
                    {loginVisible && <Login/>}
                    {registerVisible && <Register/>}
                </div>
            )}
        </>
    )

}

export default LoginRegister

