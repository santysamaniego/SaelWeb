import React, { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {

  const fullText =
    "Soy Santiago, Técnico en Programación y apasionado por el desarrollo web. Hoy me dedico a crear páginas web profesionales que ayudan a negocios y emprendedores a fortalecer su presencia digital.";

  const containerRef = useRef(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const indexRef = useRef(0);

  useEffect(() => {

    if (!textRef.current) return;

    const speed = 20;

    intervalRef.current = setInterval(() => {

      if (!textRef.current) return;

      textRef.current.textContent = fullText.slice(0, indexRef.current);

      indexRef.current++;

      if (indexRef.current > fullText.length) {

        if (intervalRef.current) clearInterval(intervalRef.current);

      }

    }, speed);

    return () => {

      if (intervalRef.current) clearInterval(intervalRef.current);

      indexRef.current = 0;

      if (textRef.current) textRef.current.textContent = "";

    };

  }, []);

  const tips = [
    "Compromiso con cada proyecto",
    "Diseño claro y profesional",
    "Aprendizaje constante"
  ];

  return (

    <section
      id="sobre-mi"
      ref={containerRef}
      className="py-24 px-6 bg-black border-y border-beige/10"
    >

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-beige mb-8">
            Sobre Mí
          </h2>

          <div className="min-h-[150px]">

            <p className="text-sm md:text-base text-beige/80 leading-relaxed mb-8 uppercase tracking-widest font-light">

              <span ref={textRef}></span>

              <span className="inline-block w-[2px] h-[1em] bg-burgundy-light ml-1 animate-pulse align-middle"></span>

            </p>

          </div>

          <div className="space-y-4">

            {tips.map((tip, index) => (

              <div
                key={index}
                className={`flex items-center space-x-3 about-tip tip-${index}`}
              >

                <CheckCircle2 className="text-burgundy-light w-4 h-4 flex-shrink-0" />

                <span className="text-beige font-bold text-[10px] uppercase tracking-widest">
                  {tip}
                </span>

              </div>

            ))}

          </div>

        </div>

        <div className="relative max-w-xs mx-auto md:ml-auto">

          <div className="aspect-square rounded-2xl overflow-hidden border border-beige/30 shadow-2xl">

            <img
              src="https://picsum.photos/seed/sael-profile/600/600"
              alt="SAEL Profile"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />

          </div>

          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-burgundy/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -top-6 -left-6 w-48 h-48 bg-burgundy-light/10 rounded-full blur-3xl -z-10" />

        </div>

      </div>

    </section>

  );
};

export default About;