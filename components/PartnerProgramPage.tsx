import React from 'react';
import { Star, Monitor, Award, ShieldCheck, Heart, MessageSquare, Puzzle, Youtube, Radio, Globe, Check, ArrowRight } from 'lucide-react';
import StartHereBanner from './StartHereBanner';

const PartnerProgramPage: React.FC = () => {
  const REQUIREMENTS = [
      {
          icon: Puzzle,
          title: "Modpacks",
          items: [
              "1,500+ downloads",
              "100+ downloads in the last 30 days",
              "Relevant content and audience"
          ]
      },
      {
          icon: Youtube,
          title: "YouTube",
          items: [
              "5,000+ subscribers",
              "1,000+ views in last 30 days",
              "Regular video upload schedule in the last 3 months",
              "Relevant content and audience"
          ]
      },
      {
          icon: Radio,
          title: "Twitch",
          items: [
              "2,500+ followers",
              "50+ concurrent viewers on average",
              "20+ hours of streaming within the last 30 days",
              "Relevant content and audience"
          ]
      },
      {
          icon: Globe,
          title: "Websites",
          items: [
              "10,000+ unique visitors per month",
              "30,000+ page views per month",
              "Relevant content and audience"
          ]
      }
  ];

  const GAMES_LIST = [
       { name: 'MINECRAFT', img: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=400&auto=format&fit=crop' },
       { name: 'VINTAGE STORY', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400&auto=format&fit=crop' },
       { name: 'HYTALE', img: 'https://images.unsplash.com/photo-1612287230217-969869828789?q=80&w=400&auto=format&fit=crop' },
       { name: 'VALHEIM', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=400&auto=format&fit=crop' },
       { name: 'TERRARIA', img: 'https://images.unsplash.com/photo-1599351431202-6e0005a7d746?q=80&w=400&auto=format&fit=crop' },
       { name: 'PROJECT ZOMBOID', img: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop' },
       { name: 'PALWORLD', img: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=400&auto=format&fit=crop' },
       { name: 'FARMING SIMULATOR 25', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=400&auto=format&fit=crop' },
  ];

  return (
    <div className="bg-[#050b14] min-h-screen pt-20 font-sans text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#03060a] border-b border-white/5 py-24 lg:py-32">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                  {/* Text Content */}
                  <div className="flex-1 space-y-8">
                      <h1 className="font-display font-black text-4xl lg:text-6xl uppercase leading-tight">
                          THE <br/>
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">CODOEN HOSTING</span> <br/>
                          PARTNER PROGRAM
                      </h1>
                      
                      <div className="text-gray-400 text-sm leading-relaxed space-y-4">
                          <p>
                              As a <span className="font-bold text-white">Codoen Hosting</span> partner, you'll work directly with our dedicated partnership team, ensuring you have everything you need to focus on what you do best. Whether you are a creator, streamer, developer, or working on an exciting project, we'd love for you to consider joining the Codoen Hosting Partner Program.
                          </p>
                          <p>
                              Without content creators, streamers, developers, builders, and many other super-talented individuals in the gaming community, <span className="font-bold text-white">Minecraft</span> and other games would not be where they are today. The gaming community is full of many incredible and creative people who push these games to new levels with the fantastic things they do.
                          </p>
                          <p>
                              We're part of this community ourselves and love to be able to give back through our gaming partnership program. Between our program, sponsored events, servers, and donations, we have given over $2M to the gaming community so far. We have no plan to stop at $2M, with many things planned for the future.
                          </p>
                      </div>
                  </div>

                  {/* 3D Graphic (Streaming Setup) */}
                  <div className="flex-1 flex justify-center perspective-1000">
                      <div className="relative w-full max-w-lg aspect-square">
                          <img 
                            src="https://i.postimg.cc/02vzVkZW/Chat-GPT-Image-Feb-13-2026-10-59-06-AM.png" 
                            alt="Gaming Setup" 
                            className="w-full h-full object-cover rounded-3xl shadow-2xl border border-white/10"
                            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-[#050b14] via-transparent to-transparent"></div>
                          
                          {/* Floating Elements simulating screens */}
                          <div className="absolute top-10 right-10 bg-indigo-500/20 backdrop-blur-md p-4 rounded-xl border border-indigo-500/30 animate-bounce">
                              <Monitor className="w-8 h-8 text-indigo-400" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Perks Section */}
      <section className="py-24 bg-[#050b14] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12">
                  <h2 className="font-display font-black text-2xl md:text-3xl text-white uppercase tracking-widest mb-4">
                      THE PERKS OF THE CODOEN HOSTING PARTNER PROGRAM
                  </h2>
              </div>
              
              <div className="grid gap-6">
                  {[
                      "Generous affiliate payouts with increased commissions for high-volume partners.",
                      "Discount code to share with your community.",
                      "Complimentary or heavily discounted services.",
                      "24/7/365 priority support on all of your services.",
                      "Designated and experienced partner management team to help you with advice, strategy, and marketing on your projects.",
                      "Gain access to partner-only events, such as talks from industry leaders.",
                      "Complimentary access to our graphics team for you to utilize."
                  ].map((perk, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                          <div className="bg-indigo-600/20 text-indigo-400 font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-indigo-500/30">
                              {i + 1}
                          </div>
                          <p className="text-gray-300 text-sm leading-relaxed pt-1.5">{perk}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Requirements Section */}
      <section className="py-24 bg-[#050b14] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="font-display font-black text-2xl md:text-3xl text-white uppercase tracking-widest">
                      OUR TYPICAL PARTNER REQUIREMENTS INCLUDE:
                  </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {REQUIREMENTS.map((req, i) => (
                      <div key={i} className="flex flex-col items-center text-center">
                          <div className="w-12 h-12 rounded-lg border border-green-500/30 flex items-center justify-center mb-6 text-green-400">
                              <req.icon className="w-6 h-6" />
                          </div>
                          <h3 className="font-display font-bold text-white text-sm mb-4">{req.title}</h3>
                          <ul className="space-y-3">
                              {req.items.map((item, j) => (
                                  <li key={j} className="flex items-start gap-2 justify-center text-[10px] text-gray-400">
                                      <Check className="w-3 h-3 text-green-500 shrink-0 mt-0.5" />
                                      {item}
                                  </li>
                              ))}
                          </ul>
                      </div>
                  ))}
              </div>

              <div className="mt-20 text-center">
                  <a href="#" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-green-500 hover:text-white transition-colors border-b border-green-500/30 hover:border-white pb-1">
                      DO YOU HAVE SOMETHING ELSE GOING ON THAT YOU THINK IS INTERESTING? PLEASE LET US KNOW. <ArrowRight className="w-3 h-3" />
                  </a>
              </div>
          </div>
      </section>

      {/* Collaboration Form Section */}
      <section className="py-24 bg-[#0a101d] border-b border-white/5 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-12">
                  <h2 className="font-display font-black text-3xl text-white uppercase tracking-widest">LET'S COLLABORATE</h2>
                  <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
              </div>

              <div className="grid lg:grid-cols-3 gap-12">
                  {/* Form */}
                  <div className="lg:col-span-2 space-y-6">
                      <div className="space-y-1">
                          <label className="text-[10px] font-bold text-gray-400 uppercase">What's your name? <span className="text-red-500">*</span></label>
                          <input type="text" placeholder="What's your name?" className="w-full bg-[#050b14] border border-white/10 rounded p-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors" />
                      </div>
                      
                      <div className="space-y-1">
                          <label className="text-[10px] font-bold text-gray-400 uppercase">Email address <span className="text-red-500">*</span></label>
                          <input type="email" placeholder="Enter your email address" className="w-full bg-[#050b14] border border-white/10 rounded p-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors" />
                      </div>

                      <div className="space-y-1">
                          <label className="text-[10px] font-bold text-gray-400 uppercase">Discord <span className="text-red-500">*</span></label>
                          <input type="text" placeholder="Enter your Discord ID" className="w-full bg-[#050b14] border border-white/10 rounded p-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors" />
                      </div>

                      <div className="space-y-1">
                          <label className="text-[10px] font-bold text-gray-400 uppercase">Tell us about yourself and what you do. <span className="text-red-500">*</span></label>
                          <textarea rows={4} placeholder="Enter information" className="w-full bg-[#050b14] border border-white/10 rounded p-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors resize-none"></textarea>
                      </div>

                      <div className="flex justify-end pt-4">
                          <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-8 rounded text-xs uppercase tracking-wider transition-colors shadow-lg">
                              NEXT
                          </button>
                      </div>
                  </div>

                  {/* Steps */}
                  <div className="space-y-4">
                      <div className="p-4 rounded border border-purple-500 bg-[#0f1623] relative overflow-hidden">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500"></div>
                          <div className="text-[10px] font-bold text-purple-400 uppercase mb-1">STEP 1.</div>
                          <div className="text-sm font-bold text-white">Personal Information</div>
                      </div>
                      
                      <div className="p-4 rounded border border-white/5 bg-[#050b14] opacity-50">
                          <div className="text-[10px] font-bold text-gray-500 uppercase">STEP 2.</div>
                      </div>

                      <div className="p-4 rounded border border-white/5 bg-[#050b14] opacity-50">
                          <div className="text-[10px] font-bold text-gray-500 uppercase">STEP 3.</div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Supported Games Section */}
      <section className="py-24 bg-[#050b14] border-b border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="font-display font-black text-2xl md:text-3xl text-white uppercase tracking-widest mb-4">
                  CODOEN HOSTING SUPPORTS ALL YOUR FAVORITE
              </h2>
              <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase tracking-widest mb-12">
                  GAMES
              </h2>
              
              <div className="text-left mb-4">
                  <span className="text-[10px] text-indigo-400 font-bold">Choose your hosting</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                   {GAMES_LIST.map((game, i) => (
                       <div key={i} className="group flex flex-col items-center">
                           <div className="relative rounded-lg overflow-hidden border border-white/10 aspect-[16/9] cursor-pointer w-full mb-3 group-hover:border-indigo-500/50 transition-colors shadow-lg">
                               <img src={game.img} alt={game.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                               <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
                           </div>
                           <span className="font-display font-bold text-white text-[10px] uppercase tracking-wider">{game.name}</span>
                       </div>
                   ))}
              </div>
          </div>
      </section>

      {/* Ultimate Partner Section (Simplified/Modified as typical footer or extra info) */}
      <section className="py-24 bg-[#0a101d] relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="font-display font-black text-2xl md:text-3xl text-white uppercase mb-8">
                  YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">ULTIMATE GAMING PARTNER</span>™
              </h2>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-12 max-w-2xl mx-auto">
                  Here at Codoen Hosting, we pride ourselves on maintaining strong roots in the gaming communities we service. We support players, content creators, modders, and game studios around the world to make the very most of the games we love.
              </p>

              {/* Partner Logos */}
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                  <div className="flex items-center gap-2"><Award className="w-8 h-8 text-white" /><span className="font-bold text-white text-lg">GamersOutreach</span></div>
                  <div className="flex items-center gap-2"><Star className="w-8 h-8 text-white" /><span className="font-bold text-white text-lg">LUNAPIXEL</span></div>
                  <div className="flex items-center gap-2"><ShieldCheck className="w-8 h-8 text-white" /><span className="font-bold text-white text-lg">GDLauncher</span></div>
                  <div className="flex items-center gap-2"><Heart className="w-8 h-8 text-white" /><span className="font-bold text-white text-lg">Modrinth</span></div>
              </div>
          </div>
      </section>

      {/* Partner Managers Section */}
      <section className="py-24 bg-[#050b14]">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="font-display font-black text-2xl text-white uppercase tracking-widest mb-8">PARTNER MANAGERS</h2>
              
              <div className="inline-flex flex-col items-center">
                  <div className="w-16 h-16 bg-indigo-900/30 rounded-full flex items-center justify-center mb-4 text-indigo-400 border border-indigo-500/30">
                      <MessageSquare className="w-8 h-8" />
                  </div>
                  <p className="text-gray-400 text-sm mb-2">Email: <a href="mailto:partners@codoenhosting.com" className="text-white hover:text-indigo-400 transition-colors">partners@codoenhosting.com</a></p>
                  <p className="text-gray-400 text-sm">Discord: <span className="text-white">codoen_partners</span></p>
              </div>
          </div>
      </section>

      <StartHereBanner />
    </div>
  );
};

export default PartnerProgramPage;