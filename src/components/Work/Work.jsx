import React from 'react'
import Grid from '@mui/material/Grid2';

import Container from '../Custom/Container/Container'
import Heading from '../Custom/Heading/Heading'
import './Work.css'
import WorkSVG from '../SVG/WorkSVG/WorkSVG';
import WebDevelopmentSVG from '../SVG/WebDevelopmentSVG/WebDevelopmentSVG';
import WebDesigningSVG from '../SVG/AboutSVG/WebDesigningSVG/WebDesigningSVG';
import Animation from '../SVG/3DAnimation/Animation';
import ContentSVG from '../SVG/ContentSVG/ContentSVG';
import BusinessWebsiteSVG from '../SVG/BusinessWebsiteSVG/BusinessWebsiteSVG';
import PersonalPortfoiliSVG from '../SVG/PersonalPortfolioSVG/PersonalPortfolioSVG';
import WeddingWebsiteSVG from '../SVG/WeddingWebsiteSVG/WeddingWebsiteSVG';
import AnniversaryWebsiteSVG from '../SVG/AnniversaryWebsiteSVG/AnniversaryWebsiteSVG';
import BirthdayWebsiteSVG from '../SVG/BirthdayWebsiteSVG/BirthdayWebsiteSVG';
import BloggingSVG from '../SVG/BloggingSVG/BloggingSVG';
import WeddingInvitaionSVG from '../SVG/WeddingInvitaionSVG/WeddingInvitaionSVG';
import BirthdayInvitaionSVG from '../SVG/BirthdayInvitationSVG/BirthdayInvitationSVG';
import ResumeSVG from '../SVG/ResumeSVG/ResumeSVG';
import BioDataSVG from '../SVG/BioDataSVG/BioDataSVG';
import BrandPromotionSVG from '../SVG/BrandPromotionSVG/BrandPromotionSVG';
import ProductSVG from '../SVG/ProductSVG/ProductSVG';

import { workText } from '../Custom/Constants/Constants';
import PhotoSectionLeft from '../PhotoSectionLeft/PhotoSectionLeft';
import PhotoSectionRight from '../PhotoSectionRight/PhotoSectionRight';


