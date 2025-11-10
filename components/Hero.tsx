
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative text-white bg-gradient-to-r from-primary to-secondary">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative container mx-auto px-6 py-24 md:py-32 lg:py-40 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
          Engineered Processing Solutions for Industry
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 animate-fade-in-up">
          Over 35 years of expertise in delivering robust, efficient, and innovative solutions across diverse sectors.
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-accent hover:bg-orange-600 text-white font-bold text-lg py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 animate-fade-in-up"
        >
          Get a Free Quote
        </a>
      </div>
    </section>
  );
};

export default Hero;
