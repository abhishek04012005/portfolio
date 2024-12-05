import React from 'react'
import Grid from '@mui/material/Grid2';
import { TextField, Button, Box } from '@mui/material';
import './Admin.css'
import Container from '../Custom/Container/Container'
import Heading from '../Custom/Heading/Heading'

const Admin = () => {
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
                        
                            sx={{ maxWidth: '100%', mx: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}
                        >
                            <TextField
                                className="custom-text-field"
                                label="Name"
                                name="name"
                                variant="outlined"
                              
                                fullWidth
                                required
                            />
                            <TextField
                                className="custom-text-field"
                                label="Email"
                                name="email"
                                type="email"
                                variant="outlined"
                               
                                fullWidth
                                required
                            />
                            <TextField
                                className="custom-text-field"
                                label="Mobile Number"
                                name="number"
                                type="tel"
                                variant="outlined"
                        
                                fullWidth
                                required
                            />
                            <TextField
                                className="custom-text-field"
                                label="Message"
                                name="message"
                                variant="outlined"
                            
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
                            
                        </div>
                    </Grid>
                </Grid>
                </Container>
            </div>
        </>
    )
}

export default Admin