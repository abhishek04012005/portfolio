import React from 'react'
import ServiceDetailBox from '../../ServiceDetailBox/ServiceDetailBox'
import WeddingInvitaionSVG from '../../../SVG/WeddingInvitaionSVG/WeddingInvitaionSVG'
import ServiceCard from '../../CustomService/ServiceCard/ServiceCard'
import { weddingMobileViewEcard, weddingDesktopViewEcard, weddingMobileViewVideo, weddingDesktopViewVideo } from '../../CustomService/ServiceCard/ServiceConstant'
import { Helmet } from 'react-helmet'




// const InstagramPost = () => (
//   <blockquote 
//     className="instagram-media" 
//     data-instgrm-captioned 
//     data-instgrm-permalink="https://www.instagram.com/p/DEO6AdQhD9j/?utm_source=ig_embed&utm_campaign=loading" 
//     data-instgrm-version="14" 
//     style={{
//       background: '#FFF',
//       border: 0,
//       borderRadius: '3px',
//       boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
//       margin: '1px',
//       maxWidth: '540px',
//       minWidth: '326px',
//       padding: 0,
//       width: 'calc(100% - 2px)',
//     }}
//   >
//     <div style={{ padding: '16px' }}>
//       <a 
//         href="https://www.instagram.com/p/DEO6AdQhD9j/?utm_source=ig_embed&utm_campaign=loading" 
//         style={{
//           background: '#FFFFFF',
//           lineHeight: 0,
//           padding: 0,
//           textAlign: 'center',
//           textDecoration: 'none',
//           width: '100%',
//         }}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <div 
//           style={{ 
//             display: 'flex', 
//             flexDirection: 'row', 
//             alignItems: 'center' 
//           }}
//         >
//           <div 
//             style={{ 
//               backgroundColor: '#F4F4F4', 
//               borderRadius: '50%', 
//               height: '40px', 
//               marginRight: '14px', 
//               width: '40px' 
//             }}
//           ></div>
//           <div 
//             style={{ 
//               display: 'flex', 
//               flexDirection: 'column', 
//               flexGrow: 1, 
//               justifyContent: 'center' 
//             }}
//           >
//             <div 
//               style={{ 
//                 backgroundColor: '#F4F4F4', 
//                 borderRadius: '4px', 
//                 height: '14px', 
//                 marginBottom: '6px', 
//                 width: '100px' 
//               }}
//             ></div>
//             <div 
//               style={{ 
//                 backgroundColor: '#F4F4F4', 
//                 borderRadius: '4px', 
//                 height: '14px', 
//                 width: '60px' 
//               }}
//             ></div>
//           </div>
//         </div>
//         <div style={{ padding: '19% 0' }}></div>
//         <div 
//           style={{
//             display: 'block',
//             height: '50px',
//             margin: '0 auto 12px',
//             width: '50px',
//           }}
//         >
//           <svg 
//             width="50px" 
//             height="50px" 
//             viewBox="0 0 60 60" 
//             version="1.1" 
//             xmlns="https://www.w3.org/2000/svg" 
//             xmlnsXlink="http://www.w3.org/1999/xlink"
//           >
//             <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
//               <g transform="translate(-511.000000, -20.000000)" fill="#000000">
//                 <g>
//                   <path d="M556.869,30.41 ... 569.425,30.349"></path>
//                 </g>
//               </g>
//             </g>
//           </svg>
//         </div>
//         <div style={{ paddingTop: '8px' }}>
//           <div 
//             style={{ 
//               color: '#3897f0', 
//               fontFamily: 'Arial,sans-serif', 
//               fontSize: '14px', 
//               fontWeight: 550, 
//               lineHeight: '18px' 
//             }}
//           >
//             View this post on Instagram
//           </div>
//         </div>
//         <div style={{ padding: '12.5% 0' }}></div>
//         <div 
//           style={{ 
//             display: 'flex', 
//             flexDirection: 'row', 
//             marginBottom: '14px', 
//             alignItems: 'center' 
//           }}
//         >
//           <div 
//             style={{ 
//               backgroundColor: '#F4F4F4', 
//               borderRadius: '50%', 
//               height: '12.5px', 
//               width: '12.5px', 
//               transform: 'translateX(0px) translateY(7px)' 
//             }}
//           ></div>
//           <div 
//             style={{ 
//               backgroundColor: '#F4F4F4', 
//               height: '12.5px', 
//               transform: 'rotate(-45deg) translateX(3px) translateY(1px)', 
//               width: '12.5px', 
//               flexGrow: 0, 
//               marginRight: '14px', 
//               marginLeft: '2px' 
//             }}
//           ></div>
//           <div 
//             style={{ 
//               backgroundColor: '#F4F4F4', 
//               borderRadius: '50%', 
//               height: '12.5px', 
//               width: '12.5px', 
//               transform: 'translateX(9px) translateY(-18px)' 
//             }}
//           ></div>
//         </div>
//         <div style={{ marginLeft: '8px' }}>
//           <div 
//             style={{ 
//               backgroundColor: '#F4F4F4', 
//               borderRadius: '50%', 
//               height: '20px', 
//               width: '20px' 
//             }}
//           ></div>
//           <div 
//             style={{ 
//               width: 0, 
//               height: 0, 
//               borderTop: '2px solid transparent', 
//               borderLeft: '6px solid #f4f4f4', 
//               borderBottom: '2px solid transparent', 
//               transform: 'translateX(16px) translateY(-4px) rotate(30deg)' 
//             }}
//           ></div>
//         </div>
//         <div style={{ marginLeft: 'auto' }}>
//           <div 
//             style={{ 
//               width: '0px', 
//               borderTop: '8px solid #F4F4F4', 
//               borderRight: '8px solid transparent', 
//               transform: 'translateY(16px)' 
//             }}
//           ></div>
//           <div 
//             style={{ 
//               backgroundColor: '#F4F4F4', 
//               flexGrow: 0, 
//               height: '12px', 
//               width: '16px', 
//               transform: 'translateY(-4px)' 
//             }}
//           ></div>
//           <div 
//             style={{ 
//               width: 0, 
//               height: 0, 
//               borderTop: '8px solid #F4F4F4', 
//               borderLeft: '8px solid transparent', 
//               transform: 'translateY(-4px) translateX(8px)' 
//             }}
//           ></div>
//         </div>
//       </a>
//       <p 
//         style={{ 
//           color: '#c9c8cd', 
//           fontFamily: 'Arial,sans-serif', 
//           fontSize: '14px', 
//           lineHeight: '17px', 
//           marginBottom: 0, 
//           marginTop: '8px', 
//           overflow: 'hidden', 
//           padding: '8px 0 7px', 
//           textAlign: 'center', 
//           textOverflow: 'ellipsis', 
//           whiteSpace: 'nowrap' 
//         }}
//       >
//         <a 
//           href="https://www.instagram.com/p/DEO6AdQhD9j/?utm_source=ig_embed&utm_campaign=loading" 
//           style={{ 
//             color: '#c9c8cd', 
//             fontFamily: 'Arial,sans-serif', 
//             fontSize: '14px', 
//             fontWeight: 'normal', 
//             lineHeight: '17px', 
//             textDecoration: 'none' 
//           }} 
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           A post shared by Abhishek Choudhary (@theabhishekchoudhary0401)
//         </a>
//       </p>
//     </div>
//   </blockquote>
// );




