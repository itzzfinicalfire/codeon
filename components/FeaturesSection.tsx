import React from 'react';
import { FEATURES } from '../constants';
import { ChevronDown } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 bg-nexus-dark relative z-10" id="learn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-white uppercase tracking-widest mb-16">
          Our Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mb-16">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="group flex flex-col items-start">
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-cyan-400" />
              </div>
              
              <h3 className="text-white font-display font-bold text-lg mb-3 uppercase tracking-wider group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">
                See more features
                <ChevronDown className="w-4 h-4" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;