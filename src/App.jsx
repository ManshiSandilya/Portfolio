import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tech from './components/Tech';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ position: 'relative', zIndex: 0 }}>
        <div style={{ background: 'var(--primary)' }}>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Experience />
        <Certificates />
        <Works />
        <div style={{ position: 'relative', zIndex: 0 }}>
          <Contact />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