const Work = () => {
    return (
        <>
            <div className="work" id='mywork'>



                <Container>
                    <Heading title='my work' />

                    <Grid container spacing={{ xs: 5, md: 3, lg: 20 }}>
                        <Grid

                            size={{ xs: 12, md: 5 }}>
                            <div className="grid-img-svg">
                                <WorkSVG />
                            </div>
                        </Grid>
                        <Grid
                            size={{ xs: 12, md: 7 }}>
                            <div className="main-work-box">
                                <p className='paragraph-subheading'>In my journey as a web developer and designer, I have consistently delivered high-quality digital experiences. I specialize in creating seamless, user-centric websites using technologies such as React JS, HTML, CSS, and JavaScript. My projects showcase visually compelling designs, crafted with tools like Figma, Gimp, and Inkscape, ensuring a balance between aesthetics and functionality. Additionally, my proficiency in Blender allows me to integrate stunning 3D animations, bringing concepts to life. </p>
                                <p className='paragraph-subheading'>My expertise also extends to digital content creation, enabling me to produce engaging and impactful multimedia content. I am dedicated to staying current with industry trends and continuously enhancing my skills to drive innovation in every project I undertake. Whether working independently or as part of a team, my goal is to exceed client expectations and contribute to impactful digital transformations. My commitment to excellence and passion for creating extraordinary digital experiences define my professional journey.</p>
                            </div>
                        </Grid>

                    </Grid>

                    <Grid container spacing={5} mt={10}
                        
                    >
                        <Grid

                            size={{ xs: 12, md: 3 }}>
                            <div className="grid-img-svg">
                                <div style={{ borderBottom: '3px solid #213E60' }}> <WebDevelopmentSVG /></div>

                                <div className='card-text'><h3>Web Development</h3></div>
                            </div>

                        </Grid>
                        <Grid
                            size={{ xs: 12, md: 3 }}>
                            <div className="grid-img-svg">
                                <div style={{ borderBottom: '3px solid #213E60' }}> <WebDesigningSVG /></div>

                                <div><h3>Web Designing</h3></div>
                            </div>
                        </Grid>

                        <Grid
                            size={{ xs: 12, md: 3 }}>
                            <div className="grid-img-svg">
                                <div style={{ borderBottom: '3px solid #213E60' }}><ContentSVG /></div>

                                <div><h3>Digital Content</h3></div>
                            </div>
                        </Grid>

                        <Grid
                            size={{ xs: 12, md: 3 }}>
                            <div className="grid-img-svg">
                                <div style={{ borderBottom: '3px solid #213E60' }}>  <Animation /> </div>

                                <div><h3>3D Animation</h3></div>
                            </div>
                        </Grid>

                    </Grid>
                </Container>
            </div >


            <div className="web-development">
                <Container>
                    <Heading title='web development' />
                    <Grid container  
                    spacing={{ xs: 5, md: 3, lg: 20 }}
                    direction={{ xs: 'column-reverse', md: 'row' }}
                    >

                        <Grid
                            size={{ xs: 12, md: 7 }}>
                            <div className="main-work-box">
                                <p className='paragraph-subheading'>
                                    As a dedicated web developer, I specialize in crafting seamless, user-centric websites using cutting-edge technologies. My strong command of React JS, HTML, CSS, and JavaScript allows me to build responsive and engaging web applications. I am adept at turning complex requirements into functional, elegant solutions that enhance user experience. My projects reflect a commitment to clean code practices, performance optimization, and accessibility. Continuously updating my skill set, I stay current with industry trends and best practices to ensure the highest quality in every project.

                                </p>
                                <p className='paragraph-subheading'>Whether working independently or collaborating with a team, I strive to exceed client expectations and drive innovation in the web development space. Additionally, I have experience in integrating APIs and working with various back-end technologies to create fully functional web applications. I am proficient in debugging and troubleshooting issues to maintain smooth and efficient websites. My passion for web development drives me to explore new tools and frameworks, ensuring my projects are always at the forefront of technology.</p>
                            </div>
                        </Grid>
                        <Grid
                            size={{ xs: 12, md: 5 }}>
                            <div className="grid-img-svg">
                                <WebDevelopmentSVG />
                            </div>
                        </Grid>
                    </Grid>


                </Container>


                <PhotoSectionLeft subHeadingTitle='business website' routerUrl='/business-website' para={workText[0].subWorkText} para2={workText[0].workTextPara2} photo={<BusinessWebsiteSVG />} />
                <PhotoSectionRight subHeadingTitle='personal portfolio' routerUrl='/personal-portfolio' para={workText[1].subWorkText} para2={workText[0].workTextPara2} photo={<PersonalPortfoiliSVG />} />

            </div>


            {/* Web Designing */}

            <div className="web-designing">
                <Container>
                    <Heading title='web designing' />
                    <Grid container 
                     spacing={{ xs: 5, md: 3, lg: 20 }}
                     >

                        <Grid
                            size={{ xs: 12, md: 5 }}>
                            <div className="grid-img-svg">
                                <WebDesigningSVG />
                            </div>
                        </Grid>

                        <Grid
                            size={{ xs: 12, md: 7 }}>
                            <div className="main-work-box">
                                <p className='paragraph-subheading'>As a web designer, I specialize in creating visually appealing and intuitive user interfaces. My expertise lies in using design tools like Figma, Gimp, and Inkscape to develop clean and engaging web layouts. I focus on crafting seamless user experiences through thoughtful design and innovative solutions. My work ensures that websites are not only aesthetically pleasing but also highly functional and user-friendly.</p>
                                <p className='paragraph-subheading'>My goal is to create designs that enhance usability, drive engagement, and align perfectly with the client's brand identity. By combining creativity with technical skills, I deliver unique and effective web design solutions that stand out in the digital landscape. Additionally, I excel in responsive design, ensuring optimal viewing experiences across various devices. I prioritize accessibility, making sure that my designs are inclusive and usable for all users. With a passion for continuous learning, I stay up-to-date with emerging design tools and techniques. Ultimately, my designs aim to elevate the user's journey and leave a lasting impression.</p>
                            </div>
                        </Grid>

                    </Grid>


                </Container>


                <PhotoSectionRight subHeadingTitle='wedding website' routerUrl='/wedding-website' para={workText[2].subWorkText} photo={<WeddingWebsiteSVG />} />
                <PhotoSectionLeft subHeadingTitle='anniversary website' routerUrl='/anniversary-website' para={workText[3].subWorkText} photo={<AnniversaryWebsiteSVG />} />
                <PhotoSectionRight subHeadingTitle='birthday website' routerUrl='/birthday-website' para={workText[4].subWorkText} photo={<BirthdayWebsiteSVG />} />
                <PhotoSectionLeft subHeadingTitle='blogging website' routerUrl='/blogging-website' para={workText[5].subWorkText} photo={<BloggingSVG />} />





            </div>

            {/* Digital Content */}

            <div className="digital content">
                <Container>
                    <Heading title='digital content' />
                    <Grid container  
                   spacing={{ xs: 5, md: 3, lg: 20 }}
                    direction={{ xs: 'column-reverse', md: 'row' }}
                    >

                        <Grid
                            size={{ xs: 12, md: 7 }}>
                            <div className="main-work-box">
                                <p className='paragraph-subheading'>My expertise extends to creating engaging and impactful digital content that resonates with audiences. I utilize various tools and technologies to produce high-quality multimedia content, including videos, graphics, and animations. Whether it's for marketing campaigns, social media, or websites, my content is designed to capture attention and convey messages effectively. I focus on storytelling, ensuring that each piece of content aligns with the brand's voice and objectives.</p>
                                <p className='paragraph-subheading'>My experience in digital content creation allows me to integrate these elements seamlessly into web design projects, enhancing the overall user experience. Additionally, I stay updated with the latest trends and techniques in digital content creation to deliver innovative and relevant solutions. My goal is to create content that not only looks great but also engages and inspires the audience, driving interaction and engagement. I am skilled at optimizing content for various platforms to maximize reach and impact. With a keen eye for detail, I ensure that every piece of content I create is polished and professional.</p>
                            </div>
                        </Grid>

                        <Grid
                            size={{ xs: 12, md: 5 }}>
                            <div className="grid-img-svg">
                                <ContentSVG />
                            </div>
                        </Grid>

                    </Grid>


                </Container>


                <PhotoSectionLeft subHeadingTitle='wedding invitation' routerUrl='/wedding-invitation' para={workText[6].subWorkText} photo={<WeddingInvitaionSVG />} />
                <PhotoSectionRight subHeadingTitle='birthday invitation' routerUrl='/birthday-invitation' para={workText[7].subWorkText} photo={<BirthdayInvitaionSVG />} />
                <PhotoSectionLeft subHeadingTitle='resume writing'routerUrl='/resume-writing' para={workText[8].subWorkText} photo={<ResumeSVG />} />
                <PhotoSectionRight subHeadingTitle='bio-data writing' routerUrl='/bio-data' para={workText[9].subWorkText}  photo={<BioDataSVG />} />


            </div>

            {/* 3D Animation */}

            <div className="3d-animation">
                <Container>
                    <Heading title='3d animation' />
                    <Grid container 
                     spacing={{ xs: 5, md: 3, lg: 20 }}
                    >
                        <Grid
                            size={{ xs: 12, md: 5 }}>
                            <div className="grid-img-svg">
                                <Animation />
                            </div>
                        </Grid>

                        <Grid
                            size={{ xs: 12, md: 7 }}>
                            <div className=" main-work-box">
                                <p className='paragraph-subheading'>In my role as a 3D animator, I specialize in creating dynamic and engaging animations for both brand and product promotion using Blender. My mission is to bring brands to life with visually striking animations that effectively convey their identity and values, and to showcase products with realistic and detailed visuals that highlight their features and benefits. </p>
                                <p className='paragraph-subheading'>By leveraging Blender's advanced capabilities, I craft immersive visual narratives that captivate audiences and elevate brand recognition. My meticulous planning and execution ensure that each animation aligns with marketing strategies and stands out in a competitive market. I stay up-to-date with the latest trends and technologies in 3D animation, enabling me to deliver innovative and impactful solutions. My dedication to quality and attention to detail ensure that each project not only meets but exceeds client expectations, creating powerful and lasting impressions.</p>
                            </div>
                        </Grid>

                    </Grid>


                </Container>

                <PhotoSectionRight subHeadingTitle='product promotion' routerUrl='/product-promotion' para={workText[10].subWorkText} photo={<ProductSVG />} />
                <PhotoSectionLeft subHeadingTitle='brand promotion' routerUrl='/brand-promotion' para={workText[11].subWorkText} photo={<BrandPromotionSVG />} />

            </div>



        </>
    )
}

export default Work