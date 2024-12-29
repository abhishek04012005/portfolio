import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import { TextField, Button, Box } from '@mui/material';
import './Admin.css';
import Container from '../Custom/Container/Container';
import Heading from '../Custom/Heading/Heading';

const Admin = () => {
    const [credentials, setCredentials] = useState({ userid: '', password: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { userid, password } = credentials;

        // Perform simple credential check
        if (userid === 'theabhishekchoudhary0401' && password === 'Abhi@2005') {
            // Open Google Sheets link upon successful login
            window.open('https://docs.google.com/spreadsheets/d/1FtZWdZL1m5fVoNozbc54vWdr7zk05qnQ8-oNlrfj4Ic/edit?usp=sharing', '_blank');
        } else {
            alert('Invalid credentials. Please try again.');
        }

        // Clear form fields
        setCredentials({ userid: '', password: '' });
    };

    return (
        <>
            <div className="Admin">
                <Container>
                    <Heading title='Admin' />
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
                                    label="User ID"
                                    name="userid"
                                    variant="outlined"
                                    value={credentials.userid}
                                    onChange={handleInputChange}
                                    fullWidth
                                    required
                                />
                                <TextField
                                    className="custom-text-field"
                                    label="Password"
                                    name="password"
                                    type="password"
                                    variant="outlined"
                                    value={credentials.password}
                                    onChange={handleInputChange}
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
                                    Log In
                                </Button>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <div>
                                {/* Additional content can go here */}
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
};

export default Admin;
