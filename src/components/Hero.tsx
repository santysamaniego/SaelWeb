import React from "react";

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
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img_hero_principal.png')" }}
    >

      {/* Background */}

      <div className="absolute inset-0 opacity-1 pointer-events-none hero-glow">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-burgundy rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-burgundy-light rounded-full blur-[120px]" />
      </div>

      {/* Hero content */}

      <div className="relative z-10 text-center px-4 pt-32">

        <div className="hero-content">

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

        </div>

      </div>

      {/* MARQUEE */}

      <div className="relative w-full overflow-hidden py-3">

        <div className="marquee-track">

          {images.map((img, idx) => (

            <div
              key={idx}
              className="w-[200px] h-[130px] md:w-[350px] md:h-[230px] flex-shrink-0 rounded-2xl overflow-hidden border border-beige/20 shadow-2xl transform-gpu"
              style={{ transform: "translateZ(0)" }}
            >

              <img
                src={img}
                alt={`Work ${idx}`}
                loading={idx < 2 ? "eager" : "lazy"}
                decoding="async"
                draggable="false"
                className="w-full h-full object-cover"
              />

            </div>

          ))}

        </div>

      </div>

      {/* Scroll indicator */}

      <div className="mt-12 flex flex-col items-center scroll-indicator">

        <span className="text-[8px] uppercase tracking-[0.3em] mb-2 opacity-50 font-bold">
          Scroll
        </span>

        <div className="w-[1px] h-8 bg-gradient-to-b from-beige/50 to-transparent" />

      </div>

    </section>
  );
};

export default Hero;
