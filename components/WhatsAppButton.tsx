
import React from 'react';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={className} fill="currentColor">
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 221.9-99.6 221.9-222 .1-59.3-23.1-115-65.7-156.8zM223.9 439.6c-38.2 0-73.7-14.7-101.6-40.2l-7.1-4.2-75.7 19.9 20.3-73.4-4.6-7.4C34.3 308.3 24 266.4 24 222.9 24 112.3 114.3 22 223.9 22c57.1 0 110.1 22.3 150.1 62.3s62.3 93 62.3 150.1c0 110.7-90.3 200.2-200.2 200.2zm112.7-175.7l-15.5-7.7c-2.3-1.1-4.1-1.8-5.8 1.8s-6.3 7.7-7.7 9.2c-1.4 1.4-2.8 1.6-5.1 1.1s-10.2-3.8-19.4-12.1c-9.2-8.3-15.2-18.4-17.7-21.8-2.5-3.4-.5-5.3 1.1-6.9.7-1 1.4-2.3 2.1-3.4 1.4-2.3 1.8-3.8 2.6-6.3s.1-4.1-.4-6.3c-.5-2.3-5.1-12.2-7-16.8s-3.8-3.9-5.3-4.1c-1.4-.2-3.1-.2-4.6-.2s-3.8.5-5.8 2.3c-2 1.8-7.7 7.7-7.7 18.8 0 11.1 7.9 21.8 9 23.3 1.1 1.4 15.5 24.1 37.8 33.7 22.3 9.6 22.3 6.4 26.2 6.1 3.9-.3 12.2-5 13.9-9.8s1.7-8.9 1.2-9.8c-.5-1-2.3-1.6-4.6-2.8z"/>
    </svg>
);

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/27829664705"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300 z-40"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;
