import React from 'react'
import AnniversaryWebsiteSVG from '../../../SVG/AnniversaryWebsiteSVG/AnniversaryWebsiteSVG'
import ServiceCard from '../../CustomService/ServiceCard/ServiceCard'
import { anniversaryWebsite } from '../../CustomService/ServiceCard/ServiceConstant'
import { Helmet } from 'react-helmet'
import ServiceDetailBox from '../../ServiceDetailBox/ServiceDetailBox'


const AnniversaryWebsite = () => {
  return (
    <>
      <Helmet>

        <title>Wedding Anniversary Website Templates</title>

        <meta name="description" content="Discover beautifully designed wedding anniversary website templates to commemorate your special moments. Easy to customize and perfect for any celebration." />
        <meta name="keywords" content="wedding anniversary, wedding anniversary website, website templates, celebration, customizable templates, special occasions" />
        <meta name="author" content="The Abhishek Choudhary" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Beautiful Wedding Anniversary Website Templates" />
        <meta property="og:description" content="Explore our collection of customizable wedding anniversary website templates to celebrate your special moments." />
        <meta property="og:image" content="https://abhishekchoudhary.co.in/static/media/anniversaryWebsite1212.dbaf4d31327724103cf9.png" />
        <meta property="og:url" content="https://abhishekchoudhary.co.in/wedding-anniversary-website" />
        <meta property="og:type" content="website" />


      </Helmet>
      <div className='anniversary-website'>


        <ServiceDetailBox
          heading="Wedding Anniversary Website"
          serviceImg={<AnniversaryWebsiteSVG />}
          para1="Have the pleasure of working on various wedding anniversary websites, merging creativity with sophistication. My goal is to craft visually stunning and user-friendly platforms that celebrate the unique milestones of each couple. I focus on making websites not only visually appealing but also easy to navigate for guests."
          para2="Each design includes personalized features such as photo galleries, event details, and RSVP functionalities. I stay updated with the latest design trends to provide modern yet timeless aesthetics."
          para3="My dedication to responsive design ensures that the websites look perfect on any device, offering a seamless user experience. Ultimately, my work on wedding anniversary websites aims to create a digital celebration that couples and their loved ones will cherish."
        />

        <ServiceCard serviceCardData={anniversaryWebsite} />


      </div>
    </>
  )
}

export default AnniversaryWebsite