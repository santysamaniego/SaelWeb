import React from 'react';
import { motion } from 'motion/react';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-burgundy/20"
    >
      <div className="text-2xl font-serif font-bold tracking-tighter text-beige">
        SAEL
      </div>
      <div className="hidden md:flex space-x-8 text-[10px] uppercase tracking-[0.2em] font-bold">
        <a href="#inicio" className="hover:text-burgundy-light transition-colors">Inicio</a>
        <a href="#sobre-mi" className="hover:text-burgundy-light transition-colors">Sobre Mí</a>
        <a href="#servicios" className="hover:text-burgundy-light transition-colors">Servicios</a>
        <a href="#portafolio" className="hover:text-burgundy-light transition-colors">Portafolio</a>
        <a href="#demos" className="hover:text-burgundy-light transition-colors">Demos</a>
        <a href="#faq" className="hover:text-burgundy-light transition-colors">FAQ</a>
        <a href="#contacto" className="hover:text-burgundy-light transition-colors">Contacto</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
