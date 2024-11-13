import React from 'react'
import Grid from '@mui/material/Grid2';
import './Footer.css'
import Container from '../Custom/Container/Container'
import myLogo from '../../assests/portfolio_logo1.svg'
import { EmailOutlined, Facebook, GitHub, Instagram, LinkedIn, WhatsApp, X, YouTube } from '@mui/icons-material';

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
                                href="https://wa.me/919264248504?text=Hello,%20*Abhishek*%0AI%20wish%20to%20connect%20with%20you."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <WhatsApp />
                            </a>

                            <a
                                href="mailto:theabhishekchoudhary0401@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><EmailOutlined /></a>

                            <a
                                href="https://www.instagram.com/theabhishekchoudhary0401/"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><Instagram /></a>

                            <a
                                href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61568533385928"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><Facebook /></a>

                            <a
                                href="https://www.youtube.com/@theabhishekchoudhary0401"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><YouTube /></a>

                            <a
                                href="https://www.linkedin.com/in/abhishek-choudhary-80b753232/"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><LinkedIn /></a>

                            <a
                                href="https://github.com/abhishek04012005/"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><GitHub /></a>

                            <a
                                href="https://x.com/i/flow/login?redirect_after_login=%2F02mr_abhishek"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><X /></a>
                        </div>
                        <p style={{ textAlign: 'center', color: 'white' }}>Copyright © {new Date().getFullYear()} <a href="/" style={{ color: 'white' }}>www.AbhishekChoudhary.co.in</a>  </p>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Footer