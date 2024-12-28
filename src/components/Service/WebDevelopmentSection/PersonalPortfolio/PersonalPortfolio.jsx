import React from 'react'
import { Helmet } from 'react-helmet'
import ServiceDetailBox from '../../ServiceDetailBox/ServiceDetailBox'
import PersonalPortfolioSVG from '../../../SVG/PersonalPortfolioSVG/PersonalPortfolioSVG'
import ServiceCard from '../../CustomService/ServiceCard/ServiceCard'
import { personalPortfolio } from '../../CustomService/ServiceCard/ServiceConstant'



const PersonalPortfolio = () => {
  return (
    <>
      <Helmet>
        <title>Create Your Personal Portfolio</title>
        <meta name="description" content="Showcase your skills and projects with a stunning personal portfolio website. Stand out in your industry with our customized portfolio templates." />
        <meta name="keywords" content="personal portfolio, portfolio website, portfolio template, showcase skills, project display, professional portfolio, custom portfolio, web portfolio" />
        <meta property="og:title" content="Personal Portfolio | Highlight Your Expertise with a Custom Portfolio" />
        <meta property="og:description" content="Create a stunning personal portfolio website. Showcase your skills and projects with a professional, personalized touch." />
        <meta property="og:image" content="https://example.com/path/to/your/portfolio-image.png" />
        <meta property="og:url" content="https://abhishekchoudhary.co.in/personal-portfolio" />
      </Helmet>

      <div className="personal-portfolio">
        <ServiceDetailBox
          heading={"Personal Portfolio"}
          serviceImg={<PersonalPortfolioSVG />}
          para1={"I've dedicated a significant part of my work to creating personal portfolio websites. My portfolios are designed to highlight individual achievements and skills, ensuring a strong digital presence. By leveraging tools like Figma, Gimp, and Inkscape, I create visually captivating designs that resonate with personal brands."}
          para2={"Additionally, I integrate dynamic elements and animations using Blender to enhance user engagement. My goal is to craft unique portfolios that not only reflect the personality and professional journey of individuals but also leave a lasting impression on their audience."}
          para3={"Staying current with the latest web development trends, I ensure that my portfolio projects are always at the cutting edge of technology."}
        />
      </div>

      <ServiceCard serviceCardData={personalPortfolio}/>

    </>
  )
}

export default PersonalPortfolio