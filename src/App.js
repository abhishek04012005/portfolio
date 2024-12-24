import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar/Navbar';

// Digital Content
import BioDataWriting from './components/Service/DigitalContentSection/BioDataWriting/BioDataWriting';
import BirthdayInvitation from './components/Service/DigitalContentSection/BirthdayInvitation/BirthdayInvitation';
import ResumeWriting from './components/Service/DigitalContentSection/ResumeWriting/ResumeWriting';
import WeddingInvitation from './components/Service/DigitalContentSection/WeddingInvitation/WeddingInvitation';

// Web Designing 
import AnniversaryWebsite from './components/Service/WebDesigningSection/AnniversaryWebsite/AnniversaryWebsite';
import BirthdayWebsite from './components/Service/WebDesigningSection/BirthdayWebsite/BirthdayWebsite';
import BloggingWebsite from './components/Service/WebDesigningSection/BloggingWebsite/BloggingWebsite';
import WeddingWebsite from './components/Service/WebDesigningSection/WeddingWebsite/WeddingWebsite';

//Web Development
import BusinessWebsite from './components/Service/WebDevelopmentSection/BusinessWebsite/BusinessWebsite';
import PersonalPortfolio from './components/Service/WebDevelopmentSection/PersonalPortfolio/PersonalPortfolio';

//3D Animation
import ProductPromotion from './components/Service/AnimationSection/ProductPromotion/ProductPromotion';
import BrandPromotion from './components/Service/AnimationSection/BrandPromotion/BrandPromotion';
import Admin from './components/Admin/Admin';


function App() {
  return (
  
    <Router basename='/'>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/bio-data" element={<BioDataWriting />} />
          <Route path="/birthday-invitation" element={<BirthdayInvitation />} />
          <Route path="/resume-writing" element={<ResumeWriting />} />
          <Route path="/wedding-invitation" element={<WeddingInvitation />} />

          <Route path="/wedding-anniversary-website" element={<AnniversaryWebsite />} />
          <Route path="/birthday-website" element={<BirthdayWebsite />} />
          <Route path="/blogging-website" element={<BloggingWebsite />} />
          <Route path="/wedding-website" element={<WeddingWebsite />} />

          <Route path="/business-website" element={<BusinessWebsite />} />
          <Route path="/personal-portfolio" element={<PersonalPortfolio />} />

          <Route path="/product-promotion" element={<ProductPromotion />} />
          <Route path="/brand-promotion" element={<BrandPromotion />} />

          <Route path="/admin" element={<Admin />} />


        </Routes>
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
