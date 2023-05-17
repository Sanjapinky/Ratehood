import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import About from "./About.jsx";
import LoginRegister from "./LoginRegister.jsx";



function Home() {
    return (

        <div>
            <LoginRegister/>
            <Header/>
            <About/>
            <Footer/>
        </div>

    )
}

export default Home