import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Demos from './components/Demos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  useEffect(() => {
    document.title = "SAEL | Diseño Web Profesional & Vanguardista";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'SAEL - Especialista en diseño y desarrollo web profesional. Landing pages, webs corporativas y rediseño digital en Buenos Aires, Argentina.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-black selection:bg-burgundy-light selection:text-beige">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Demos />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
