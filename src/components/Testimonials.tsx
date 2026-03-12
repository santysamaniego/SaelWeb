import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Carolina Herrera",
    role: "CEO de Estilo Propio",
    content: "Trabajar con SAEL fue una experiencia transformadora. Captó la esencia de mi marca desde el primer momento y la plasmó en una web que no deja de recibir elogios.",
    image: "https://i.pravatar.cc/150?u=carolina"
  },
  {
    name: "Javier Méndez",
    role: "Director de TechFlow",
    content: "Buscábamos algo disruptivo y moderno. El resultado superó nuestras expectativas. La atención al detalle y la velocidad de carga son simplemente impecables.",
    image: "https://i.pravatar.cc/150?u=javier"
  },
  {
    name: "Sofía Rossi",
    role: "Fundadora de Rossi Art",
    content: "Mi portafolio ahora es mi mejor carta de presentación. La elegancia y fluidez del sitio reflejan exactamente lo que quería transmitir como artista.",
    image: "https://i.pravatar.cc/150?u=sofia"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonios" className="py-20 px-6 bg-black overflow-hidden">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-beige mb-4">
            Testimonios
          </h2>

          <div className="w-24 h-1 bg-burgundy-light mx-auto" />
        </div>

        <div className="relative h-[260px] md:h-[350px] flex items-center justify-center">

          <div className="relative w-full max-w-3xl h-full flex items-center justify-center">

            {testimonials.map((testimonial, index) => {

              const position =
                (index - currentIndex + testimonials.length) %
                testimonials.length;

              let x = "0%";
              let scale = 1;
              let zIndex = 10;
              let opacity = 1;
              let rotateY = 0;
              let blur = "0px";

              if (position === 0) {
                x = "0%";
                scale = 1;
                zIndex = 30;
                opacity = 1;
                rotateY = 0;
                blur = "0px";
              } else if (position === 1) {
                x = "50%";
                scale = 0.75;
                zIndex = 20;
                opacity = 0.3;
                rotateY = -15;
                blur = "4px";
              } else {
                x = "-50%";
                scale = 0.75;
                zIndex = 20;
                opacity = 0.3;
                rotateY = 15;
                blur = "4px";
              }

              return (
                <motion.div
                  key={index}
                  animate={{
                    x,
                    scale,
                    zIndex,
                    opacity,
                    rotateY,
                    filter: `blur(${blur})`
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute w-full max-w-[280px] md:max-w-md bg-beige/5 border border-beige/30 p-5 md:p-8 rounded-[32px] backdrop-blur-sm"
                  style={{ transformStyle: "preserve-3d" }}
                >

                  <Quote className="text-burgundy-light w-7 h-7 mb-3 opacity-60" />

                  <p className="text-beige/90 text-[10px] md:text-sm italic leading-relaxed mb-5 font-light uppercase tracking-widest">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center space-x-3">

                    <div className="w-8 h-8 rounded-full overflow-hidden border border-burgundy-light">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div>
                      <h4 className="text-beige font-bold text-[9px] uppercase tracking-widest">
                        {testimonial.name}
                      </h4>

                      <p className="text-burgundy-light text-[7px] uppercase tracking-widest font-bold">
                        {testimonial.role}
                      </p>
                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex space-x-4 z-40">

            <button
              onClick={prev}
              className="p-2 md:p-3 bg-beige/10 border border-beige/30 rounded-full text-beige hover:bg-burgundy-light transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={next}
              className="p-2 md:p-3 bg-beige/10 border border-beige/30 rounded-full text-beige hover:bg-burgundy-light transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;