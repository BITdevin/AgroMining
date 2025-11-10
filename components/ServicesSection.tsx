
import React, { useState } from 'react';
import { Service } from '../types';

const WaterIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const BeverageIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const RenewableIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);
const MiningIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);
const HeatIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014A8.003 8.003 0 0122 12c0 3.771-2.5 7-6.343 6.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.001 12c.823 0 1.5.677 1.5 1.5s-.677 1.5-1.5 1.5-1.5-.677-1.5-1.5z" /></svg>
);

const servicesData: Service[] = [
  { id: 'water', name: 'Water / Waste-Water', icon: <WaterIcon className="w-8 h-8 mr-4" />, description: 'Purification, filtration, and treatment systems.', details: 'We provide end-to-end solutions for municipal and industrial water and wastewater treatment, including reverse osmosis, ultrafiltration, and biological treatment processes. Our systems are designed for maximum efficiency and compliance with environmental regulations.' },
  { id: 'beverage', name: 'Beverage', icon: <BeverageIcon className="w-8 h-8 mr-4" />, description: 'Processing and bottling lines for various beverages.', details: 'From pasteurization and carbonation to filling and packaging, we engineer complete lines for juices, soft drinks, dairy, and alcoholic beverages. Our focus is on product quality, hygiene, and operational efficiency.' },
  { id: 'renewable', name: 'Renewable Resources', icon: <RenewableIcon className="w-8 h-8 mr-4" />, description: 'Bio-fuel and biomass processing solutions.', details: 'We specialize in the design and implementation of plants for producing biofuels like ethanol and biodiesel from various feedstocks. Our expertise covers fermentation, distillation, and biomass conversion technologies.' },
  { id: 'mining', name: 'Mining / Energy / Chemical', icon: <MiningIcon className="w-8 h-8 mr-4" />, description: 'Solutions for extraction, refining, and processing.', details: 'We offer robust solutions for mineral processing, chemical synthesis, and energy production. This includes solvent extraction, electro-winning, reactor design, and process optimization for harsh industrial environments.' },
  { id: 'heat', name: 'Heat Transfer', icon: <HeatIcon className="w-8 h-8 mr-4" />, description: 'Efficient heat exchangers and thermal systems.', details: 'We design and supply a wide range of heat transfer equipment, including plate, shell & tube, and spiral heat exchangers. Our thermal solutions are optimized for energy recovery, process heating, and cooling applications.' },
];

const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(servicesData[0].id);
  const activeService = servicesData.find(s => s.id === activeTab);

  return (
    <section id="services" className="py-16 md:py-24 bg-bg-light dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white">Our Fields of Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">We deliver tailored engineering solutions across a wide range of critical industries.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          <div className="md:w-1/3 lg:w-1/4">
            <ul className="space-y-2">
              {servicesData.map(service => (
                <li key={service.id}>
                  <button
                    onClick={() => setActiveTab(service.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center ${activeTab === service.id ? 'bg-primary text-white shadow-lg' : 'bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
                  >
                    {service.icon}
                    <span className="font-semibold">{service.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-2/3 lg:w-3/4">
            {activeService && (
              <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-xl animate-fade-in">
                <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">{activeService.name}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{activeService.description}</p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{activeService.details}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
