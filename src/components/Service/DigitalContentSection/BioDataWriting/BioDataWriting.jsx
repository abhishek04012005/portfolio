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
                  <p className='paragraph-subheading'>Specialized in crafting detailed and professional bio-data documents. My approach ensures that each bio-data highlights an individual's personal, educational, and professional background in a clear and organized manner. Using a variety of design tools, I create visually appealing layouts that are easy to read and navigate. </p>

                  <p className="paragraph-subheading">Each bio-data is tailored to emphasize the individual's unique attributes and achievements, providing a comprehensive overview that stands out. I stay updated with the latest formatting standards and trends to ensure that the bio-data I produce meets current expectations.

                  By incorporating well-structured sections such as personal information, academic qualifications, work experience, and additional skills, I aim to create bio-data documents that effectively communicate an individual's profile.
                  </p>

                

                  <p className="paragraph-subheading">By integrating modern design elements and color schemes, I enhance the overall appeal while maintaining a professional tone. Whether it's for job applications, matrimonial purposes, or academic submissions, I customize bio-data formats to suit diverse needs effectively.</p>


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