import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Landing Page",
    description: "Página web de una sola sección, ideal para presentar un servicio o producto de forma clara y directa. Diseñada para captar la atención y generar consultas rápidamente.",
    image: "service-1.png",
    side: "left"
  },
  {
    title: "Web Corporativa",
    description: "Sitio web profesional con múltiples secciones para mostrar tu negocio, servicios e información relevante. Ideal para fortalecer tu presencia digital y generar confianza",
    image: "service-2.png",
    side: "right"
  },
  {
    title: "Rediseño de Web",
    description: "Actualización y mejora de páginas web existentes, optimizando diseño, estructura y experiencia de usuario para lograr una imagen más moderna y profesional.",
    image: "service-3.png",
    side: "left"
  },
  {
    title: "Web Profesional Personal",
    description: "Diseño de página web pensada para profesionales que desean mostrar sus servicios, experiencia y datos de contacto de manera clara y profesional",
    image: "service-4.png",
    side: "right"
  }
];

const Services = () => {

  const whatsappNumber = "1169595853";
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            entry.target.classList.add("service-visible");
          } else {
            entry.target.classList.remove("service-visible");
          }

        });

      },
      { threshold: 0.25 }
    );

    const items = sectionRef.current?.querySelectorAll(".service-item");

    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();

  }, []);

  return (
    <section id="servicios" className="py-24 px-6 bg-black relative overflow-hidden">

      <div ref={sectionRef} className="max-w-6xl mx-auto relative z-10">

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-beige mb-4">
            Servicios
          </h2>
          <div className="w-24 h-1 bg-burgundy-light mx-auto" />
        </div>

        <div className="space-y-24 md:space-y-32">

          {services.map((service, index) => (

            <div
              key={index}
              className={`service-item ${
                service.side === "left" ? "service-left" : "service-right"
              } relative flex flex-col ${
                service.side === 'left'
                  ? 'md:flex-row'
                  : 'md:flex-row-reverse'
              } items-center gap-12 md:gap-24`}
            >

              <div
                className={`absolute top-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-beige/5 rounded-full blur-3xl -z-10 ${
                  service.side === 'left'
                    ? '-left-1/2'
                    : '-right-1/2'
                }`}
              />

              <div className="flex-1 w-full flex justify-center relative">

                <div className="relative group w-48 h-48 md:w-80 md:h-80">

                  <div className="absolute -inset-8 bg-burgundy-light/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="w-full h-full rounded-full overflow-hidden border border-beige/30 shadow-[0_0_50px_rgba(245,245,220,0.1)]">

                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />

                  </div>

                </div>

              </div>

              <div className="flex-1 text-center md:text-left">

                <h3 className="text-2xl md:text-3xl font-serif font-bold text-beige mb-6">
                  {service.title}
                </h3>

                <p className="text-beige/70 text-xs md:text-sm mb-8 leading-relaxed uppercase tracking-widest font-light">
                  {service.description}
                </p>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hola SAEL, me gustaría consultar sobre el servicio de ${service.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-burgundy-light font-bold hover:text-beige transition-colors group text-xs uppercase tracking-widest"
                >

                  <span>Consultar Servicio</span>

                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />

                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Services;