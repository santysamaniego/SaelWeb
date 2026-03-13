import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
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
      setIndexes(prev =>
        prev.map((i, idx) => (i + 1) % demos[idx].images.length)
      );
    }, 4000);

    return () => clearInterval(interval);

  }, []);

  const nextModal = () => {
    if (!modalDemo) return;
    setModalIndex(prev => (prev + 1) % modalDemo.images.length);
  };

  const prevModal = () => {
    if (!modalDemo) return;
    setModalIndex(prev => (prev - 1 + modalDemo.images.length) % modalDemo.images.length);
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

        {/* GRID */}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">

          {demos.map((demo, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[26px] cursor-pointer"
              onClick={() => {
                setModalDemo(demo);
                setModalIndex(0);
              }}
            >

              <div className="aspect-[3/4] md:aspect-video relative">

                <img
                  src={demo.images[indexes[index]]}
                  alt={demo.title}
                  className="w-full h-full object-cover blur-[2px] group-hover:blur-sm transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">

                  <h3 className="text-beige text-lg md:text-xl font-serif font-bold mb-4 drop-shadow-lg">
                    {demo.title}
                  </h3>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalDemo(demo);
                      setModalIndex(0);
                    }}
                    className="text-[10px] uppercase font-semibold tracking-wider border border-beige/60 px-4 py-2 rounded-full text-beige backdrop-blur-sm hover:border-burgundy-light hover:text-burgundy-light transition"
                  >
                    Ver demo
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* MODAL */}

      <AnimatePresence>

        {modalDemo && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
          >

            <div className="relative w-full max-w-4xl bg-black border border-beige/10 rounded-3xl p-6 md:p-10 max-h-[90vh] overflow-y-auto">

              {/* BOTON CERRAR */}

              <button
                onClick={() => setModalDemo(null)}
                className="absolute top-6 right-6 md:top-4 md:right-4 z-50 text-beige hover:text-burgundy-light"
              >
                <X size={24} />
              </button>

              <div className="grid md:grid-cols-2 gap-8 items-center">

                {/* GALERIA */}

                <div className="relative">

                  <img
                    src={modalDemo.images[modalIndex]}
                    alt="demo"
                    className="rounded-2xl w-full"
                  />

                  <button
                    onClick={prevModal}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full"
                  >
                    <ChevronLeft />
                  </button>

                  <button
                    onClick={nextModal}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full"
                  >
                    <ChevronRight />
                  </button>

                </div>

                {/* INFO */}

                <div className="max-w-md">

                  <h3 className="text-3xl md:text-4xl font-serif text-beige font-bold mb-4">
                    {modalDemo.title}
                  </h3>

                  <p className="text-beige/80 text-sm leading-relaxed mb-6">
                    {modalDemo.description}
                  </p>

                  <a
                    href={modalDemo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[11px] uppercase font-semibold tracking-wider border border-beige/40 px-5 py-2 rounded-full text-beige hover:border-burgundy-light hover:text-burgundy-light transition"
                  >
                    Ver página
                    <ExternalLink size={14} />
                  </a>

                </div>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>

  );

};

export default Demos;