import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Premium",
    category: "Tienda Online",
    image: "https://picsum.photos/seed/p1/800/600",
    description:
      "Una tienda online de lujo con animaciones fluidas y experiencia de usuario excepcional.",
    gallery: [
      "https://picsum.photos/seed/p1-1/800/600",
      "https://picsum.photos/seed/p1-2/800/600",
      "https://picsum.photos/seed/p1-3/800/600"
    ]
  },
  {
    id: 2,
    title: "Agencia Creativa",
    category: "Web Corporativa",
    image: "https://picsum.photos/seed/p2/800/600",
    description:
      "Sitio web para agencia de marketing digital con storytelling visual.",
    gallery: [
      "https://picsum.photos/seed/p2-1/800/600",
      "https://picsum.photos/seed/p2-2/800/600",
      "https://picsum.photos/seed/p2-3/800/600"
    ]
  },
  {
    id: 3,
    title: "Restaurante Gourmet",
    category: "Landing Page",
    image: "https://picsum.photos/seed/p3/800/600",
    description:
      "Landing page interactiva con sistema de reservas y menú digital.",
    gallery: [
      "https://picsum.photos/seed/p3-1/800/600",
      "https://picsum.photos/seed/p3-2/800/600",
      "https://picsum.photos/seed/p3-3/800/600"
    ]
  },
  {
    id: 4,
    title: "Marca Personal",
    category: "Web Personal",
    image: "https://picsum.photos/seed/p4/800/600",
    description:
      "Portafolio minimalista para fotógrafo profesional.",
    gallery: [
      "https://picsum.photos/seed/p4-1/800/600",
      "https://picsum.photos/seed/p4-2/800/600",
      "https://picsum.photos/seed/p4-3/800/600"
    ]
  },
  {
    id: 5,
    title: "Estudio Jurídico",
    category: "Web Corporativa",
    image: "https://picsum.photos/seed/p5/800/600",
    description:
      "Plataforma profesional para servicios legales.",
    gallery: [
      "https://picsum.photos/seed/p5-1/800/600",
      "https://picsum.photos/seed/p5-2/800/600",
      "https://picsum.photos/seed/p5-3/800/600"
    ]
  },
  {
    id: 6,
    title: "Clínica Estética",
    category: "Landing Page",
    image: "https://picsum.photos/seed/p6/800/600",
    description:
      "Sitio enfocado en conversión para tratamientos de belleza.",
    gallery: [
      "https://picsum.photos/seed/p6-1/800/600",
      "https://picsum.photos/seed/p6-2/800/600",
      "https://picsum.photos/seed/p6-3/800/600"
    ]
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(
      (prev) => (prev + 1) % selectedProject.gallery.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + selectedProject.gallery.length) %
        selectedProject.gallery.length
    );
  };

  return (
    <section id="portafolio" className="py-24 px-6 bg-black">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-beige mb-4">
            Portafolio
          </h2>
          <div className="w-24 h-1 bg-burgundy-light mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col bg-beige/5 border border-beige/20 rounded-[26px] overflow-hidden transition-all duration-500 hover:border-burgundy-light hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
            >

              <div className="aspect-video overflow-hidden relative">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* overlay hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

              </div>

              <div className="p-4 md:p-6 flex flex-col h-full">

                <span className="text-burgundy-light text-[10px] uppercase font-bold tracking-widest mb-2">
                  {project.category}
                </span>

                <h3 className="text-beige text-lg md:text-xl font-serif font-bold mb-2">
                  {project.title}
                </h3>

                <p className="text-beige/70 text-xs md:text-sm leading-relaxed">
                  {project.description}
                </p>

                <button
                  onClick={() => {
                    setSelectedProject(project);
                    setCurrentImageIndex(0);
                  }}
                  className="mt-auto mt-4 text-[10px] uppercase font-semibold tracking-wider border border-beige/30 px-3 py-1 rounded-full text-beige hover:border-burgundy-light hover:text-burgundy-light transition"
                >
                  Ampliar
                </button>

              </div>

            </motion.div>

          ))}
        </div>

      </div>

      <AnimatePresence>

        {selectedProject && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
          >

            <div className="relative w-full max-w-4xl bg-black border border-beige/10 rounded-3xl p-6 md:p-10">

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-beige hover:text-burgundy-light"
              >
                <X />
              </button>

              <div className="grid md:grid-cols-2 gap-8 items-center">

                <div className="relative">

                  <img
                    src={selectedProject.gallery[currentImageIndex]}
                    alt=""
                    className="rounded-2xl w-full"
                  />

                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full"
                  >
                    <ChevronLeft />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full"
                  >
                    <ChevronRight />
                  </button>

                </div>

                <div className="max-w-md">

                  <span className="text-burgundy-light text-xs uppercase font-bold tracking-widest">
                    {selectedProject.category}
                  </span>

                  <h3 className="text-3xl md:text-4xl font-serif text-beige font-bold mt-3 mb-4">
                    {selectedProject.title}
                  </h3>

                  <p className="text-beige/80 text-sm leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  <div className="border border-beige/10 rounded-2xl p-5 bg-beige/5">
                    <h4 className="text-burgundy-light text-[10px] uppercase font-bold tracking-widest mb-2">
                      Detalles del proyecto
                    </h4>

                    <p className="text-beige/60 text-xs leading-relaxed">
                      Proyecto desarrollado con enfoque en experiencia de usuario,
                      diseño moderno y optimización para conversión.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
};

export default Portfolio;