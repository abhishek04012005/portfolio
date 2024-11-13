import React from 'react'
import Grid from '@mui/material/Grid2';
import './About.css'
import Container from '../Custom/Container/Container'
import Heading from '../Custom/Heading/Heading'
import AboutSVG from '../SVG/AboutSVG/AboutSVG';

const About = () => {
    return (
        <>

            <div className="about" id='aboutme'>

                <Container>
                    <Heading title='about me' />
                    <Grid container  
                    spacing={{ xs: 5, md: 3, lg: 20 }}
                    >
                        <Grid
                            // sx={{ bgcolor: 'red' }}
                            size={{ xs: 12, md: 5 }}>

                            <div className="grid-img-svg">
                                <AboutSVG />
                            </div>
                        </Grid>
                        <Grid
                            // sx={{ bgcolor: '#213E60', borderRadius: '10px' }}
                            size={{ xs: 12, md: 7 }}>
                            <div className="main-work-box">
                                <p className='paragraph-subheading'>I embrace new technologies to ensure I remain at the forefront of the industry. I’m adept at problem-solving and thrive in fast-paced environments, ensuring timely and efficient project completion. My collaborative nature allows me to work seamlessly with teams, bringing diverse ideas together to create exceptional outcomes. My experience extends to UX/UI design, ensuring that every project is not only visually appealing but also highly functional and user-friendly. My dedication to continuous learning.</p>
                                
                                <p className="paragraph-subheading">Additionally, I specialize in creating dynamic and captivating 3D animations for both brand and product promotion, utilizing Blender to develop immersive visual experiences that highlight the unique features and values of each project.
                                 I am currently available for freelance work and am eager to be hired for exciting projects that challenge my skills and ignite my passion. My goal is to always exceed client expectations and bring their visions to life. When I'm not coding, designing, or animating, you can find me exploring the latest tech trends and honing my craft. Let's work together to create something truly remarkable.</p>

                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    )
}

export default About