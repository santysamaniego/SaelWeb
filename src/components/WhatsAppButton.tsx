import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = "1169595853";
  const message = "Hola SAEL, me gustaría realizar una consulta sobre tus servicios web.";

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[90] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/20 transition-all"
    >
      <MessageCircle size={32} fill="currentColor" />
      <span className="absolute -top-12 right-0 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg uppercase tracking-tighter">
        ¡Hablemos!
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
