import React from 'react'
import Container from '../Custom/Container/Container'
import Grid from '@mui/material/Grid2'
import { Button } from '@mui/material'
import SubHeading from '../Custom/Sub_heading/SubHeading'
import { Link } from 'react-router-dom'

const PhotoSectionRight = (props) => {


    return (
        <div className="container-photo-left">
            <Container>
                <hr style={{ border: '1px solid #213E60', margin: '2rem 0 2rem 0' }} />
                <div className="container-photo-left-elements">

                    <Grid container
                        spacing={{ xs: 5, md: 3, lg: 20 }}
                        direction={{ xs: 'column-reverse', md: 'row' }}


                    >
                        <Grid size={{ xs: 12, md: 7 }}>
                            <SubHeading title={props.subHeadingTitle} />
                            <div className="work-text">
                                <p className='paragraph-subheading'>{props.para}</p>
                                <Button className='work-btn' variant="contained" sx={{ backgroundColor: '#213E60', color: 'white', '&:hover': { backgroundColor: '#1B3452' }, marginTop: '1rem' }}>
                                    <Link style={{textDecoration:'none'}} to={props.routerUrl}>View My Work</Link>
                                </Button>
                            </div>

                        </Grid>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <div className="grid-img-svg">
                                {props.photo}

                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}

export default PhotoSectionRight