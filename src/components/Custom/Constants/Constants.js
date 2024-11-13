import client1 from '../../../assests/client/client1.png'
import client2 from '../../../assests/client/client2.png'
import client3 from '../../../assests/client/client3.png'
import client4 from '../../../assests/client/client4.png'
import client5 from '../../../assests/client/client5.png'
import client6 from '../../../assests/client/client6.png'

import HTMLImage from '../../../assests/tech/html.png'
import CSSImage from '../../../assests/tech/css.png';
import JSImage from '../../../assests/tech/javascript.png';
import BootstrapImage from '../../../assests/tech/bootstrap.png';
import ReactImage from '../../../assests/tech/reactjs.png';
import GitImage from '../../../assests/tech/git.png';
import FigmaImage from '../../../assests/tech/figma.png'
import BlenderImage from '../../../assests/tech/blender.png'
import GimpImage from '../../../assests/tech/gimp.png'
import InkscapeImage from '../../../assests/tech/inkscape.png'



const TestimonialsDetails = [
    {
        id: 1,
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Abhishek does.",
        name: "Anuradha Kumari",
        designation: "Founder of",
        company: "Ditvi Foundation",
        image: client2,
    },
    {
        id: 2,
        testimonial:
            "I thought it was impossible to make a 3D Model as beautiful, but Abhishek proved me wrong.",
        name: "Ajay K.",
        designation: "Sr. Software Developer",
        company: "",
        image: client1,
    },

    {
        id: 3,
        testimonial:
            "After Abhishek optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Hemlata Kumari",
        designation: "CTO Of",
        company: "456 Enterprises",
        image: client3,
    },
    {
        id: 4,
        testimonial:
            "Thanks to Abhishek's video editing, our engagement soared by 70%. We couldn't be more grateful!",
        name: "Vishwas Kumbhkar",
        designation: "Student Of",
        company: "RGPV",
        image: client4,
    },
    {
        id: 5,
        testimonial:
            "I never thought a video could be so captivating, but Abhishek's editing skills completely changed my mind!",
        name: "Kanchan Devi",
        designation: "Ditvi",
        company: "Foundation",
        image: client5,
    },
    {
        id: 6,
        testimonial:
            "Thanks for stunning graphic design, our website now attracts more visitors than ever before!",
        name: "Indu Devi",
        designation: "Ditvi",
        company: "Foundation",
        image: client6,
    },

    {
        id: 7,
        testimonial:
            `Thanks to the exceptional promotional video. our video is attracting more visitors than ever!`,
        name: "Indu Devi",
        designation: "Ditvi",
        company: "Foundation",
        image: client6,
    },
    {
        id: 8,
        testimonial:
            "I never thought a video could be so captivating, but Abhishek's editing skills completely changed my mind!",
        name: "Kanchan Devi",
        designation: "Ditvi",
        company: "Foundation",
        image: client5,
    }
];

