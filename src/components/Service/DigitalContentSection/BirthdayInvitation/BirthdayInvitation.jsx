import React from 'react'
import { Helmet } from 'react-helmet'
import ServiceDetailBox from '../../ServiceDetailBox/ServiceDetailBox'
import BirthdayInvitaionSVG from '../../../SVG/BirthdayInvitationSVG/BirthdayInvitationSVG'
import { birthdayMobileViewEcard, birthdayDesktopViewEcard, birthdayMobileViewVideo, birthdayDesktopViewVideo } from '../../CustomService/ServiceCard/ServiceConstant'
import ServiceCard from '../../CustomService/ServiceCard/ServiceCard'


const BirthdayInvitation = () => {
  return (
    <>
      <Helmet>
        <title>Birthday Invitation</title>
        <meta name="description" content="Create a beautiful and memorable birthday invitation video or ecard. Join us in celebrating the union of two hearts." />
        <meta name="keywords" content="birthday invitation, birthday invitation video, birthday invitation ecard, birthday invite, personalized birthday invitation, birthday ecard, birthday video invite" />
        <meta property="og:title" content="birthday Invitation | Celebrate Love with a Unique birthday Ecard" />
        <meta property="og:description" content="Create a stunning birthday invitation video or ecard. Celebrate your special day with a personalized touch." />
        <meta property="og:image" content="https://example.com/path/to/your/birthday-invitation-image.png" />
        <meta property="og:url" content="https://abhishekchoudhary.co.in/birthday-invitation" />
      </Helmet>


      <div className="birthday-invitation">
        <ServiceDetailBox
          heading="Birthday Invitation"
          serviceImg={<BirthdayInvitaionSVG />}
          para1="I specialize in designing captivating and personalized birthday invitations. My goal is to craft visually appealing and memorable invitations that reflect the celebrant's personality and theme of the event."
          para2="I use a variety of tools and techniques to produce high-quality, engaging invitations, incorporating vibrant graphics, custom illustrations, and creative typography. Each invitation is meticulously designed to ensure it is both aesthetically pleasing and functional, providing all necessary details in an easy-to-read format."
          para3="By staying current with design trends and incorporating innovative ideas, I create birthday invitations that stand out and set the tone for a joyous celebration. My commitment to responsive design ensures that invitations look perfect across all digital platforms, whether viewed on a computer, tablet, or smartphone."
        />

        <ServiceCard subheading="Mobile View e-Card" serviceCardData={birthdayMobileViewEcard} />
        <ServiceCard subheading="desktop view e-Card" serviceCardData={birthdayDesktopViewEcard} />
        <ServiceCard subheading="Mobile View Video" serviceCardData={birthdayMobileViewVideo} />
        <ServiceCard subheading="desktop View video" serviceCardData={birthdayDesktopViewVideo} />
      </div>

    </>
  )
}

export default BirthdayInvitation