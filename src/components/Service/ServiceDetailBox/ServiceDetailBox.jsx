import React from 'react'
import Container from '../../Custom/Container/Container'
import Heading from '../../Custom/Heading/Heading'
import Grid from '@mui/material/Grid2'

const ServiceDetailBox = ({ heading, serviceImg, para1, para2, para3 }) => {
    return (
        <>
            <Container>
                <div className="service-detail-box">
                    <Heading title={heading} />
                    <Grid
                        container
                        spacing={{ xs: 5, md: 3, lg: 20 }}
                    >
                        <Grid
                            size={{ xs: 12, md: 5 }}
                        >
                            <div className="grid-img-svg">
                                {serviceImg}
                            </div>
                        </Grid>
                        <Grid
                            size={{ xs: 12, md: 7 }}
                        >
                            <div className="main-work-box">
                                <p className="paragraph-subheading">{para1}</p>
                                <p className="paragraph-subheading">{para2}</p>
                                <p className="paragraph-subheading">{para3}</p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </>
    )
}

export default ServiceDetailBox