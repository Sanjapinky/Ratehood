// import {Route} from 'react-router-dom'
import './App.css'
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Logo from "./components/Logo.jsx";
import MenuBar from "./components/MenuBar.jsx";


function App() {
    // const [count, setCount] = useState(0)

    return (

        <div className="App">
            <MenuBar/>
            <Header/>
            <div className="card">

            </div>
            <div className='footer'>
                <footer>
                    <About/>
                </footer>

            </div>

        </div>

    )
}

export default App
