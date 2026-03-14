import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "¿Por qué elegirnos para desarrollar tu página web?",
    answer: "Porque cada proyecto se realiza de forma personalizada, con un diseño profesional pensado para representar tu negocio y ayudarte a llegar a más clientes."
  },
  {
    question: "¿Cuánto cuesta crear una página web?",
    answer: "El costo depende del tipo de sitio, las funcionalidades y el nivel de personalización. En algunos casos también se pueden contemplar acuerdos flexibles o colaboraciones según el proyecto."
  },
  {
    question: "¿Cuánto tiempo tarda en estar lista la web?",
    answer: "La mayoría de las páginas informativas pueden estar listas entre 1 y 4 días. El tiempo puede variar según la complejidad del proyecto y que toda la información necesaria esté disponible a tiempo."
  },
  {
    question: "¿Puedo solicitar cambios después de publicada la web?",
    answer: "Sí. Ofrezco un servicio de mantenimiento mensual que permite realizar los cambios o actualizaciones que necesites. Si durante un mes no se realizan modificaciones, no se genera ningún costo."
  },
  {
    question: "¿Qué pasa si ya tengo una web o un diseño previo?",
    answer: "Se puede crear una nueva web desde cero respetando tu diseño o utilizando la información del sitio actual. Si ya tenés dominio, también se realiza el traspaso a la nueva página."
  },
  {
    question: "¿Quién se encarga del dominio y el hosting?",
    answer: "El dominio es propiedad del cliente, por lo que puede comprarlo directamente o recibir asesoramiento para hacerlo. El hosting y la puesta online del sitio me encargo de gestionarlos."
  },
  {
    question: "¿Qué necesito para comenzar el proyecto?",
    answer: "Principalmente la información del negocio, imágenes si las hay y una idea general de lo que se quiere mostrar en la web. Con eso ya se puede iniciar el desarrollo."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-beige mb-4">Preguntas Frecuentes</h2>
          <div className="w-24 h-1 bg-burgundy-light mx-auto" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-beige/10 rounded-3xl overflow-hidden bg-beige/5"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-center hover:bg-beige/5 transition-colors group"
              >
                <div className="w-5 h-5" /> {/* Spacer to balance the icon */}
                <span className="text-sm md:text-base font-bold text-beige uppercase tracking-widest leading-relaxed flex-1 px-4">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <Minus className="text-burgundy-light w-5 h-5 flex-shrink-0" />
                ) : (
                  <Plus className="text-burgundy-light w-5 h-5 flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-10 pt-4 text-center">
                      <p className="text-beige/60 text-xs md:text-sm font-light uppercase tracking-widest leading-relaxed max-w-2xl mx-auto">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
