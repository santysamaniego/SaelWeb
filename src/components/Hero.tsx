import React from 'react';
import { motion } from 'motion/react';

const Hero = () => {
  const marqueeImages = [
    "https://picsum.photos/seed/web1/600/400",
    "https://picsum.photos/seed/web2/600/400",
    "https://picsum.photos/seed/web3/600/400",
    "https://picsum.photos/seed/web4/600/400",
  ];

  return (
    <section id="inicio" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-burgundy rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-burgundy-light rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 text-center px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-burgundy-light uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block">
            Diseño Web de Vanguardia
          </span>
          <h1 className="text-7xl md:text-9xl font-serif font-bold text-beige leading-none mb-6">
            SAEL
          </h1>
          <p className="text-sm md:text-base text-beige/70 max-w-xl mx-auto font-light tracking-widest mb-10 uppercase">
            Transformo ideas en experiencias digitales memorables.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href="#servicios" 
              className="px-8 py-3 bg-burgundy-light text-beige rounded-full text-xs font-bold uppercase tracking-widest hover:bg-burgundy transition-all duration-300 transform hover:scale-105"
            >
              Ver Servicios
            </a>
            <a 
              href="#contacto" 
              className="px-8 py-3 border border-beige/20 text-beige rounded-full text-xs font-bold uppercase tracking-widest hover:bg-beige hover:text-black transition-all duration-300"
            >
              Contactar Ahora
            </a>
          </div>
        </motion.div>
      </div>

      {/* Photo Roll Marquee - Kept in place */}
      <div className="relative w-full overflow-hidden py-6">
        <motion.div 
          animate={{ x: [0, -1400] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex space-x-8 whitespace-nowrap"
        >
          {[...marqueeImages, ...marqueeImages].map((img, idx) => (
            <div key={idx} className="w-[350px] h-[230px] flex-shrink-0 rounded-2xl overflow-hidden border border-beige/20 shadow-2xl">
              <img src={img} alt={`Work ${idx}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator with bounce - Bottom */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 1 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="mt-12 flex flex-col items-center"
      >
        <span className="text-[8px] uppercase tracking-[0.3em] mb-2 opacity-50 font-bold">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-beige/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
