
import React, { useState, useEffect } from 'react';
import { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
  { quote: "AgroMining's attention to detail and robust engineering saved us 20% on operational costs. Truly a game-changer for our plant.", author: 'John Dlamini', company: 'Mining Operations Manager', image: 'https://picsum.photos/100/100?random=1' },
  { quote: "The efficiency of our new water treatment facility has exceeded all expectations. The team was professional and delivered on time.", author: 'Sarah Chen', company: 'Municipal Waterworks Director', image: 'https://picsum.photos/100/100?random=2' },
  { quote: "From concept to commissioning, their team provided unparalleled support. Our beverage production line has never been more reliable.", author: 'Pieter van der Merwe', company: 'Beverage Production Head', image: 'https://picsum.photos/100/100?random=3' },
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="py-16 md:py-24 bg-bg-light dark:bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-12">What Our Partners Say</h2>
        <div className="relative max-w-3xl mx-auto h-64">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <img src={testimonial.image} alt={testimonial.author} className="w-20 h-20 rounded-full mb-4 object-cover" loading="lazy" />
                <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 mb-4">
                  “{testimonial.quote}”
                </blockquote>
                <cite className="font-semibold text-text-main dark:text-white not-italic">{testimonial.author}</cite>
                <p className="text-gray-500 dark:text-gray-400">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
