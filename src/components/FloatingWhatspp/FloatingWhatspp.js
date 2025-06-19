import React from 'react';
import { Icon } from '@iconify/react';
import whatsappIcon from '@iconify-icons/mdi/whatsapp';
import './FloatingWhatspp.css';

const FloatingWhatsApp = () => {
  const phoneNumber = '+2348136190222'; // your number here

  return (
    <a
      href={`https://wa.me/${phoneNumber.replace('+', '')}`}
      className="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <Icon icon={whatsappIcon} className="whatsapp-icon" />
    </a>
  );
};

export default FloatingWhatsApp;
