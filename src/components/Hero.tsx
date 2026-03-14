import React from "react";
import { motion } from "motion/react";

const Hero = () => {

  const marqueeImages = [
    "area32-1.png",
    "lavaggi-4.png",
    "demo-estetica3.png",
    "demo-reloj1.png",
    "service-3-2.png",
  ];

  const images = [...marqueeImages, ...marqueeImages];

  return (
    <section
      id="inicio"
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black"
    >

      {/* Background glow */}

      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-burgundy rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-burgundy-light rounded-full blur-[120px]" />
      </div>

      {/* Hero content */}

      <div className="relative z-10 text-center px-4 pt-32">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
        >

          <span className="text-burgundy-light uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block">
            Diseño web moderno y profesional
          </span>

          <h1 className="text-6xl md:text-9xl font-serif font-bold text-beige leading-none mb-6">
            SAEL
          </h1>

          <p className="text-xs md:text-base text-beige/70 max-w-xl mx-auto font-light tracking-widest mb-10 uppercase">
            Impulso tu presencia digital con páginas web profesionales.
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

      {/* MARQUEE OPTIMIZADO */}

      <div className="relative w-full overflow-hidden py-6">

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 35,
            ease: "linear",
          }}
          className="flex gap-6 md:gap-8 w-max"
          style={{
            willChange: "transform",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
          }}
        >

          {images.map((img, idx) => (

            <div
              key={idx}
              className="w-[200px] h-[130px] md:w-[350px] md:h-[230px] flex-shrink-0 rounded-2xl overflow-hidden border border-beige/20 shadow-2xl"
            >

              <img
                src={img}
                alt={`Work ${idx}`}
                loading={idx < 2 ? "eager" : "lazy"}
                decoding="async"
                className="w-full h-full object-cover"
                draggable="false"
              />

            </div>

          ))}

        </motion.div>

      </div>

      {/* Scroll indicator */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 1 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="mt-12 flex flex-col items-center"
        style={{ willChange: "transform" }}
      >

        <span className="text-[8px] uppercase tracking-[0.3em] mb-2 opacity-50 font-bold">
          Scroll
        </span>

        <div className="w-[1px] h-8 bg-gradient-to-b from-beige/50 to-transparent" />

      </motion.div>

    </section>
  );
};

export default Hero;