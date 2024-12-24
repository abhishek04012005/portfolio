import { Helmet } from "react-helmet-async";
import About from "./About/About";
import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";
import Testimonials from "./Testimonials/Testimonials";
import Work from "./Work/Work";
import MyImage from '../assests/myImage.jpg'




function Main() {
    return (
        <div className="Main">

            <Helmet>
                <meta name="description"
                    content="Professional Web Developer, Web Designer, Digital Content Creator, and 3D Animator. Specializing in website design for businesses, events, blogs, and digital media content creation." />

                <meta name="keywords"
                    content="Web Developer, Web Designer, Digital Content Creator, 3D Animation, Business Website Design, Event Websites, Wedding Invitations, Video Content, Resume Writing, Portfolio, Blogging, SEO"
                />
                <meta property="og:title" content="Professional Web Developer, Designer & Content Creator | Portfolio"
                />
                <meta property="og:description"
                    content="Offering expert services in web development, design, content creation, and 3D animation. Specializing in business websites, event designs, invitations, and digital media content."
                   />
                    <meta property="og:image"
                        content={MyImage}
                        />
                        <meta property="og:type" content="website" />
                        <meta property="og:url" content="https://abhishekchoudhary.co.in" />
                    </Helmet>

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