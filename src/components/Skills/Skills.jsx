import React from 'react'
import './Skills.css'
import Grid from '@mui/material/Grid2'
import Heading from '../Custom/Heading/Heading'
import Container from '../Custom/Container/Container'
import { skillsImages } from '../Custom/Constants/Constants'
import SKillsSVG from '../SVG/SkillsSVG/SKillsSVG'

const Skills = () => {
    return (
        <>
            <div className="my-skills" id='myskills'>
                <Container>
                    <Heading title='my skills' />
                    <Grid container
                        spacing={{ xs: 5, md: 3, lg: 20 }}
                        direction={{ xs: 'column-reverse', md: 'row' }}

                    >

                        <Grid
                            // sx={{ bgcolor: '#213E60', borderRadius: '10px' }}
                            size={{ xs: 12, md: 7 }}>
                            <div className="about-text main-work-box">
                                <p className='paragraph-subheading'>I'm a skilled web developer with experience in TypeScript and JavaScript and expertise in frameworks like React, Node.js, and Three.js. Additionally, I am a experienced graphic designer with a keen eye for aesthetics and proficiency in creating visually appealing designs. I combine these skills to develop engaging, interactive, and visually stunning web experiences. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!</p>
                                <p className='paragraph-subheading'>My design prowess shines through my work with Figma, Gimp, and Inkscape, producing visually compelling graphics. Additionally, my proficiency in Blender allows me to bring ideas to life through stunning 3D animations. I have a knack for turning complex concepts into intuitive designs, ensuring a seamless user experience. My expertise in front-end development is complemented by my dedication to staying current with industry trends and best practices. Whether working independently or as part of a team, I am committed to delivering top-notch results.
                                </p>

                            </div>
                        </Grid>
                        <Grid
                            // sx={{ bgcolor: 'red' }}
                            size={{ xs: 12, md: 5 }}>

                            <div className="grid-img-svg">
                                <SKillsSVG />
                            </div>
                        </Grid>

                    </Grid>
                    <div className="skill-circle">
                        {skillsImages.map((skill, index) => (
                            <div key={index} className="skills-content">
                                <div className="skills-image">
                                    <img src={skill.src} alt={skill.alt} />
                                </div>
                            </div>
                        ))}


                    </div>
                </Container>
            </div>

        </>
    )
}

export default Skills