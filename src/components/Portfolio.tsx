import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Area 32",
    category: "Gimnasio",
    image: "area32-2.png",
    description:
      "Web informativa para un gimnasio donde los usuarios pueden conocer el lugar, sus servicios y membresías.",
    details:
      "Incluye ubicación, horarios, panel de rutinas y diseño adaptado a los colores del gimnasio.",
    gallery: ["area32-1.png", "area32-2.png", "area32-3.png"]
  },
  {
    id: 2,
    title: "Dental MS",
    category: "Laboratorio Dental",
    image: "dentalms-1.png",
    description:
      "Sitio web profesional para un protesista dental orientado a odontólogos y clínicas.",
    details:
      "Presenta servicios, tipos de prótesis, historia del profesional y datos de contacto, con estética de laboratorio dental.",
    gallery: ["dentalms-1.png", "dentalms-2.png", "dentalms-3.png"]
  },
  {
    id: 3,
    title: "Valor Salud",
    category: "Asesora de Valor Salud",
    image: "asesora-1.png",
    description:
      "Web creada para una asesora de seguros de salud que busca ampliar su presencia digital.",
    details:
      "Explica los servicios de asesoramiento, beneficios y facilita el contacto con potenciales clientes.",
    gallery: ["asesora-1.png", "asesora-2.png", "asesora-3.png"]
  },
  {
    id: 4,
    title: "Lavaggi",
    category: "Hotel Restaurante",
    image: "lavaggi-1.png",
    description: "Sitio web para un hotel restaurante ubicado en la costa.",
    details:
      "Muestra imágenes del lugar, servicios del hotel y restaurante, con un diseño inspirado en el ambiente de playa.",
    gallery: ["lavaggi-1.png", "lavaggi-2.png", "lavaggi-3.png"]
  },
  {
    id: 5,
    title: "Quinceañera",
    category: "Invitación de XV",
    image: "alay-1.png",
    description: "Invitación digital interactiva para evento de quince años.",
    details:
      "Incluye cronograma del evento, información del lugar, frases especiales y alias para regalos.",
    gallery: ["alay-1.png", "alay-2.png", "alay-3.png"]
  },
  {
    id: 6,
    title: "Italian Design",
    category: "Diseño de Interiores",
    image: "italiandesign-1.png",
    description:
      "Web para una empresa italiana de diseño interior especializada en mobiliario de alta gama.",
    details:
      "Presenta proyectos, servicios y una estética elegante alineada con el diseño italiano.",
    gallery: ["italiandesign-1.png", "italiandesign-2.png", "italiandesign-3.png"]
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
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[26px] cursor-pointer transform-gpu"
              style={{ willChange: "transform, opacity" }}
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}
            >

              <div className="aspect-[3/4] md:aspect-video relative">

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover blur-[2px] group-hover:blur-sm transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">

                  <h3 className="text-beige text-lg md:text-xl font-serif font-bold mb-4 drop-shadow-lg">
                    {project.title}
                  </h3>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                      setCurrentImageIndex(0);
                    }}
                    className="text-[10px] uppercase font-semibold tracking-wider border border-beige/60 px-4 py-2 rounded-full text-beige backdrop-blur-sm hover:border-burgundy-light hover:text-burgundy-light transition"
                  >
                    Ampliar
                  </button>

                </div>

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

            <div className="relative w-full max-w-4xl bg-black border border-beige/10 rounded-3xl p-6 md:p-10 max-h-[90vh] overflow-y-auto">

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 md:top-5 md:right-5 z-50 text-beige hover:text-burgundy-light transition"
              >
                <X size={26} />
              </button>

              <div className="grid md:grid-cols-2 gap-8 items-center">

                <div className="relative">

                  <img
                    src={selectedProject.gallery[currentImageIndex]}
                    alt=""
                    loading="lazy"
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
                      {selectedProject.details}
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