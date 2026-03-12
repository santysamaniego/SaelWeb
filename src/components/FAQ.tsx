import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "¿Cuánto tiempo toma desarrollar una web?",
    answer: "Depende de la complejidad. Una Landing Page puede estar lista en 1 semana, mientras que una web corporativa o profesional puede tomar entre 2 y 4 semanas."
  },
  {
    question: "¿Necesito tener el contenido listo antes de empezar?",
    answer: "Es ideal, pero no obligatorio. Puedo ayudarte a estructurar la información y sugerir textos que conviertan mejor."
  },
  {
    question: "¿Las webs son autogestionables?",
    answer: "Sí, utilizo tecnologías que permiten que puedas actualizar textos e imágenes de manera sencilla si así lo requieres."
  },
  {
    question: "¿Qué pasa si ya tengo un diseño previo?",
    answer: "¡Perfecto! Puedo encargarme únicamente del desarrollo respetando fielmente tu diseño o sugiriendo mejoras de UX/UI."
  },
  {
    question: "¿Ofreces mantenimiento post-lanzamiento?",
    answer: "Sí, ofrezco planes de mantenimiento para asegurar que tu web esté siempre actualizada, segura y funcionando al 100%."
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
