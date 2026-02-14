import React from 'react';

const StartHereBanner: React.FC = () => {
  return (
    <section className="py-10 bg-[#050b14] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="relative h-32 md:h-40 rounded-2xl overflow-hidden flex items-center justify-center group cursor-pointer border border-white/10">
          
          {/* Background with pixel art style blocks if possible, or a nice gradient/image */}
          <div className="absolute inset-0 bg-[#0f1623]">
             {/* Abstract particle/block background */}
             <div className="absolute top-0 left-0 w-full h-full opacity-20" 
                style={{
                    backgroundImage: 'radial-gradient(circle, #4f46e5 2px, transparent 2.5px)',
                    backgroundSize: '24px 24px'
                }}>
             </div>
             <div className="absolute right-10 bottom-0 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full"></div>
             <div className="absolute left-10 top-0 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full"></div>
          </div>

          {/* Floating Cubes (CSS only) */}
          <div className="absolute left-[10%] top-[20%] w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rotate-12 opacity-80 animate-bounce delay-100 hidden sm:block"></div>
          <div className="absolute right-[15%] bottom-[30%] w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-600 -rotate-12 opacity-80 animate-bounce delay-700 hidden sm:block"></div>
          <div className="absolute left-[20%] bottom-[10%] w-4 h-4 bg-yellow-400 rotate-45 opacity-60 animate-pulse hidden sm:block"></div>

          {/* Text Content */}
          <div className="text-center relative z-20">
            <h2 className="font-display text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] tracking-widest uppercase hover:scale-105 transition-transform duration-300">
              START HERE
            </h2>
          </div>
          
          {/* Scanline effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-2 w-full animate-[scan_2s_ease-in-out_infinite] pointer-events-none"></div>
        </div>
      </div>
      <style>{`
        @keyframes scan {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(500%); }
        }
      `}</style>
    </section>
  );
};

export default StartHereBanner;