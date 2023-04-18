// import {Route} from 'react-router-dom'
import './App.css'
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Logo from "./components/Logo.jsx";


function App() {
    // const [count, setCount] = useState(0)

    return (

        <div className="App">
            <Logo/>
            <Header/>
            <form className='search-for-neighborhood'>
                <label>Search for the neighborhood:  </label>
                <input type= 'text'
                       placeholder='Enter your choice'/>
                <input type='submit' value='Submit'/>
            </form>
            <div className="card">
                <button className="btn btn-search">
                    Explore our Webpage
                </button>
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
