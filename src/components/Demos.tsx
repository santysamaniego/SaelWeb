import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";

type Demo = {
  title: string;
  description: string;
  images: string[];
  link: string;
};

const demos: Demo[] = [
  {
    title: "Inmobiliaria Moderna",
    description:
      "Plataforma con filtros avanzados, mapas interactivos y visualización de propiedades.",
    images: [
      "https://picsum.photos/seed/real1/800/600",
      "https://picsum.photos/seed/real2/800/600",
      "https://picsum.photos/seed/real3/800/600"
    ],
    link: "#"
  },
  {
    title: "Gimnasio & Fitness",
    description:
      "Sistema de reservas de clases con perfiles de entrenadores y blog de nutrición.",
    images: [
      "https://picsum.photos/seed/fit1/800/600",
      "https://picsum.photos/seed/fit2/800/600",
      "https://picsum.photos/seed/fit3/800/600"
    ],
    link: "#"
  },
  {
    title: "Estudio Jurídico",
    description:
      "Diseño profesional con agenda de citas y áreas de práctica detalladas.",
    images: [
      "https://picsum.photos/seed/legal1/800/600",
      "https://picsum.photos/seed/legal2/800/600",
      "https://picsum.photos/seed/legal3/800/600"
    ],
    link: "#"
  },
  {
    title: "Restaurante Gourmet",
    description:
      "Carta digital interactiva con reservas online y diseño elegante.",
    images: [
      "https://picsum.photos/seed/rest1/800/600",
      "https://picsum.photos/seed/rest2/800/600",
      "https://picsum.photos/seed/rest3/800/600"
    ],
    link: "#"
  },
  {
    title: "Agencia de Viajes",
    description:
      "Catálogo dinámico de destinos con reservas integradas.",
    images: [
      "https://picsum.photos/seed/travel1/800/600",
      "https://picsum.photos/seed/travel2/800/600",
      "https://picsum.photos/seed/travel3/800/600"
    ],
    link: "#"
  },
  {
    title: "Tienda de Moda",
    description:
      "E-commerce moderno con catálogo visual y compra optimizada.",
    images: [
      "https://picsum.photos/seed/fashion1/800/600",
      "https://picsum.photos/seed/fashion2/800/600",
      "https://picsum.photos/seed/fashion3/800/600"
    ],
    link: "#"
  }
];

const Demos = () => {
  const [indexes, setIndexes] = useState<number[]>(new Array(demos.length).fill(0));
  const [modalDemo, setModalDemo] = useState<Demo | null>(null);
  const [modalIndex, setModalIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexes((prev) =>
        prev.map((i, idx) => (i + 1) % demos[idx].images.length)
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextModal = () => {
    if (!modalDemo) return;
    setModalIndex((prev) => (prev + 1) % modalDemo.images.length);
  };

  const prevModal = () => {
    if (!modalDemo) return;
    setModalIndex(
      (prev) => (prev - 1 + modalDemo.images.length) % modalDemo.images.length
    );
  };

  return (
    <section id="demos" className="py-24 px-6 bg-black border-t border-beige/10">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-beige mb-4">
            Demos por Rubro
          </h2>

          <p className="text-beige/50 text-[10px] uppercase tracking-[0.3em] font-bold">
            Explora ejemplos de sitios diseñados para distintos rubros
          </p>

          <div className="w-24 h-1 bg-burgundy-light mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">

          {demos.map((demo, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col bg-beige/5 border border-beige/20 rounded-[26px] overflow-hidden transition-all duration-500 hover:border-burgundy-light hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
            >

              <div className="aspect-video overflow-hidden">

                <img
                  src={demo.images[indexes[index]]}
                  alt={demo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-4 md:p-6 flex flex-col gap-4">

                <h3 className="text-burgundy-light text-lg md:text-xl font-serif font-bold">
                  {demo.title}
                </h3>

                <p className="text-beige/80 text-xs md:text-sm leading-relaxed">
                  {demo.description}
                </p>

                {/* BOTONES */}
                <div className="flex items-center gap-4 pt-2">

                  <a
                    href={demo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-burgundy-light text-[10px] uppercase font-semibold tracking-wider hover:text-beige transition"
                  >
                    Ver página
                    <ExternalLink size={12} />
                  </a>

                  <button
                    onClick={() => {
                      setModalDemo(demo);
                      setModalIndex(0);
                    }}
                    className="text-beige text-[10px] uppercase font-semibold tracking-wider border border-beige/30 px-3 py-1 rounded-full hover:border-burgundy-light hover:text-burgundy-light transition"
                  >
                    Ver proyecto
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {modalDemo && (

        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6">

          <div className="max-w-4xl w-full relative">

            <button
              onClick={() => setModalDemo(null)}
              className="absolute -top-12 right-0 text-beige hover:text-burgundy-light"
            >
              <X />
            </button>

            <div className="relative">

              <img
                src={modalDemo.images[modalIndex]}
                alt="project"
                className="w-full rounded-[20px]"
              />

              <button
                onClick={prevModal}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={nextModal}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
              >
                <ChevronRight size={20} />
              </button>

            </div>

            <div className="mt-6 text-center">

              <h3 className="text-burgundy-light text-2xl font-serif font-bold mb-3">
                {modalDemo.title}
              </h3>

              <p className="text-beige/80 max-w-xl mx-auto">
                {modalDemo.description}
              </p>

            </div>

          </div>

        </div>

      )}

    </section>
  );
};

export default Demos;