import React from 'react';
import { WHY_CHOOSE_US_ITEMS } from '../constants';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-nexus-dark relative overflow-hidden">
      {WHY_CHOOSE_US_ITEMS.map((item, index) => (
        <div key={index} className={`relative py-20 border-t border-white/5 ${index % 2 !== 0 ? 'bg-[#0a101d]' : 'bg-nexus-dark'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <div className="w-12 h-1 bg-cyan-500 mb-6"></div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white uppercase leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>

              {/* Image Content */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className={`absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="relative overflow-hidden rounded-xl border border-white/10 aspect-video shadow-2xl">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-nexus-dark/40 to-transparent"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WhyChooseUs;