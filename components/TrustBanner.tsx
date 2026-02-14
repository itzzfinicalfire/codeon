import React from 'react';
import { Star } from 'lucide-react';

const TrustBanner: React.FC = () => {
  return (
    <div className="relative z-20 -mt-10 mb-10 max-w-5xl mx-auto px-4">
      <div className="bg-[#0f1623] border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>

        <div className="text-center relative z-10">
          <div className="inline-block bg-white/5 border border-white/10 rounded px-4 py-2 mb-6 transform -skew-x-12">
            <span className="block transform skew-x-12 text-lg md:text-xl font-display font-bold">
              <span className="text-white">YOUR </span>
              <span className="text-indigo-400">ULTIMATE GAMING </span>
              <span className="text-white">PARTNER™</span>
            </span>
          </div>
          
          <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto leading-relaxed mb-8">
            We've been providing Minecraft server hosting services, as well as server hosting for other games since 2025. 
            We support hosting for all Minecraft versions and are dedicated to ensuring your experience is fully supported.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-2">
                <span className="text-white font-bold text-sm">EXCELLENT</span>
                <span className="text-white/60 text-xs">4.9/5.0</span>
                <div className="flex">
                    {[1,2,3,4,5].map(i => <div key={i} className="w-5 h-5 bg-green-500 flex items-center justify-center ml-1"><Star className="w-3 h-3 text-white fill-current" /></div>)}
                </div>
                <span className="text-white/60 text-xs ml-2">100+ Reviews</span>
            </div>

            <div className="flex gap-4">
                <button className="bg-white text-nexus-dark hover:bg-gray-200 px-6 py-2 rounded font-bold text-xs uppercase tracking-wider transition-colors">
                    Learn More
                </button>
                <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-indigo-900/50">
                    See All Games
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBanner;