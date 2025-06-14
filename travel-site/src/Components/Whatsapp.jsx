import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppChat = () => {
  const phoneNumber = '919207284780'; 
  const message = 'Hello, I would like to talk to an expert.';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-50"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={24} color="#25D366"/>
    </a>
  );
};

export default WhatsAppChat;
