import About from "./About/About";
import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";
import Testimonials from "./Testimonials/Testimonials";
import Work from "./Work/Work";




function Main() {
    return (
        <div className="App">

            {/* <Navbar /> */}
            <Hero />
            <About />
            <Skills />
            <Work />
            <Testimonials />
            {/* <Contact /> */}
            {/* <Footer /> */}
        </div>
    );
}

export default Main;