const WeddingInvitation = () => {
  return (
    <>
      <Helmet>
        <title>Wedding Invitation</title>
        <meta name="description" content="Create a beautiful and memorable wedding invitation video or ecard. Join us in celebrating the union of two hearts." />
        <meta name="keywords" content="wedding invitation, wedding invitation video, wedding invitation ecard, wedding invite, personalized wedding invitation, wedding ecard, wedding video invite" />
        <meta property="og:title" content="Wedding Invitation | Celebrate Love with a Unique Wedding Ecard" />
        <meta property="og:description" content="Create a stunning wedding invitation video or ecard. Celebrate your special day with a personalized touch." />
        <meta property="og:image" content="https://example.com/path/to/your/wedding-invitation-image.png" />
        <meta property="og:url" content="https://abhishekchoudhary.co.in/wedding-invitation" />

      </Helmet>

      <div className="wedding-invitation">
        <ServiceDetailBox
          heading='Wedding Invitation'
          serviceImg={<WeddingInvitaionSVG />}
          para1="I have extensive experience in designing captivating and personalized wedding invitations. My objective is to craft visually appealing and memorable invitations that reflect the couple's personality and theme of the wedding."
          para2="I use a variety of tools and techniques to produce high-quality, engaging invitations, incorporating elegant graphics, custom illustrations, and creative typography. Each invitation is meticulously designed to ensure it is both aesthetically pleasing and functional, providing all necessary details in an easy-to-read format. "
          para3="By staying current with design trends and incorporating innovative ideas, I create wedding invitations that stand out and set the tone for a beautiful celebration. My commitment to responsive design ensures that invitations look perfect across all digital platforms, whether viewed on a computer, tablet, or smartphone"
        />

        <ServiceCard subheading="Mobile View e-Card" serviceCardData={weddingMobileViewEcard} />
        <ServiceCard subheading="desktop view e-Card" serviceCardData={weddingDesktopViewEcard} />
        <ServiceCard subheading="Mobile View Video" serviceCardData={weddingMobileViewVideo} />
        <ServiceCard subheading="desktop View video" serviceCardData={weddingDesktopViewVideo} />

        {/* <InstagramPost/> */}

      </div>
    </>
  )
}

export default WeddingInvitation