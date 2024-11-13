
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import Testimonials from './components/Testimonials/Testimonials';
import Work from './components/Work/Work';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />

     
    </div>
  );
}

export default App;
