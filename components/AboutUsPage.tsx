import React from 'react';
import StartHereBanner from './StartHereBanner';
import { Target, Server, Users, Heart, Handshake, ShieldCheck, ArrowRight } from 'lucide-react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-[#050b14] min-h-screen pt-20 font-sans text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-white/5 pb-24 pt-12">
         {/* Background glow/pattern */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[100px] rounded-full z-0 pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-cyan-600/5 blur-[80px] rounded-full z-0 pointer-events-none"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
               <div className="flex-1 space-y-6">
                  <div className="inline-block px-3 py-1 rounded bg-blue-900/30 border border-blue-500/30 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-2">
                      Est. 2024
                  </div>
                  <h1 className="font-display font-black text-4xl lg:text-6xl uppercase leading-none">
                     ABOUT <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">CODOEN HOSTING</span>
                  </h1>
                  <div className="space-y-4 text-gray-400 text-sm leading-relaxed max-w-xl">
                      <p>
                         At Codoen Hosting, we are dedicated to delivering exceptional server hosting solutions tailored to the diverse needs of gamers, content creators, developers, and studios. Established in 2024, our journey began with a passion for Minecraft and a commitment to revolutionize the hosting experience.
                      </p>
                      <p>
                         Frustrated by subpar customer support and prolonged wait times from existing providers, we set out to create a platform where customers would receive prompt, knowledgeable, and comprehensive assistance.
                      </p>
                      <p>
                         With over a decade of combined experience and thousands of servers hosted, we look to continue setting the standard for server hosting and multiplayer support.
                      </p>
                  </div>
               </div>
               <div className="flex-1 flex justify-center perspective-1000">
                  {/* Character graphic placeholder */}
                  <div className="relative w-80 h-80 group">
                      <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/30 transition-colors duration-500"></div>
                      
                      {/* Central Image */}
                      <div className="relative z-10 w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                          <img 
                            src="https://i.postimg.cc/QMb5qLkB/Chat-GPT-Image-Feb-13-2026-09-51-24-AM-removebg-preview.png" 
                            alt="Codoen Team" 
                            className="w-full h-full object-cover rounded-2xl shadow-2xl border border-white/10 mask-image-gradient"
                            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}
                          />
                      </div>

                      {/* Floating decorative elements */}
                      <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#0f1623] border border-white/10 rounded-xl flex items-center justify-center animate-bounce shadow-xl z-20">
                          <Server className="w-8 h-8 text-cyan-400" />
                      </div>
                      <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#0f1623] border border-white/10 rounded-xl flex items-center justify-center animate-bounce delay-300 shadow-xl z-20">
                          <ShieldCheck className="w-8 h-8 text-purple-400" />
                      </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Our Mission */}
      <div className="py-24 bg-[#0a101d] border-b border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-8 text-indigo-400">
                  <Target className="w-8 h-8" />
              </div>
              <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase mb-8 tracking-wide">OUR MISSION</h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-light">
                  "Our mission is to empower our clients through player-oriented server options, scalable hosting solutions, and unrivaled support along the way. We strive to build a community where gamers are valued and creators can realize their visions without limitations."
              </p>
          </div>
      </div>

      {/* Comprehensive Solutions */}
      <div className="py-24 bg-[#050b14] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="font-display font-black text-3xl text-white uppercase mb-4 tracking-tight">COMPREHENSIVE HOSTING SOLUTIONS</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
                  <p className="text-gray-400 text-sm mt-6 max-w-2xl mx-auto">Codoen Hosting offers a wide array of hosting services to meet various requirements:</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                  {[
                      { 
                          title: "Game Server Hosting", 
                          desc: "Specializing in game server hosting, we support over 100+ games, including Minecraft, Farming Simulator 25, ARK: Survival Evolved, and Valheim. Our automated modpack installation and 24/7 support ensure a seamless gaming experience for users of all experience levels.", 
                          icon: Server,
                          color: "cyan"
                      },
                      { 
                          title: "VPS Hosting", 
                          desc: "Our Virtual Private Server (VPS) hosting provides full control over your server environment, allowing you to host websites, manage software, or run game servers with ease. With several plans to pick from, our VPS solutions are both affordable and flexible.", 
                          icon: ShieldCheck,
                          color: "purple" 
                      },
                      { 
                          title: "Dedicated Server Hosting", 
                          desc: "For those seeking robust performance, our dedicated servers offer exclusive use of high-powered hardware, ensuring optimal performance for demanding applications. With options like the Ryzen 5900X & Core processor, NVMe SSDs, and up to 128GB DDR4 RAM.", 
                          icon: Server,
                          color: "blue"
                      }
                  ].map((item, i) => (
                      <div key={i} className="bg-[#0f1623] p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all group hover:-translate-y-1 hover:shadow-2xl">
                          <div className={`w-14 h-14 bg-${item.color}-500/10 rounded-xl flex items-center justify-center mb-6 text-${item.color}-400 group-hover:scale-110 transition-transform`}>
                              <item.icon className="w-7 h-7" />
                          </div>
                          <h3 className="font-display font-bold text-white uppercase mb-4 text-sm tracking-wider">{item.title}</h3>
                          <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Support & Community & Partners (Grid layout) */}
      <div className="py-24 bg-[#050b14] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
              
              {/* Unparalleled Support */}
              <div className="flex flex-col md:flex-row items-center gap-16">
                  <div className="flex-1 space-y-6">
                      <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight">UNPARALLELED SUPPORT</h2>
                      <div className="w-12 h-1 bg-pink-500 rounded-full"></div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                          We pride ourselves on offering <span className="text-white font-bold">24/7/365 support</span> and an average response time of under 15 minutes. That means there's always someone knowledgeable to talk to! Our experienced staff is equipped to assist with a variety of issues, ensuring that you receive the help you need without unnecessary delays or excuses.
                      </p>
                  </div>
                  <div className="flex-1 flex justify-center w-full">
                      <div className="w-full max-w-sm aspect-video bg-[#0f1623] rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
                          <div className="absolute inset-0 bg-pink-500/5 group-hover:bg-pink-500/10 transition-colors"></div>
                          <Heart className="w-20 h-20 text-pink-500 animate-pulse drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]" />
                      </div>
                  </div>
              </div>

              {/* Community Driven */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-16">
                  <div className="flex-1 space-y-6">
                      <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight">COMMUNITY-DRIVEN, CREATOR-FRIENDLY</h2>
                      <div className="w-12 h-1 bg-green-500 rounded-full"></div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                          We believe in the power of community. We are dedicated to fostering a thriving ecosystem where both gamers and developers can flourish. By promoting player-owned servers, we enhance game visibility, attract players, and build robust developer communities.
                      </p>
                  </div>
                  <div className="flex-1 flex justify-center w-full">
                      <div className="w-full max-w-sm aspect-video bg-[#0f1623] rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
                          <div className="absolute inset-0 bg-green-500/5 group-hover:bg-green-500/10 transition-colors"></div>
                          <Users className="w-20 h-20 text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                      </div>
                  </div>
              </div>

              {/* Studio Partnerships */}
              <div className="flex flex-col md:flex-row items-center gap-16">
                  <div className="flex-1 space-y-6">
                      <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight">STUDIO PARTNERSHIPS</h2>
                      <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                          Our experience and technical expertise make us an ideal partner for studios looking to deliver seamless, high-performance multiplayer experiences. We collaborate with developers to tailor hosting solutions to their needs, ensuring their games run smoothly and effectively on our platform, all while facilitating community building at all levels.
                      </p>
                  </div>
                  <div className="flex-1 flex justify-center w-full">
                      <div className="w-full max-w-sm aspect-video bg-[#0f1623] rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
                          <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors"></div>
                          <Handshake className="w-20 h-20 text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                      </div>
                  </div>
              </div>

          </div>
      </div>

      {/* Get Started Today Section */}
      <div className="py-24 bg-[#03060a] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center gap-16">
                  <div className="w-full md:w-1/2">
                      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                          <img 
                            src="https://i.postimg.cc/hjfWtQ88/image.png" 
                            alt="Minecraft Characters" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>
                  </div>
                  <div className="flex-1 space-y-8">
                      <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase tracking-tight">GET STARTED TODAY</h2>
                      <p className="text-gray-400 text-sm leading-relaxed">
                          Whether you're a gamer seeking a hassle-free hosting experience or a game studio looking for a strategic partner, Codoen Hosting is here to support you. Our 24/7 support team, custom-built tools, and robust infrastructure are designed to provide peace of mind and exceptional performance.
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                          Join <span className="text-white font-bold">thousands of satisfied customers</span> who trust Codoen Hosting for their server hosting needs. Explore our services and discover how we can help you achieve your goals!
                      </p>
                      <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-10 rounded uppercase text-xs tracking-wider transition-all shadow-lg hover:shadow-indigo-900/40 hover:-translate-y-1">
                          GET PRO SUPPORT
                      </button>
                  </div>
              </div>
          </div>
      </div>

      {/* Contact Us Section */}
      <div className="py-24 bg-[#050b14]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-6">
                  <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight mb-6">CONTACT US</h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                      For partnership inquiries or to learn more about our services, please contact us <a href="#" className="text-white font-bold underline hover:text-indigo-400 transition-colors">here</a>.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                      Thank you for considering Codoen Hosting. We look forward to supporting your journey and exploring new opportunities for collaboration.
                  </p>
              </div>
          </div>
      </div>

      <StartHereBanner />
    </div>
  );
};

export default AboutUsPage;