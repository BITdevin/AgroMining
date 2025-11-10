
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-bg-light dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white">Get in Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Ready to start your next project? Contact us for a free consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-text-main dark:text-white mb-6">Send us a Message</h3>
            {/* Formspree/Netlify integration placeholder */}
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
              </div>
               <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
                <input type="tel" name="phone" id="phone" className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Service of Interest</label>
                <select id="service" name="service" className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-50 dark:bg-gray-600 border-gray-300 dark:border-gray-500 focus:outline-none focus:ring-primary focus:border-primary rounded-md">
                    <option>Water / Waste-Water</option>
                    <option>Beverage</option>
                    <option>Renewable Resources</option>
                    <option>Mining / Energy / Chemical</option>
                    <option>Heat Transfer</option>
                    <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-primary hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-text-main dark:text-white mb-4">Contact Details</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2"><strong>Phone / WhatsApp:</strong> <a href="tel:+2782 373 7049" className="text-primary dark:text-secondary hover:underline">+27 82 373 7049</a></p>
                <p className="text-gray-600 dark:text-gray-300 mb-2"><strong>Email:</strong> <a href="mailto:info@agromining.co.za" className="text-primary dark:text-secondary hover:underline">info@agromining.co.za</a></p>
                <p className="text-gray-600 dark:text-gray-300"><strong>Location:</strong> Pretoria, South Africa</p>
            </div>
            <div className="h-80 bg-gray-300 dark:bg-gray-600 rounded-lg shadow-lg overflow-hidden">
              <iframe
                title="Google Map of Pretoria"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230048.83533928135!2d28.09497906934444!3d-25.75333796859333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95619cbec869fb%3A0x5f3405cde5afa331!2sPretoria!5e0!3m2!1sen!2sza!4v1689252612345!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
