import React from 'react'
import Grid from '@mui/material/Grid2';
import './Footer.css'
import Container from '../Custom/Container/Container'
import myLogo from '../../assests/portfolio_logo1.svg'
import { EmailOutlined, Facebook, Instagram, LinkedIn, WhatsApp, X, YouTube } from '@mui/icons-material';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <Container>
                    <div className="footer-item">
                        <Grid container 
                         spacing={{ xs: 0, md: 2, lg: 2 }}
                         >


                            <Grid
                                // sx={{ bgcolor: 'blue' }}
                                size={{ xs: 6, md: 2 }}>
                                <div className="footer-links">
                                    <a href="#hero-my">Home</a>
                                    <a href="#aboutme">About Me</a>
                                    <a href="#myskills">My Skills</a>
                                    <a href="#mywork">My Work</a>
                                    <a href="#testimonials">Testimonials</a>
                                    <a href="#contact">Contact Me</a>
                                </div>


                            </Grid>

                            <Grid
                                // sx={{ bgcolor: 'red' }}
                                size={{ xs: 6, md: 2 }}>
                                <div className="footer-links">
                                    <a href="/" className='footer-link-heading'><strong>Web Development</strong></a>
                                    <a href="/">Business Website</a>
                                    <a href="/">Personal Portfolio</a>
                                </div>
                            </Grid>

                            <Grid
                                // sx={{ bgcolor: 'yellow' }}
                                size={{ xs: 6, md: 2 }}>
                                <div className="footer-links">
                                    <a href="/" className='footer-link-heading'><strong>Web Designing</strong></a>
                                    <a href="/">Wedding Website</a>
                                    <a href="/">Anniversary Website</a>
                                    <a href="/">Birthday Website</a>
                                    <a href="/">Blogging Website</a>
                                </div>
                            </Grid>

                            <Grid
                                // sx={{ bgcolor: 'pink' }}
                                size={{ xs: 6, md: 2 }}>
                                <div className="footer-links">
                                    <a href="/" className='footer-link-heading'><strong>Digital Content</strong></a>
                                    <a href="/">Wedding Invitation</a>
                                    <a href="/">Birthday Invitation</a>
                                    <a href="/">Resume Writing</a>
                                    <a href="/">Bio-Data Writing</a>
                                </div>
                            </Grid>

                            <Grid
                                // sx={{ bgcolor: 'violet' }}
                                size={{ xs: 12, md: 2 }}>
                                <div className="footer-links">
                                    <a href="/" className='footer-link-heading'><strong>3D Animation</strong></a>
                                    <a href="/">Product Promotion</a>
                                    <a href="/">Brand Promotion</a>
                                </div>
                            </Grid>

                            <Grid
                                // sx={{ bgcolor: 'green' }}
                                size={{ xs: 12, md: 2 }}>
                                <div className="footer-links">
                                    <div className="footer-logo">
                                        <a href="/"><img src={myLogo} alt="" /></a>
                                    </div>

                                </div>
                            </Grid>
                        </Grid>

                        <div className="footer-social-links">
                            <a
                                href="https://wa.me/919264248504"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <WhatsApp />
                            </a>
                            <a href="/"><EmailOutlined /></a>
                            <a href="/"><Instagram /></a>
                            <a href="/"><Facebook /></a>
                            <a href="/"><YouTube /></a>
                            <a href="/"><LinkedIn /></a>
                            <a href="/"><X /></a>
                        </div>
                        <p style={{ textAlign: 'center', color: 'white' }}>Copyright © 2024 <a href="/" style={{ color: 'white' }}>www.AbhishekChoudhary.co.in</a>  </p>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Footer