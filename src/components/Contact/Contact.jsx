import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import { TextField, Button, Box } from '@mui/material';
import './Contact.css'
import Container from '../Custom/Container/Container'
import Heading from '../Custom/Heading/Heading'
import ContactSVG from '../SVG/ContactSVG/ContactSVG';




const Contact = () => {


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        number: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form Data Submitted:", formData);

        setFormData({
            name: '',
            email: '',
            message: '',
            number: ''
        });
    };
    return (
        <div className="contact-me" id='contact'>
            <Container>
                <Heading title='Contact Me' />


                <Grid container
                    direction={{ xs: 'column-reverse', md: 'row' }}
                    spacing={{ xs: 5, md: 3, lg: 20 }}
                >

                    <Grid size={{ xs: 12, md: 6 }}>


                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{ maxWidth: '100%', mx: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}
                        >
                            <TextField
                                className="custom-text-field"
                                label="Name"
                                name="name"
                                variant="outlined"
                                value={formData.name}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                            <TextField
                                className="custom-text-field"
                                label="Email"
                                name="email"
                                type="email"
                                variant="outlined"
                                value={formData.email}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                            <TextField
                                className="custom-text-field"
                                label="Mobile Number"
                                name="number"
                                type="tel"
                                variant="outlined"
                                value={formData.number}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                            <TextField
                                className="custom-text-field"
                                label="Message"
                                name="message"
                                variant="outlined"
                                value={formData.message}
                                onChange={handleChange}
                                multiline
                                rows={8}
                                fullWidth
                                required
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
                        </Box>



                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <div>
                            <ContactSVG />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
};

export default Contact;