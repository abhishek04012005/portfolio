import React from 'react'
import ServiceDetailBox from '../../ServiceDetailBox/ServiceDetailBox'
import WeddingInvitaionSVG from '../../../SVG/WeddingInvitaionSVG/WeddingInvitaionSVG'
import ServiceCard from '../../CustomService/ServiceCard/ServiceCard'
import { mobileViewEcard, desktopViewEcard, mobileViewVideo, desktopViewVideo } from '../../CustomService/ServiceCard/ServiceConstant'
import { Helmet } from 'react-helmet'


const WeddingInvitation = () => {
  return (
    <>
      <Helmet>
        <title>Wedding Invitation</title>
        <meta name="description" content="Create a beautiful and memorable wedding invitation video or ecard. Join us in celebrating the union of two hearts." />
        <meta name="keywords" content="wedding invitation, wedding invitation video, wedding invitation ecard, wedding invite, personalized wedding invitation, wedding ecard, wedding video invite" />
        <meta property="og:title" content="Wedding Invitation | Celebrate Love with a Unique Wedding Ecard" />
        <meta property="og:description" content="Create a stunning wedding invitation video or ecard. Celebrate your special day with a personalized touch." />
        <meta property="og:image" content="https://example.com/path/to/your/wedding-invitation-image.png" />
        <meta property="og:url" content="https://abhishekchoudhary.co.in/wedding-invitation" />

      </Helmet>

      <div className="wedding-invitation">
        <ServiceDetailBox
          heading='Wedding Invitation'
          serviceImg={<WeddingInvitaionSVG />}
          para1="I have extensive experience in designing captivating and personalized wedding invitations. My objective is to craft visually appealing and memorable invitations that reflect the couple's personality and theme of the wedding."
          para2="I use a variety of tools and techniques to produce high-quality, engaging invitations, incorporating elegant graphics, custom illustrations, and creative typography. Each invitation is meticulously designed to ensure it is both aesthetically pleasing and functional, providing all necessary details in an easy-to-read format. "
          para3="By staying current with design trends and incorporating innovative ideas, I create wedding invitations that stand out and set the tone for a beautiful celebration. My commitment to responsive design ensures that invitations look perfect across all digital platforms, whether viewed on a computer, tablet, or smartphone"
        />

        <ServiceCard subheading="Mobile View e-Card" serviceCardData={mobileViewEcard} />
        <ServiceCard subheading="desktop view e-Card" serviceCardData={desktopViewEcard} />
        <ServiceCard subheading="Mobile View Video" serviceCardData={mobileViewVideo} />
        <ServiceCard subheading="desktop View video" serviceCardData={desktopViewVideo} />

      </div>
    </>
  )
}

export default WeddingInvitation