import React from 'react';
import { BEYOND_GAMING_ITEMS } from '../constants';

const BeyondGamingSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#050b14] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl font-bold text-white uppercase tracking-widest mb-6">
            GO BEYOND GAMING
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Codoen Hosting offers more than just Minecraft hosting and gaming servers — We also have Dedicated Servers for VPS, Web, Discord Bots, and Mumble! With our unbeatable customer support and global reach, we can offer server hosting for any need.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {BEYOND_GAMING_ITEMS.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="bg-[#0f1623] border border-white/10 rounded-xl overflow-hidden relative aspect-[4/3] mb-4 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-cyan-900/20">
                <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1623] to-transparent"></div>
                <div className="absolute bottom-4 left-0 w-full flex justify-center">
                    <div className="w-12 h-12 bg-nexus-dark/80 backdrop-blur rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform group-hover:border-cyan-400">
                        <item.icon className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors" />
                    </div>
                </div>
              </div>
              <h3 className="text-center font-display font-bold text-white uppercase tracking-wider text-sm group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondGamingSection;