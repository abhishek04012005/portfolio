import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import './Hero.css'
import { WhatsApp } from '@mui/icons-material';
import Container from '../Custom/Container/Container'
import HeroSVG from '../SVG/HeroSVG'

const Hero = () => {
    const [text] = useTypewriter({
        words: [' Web Developer', ' Web Designer', ' Content Creator', ' 3D Animator'],
        loop: {},
    })

    return (
        <>
            <div className="hero" id='hero-my'>
                <Container>
                    <Grid container spacing={{ xs: 5, md: 3, lg: 10 }}
                    >
                        <Grid size={{ xs: 12, md: 6 }}>
                            <div className="hero-text-container">
                                <div className='hero-text'>
                                    <h1 style={{ color: '#213E60' }}>Hi, I am Abhishek </h1>
                                    <h1 style={{ color: '#213E60' }}>I am a <span style={{ color: '#206572', fontWeight: 'bold' }}>{text}</span>
                                        <Cursor /></h1>
                                    <p className='hero-paragraph'>As a passionate web developer and designer, I specialize in creating dynamic digital experiences. My expertise spans across React JS, HTML, CSS, and JavaScript, enabling me to build responsive and engaging websites. With a keen eye for design, I leverage tools like Figma, Gimp, and Inkscape to craft visually stunning graphics. Additionally, my skills in Blender allow me to bring ideas to life through 3D animation.</p>
                                    <div className="hero-btn">
                                        <a
                                            href="https://wa.me/919263767441?text=Hello,%20*Abhishek*%0AI%20wish%20to%20connect%20with%20you."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <Button
                                                variant="contained"
                                                startIcon={<WhatsApp />}
                                                sx={{
                                                    backgroundColor: '#213E60',
                                                    color: 'white',
                                                    '&:hover': { backgroundColor: '#1B3452' },
                                                    marginTop: '2rem'
                                                }}
                                            >
                                                Connect with me
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <div className="hero-img">
                                <div>
                                    <HeroSVG />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    )
}

export default Hero