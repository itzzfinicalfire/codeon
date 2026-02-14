import React from 'react';
import { ArrowRight } from 'lucide-react';

const PromoBanner: React.FC = () => {
  return (
    <div className="relative pt-24 lg:pt-32 pb-4 px-4">
      <div className="max-w-5xl mx-auto rounded-xl overflow-hidden relative group cursor-pointer">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        
        <div className="relative z-10 p-4 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
           <div className="flex items-center gap-4">
                <img src="https://ui-avatars.com/api/?name=H&background=random&size=64" alt="Game Logo" className="w-12 h-12 rounded bg-gray-800" />
                <div>
                    <h3 className="text-white font-display font-bold text-xl md:text-2xl uppercase tracking-widest italic">HYTALE</h3>
                    <p className="text-green-400 font-bold text-sm tracking-wide uppercase flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Servers Now Live
                    </p>
                </div>
           </div>
           
           <button className="bg-white text-black hover:bg-gray-200 px-6 py-2 rounded font-bold uppercase text-sm transition-transform group-hover:scale-105 flex items-center gap-2">
             Get Started
             <ArrowRight className="w-4 h-4" />
           </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;