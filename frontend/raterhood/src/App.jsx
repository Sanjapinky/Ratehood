import {Routes, Route} from "react-router-dom";
import './App.css'
import Profile from "./components/register-login/Profile.jsx";
import Login from "./components/register-login/Login.jsx";
import Register from "./components/register-login/Register.jsx";
import VerifyEmail from "./components/register-login/VerifyEmail.jsx";
import Staff from "./components/Staff.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import {useState, useEffect} from 'react'
import {auth} from './components/register-login/firebase.jsx';
import {onAuthStateChanged} from 'firebase/auth'
import {Navigate} from 'react-router-dom'
import PrivateRoute from "./components/register-login/PrivateRoute.jsx";
import {AuthProvider} from "./components/register-login/AuthContext.jsx";


function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const [timeActive, setTimeActive] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        })
    }, [])
    return (
        <AuthProvider value={{currentUser, timeActive, setTimeActive}}>

            <Routes>

                <Route path='/' element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path='/staff' element={<Staff/>}/>
                <Route path='/contact' element={<Contact/>}/>

                <Route exact path='/' element={
                    <PrivateRoute>
                        <Home/>
                        <Profile/>
                    </PrivateRoute>
                }/>
                <Route path="/login" element={
                    !currentUser?.emailVerified
                        ? <Login/>
                        : <Navigate to='/' replace/>
                }/>
                <Route path="/register" element={
                    !currentUser?.emailVerified
                        ? <Register/>
                        : <Navigate to='/' replace/>
                }/>
                <Route path='/verify-email' element={<VerifyEmail/>}/>
            </Routes>

        </AuthProvider>
    )
}

export default App
