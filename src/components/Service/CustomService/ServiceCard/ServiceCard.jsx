import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import './ServiceCard.css';
import { RemoveRedEye, Close, PlayCircleOutline } from '@mui/icons-material';
import Container from '../../../Custom/Container/Container';
import SubHeading from '../../../Custom/Sub_heading/SubHeading';

// const ServiceCard = (props) => {

const ServiceCard = ({ serviceCardData, subheading }) => {
    // State to manage the popup visibility
    const [isPopupVisible, setPopupVisible] = useState(false);

    // Function to open URL in a new tab
    const openUrl = (url) => {
        window.open(url, '_blank');
    };

    // Function to show popup
    const showPopup = () => {
        setPopupVisible(true);
    };

    // Function to close popup
    const closePopup = () => {
        setPopupVisible(false);
    };

    return (
        <>
            <Container>
                <hr style={{ border: '1px solid #213E60', margin: '2rem 0 2rem 0' }} />

                <SubHeading title={subheading}/>

                <div className="service-main-card">
                    <Grid container spacing={3} mt={5}>
                        {serviceCardData.map((cardData) => (
                            <Grid key={cardData.id} size={{ xs: 12, md: 3 }}>
                                <div className="service-card">
                                    <div className="grid-img-svg">
                                        <div style={{ borderBottom: '3px solid #213E60' }}>
                                            <div className="service-image"><img src={cardData.image} alt="" /></div>
                                        </div>

                                        <div className='service-card-content'>
                                            <div className='service-card-text'>
                                                <h3>{cardData.title}</h3>
                                            </div>
                                            <div className='service-card-button'>
                                                <h3>
                                                    <PlayCircleOutline onClick={() => openUrl(cardData.url)} /> &nbsp;
                                                    <RemoveRedEye onClick={showPopup} />
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {isPopupVisible && (
                                    <div className="popup-overlay">
                                        <div className="popup-content">
                                            <button className="close-button" onClick={closePopup}>
                                                <Close />
                                            </button>
                                            <img src={cardData.image} alt="Enlarged view" className="popup-image" />
                                        </div>
                                    </div>
                                )}
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </Container>
        </>
    );
};

export default ServiceCard;
