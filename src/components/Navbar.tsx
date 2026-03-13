import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from "lucide-react";

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");

  const links = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Servicios", href: "#servicios" },
    { name: "Portafolio", href: "#portafolio" },
    { name: "Demos", href: "#demos" },
    { name: "FAQ", href: "#faq" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (

    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-burgundy/20"
    >

      <div className="text-2xl font-serif font-bold tracking-tighter text-beige">
        SAEL
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-8 text-[10px] uppercase tracking-[0.2em] font-bold">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setActive(link.href)}
            className={`transition-colors ${
              active === link.href ? "text-burgundy-light" : "hover:text-burgundy-light"
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile button */}
      <button
        className="md:hidden text-beige"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute top-full left-0 w-screen bg-black border-b border-beige/10 py-8 flex flex-col items-center space-y-6 md:hidden"
          >

            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActive(link.href);
                  setOpen(false);
                }}
                className={`text-xs uppercase tracking-[0.3em] font-bold transition-colors ${
                  active === link.href ? "text-burgundy-light" : "text-beige"
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* Divider */}
            <div className="w-full h-[1px] bg-beige/40 mt-4" />

            {/* Title */}
            <div className="text-xl font-serif font-bold text-beige tracking-wider">
              SAEL
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
};

export default Navbar;