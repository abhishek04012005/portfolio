import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import myLogo from '../../assests/portfolio_logo1.svg';
import whatsAppIcon from '../../assests/tech/whatsapp.svg'

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('#hero-my'); // Default active link
    const [isMobile, setIsMobile] = useState(false); // State to handle mobile menu visibility

    // Handle link click for smooth scrolling and active link
    const handleLinkClick = (link) => {
        setActiveLink(link);
        setIsMobile(false); // Close mobile menu on link click
    };

    // Toggle mobile menu
    const handleToggle = () => {
        setIsMobile(!isMobile);
    };

    return (
        <div className="navbar">
            <div className="navbar-item">
                {/* Logo */}
                <div className="navbar-logo">
                    <img src={myLogo} alt="Logo" />
                </div>

                {/* Desktop Navbar Links */}
                <div className="nav-item-desktop">
                    <ul>
                        <li>
                            <Link
                                to="hero-my"
                                smooth={true}
                                duration={800}
                                onClick={() => handleLinkClick('#hero-my')}
                                className={activeLink === '#hero-my' ? 'active' : ''}
                            >
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="aboutme"
                                smooth={true}
                                duration={800}
                                onClick={() => handleLinkClick('#aboutme')}
                                className={activeLink === '#aboutme' ? 'active' : ''}
                            >
                                ABOUT ME
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="myskills"
                                smooth={true}
                                duration={800}
                                onClick={() => handleLinkClick('#myskills')}
                                className={activeLink === '#myskills' ? 'active' : ''}
                            >
                                MY SKILLS
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="mywork"
                                smooth={true}
                                duration={800}
                                onClick={() => handleLinkClick('#mywork')}
                                className={activeLink === '#mywork' ? 'active' : ''}
                            >
                                MY WORK
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="contact"
                                smooth={true}
                                duration={800}
                                onClick={() => handleLinkClick('#contact')}
                                className={activeLink === '#contact' ? 'active' : ''}
                            >
                                CONTACT ME
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className="hamburger-icon">
                    <button className="mobile-menu-icon" onClick={handleToggle}>
                        {isMobile ? '✖' : '☰'}
                    </button>
                </div>

                {/* Mobile Navbar Links */}
                <div className="nav-item-mobile">
                    {isMobile && (
                        <ul className="mobile-menu">
                            <li>
                                <Link
                                    to="hero-my"
                                    smooth={true}
                                    duration={1500}
                                    onClick={() => handleLinkClick('#hero-my')}
                                >
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="aboutme"
                                    smooth={true}
                                    duration={1500}
                                    onClick={() => handleLinkClick('#aboutme')}
                                >
                                    ABOUT ME
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="myskills"
                                    smooth={true}
                                    duration={1500}
                                    onClick={() => handleLinkClick('#myskills')}
                                >
                                    MY SKILLS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="mywork"
                                    smooth={true}
                                    duration={1500}
                                    onClick={() => handleLinkClick('#mywork')}
                                >
                                    MY WORK
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="contact"
                                    smooth={true}
                                    duration={1500}
                                    onClick={() => handleLinkClick('#contact')}
                                >
                                    CONTACT ME
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>

            <a
                href="https://wa.me/919264248504?text=Hello,%20*Abhishek*%0AI%20wish%20to%20connect%20with%20you." // Replace 'your-number' with the actual number in international format without "+" sign
                className="whatsapp-button"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={whatsAppIcon} alt="WhatsApp" />
               
            </a>
        </div>
    );
};

export default Navbar;