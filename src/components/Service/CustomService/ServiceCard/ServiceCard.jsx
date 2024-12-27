import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import './ServiceCard.css';
import { RemoveRedEye, Close, PlayCircleOutline } from '@mui/icons-material';
import Container from '../../../Custom/Container/Container';
import SubHeading from '../../../Custom/Sub_heading/SubHeading';

const ServiceCard = ({ serviceCardData, subheading }) => {
    // State to manage the popup visibility for each card
    const [popupVisible, setPopupVisible] = useState({});

    // Function to open URL in a new tab
    const openUrl = (url) => {
        window.open(url, '_blank');
    };

    // Function to show popup for a specific card
    const showPopup = (id) => {
        setPopupVisible(prevState => ({ ...prevState, [id]: true }));
    };

    // Function to close popup for a specific card
    const closePopup = (id) => {
        setPopupVisible(prevState => ({ ...prevState, [id]: false }));
    };

    return (
        <>
            <Container>
                <hr style={{ border: '1px solid #213E60', margin: '2rem 0 2rem 0' }} />

                <SubHeading title={subheading} />

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
                                                    <RemoveRedEye onClick={() => showPopup(cardData.id)} />
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                    {popupVisible[cardData.id] && (
                                        <div className="popup-overlay">
                                            <div className="popup-content">
                                                <button className="close-button" onClick={() => closePopup(cardData.id)}>
                                                    <Close />
                                                </button>
                                                <img src={cardData.image} alt="Enlarged view" className="popup-image" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </Container>
        </>
    );
};

export default ServiceCard;
