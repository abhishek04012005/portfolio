import React, { useEffect } from "react";
import Grid from '@mui/material/Grid2';
import './Footer.css'
import Container from '../Custom/Container/Container'
import myLogo from '../../assests/portfolio_logo1.svg'
import { EmailOutlined, Facebook, GitHub, Instagram, LinkedIn, WhatsApp, X, YouTube } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {

    const location = useLocation();

    useEffect(() => {
        // Scroll to top whenever the route changes
        window.scrollTo(0, 0);
    }, [location]);

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
                                    <Link className='footer-link-heading'> <strong>Web Development</strong></Link>
                                    <Link to='/business-website'>Business Website</Link>
                                    <Link to='/personal-portfolio'>Personal Portfolio</Link>
                                </div>
                            </Grid>

                            <Grid
                                // sx={{ bgcolor: 'yellow' }}
                                size={{ xs: 6, md: 2 }}>
                                <div className="footer-links">
                                    <Link className='footer-link-heading'> <strong>Web Designing</strong></Link>
                                    <Link to='/wedding-website'>Wedding Website</Link>
                                    <Link to='/anniversary-website'>Anniversary Website</Link>
                                    <Link to='/birthday-website'>Birthday Website</Link>
                                    <Link to='/blogging-website'>Blogging Website</Link>
                                </div>
                            </Grid>

                            <Grid
                                // sx={{ bgcolor: 'pink' }}
                                size={{ xs: 6, md: 2 }}>
                                <div className="footer-links">
                                    <Link className='footer-link-heading'> <strong>Digital Content</strong></Link>
                                    <Link to='/wedding-invitation'>Wedding Invitation</Link>
                                    <Link to='/birthday-invitation'>Birthday Invitation</Link>
                                    <Link to='/resume-writing'>Resume Writing</Link>
                                    <Link to='/bio-data'>Bio-Data Writing</Link>
                                </div>
                            </Grid>

                            <Grid
                                // sx={{ bgcolor: 'violet' }}
                                size={{ xs: 12, md: 2 }}>
                                <div className="footer-links">
                                    <Link className='footer-link-heading'> <strong>3D Animation</strong></Link>
                                    <Link to='/product-promotion'>Product Promotion</Link>
                                    <Link to='/brand-promotion'>Brand Promotion</Link>
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
                                href="https://wa.me/919263767441?text=Hello,%20*Abhishek*%0AI%20wish%20to%20connect%20with%20you."
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