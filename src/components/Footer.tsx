import React from 'react';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

const TiktokIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-black pt-12 pb-6 px-6 border-t border-beige/10">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-6">

          {/* Brand */}
          <div className="space-y-4">

            <h2 className="text-3xl font-serif font-bold text-beige tracking-tighter">
              SAEL
            </h2>

            <p className="text-beige/50 text-[11px] leading-relaxed">
              Desarrollo de páginas web profesionales para negocios y emprendedores que buscan fortalecer su presencia digital.
            </p>

          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-beige font-bold text-[11px] uppercase tracking-[0.2em] mb-4">
              Navegación
            </h4>

            <ul className="flex flex-wrap gap-4 md:flex-col md:space-y-2">

              <li>
                <a href="#inicio" className="text-beige/50 text-[10px] uppercase tracking-widest hover:text-burgundy-light transition-colors">
                  Inicio
                </a>
              </li>

              <li>
                <a href="#sobre-mi" className="text-beige/50 text-[10px] uppercase tracking-widest hover:text-burgundy-light transition-colors">
                  Sobre Mí
                </a>
              </li>

              <li>
                <a href="#servicios" className="text-beige/50 text-[10px] uppercase tracking-widest hover:text-burgundy-light transition-colors">
                  Servicios
                </a>
              </li>

              <li>
                <a href="#portafolio" className="text-beige/50 text-[10px] uppercase tracking-widest hover:text-burgundy-light transition-colors">
                  Portafolio
                </a>
              </li>

              <li>
                <a href="#contacto" className="text-beige/50 text-[10px] uppercase tracking-widest hover:text-burgundy-light transition-colors">
                  Contacto
                </a>
              </li>

            </ul>
          </div>

          {/* Contact + Social */}
          <div className="grid grid-cols-2 gap-6 md:block md:space-y-6">

            {/* Contact */}
            <div>
              <h4 className="text-beige font-bold text-[11px] uppercase tracking-[0.2em] mb-4">
                Contacto
              </h4>

              <ul className="space-y-2">

                <li className="flex items-center space-x-3 text-beige/50 text-[10px] uppercase tracking-widest">
                  <MapPin className="w-3 h-3 text-burgundy-light" />
                  <span>Buenos Aires, Argentina</span>
                </li>

                <li className="flex items-center space-x-3 text-beige/50 text-[10px] uppercase tracking-widest">
                  <Mail className="w-3 h-3 text-burgundy-light" />
                  <span>ssamaniego065@gmail.com</span>
                </li>

                <li className="flex items-center space-x-3 text-beige/50 text-[10px] uppercase tracking-widest">
                  <Phone className="w-3 h-3 text-burgundy-light" />
                  <span>+54 9 11 6959-5853</span>
                </li>

              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-beige font-bold text-[11px] uppercase tracking-[0.2em] mb-3">
                Redes Sociales
              </h4>

              <div className="flex space-x-4">

                <a
                  href="https://instagram.com/santy.samaniego"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-beige/5 border border-beige/10 flex items-center justify-center text-beige hover:border-burgundy-light hover:text-burgundy-light transition-all transform hover:scale-110"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-beige/5 border border-beige/10 flex items-center justify-center text-beige hover:border-burgundy-light hover:text-burgundy-light transition-all transform hover:scale-110"
                >
                  <TiktokIcon />
                </a>

              </div>
            </div>

          </div>

          {/* Map */}
          <div className="flex flex-col h-full">

            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-beige/50 mb-3">
              <MapPin className="w-3 h-3 text-burgundy-light" />
              <span>Buenos Aires, Argentina</span>
            </div>

            <div className="flex-1 rounded-2xl overflow-hidden border border-beige/10 grayscale opacity-50 hover:opacity-100 transition-opacity duration-700">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.23944506!2d-58.50333838234612!3d-34.61582377042884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef907a3%3A0x5a602f7076999827!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1710271234567!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="pt-4 border-t border-beige/10 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-[8px] text-beige/30 uppercase tracking-[0.3em] font-bold">
            © {new Date().getFullYear()} SAEL. Todos los derechos reservados.
          </p>

          <p className="text-[8px] text-beige/30 uppercase tracking-[0.3em] font-bold flex items-center">
            Designed By

            <a
              href="https://instagram.com/santy.samaniego"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-burgundy-light ml-2 hover:underline"
            >
              <Instagram className="w-3 h-3 mr-1" />
              santy.samaniego
            </a>

          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;