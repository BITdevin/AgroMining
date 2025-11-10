
import React from 'react';

const AboutSection: React.FC = () => {
  const timelineEvents = [
    { year: '2000', title: 'Company Founded', description: 'AgroMining Solutions was established with a vision to provide specialized process engineering.' },
    { year: '2008', title: 'OEM Partnerships', description: 'Forged key partnerships with original equipment manufacturers to enhance our solution offerings.' },
    { year: '2015', title: 'Expansion into Renewables', description: 'Entered the renewable resources sector, developing innovative biofuel processing plants.' },
    { year: 'Present', title: '35+ Years Combined Expertise', description: 'Our team now holds over three decades of combined experience, delivering excellence across industries.' },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-4">Pioneering Progress, Engineering Excellence</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              With a foundation built on precision and innovation, we have grown to become a trusted partner in industrial processing. Our commitment is to deliver sustainable and efficient solutions tailored to our clients' unique challenges.
            </p>
            <div className="bg-bg-light dark:bg-gray-800 p-6 rounded-lg border-l-4 border-accent">
              <p className="text-xl italic text-text-main dark:text-gray-300 font-semibold">"Our motto is to approach each process with caution."</p>
            </div>
          </div>

          <div>
            <div className="relative border-l-2 border-primary dark:border-secondary pl-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className="mb-10 ml-4">
                  <div className="absolute w-4 h-4 bg-primary rounded-full mt-1.5 -left-2.5 border border-white dark:border-gray-900 dark:bg-secondary"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">{event.year}</time>
                  <h3 className="text-lg font-semibold text-text-main dark:text-white">{event.title}</h3>
                  <p className="text-base font-normal text-gray-600 dark:text-gray-400">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
