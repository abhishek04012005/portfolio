import React from 'react'
import Grid from '@mui/material/Grid2'
import Container from '../../../Custom/Container/Container'
import Heading from '../../../Custom/Heading/Heading'
import WeddingWebsiteSVG from '../../../SVG/WeddingWebsiteSVG/WeddingWebsiteSVG'
import SubHeading from '../../../Custom/Sub_heading/SubHeading'
import ServiceCard from '../../CustomService/ServiceCard/ServiceCard'
import { brideWeddingWebsite, groomWeddingWebsite } from '../../CustomService/ServiceCard/ServiceConstant'

const WeddingWebsite = () => {
  return (
    <>
      <div classname="wedding-website">
        <Container>
          <div className="wedding-website-inner">
            <Heading title='wedding website' />
            <Grid container
              spacing={{ xs: 5, md: 3, lg: 20 }}
            >
              <Grid size={{ xs: 12, md: 5 }}>
                <div className="grid-img-svg">
                  <WeddingWebsiteSVG />
                </div>
              </Grid>

              <Grid
                size={{ xs: 12, md: 7 }}>
                <div className="main-work-box">
                  <p className='paragraph-subheading'>
                    As a web designer, I have had the pleasure of working on various wedding websites, blending creativity with elegance. My objective is to create visually stunning and user-friendly platforms that encapsulate the unique beauty of each wedding.  I focus on making websites not only visually appealing but also easy to navigate for guests.
                  </p>

                  <p className="paragraph-subheading">
                    Each design includes personalized features such as photo galleries, event details, and RSVP functionalities. I stay current with the latest design trends to deliver modern yet timeless aesthetics. Our designs are crafted with attention to detail, ensuring every element enhances your special day.
                  </p>

                  <p className="paragraph-subheading">
                    My commitment to responsive design ensures that the websites look perfect on any device, providing a seamless user experience. Ultimately, my work on wedding websites aims to create a digital celebration that couples and their guests will cherish.
                  </p>


                </div>
              </Grid>
            </Grid>
          </div>
          <hr style={{ border: '1px solid #213E60', margin: '2rem 0 2rem 0' }} />
          <SubHeading title='for bride' />

          <div className="bride-wedding-website">
            <Grid container spacing={3} mt={5}>
              {brideWeddingWebsite.map((brideweddingwebsite) => (
                <Grid key={brideweddingwebsite.id} size={{ xs: 12, md: 4 }}>
                  <ServiceCard title={brideweddingwebsite.title} image={brideweddingwebsite.image} url={brideweddingwebsite.url} />
                </Grid>
              ))}
            </Grid>
          </div>

          <hr style={{ border: '1px solid #213E60', margin: '2rem 0 2rem 0' }} />


          <SubHeading title='for groom' />

          <div className="bride-wedding-website">
            <Grid container spacing={3} mt={5}>
              {groomWeddingWebsite.map((groomweddingwebsite) => (
                <Grid key={groomweddingwebsite.id} size={{ xs: 12, md: 4 }}>
                  <ServiceCard title={groomweddingwebsite.title} image={groomweddingwebsite.image} url={groomweddingwebsite.url} />
                </Grid>
              ))}
            </Grid>
          </div>
        </Container>
      </div>
    </>
  )
}

export default WeddingWebsite