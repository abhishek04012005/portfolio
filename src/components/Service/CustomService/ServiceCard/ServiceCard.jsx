import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import './ServiceCard.css';
import { RemoveRedEye, Close, PlayCircleOutline } from '@mui/icons-material';
import Container from '../../../Custom/Container/Container';
import SubHeading from '../../../Custom/Sub_heading/SubHeading';
import { Button, TextField } from '@mui/material';

const ServiceCard = ({ serviceCardData, subheading }) => {
    // State to manage the popup visibility for each card
    const [popupVisible, setPopupVisible] = useState({});
    const [popupFormVisible, setPopupFormVisible] = useState({});

    // State to manage form data
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        serviceName: '',
        designName: '',
    });

    // Function to open URL in a new tab
    const openUrl = (url) => {
        window.open(url, '_blank');
    };

    // Function to show image popup for a specific card
    const showPopup = (id) => {
        setPopupVisible(prevState => ({ ...prevState, [id]: true }));
    };

    // Function to close image popup for a specific card
    const closePopup = (id) => {
        setPopupVisible(prevState => ({ ...prevState, [id]: false }));
    };

    // Function to show form popup for a specific card
    const showFormPopup = (id) => {
        setPopupFormVisible(prevState => ({ ...prevState, [id]: true }));
    };

    // const showFormPopup = (id, serviceName, title) => {
    //     setFormData({
    //         name: '',
    //         phoneNumber: '',
    //         serviceName: '',
    //         designName: '',
    //     });
    //     setPopupFormVisible(prevState => ({ ...prevState, [id]: true }));
    // };
    

    // Function to close form popup for a specific card
    const closeFormPopup = (id) => {
        setPopupFormVisible(prevState => ({ ...prevState, [id]: false }));
    };

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    // Function to handle form submission
    const handleSubmit = (e, id, cardData) => {
        e.preventDefault();
        const whatsappUrl = `https://api.whatsapp.com/send?phone=919263767441&text=Name:%20${formData.name}%0APhone%20Number:%20${formData.phoneNumber}%0AService%20Name:%20${formData.serviceName || cardData.serviceName}%0ADesign%20Name:%20${formData.designName || cardData.title}`;
        window.open(whatsappUrl, '_blank');
        closeFormPopup(id);
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

                                        <div className="service-card-button">
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                sx={{
                                                    backgroundColor: '#213E60',
                                                    color: 'white',
                                                    '&:hover': {
                                                        backgroundColor: '#1B3452'
                                                    }
                                                }}
                                                fullWidth
                                                onClick={() => showFormPopup(cardData.id)}
                                            >
                                                Order Now
                                            </Button>
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

                                    {popupFormVisible[cardData.id] && (
                                        <div className="popup-overlay">
                                            <div className="popup-content">
                                                <button className="close-button-form" onClick={() => closeFormPopup(cardData.id)}>
                                                    <Close />
                                                </button>
                                                <form onSubmit={(e) => handleSubmit(e, cardData.id, cardData)} className="popup-form">
                                                    <TextField
                                                        className='custom-text-field'
                                                        label="Your Name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        required
                                                        fullWidth
                                                        margin="normal"
                                                    />
                                                     <TextField
                                                        className='custom-text-field'
                                                        label="Phone Number"
                                                        name="phoneNumber"
                                                        value={formData.phoneNumber}
                                                        onChange={handleInputChange}
                                                        required
                                                        fullWidth
                                                        margin="normal"
                                                    />
                                                    
                                                    <TextField
                                                        className='custom-text-field'
                                                        label="Service Name"
                                                        name="serviceName"
                                                        value={formData.serviceName || cardData.serviceName}
                                                        onChange={handleInputChange}
                                                        required
                                                        fullWidth
                                                        margin="normal"
                                                    />
                                                    <TextField
                                                        className='custom-text-field'
                                                        label="Design Name"
                                                        name="designName"
                                                        value={formData.designName || cardData.title}
                                                        onChange={handleInputChange}
                                                        required
                                                        fullWidth
                                                        margin="normal"
                                                    />
                                                   
                                                    <Button
                                                        type="submit"
                                                        variant="contained"
                                                        sx={{
                                                            backgroundColor: '#213E60',
                                                            color: 'white',
                                                            '&:hover': {
                                                                backgroundColor: '#1B3452'
                                                            }
                                                        }}
                                                        fullWidth
                                                    >
                                                        Submit
                                                    </Button>
                                                </form>
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
