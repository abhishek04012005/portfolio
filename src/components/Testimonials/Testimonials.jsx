import React from 'react';
import './Testimonials.css';
import Container from '../Custom/Container/Container';
import Heading from '../Custom/Heading/Heading';
import Grid from '@mui/material/Grid';
import TestimonialCards from '../Custom/TestimonialCards/TestimonialCards';
import { TestimonialsDetails } from '../Custom/Constants/Constants';

const Testimonials = () => {
    return (
        <div className="testimonials" id='testimonials'>
            <Container>
                <Heading title="Testimonials" />
                <Grid container spacing={5}>
                    {TestimonialsDetails.map((testimonial) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            key={testimonial.id}
                        >
                            <TestimonialCards
                                testimonial={testimonial.testimonial}
                                name={testimonial.name}
                                designation={testimonial.designation}
                                company={testimonial.company}
                                image={testimonial.image}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default Testimonials;
