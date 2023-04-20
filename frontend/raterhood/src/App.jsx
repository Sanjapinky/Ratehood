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

        <div className="App">
            <div className='header-card'>
                <Header/>
            </div>
            <div className="card">
                <About/>
            </div>
            <div className='footer'>
                <Footer/>
            </div>
        </div>

    )
}

export default App
