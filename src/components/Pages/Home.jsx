
import Hero from "./Home/Hero";
import AboutMe from "./About/AboutMe";
import Projects from "./Project/Projects";
import Services from "./Home/Services";
import Counter from "./Home/Counter";
import InstaPost from "./Home/InstaPost";

const Home = ()=> {

    return(
        <>
        <Hero />
        <AboutMe />
        <Services />
        <Counter />
        <Projects />
        {/* <InstaPost /> */}
        </>
    )
}

export default Home