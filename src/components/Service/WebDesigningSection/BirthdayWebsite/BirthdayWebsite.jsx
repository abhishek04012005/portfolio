import React from 'react'
import BirthdayWebsiteSVG from '../../../SVG/BirthdayWebsiteSVG/BirthdayWebsiteSVG'
import ServiceCard from '../../CustomService/ServiceCard/ServiceCard'
import { girlBirthdayWebsite, boyBirthdayWebsite } from '../../CustomService/ServiceCard/ServiceConstant'
import { Helmet } from 'react-helmet'
import ServiceDetailBox from '../../ServiceDetailBox/ServiceDetailBox'

const BirthdayWebsite = () => {
  return (
    <>
      <Helmet>
        <title>Birthday Website</title>
        <meta name="description" content="Discover a wide range of birthday gifts for all ages. Shop now for unique and personalized presents to make every birthday special." />
        <meta name="keywords" content="birthday website, website, birthday website for boy, birthday website for girl, first birthday website, birthday gifts, personalized presents, birthday shop, unique birthday gifts" />
        <meta property="og:title" content="Birthday Website| Birthday Gifts Galore | Your One-Stop Birthday Shop" />
        <meta property="og:description" content="Explore our collection of unique birthday gifts. Find the perfect present to celebrate your loved one's special day." />
        <meta property="og:image" content="https://abhishekchoudhary.co.in/static/media/girl-unicorn-theme.e58db2ede19b7a37f0c2.png" />
        <meta property="og:url" content="https://abhishekchoudhary.co.in/birthday-website" />
      </Helmet>

      <div className="birthday-website">

        <ServiceDetailBox
          heading="birthday website"
          serviceImg={<BirthdayWebsiteSVG />}
          para1="My goal is to craft visually stunning and user-friendly platforms that highlight the unique moments of each birthday. I focus on making websites not only visually appealing but also easy to navigate for guests."
          para2="Each design includes personalized features such as photo galleries, event details, RSVP functionalities, and integrated Google Maps for easy location access. I stay updated with the latest design trends to deliver modern yet timeless aesthetics."
          para3="My dedication to responsive design ensures that the websites look perfect on any device, offering a seamless user experience. Ultimately, my work on birthday websites aims to create a digital celebration that the birthday person and their loved ones will cherish."
        />
        <ServiceCard subheading="for girl" serviceCardData={girlBirthdayWebsite} />
        <ServiceCard subheading="for boy" serviceCardData={boyBirthdayWebsite} />
      </div>
    </>
  )
}

export default BirthdayWebsite