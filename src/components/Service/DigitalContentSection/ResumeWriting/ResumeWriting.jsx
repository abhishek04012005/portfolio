import React from 'react'
import { Helmet } from 'react-helmet'
import ServiceDetailBox from '../../ServiceDetailBox/ServiceDetailBox'
import ResumeSVG from '../../../SVG/ResumeSVG/ResumeSVG'
import { resumeWriting } from '../../CustomService/ServiceCard/ServiceConstant'
import ServiceCard from '../../CustomService/ServiceCard/ServiceCard'



const ResumeWriting = () => {
  return (
    <>
      <Helmet>
        <title>Create Your Resume</title>
        <meta name="description" content="Create a professional and memorable resume. Stand out in your job search with our customized resumes." />
        <meta name="keywords" content="resume, resume builder, resume template, resume writing, professional resume, customized resume, job application, resume service" />
        <meta property="og:title" content="Resume Service | Land Your Dream Job with a Custom Resume" />
        <meta property="og:description" content="Create a stunning resume. Boost your job search with a personalized, professional touch." />
        <meta property="og:image" content="https://example.com/path/to/your/resume-image.png" />
        <meta property="og:url" content="https://abhishekchoudhary.co.in/resume-writing" />
      </Helmet>

      <div className="resume-writing">
        <ServiceDetailBox
          heading="Resume Writing"
          serviceImg={<ResumeSVG />}
          para1="I have honed my skills in crafting professional and compelling resumes. My approach involves tailoring each resume to highlight an individual's unique strengths, experiences, and career aspirations. I utilize various design tools to create visually appealing layouts that stand out while maintaining a clean and professional look."
          para2="Each resume is meticulously organized, ensuring that key information is easily accessible and presented in a clear, concise manner. I stay updated with the latest industry standards and trends in resume writing to ensure that the documents I produce meet current expectations and best practices. "
          para3="By incorporating elements such as impactful summaries, detailed work experiences, and relevant skills, I aim to create resumes that not only capture the attention of employers but also effectively communicate an individual's qualifications."
        />

        <ServiceCard serviceCardData={resumeWriting} />


      </div>
    </>
  )
}

export default ResumeWriting