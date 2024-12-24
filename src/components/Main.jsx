import { Helmet } from "react-helmet";
import About from "./About/About";
import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";
import Testimonials from "./Testimonials/Testimonials";
import Work from "./Work/Work";
import MyImage from '../assests/myImage.jpg'




function Main() {
    return (

        <>

        <Helmet>


        <meta name="description" content="Professional Web Developer, Web Designer, Digital Content Creator, and 3D Animator. Specializing in website design for businesses, events, blogs, and digital media content creation." />
        <meta name="keywords" content="portfolio, wedding website, birthday website, portfolio website, abhishek choudhary, anniversary website, wedding anniversary website, digital invitaion, bio-data, resume, 3d product promotion video, 3d brand promotion video, seo, digital content, blogging website" />
        <meta property="og:title" content="Professional Web Developer, Designer & Content Creator | Portfolio" />
        <meta property="og:description" content="Offering expert services in web development, design, content creation, and 3D animation. Specializing in business websites, event designs, invitations, and digital media content." />
        <meta property="og:image" content={MyImage} />
        <meta property="og:url" content="https://abhishekchoudhary.co.in/" />

        <title>Abhishek Choudhary | Professional Web Developer, Designer & Content Creator | Portfolio</title>


        </Helmet>
            <div className="Main">



                {/* <Navbar /> */}
                <Hero />
                <About />
                <Skills />
                <Work />
                <Testimonials />
                {/* <Contact /> */}
                {/* <Footer /> */}
            </div>
        </>
            );
}
export default Main;