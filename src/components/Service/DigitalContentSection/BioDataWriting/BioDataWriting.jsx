import React from 'react'
import Grid from '@mui/material/Grid2'
import Container from '../../../Custom/Container/Container'
import Heading from '../../../Custom/Heading/Heading'
import BioDataSVG from '../../../SVG/BioDataSVG/BioDataSVG'
import ServiceCard from '../../CustomService/ServiceCard/ServiceCard'
import { bioDataService } from '../../CustomService/ServiceCard/ServiceConstant'


const BioDataWriting = () => {
  return (
    <>

      <div className="biodatawriting">
        <Container>
          <div className="biodatainner">
            <Heading title='Bio-Data Writing' />
            <Grid container
              spacing={{ xs: 5, md: 3, lg: 20 }}
            >
              <Grid
                size={{ xs: 12, md: 5 }}>

                <div className="grid-img-svg">
                  <BioDataSVG />
                </div>
              </Grid>
              <Grid
                size={{ xs: 12, md: 7 }}>
                <div className="main-work-box">
                  <p className='paragraph-subheading'>I embrace new technologies to ensure I remain at the forefront of the industry. I’m adept at problem-solving and thrive in fast-paced environments, ensuring timely and efficient project completion. My collaborative nature allows me to work seamlessly with teams, bringing diverse ideas together to create exceptional outcomes. My experience extends to UX/UI design, ensuring that every project is not only visually appealing but also highly functional and user-friendly. My dedication to continuous learning.</p>

                  <p className="paragraph-subheading">Additionally, I specialize in creating dynamic and captivating 3D animations for both brand and product promotion, utilizing Blender to develop immersive visual experiences that highlight the unique features and values of each project.
                    I am currently available for freelance work and am eager to be hired for exciting projects that challenge my skills and ignite my passion. My goal is to always exceed client expectations and bring their visions to life. When I'm not coding, designing, or animating, you can find me exploring the latest tech trends and honing my craft. Let's work together to create something truly remarkable.</p>

                </div>
              </Grid>
            </Grid>
          </div>


          <hr style={{ border: '1px solid #213E60', margin: '2rem 0 2rem 0' }} />

          <div className="biodata-card">
           


            <Grid container spacing={3} mt={5}>
              {bioDataService.map((biodata) => (
                <Grid key={biodata.id} size={{ xs: 12, md: 3 }}>
                  <ServiceCard title={biodata.title} image={biodata.image}  downloadLink={biodata.downloadLink} />
                </Grid>
              ))}
            </Grid>


          </div>

        </Container>
      </div>

    </>

  )
}

export default BioDataWriting