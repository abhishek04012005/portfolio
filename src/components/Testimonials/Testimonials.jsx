import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Grid from '@mui/material/Grid';
import Container from '../Custom/Container/Container';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Testimonials.css'; // Import the external CSS
import { TestimonialsDetails } from '../Custom/Constants/Constants';


import Heading from '../Custom/Heading/Heading';





const NextArrow = (props) => {
    const { className, onClick } = props;
    return (

        <ArrowForwardIcon className={`${className} custom-arrow`} onClick={onClick} />
    );
};

const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (

        <ArrowBackIcon className={`${className} custom-arrow`} onClick={onClick} />

    );
};





const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1225, settings: { slidesToShow: 3, slidesToScroll: 1, }, },
            { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1, }, },
            { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1, }, },
        ],
    };

    return (
        <div className="testimonial">
            <Container> 
                  
                    <Heading title="What others say"/>
              
                    <Slider {...settings}>
                        {TestimonialsDetails.map((testimonial) => (
                            <Grid
                                item
                                key={testimonial.id}
                                className="testimonial-card" // Apply external CSS class
                            >
                                <div className="testimonial-content">
                                    <p className="quote">“</p>
                                    <p className="testimonial-text">
                                        {testimonial.testimonial}
                                    </p>

                                    <div className="testimonial-info">
                                        <div className="testimonial-name">
                                            <p className="name">
                                                <span className="highlight">@</span>{testimonial.name}
                                            </p>
                                            <p className="designation">
                                                {testimonial.designation} {testimonial.company}
                                            </p>
                                        </div>
                                        <img
                                            src={testimonial.image}
                                            alt={`feedback_by-${testimonial.name}`}
                                            className="testimonial-image"
                                        />
                                    </div>
                                </div>
                            </Grid>
                        ))}
                    </Slider>
          
            </Container>
        </div>
    );
};

export default Testimonials;