const workText = [
    {
        name: `Business Website`,
        subWorkText: `As a dedicated web developer, my role involves creating professional and user-friendly business websites. My work emphasizes clean code practices, optimal performance, and accessibility, ensuring a seamless user experience across all devices. I integrate advanced features and functionalities to enhance the usability and efficiency of business operations. By working on various business website projects, I aim to exceed client expectations and contribute to their digital presence and success. I am also proficient in utilizing APIs and back-end technologies to create scalable and comprehensive solutions. My commitment to staying current with industry trends and best practices drives me to deliver top-notch web solutions that meet the unique needs of each business.`,
    },
    {
        name: `Personal Portfollio`,
        subWorkText: `I've dedicated a significant part of my work to creating personal portfolio websites. My portfolios are designed to highlight individual achievements and skills, ensuring a strong digital presence. By leveraging tools like Figma, Gimp, and Inkscape, I create visually captivating designs that resonate with personal brands. Additionally, I integrate dynamic elements and animations using Blender to enhance user engagement. My goal is to craft unique portfolios that not only reflect the personality and professional journey of individuals but also leave a lasting impression on their audience. Staying current with the latest web development trends, I ensure that my portfolio projects are always at the cutting edge of technology.`,
    },
    {
        name: `Wedding Website`,
        subWorkText: `As a web designer, I have had the pleasure of working on various wedding websites, blending creativity with elegance. My objective is to create visually stunning and user-friendly platforms that encapsulate the unique beauty of each wedding.  I focus on making websites not only visually appealing but also easy to navigate for guests. Each design includes personalized features such as photo galleries, event details, and RSVP functionalities. I stay current with the latest design trends to deliver modern yet timeless aesthetics. My commitment to responsive design ensures that the websites look perfect on any device, providing a seamless user experience. Ultimately, my work on wedding websites aims to create a digital celebration that couples and their guests will cherish.`,
    },
    {
        name: `Anniversary Website`,
        subWorkText: `Have the pleasure of working on various anniversary websites, merging creativity with sophistication. My goal is to craft visually stunning and user-friendly platforms that celebrate the unique milestones of each couple. I focus on making websites not only visually appealing but also easy to navigate for guests. Each design includes personalized features such as photo galleries, event details, and RSVP functionalities. I stay updated with the latest design trends to provide modern yet timeless aesthetics. My dedication to responsive design ensures that the websites look perfect on any device, offering a seamless user experience. Ultimately, my work on anniversary websites aims to create a digital celebration that couples and their loved ones will cherish.`,
    },
    {
        name: `Birthday Website`,
        subWorkText: `My goal is to craft visually stunning and user-friendly platforms that highlight the unique moments of each birthday. I focus on making websites not only visually appealing but also easy to navigate for guests. Each design includes personalized features such as photo galleries, event details, RSVP functionalities, and integrated Google Maps for easy location access. I stay updated with the latest design trends to deliver modern yet timeless aesthetics. My dedication to responsive design ensures that the websites look perfect on any device, offering a seamless user experience. Ultimately, my work on birthday websites aims to create a digital celebration that the birthday person and their loved ones will cherish.`,
    },
    {
        name: `Blogging Website`,
        subWorkText: `I strive to create visually appealing and user-friendly blogging platforms that emphasize each blogger's unique voice. I focus on creating websites that are not only attractive but also easy for readers to navigate. Each project features customized elements such as category organization, author bios, and interactive comment sections. Staying abreast of the latest design trends allows me to deliver a look that is both modern and timeless. I am committed to responsive design, ensuring that blogs perform seamlessly on any device. My ultimate aim is to build engaging digital spaces where bloggers and their audiences can connect and thrive. I also incorporate SEO best practices to enhance visibility and reach. My designs are optimized for speed and performance, ensuring a smooth user experience. I pay meticulous attention to detail to ensure that every element serves its purpose effectively.   `,
    },
    {
        name: `Wedding Invitation`,
        subWorkText: `I have extensive experience in designing captivating and personalized wedding invitations. My objective is to craft visually appealing and memorable invitations that reflect the couple's personality and theme of the wedding. I use a variety of tools and techniques to produce high-quality, engaging invitations, incorporating elegant graphics, custom illustrations, and creative typography. Each invitation is meticulously designed to ensure it is both aesthetically pleasing and functional, providing all necessary details in an easy-to-read format. By staying current with design trends and incorporating innovative ideas, I create wedding invitations that stand out and set the tone for a beautiful celebration. My commitment to responsive design ensures that invitations look perfect across all digital platforms, whether viewed on a computer, tablet, or smartphone`,
    },
    {
        name: `Birthday Invitation`,
        subWorkText: `I specialize in designing captivating and personalized birthday invitations. My goal is to craft visually appealing and memorable invitations that reflect the celebrant's personality and theme of the event. I use a variety of tools and techniques to produce high-quality, engaging invitations, incorporating vibrant graphics, custom illustrations, and creative typography. Each invitation is meticulously designed to ensure it is both aesthetically pleasing and functional, providing all necessary details in an easy-to-read format. By staying current with design trends and incorporating innovative ideas, I create birthday invitations that stand out and set the tone for a joyous celebration. My commitment to responsive design ensures that invitations look perfect across all digital platforms, whether viewed on a computer, tablet, or smartphone. `,
    },
    {
        name: `Resume Writing`,
        subWorkText: `I have honed my skills in crafting professional and compelling resumes. My approach involves tailoring each resume to highlight an individual's unique strengths, experiences, and career aspirations. I utilize various design tools to create visually appealing layouts that stand out while maintaining a clean and professional look. Each resume is meticulously organized, ensuring that key information is easily accessible and presented in a clear, concise manner. I stay updated with the latest industry standards and trends in resume writing to ensure that the documents I produce meet current expectations and best practices. By incorporating elements such as impactful summaries, detailed work experiences, and relevant skills, I aim to create resumes that not only capture the attention of employers but also effectively communicate an individual's qualifications. `,
    },
    {
        name: `Bio-Data Writing`,
        subWorkText: `Specialized in crafting detailed and professional bio-data documents. My approach ensures that each bio-data highlights an individual's personal, educational, and professional background in a clear and organized manner. Using a variety of design tools, I create visually appealing layouts that are easy to read and navigate. Each bio-data is tailored to emphasize the individual's unique attributes and achievements, providing a comprehensive overview that stands out. I stay updated with the latest formatting standards and trends to ensure that the bio-data I produce meets current expectations. By incorporating well-structured sections such as personal information, academic qualifications, work experience, and additional skills, I aim to create bio-data documents that effectively communicate an individual's profile.`,
    },
    {
        name: `Product Promotion`,
        subWorkText: `In my role as a 3D animator, I excel in creating dynamic and captivating product promotion videos using Blender. My goal is to bring products to life through realistic and visually striking animations that showcase their features and benefits. Leveraging advanced 3D modeling and animation capabilities of Blender, I develop immersive visual experiences that engage audiences and effectively communicate the product's value. Each project is meticulously planned and executed to ensure the animations are both visually impressive and aligned with marketing objectives. By incorporating motion graphics, detailed textures, and lifelike movements, I produce promotional content that stands out in a competitive market. Keeping up-to-date with the latest trends and technologies in 3D animation allows me to deliver innovative and impactful solutions. `,
    },
    {
        name: `Brand Promotion`,
        subWorkText: `In my capacity as a 3D animator, I focus on creating dynamic and captivating brand promotion videos using Blender. My mission is to bring brands to life through compelling and visually striking animations that effectively convey their identity and values. Leveraging Blender's advanced 3D modeling and animation capabilities, I craft immersive visual narratives that captivate audiences and elevate brand recognition. Each project is meticulously planned and executed to ensure that the animations are both visually impressive and aligned with the brand's marketing strategies. By integrating motion graphics, detailed textures, and lifelike movements, I produce promotional content that resonates with viewers and distinguishes the brand in a competitive market. Staying abreast of the latest trends and technologies in 3D animation allows me to deliver innovative and impactful brand solutions.`,
    }



]

const skillsImages = [
    { src: HTMLImage, alt: 'HTML' },
    { src: CSSImage, alt: 'CSS' },
    { src: JSImage, alt: 'JavaScript' },
    { src: BootstrapImage, alt: 'Bootstrap' },
    { src: ReactImage, alt: 'React' },
    { src: GitImage, alt: 'Git' },
    { src: FigmaImage, alt: 'Figma' },
    { src: GimpImage, alt: 'Gimp' },
    { src: InkscapeImage, alt: 'Inkscape' },
    { src: BlenderImage, alt: 'Blender' },
];

export { TestimonialsDetails, workText, skillsImages };