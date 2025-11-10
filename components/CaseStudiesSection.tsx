
import React, { useState } from 'react';
import { CaseStudy } from '../types';

const caseStudiesData: CaseStudy[] = [
  { title: 'Wastewater Reclamation Plant', category: 'Water Treatment', description: 'A state-of-the-art facility recovering 10 million liters of water daily for industrial reuse, significantly reducing environmental impact.', image: 'https://picsum.photos/600/400?random=4' },
  { title: 'Bio-Ethanol Production Facility', category: 'Renewable Resources', description: 'Designed and commissioned a plant converting agricultural waste into 50,000 liters of bio-ethanol per day, promoting a circular economy.', image: 'https://picsum.photos/600/400?random=5' },
  { title: 'Copper Extraction Circuit Upgrade', category: 'Mining & Energy', description: 'Modernized a copper solvent extraction circuit, increasing yield by 15% and reducing solvent loss, boosting profitability.', image: 'https://picsum.photos/600/400?random=6' },
];

const ArrowLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
);
const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
);

const CaseStudiesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? caseStudiesData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === caseStudiesData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white">Our Success Stories</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">See how we've helped businesses like yours achieve their operational goals.</p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-2xl">
            <div className="relative h-[400px] md:h-[500px]">
                {caseStudiesData.map((study, index) => (
                    <div key={index} className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                        <img src={study.image} alt={study.title} className="w-full h-full object-cover" loading="lazy"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
                            <span className="text-sm font-bold uppercase tracking-wider text-accent">{study.category}</span>
                            <h3 className="text-2xl md:text-3xl font-bold mt-2">{study.title}</h3>
                            <p className="mt-2 text-gray-300 hidden md:block">{study.description}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>
          
          <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 p-3 bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800 rounded-full shadow-md text-text-main dark:text-white transition">
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 p-3 bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800 rounded-full shadow-md text-text-main dark:text-white transition">
            <ArrowRightIcon className="w-6 h-6" />
          </button>

        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
