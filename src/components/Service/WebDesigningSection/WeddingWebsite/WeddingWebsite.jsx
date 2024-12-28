import React from 'react'
import WeddingWebsiteSVG from '../../../SVG/WeddingWebsiteSVG/WeddingWebsiteSVG'
import ServiceCard from '../../CustomService/ServiceCard/ServiceCard'
import { brideWeddingWebsite, groomWeddingWebsite } from '../../CustomService/ServiceCard/ServiceConstant'
import { Helmet } from 'react-helmet'
import ServiceDetailBox from '../../ServiceDetailBox/ServiceDetailBox'

const WeddingWebsite = () => {
  return (
    <>

      <Helmet>

        <title>Wedding Website</title>

        <meta name="description" content="Discover Beautiful Wedding, your ultimate destination for wedding planning, inspiration, and resources. Make your special day unforgettable with our expert tips and guidance." />
        <meta name="keywords" content="wedding, wedding website, wedding website for groom, wedding website for bride, wedding planning, wedding inspiration, wedding tips, wedding ideas, wedding resources" />
        <meta name="author" content="Beautiful Wedding" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Beautiful Wedding Website - Your Dream Wedding Starts Here" />
        <meta property="og:description" content="Discover Beautiful Wedding, your ultimate destination for wedding planning, inspiration, and resources. Make your special day unforgettable with our expert tips and guidance." />
        <meta property="og:image" content="https://abhishekchoudhary.co.in/static/media/bride1112.63f581cdb2cac658f948.png" />
        <meta property="og:url" content="https://abhishekchoudhary.co.in/wedding-website" />
      </Helmet>


      <div classname="wedding-website">


        <ServiceDetailBox
          heading="wedding website"
          serviceImg={<WeddingWebsiteSVG />}
          para1="As a web designer, I have had the pleasure of working on various wedding websites, blending creativity with elegance. My objective is to create visually stunning and user-friendly platforms that encapsulate the unique beauty of each wedding.  I focus on making websites not only visually appealing but also easy to navigate for guests."
          para2="Each design includes personalized features such as photo galleries, event details, and RSVP functionalities. I stay current with the latest design trends to deliver modern yet timeless aesthetics. Our designs are crafted with attention to detail, ensuring every element enhances your special day."
          para3=" My commitment to responsive design ensures that the websites look perfect on any device, providing a seamless user experience. Ultimately, my work on wedding websites aims to create a digital celebration that couples and their guests will cherish."
        />

        <ServiceCard subheading="for bride" serviceCardData={brideWeddingWebsite} />
        <ServiceCard subheading="for groom" serviceCardData={groomWeddingWebsite} />

      </div>
    </>
  )
}

export default WeddingWebsite