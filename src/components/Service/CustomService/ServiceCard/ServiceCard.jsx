import React, { useState } from 'react';
import './ServiceCard.css';
import { Download, RemoveRedEye, Close } from '@mui/icons-material';

const ServiceCard = (props) => {
    // State to manage the popup visibility
    const [isPopupVisible, setPopupVisible] = useState(false);

    const downloadImage = () => {
        const link = document.createElement('a'); // Create a temporary link element
        link.href = props.image; // Set link href to image source URL
        link.download = 'downloaded-image.png'; // Set the default filename for download
        document.body.appendChild(link); // Append link to the document
        link.click(); // Programmatically click the link to start download
        document.body.removeChild(link); // Remove link from the document
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
            <div className="service-card">
                <div className="grid-img-svg">
                    <div style={{ borderBottom: '3px solid #213E60' }}>
                        <div className="service-image"><img src={props.image} alt="" /></div>
                    </div>

                    <div className='service-card-content'>
                        <div className='service-card-text'>
                            <h3>{props.title}</h3>
                        </div>
                        <div className='service-card-button'>
                            <h3>
                                <RemoveRedEye onClick={showPopup} /> &nbsp;
                                <Download onClick={downloadImage} />
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popup Modal */}
            {isPopupVisible && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <button className="close-button" onClick={closePopup}>
                            <Close />
                        </button>
                        <img src={props.image} alt="Enlarged view" className="popup-image" />
                    </div>
                </div>
            )}
        </>
    );
};

export default ServiceCard;
