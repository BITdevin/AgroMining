
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-text-main dark:bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AgroMining</h3>
            <p className="text-gray-400">
              Engineering innovative and robust processing solutions for a sustainable industrial future.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
            <p className="text-gray-400">Pretoria, South Africa</p>
            <p className="text-gray-400">info@agromining.co.za</p>
            <p className="text-gray-400">+27 82 966 4705</p>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} AgroMining Solutions. All Rights Reserved. Website by bizwhatwhat, a brand of Infinityguard Technologies.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
