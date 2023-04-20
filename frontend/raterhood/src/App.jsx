import {Route, Routes, BrowserRouter} from 'react-router-dom'
import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {useState} from "react";
import About from "./components/About.jsx";


function App() {

    const [isShown, setIsShown] = useState(false)
    const handleClick = event => {
        //toggle shown state
        setIsShown(current => !current)
        //setIsShown(true)
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<> <Header/><About/><Footer/> </>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
