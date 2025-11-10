
import React, { useState } from 'react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  { question: 'What industries do you primarily serve?', answer: 'We specialize in solutions for Water & Waste-Water, Beverage, Renewable Resources, Mining, Energy, Chemical, and Heat Transfer sectors.' },
  { question: 'Can you handle a project from concept to completion?', answer: 'Absolutely. We offer full turnkey solutions, from initial feasibility studies and design, through to manufacturing, installation, and commissioning.' },
  { question: 'Do you offer after-sales support and maintenance?', answer: 'Yes, we provide comprehensive after-sales support, including maintenance services, spare parts, and operational training to ensure the longevity and efficiency of your plant.' },
  { question: 'How do you ensure the quality of your solutions?', answer: 'We adhere to strict quality control standards and partner with leading Original Equipment Manufacturers (OEMs). Our motto is to "approach each process with caution" to ensure reliability and safety.' },
];

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
);

const FAQAccordionItem: React.FC<{ item: FAQItem, isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button onClick={onClick} className="w-full flex justify-between items-center text-left py-5 px-1 focus:outline-none">
        <span className="text-lg font-semibold text-text-main dark:text-white">{item.question}</span>
        <ChevronDownIcon className={`w-6 h-6 text-primary dark:text-secondary transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="pb-5 pr-4 text-gray-600 dark:text-gray-400 leading-relaxed">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-bg-light dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <FAQAccordionItem 
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
