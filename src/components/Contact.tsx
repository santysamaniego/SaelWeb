import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Mail, MapPin, Send, Phone } from 'lucide-react';

const Contact = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "1169595853";

    const text = `Hola SAEL, mi nombre es ${formData.name}. 
Mi teléfono es ${formData.phone}. 
Mi mensaje: ${formData.message}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section id="contacto" ref={containerRef} className="py-20 px-6 bg-black">

      <motion.div
        animate={{
          filter: isInView ? "blur(0px)" : "blur(20px)",
          opacity: isInView ? 1 : 0
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >

        {/* Title */}

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-beige mb-4">
            Hablemos
          </h2>

          <div className="w-24 h-1 bg-burgundy-light mx-auto" />
        </div>

        {/* Layout */}

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left */}

          <div className="space-y-10">

            <div>
              <h3 className="text-3xl font-serif font-bold text-beige mb-4">
                ¿Tienes un proyecto en mente?
              </h3>

              <p className="text-beige/70 text-sm leading-relaxed uppercase tracking-widest font-light mb-6">
                Estoy listo para ayudarte a llevar tu visión al siguiente nivel.
                Cuéntame sobre tu idea y busquemos la mejor forma de hacerla
                realidad.
              </p>

              {/* Contact info */}

              <div className="space-y-5">

                <div className="flex items-center space-x-4 group">

                  <div className="w-11 h-11 rounded-full bg-beige/5 flex items-center justify-center border border-beige/30 group-hover:border-burgundy-light transition-colors">
                    <Mail className="text-burgundy-light w-5 h-5" />
                  </div>

                  <div>
                    <p className="text-[8px] uppercase tracking-widest text-beige/50 font-bold">
                      Email
                    </p>

                    <p className="text-beige text-xs font-bold tracking-widest">
                      ssamaniego065@gmail.com
                    </p>
                  </div>

                </div>

                <div className="flex items-center space-x-4 group">

                  <div className="w-11 h-11 rounded-full bg-beige/5 flex items-center justify-center border border-beige/30 group-hover:border-burgundy-light transition-colors">
                    <Phone className="text-burgundy-light w-5 h-5" />
                  </div>

                  <div>
                    <p className="text-[8px] uppercase tracking-widest text-beige/50 font-bold">
                      Teléfono
                    </p>

                    <p className="text-beige text-xs font-bold tracking-widest">
                      +54 9 11 6959-5853
                    </p>
                  </div>

                </div>

                <div className="flex items-center space-x-4 group">

                  <div className="w-11 h-11 rounded-full bg-beige/5 flex items-center justify-center border border-beige/30 group-hover:border-burgundy-light transition-colors">
                    <MapPin className="text-burgundy-light w-5 h-5" />
                  </div>

                  <div>
                    <p className="text-[8px] uppercase tracking-widest text-beige/50 font-bold">
                      Ubicación
                    </p>

                    <p className="text-beige text-xs font-bold tracking-widest">
                      Buenos Aires, Argentina
                    </p>
                  </div>

                </div>

              </div>
            </div>

            {/* Map */}

            <div className="w-full h-44 rounded-3xl overflow-hidden border border-beige/30 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.23944506!2d-58.50333838234612!3d-34.61582377042884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef907a3%3A0x5a602f7076999827!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1710271234567!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />

            </div>

          </div>

          {/* Form */}

          <div className="bg-beige/5 p-6 md:p-8 rounded-[36px] border border-beige/30">

            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="grid md:grid-cols-2 gap-4">

                <div className="space-y-1">
                  <label className="text-[8px] uppercase tracking-widest text-beige/50 font-bold ml-3">
                    Nombre
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    className="w-full bg-black border border-beige/40 rounded-full px-5 py-3 text-xs text-beige focus:border-burgundy-light outline-none transition-colors placeholder:text-beige/20"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[8px] uppercase tracking-widest text-beige/50 font-bold ml-3">
                    Teléfono
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+54..."
                    required
                    className="w-full bg-black border border-beige/40 rounded-full px-5 py-3 text-xs text-beige focus:border-burgundy-light outline-none transition-colors placeholder:text-beige/20"
                  />
                </div>

              </div>

              <div className="space-y-1">
                <label className="text-[8px] uppercase tracking-widest text-beige/50 font-bold ml-3">
                  Mensaje
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                  className="w-full bg-black border border-beige/40 rounded-[28px] px-5 py-3 text-xs text-beige focus:border-burgundy-light outline-none transition-colors placeholder:text-beige/20 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-burgundy-light text-beige rounded-full text-xs font-bold uppercase tracking-widest hover:bg-burgundy transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2"
              >

                <span>Enviar Mensaje</span>

                <Send className="w-4 h-4" />

              </button>

            </form>

          </div>

        </div>

      </motion.div>
    </section>
  );
};

export default Contact;