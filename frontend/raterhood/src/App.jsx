import {Routes, Route} from "react-router-dom";
import './App.css'
import Profile from "./components/Profile.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import VerifyEmail from "./components/VerifyEmail.jsx";
import Staff from "./components/Staff.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";


function App() {
    return (

        <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path='/verify-email' element={<VerifyEmail/>}/>
            <Route path='/staff' element={<Staff/>}/>
            <Route path='/contact' element={<Contact/>}/>

        </Routes>
    )
}

export default App
