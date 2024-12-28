import React from 'react'
import { Helmet } from 'react-helmet'
import ServiceDetailBox from '../../ServiceDetailBox/ServiceDetailBox'
import BusinessWebsiteSVG from '../../../SVG/BusinessWebsiteSVG/BusinessWebsiteSVG'
import ServiceCard from '../../CustomService/ServiceCard/ServiceCard'
import { businessWebsite } from '../../CustomService/ServiceCard/ServiceConstant'



const BusinessWebsite = () => {
  return (
    <>
      <Helmet>
        <title>Create Your Business Website</title>
        <meta name="description" content="Establish your online presence with a professional business website. Stand out in your industry with our customized business templates." />
        <meta name="keywords" content="business website, business website template, company website, professional website, custom business website, online presence, business services, web design" />
        <meta property="og:title" content="Business Website | Enhance Your Online Presence with a Custom Website" />
        <meta property="og:description" content="Create a stunning business website. Showcase your company and services with a professional, personalized touch." />
        <meta property="og:image" content="https://example.com/path/to/your/business-website-image.png" />
        <meta property="og:url" content="https://abhishekchoudhary.co.in/business-website" />
      </Helmet>

      <div className="business-website">
        <ServiceDetailBox
          heading={"Business website"}
          serviceImg={<BusinessWebsiteSVG />}
          para1={"As a dedicated web developer, my role involves creating professional and user-friendly business websites. My work emphasizes clean code practices, optimal performance, and accessibility, ensuring a seamless user experience across all devices. "}
          para2={"I integrate advanced features and functionalities to enhance the usability and efficiency of business operations. By working on various business website projects, I aim to exceed client expectations and contribute to their digital presence and success."}
          para3={"I am also proficient in utilizing APIs and back-end technologies to create scalable and comprehensive solutions. My commitment to staying current with industry trends and best practices drives me to deliver top-notch web solutions that meet the unique needs of each business."}
        />

        <ServiceCard serviceCardData={businessWebsite} />
      </div>
    </>
  )
}

export default BusinessWebsite