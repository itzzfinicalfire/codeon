import React from 'react';

const InfoSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#080c14] border-t border-white/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase tracking-wider leading-tight mb-8">
              Server Hosting for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Minecraft & Top Games</span> <br />
              Made Easy
            </h2>

            <div className="space-y-6 text-gray-400 leading-relaxed text-sm md:text-base">
              <p>
                We've been in the server hosting world for over a decade, committed to making sure that hosting your own server is easy, fun, and affordable! Since we started, we've branched out and now offer server hosting for 100+ other titles and counting.
              </p>
              <p>
                Our customized gaming server control panel makes changing server settings and installing plugins a breeze. But if you're ever feeling stuck, see our <a href="#" className="text-cyan-400 hover:underline decoration-cyan-400/30 underline-offset-4">library of tutorials</a> or send in a support ticket and expect a response within about 15 minutes.
              </p>
            </div>
          </div>

          <div className="relative group perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <img 
              src="https://i.postimg.cc/k4jzrJkR/image.png" 
              alt="Isometric Game Art" 
              className="relative w-full rounded-2xl shadow-2xl border border-white/10 group-hover:scale-[1.02] transition-transform duration-500 bg-nexus-card/50 backdrop-blur-sm" 
            />
            {/* Overlay graphic */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-600/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;