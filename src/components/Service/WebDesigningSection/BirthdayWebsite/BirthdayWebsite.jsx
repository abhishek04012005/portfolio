import React from 'react'
import Grid from '@mui/material/Grid2'
import BirthdayWebsiteSVG from '../../../SVG/BirthdayWebsiteSVG/BirthdayWebsiteSVG'
import Container from '../../../Custom/Container/Container'
import SubHeading from '../../../Custom/Sub_heading/SubHeading'
import Heading from '../../../Custom/Heading/Heading'
import ServiceCard from '../../CustomService/ServiceCard/ServiceCard'
import { girlBirthdayWebsite, boyBirthdayWebsite } from '../../CustomService/ServiceCard/ServiceConstant'


const BirthdayWebsite = () => {
  return (
    <>
      <div className="birthday-website">
        <Container>
          <div className="birthday-website-inner">

            <Heading title='birthday website' />

            <Grid container
              spacing={{ xs: 5, md: 3, lg: 20 }}
            >
              <Grid size={{ xs: 12, md: 5 }}>
                <div className="grid-img-svg">
                  <BirthdayWebsiteSVG />
                </div>
              </Grid>

              <Grid
                size={{ xs: 12, md: 7 }}>
                <div className="main-work-box">
                  <p className='paragraph-subheading'>
                    My goal is to craft visually stunning and user-friendly platforms that highlight the unique moments of each birthday. I focus on making websites not only visually appealing but also easy to navigate for guests.
                  </p>

                  <p className="paragraph-subheading">
                    Each design includes personalized features such as photo galleries, event details, RSVP functionalities, and integrated Google Maps for easy location access. I stay updated with the latest design trends to deliver modern yet timeless aesthetics.
                  </p>

                  <p className="paragraph-subheading">
                    My dedication to responsive design ensures that the websites look perfect on any device, offering a seamless user experience. Ultimately, my work on birthday websites aims to create a digital celebration that the birthday person and their loved ones will cherish.
                  </p>
                </div>
              </Grid>
            </Grid>
          </div>


          <hr style={{ border: '1px solid #213E60', margin: '2rem 0 2rem 0' }} />

          <SubHeading title='for girl' />

          <div className="bride-wedding-website">
            <Grid container spacing={3} mt={5}>
              {girlBirthdayWebsite.map((girlbirthdayWebsite) => (
                <Grid key={girlbirthdayWebsite.id} size={{ xs: 12, md: 4 }}>
                  <ServiceCard title={girlbirthdayWebsite.title} image={girlbirthdayWebsite.image} url={girlbirthdayWebsite.url} />
                </Grid>
              ))}
            </Grid>
          </div>

          <hr style={{ border: '1px solid #213E60', margin: '2rem 0 2rem 0' }} />

          <SubHeading title='for boy' />


          <div className="biodata-card">
            <Grid container spacing={3} mt={5}>
              {boyBirthdayWebsite.map((boyBirthdayWebsite) => (
                <Grid key={boyBirthdayWebsite.id} size={{ xs: 12, md: 4 }}>
                  <ServiceCard title={boyBirthdayWebsite.title} image={boyBirthdayWebsite.image} url={boyBirthdayWebsite.url} />
                </Grid>
              ))}
            </Grid>
          </div>



        </Container>
      </div>
    </>
  )
}

export default BirthdayWebsite