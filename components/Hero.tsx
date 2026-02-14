import React from 'react';
import { CheckCircle2, ArrowRight, Server } from 'lucide-react';
import { HERO_POINTS } from '../constants';

interface HeroProps {
    onNavigate?: (view: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleCreateServer = () => {
      if (onNavigate) {
          onNavigate('minecraft');
      }
  };

  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-5 z-0"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-600/20 blur-[120px] rounded-full z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-600/10 blur-[100px] rounded-full z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
              Premium Performance
            </div>
            
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">MINECRAFT</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                SERVER HOSTING
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-lg font-light">
              And 100+ Top Online Games ready to deploy instantly.
            </p>

            <div className="space-y-3">
              {HERO_POINTS.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-nexus-success flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm sm:text-base font-medium">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={handleCreateServer}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl shadow-indigo-900/40 hover:shadow-indigo-600/40 hover:-translate-y-1 transition-all duration-200 flex items-center gap-2 group"
              >
                CREATE SERVER
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-lg font-bold text-lg text-white border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2">
                VIEW LOCATIONS
              </button>
            </div>
          </div>

          {/* Right Image/Graphic */}
          <div className="relative hidden lg:block">
             <div className="relative w-full aspect-square max-w-[600px] mx-auto perspective-1000">
                {/* Decorative floating elements */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-cyan-500/20 rounded-xl backdrop-blur-md border border-cyan-500/30 animate-bounce delay-100 z-20 flex items-center justify-center">
                    <Server className="text-cyan-400 w-10 h-10" />
                </div>
                <div className="absolute bottom-20 left-0 w-24 h-24 bg-purple-500/20 rounded-xl backdrop-blur-md border border-purple-500/30 animate-pulse delay-700 z-20 flex items-center justify-center">
                    <div className="text-purple-300 font-display font-bold text-2xl">24/7</div>
                </div>

                {/* Main Isometric Image Placeholder */}
                <img 
                    src="https://i.postimg.cc/c4vL9qZx/Chat-GPT-Image-Feb-13-2026-10-24-06-AM.png" 
                    alt="Server Rack Illustration" 
                    className="w-full h-full object-cover rounded-3xl shadow-2xl shadow-cyan-900/20 border-2 border-white/5 mask-image-gradient"
                    style={{
                        clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)'
                    }}
                />
                
                {/* Overlay glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-nexus-dark/80 via-transparent to-transparent pointer-events-none rounded-3xl"></div>
             </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500 hidden sm:block">
            <ArrowRight className="w-6 h-6 rotate-90" />
        </div>
      </div>
    </div>
  );
};

export default Hero;