import React from 'react';
import { 
    Server, MapPin, Gamepad2, Clock, ArrowRight, Star, 
    ChevronRight, UserCog, IdCard, MessageSquare, Zap, ShieldCheck, Download, HardDrive, Globe 
} from 'lucide-react';
import StartHereBanner from './StartHereBanner';

const WhyUsPage: React.FC = () => {
  const STATS = [
      { value: "50K++", label: "Servers Hosted", icon: Server },
      { value: "21", label: "Global Locations", icon: MapPin },
      { value: "100+", label: "Games Hosted", icon: Gamepad2 },
      { value: "10+", label: "Years of Experience", icon: Clock },
  ];

  const FEATURES = [
      {
          title: "INSTANT SETUP",
          desc: "Our Minecraft and game servers are ready to use within a few seconds after ordering. Jump right into the game and start building the server of your dreams without any delay.",
          icon: Zap
      },
      {
          title: "24/7/365 SERVER SUPPORT",
          desc: "Our support team is always standing by. With an average response time of under 15 minutes, you'll receive assistance in no time at all. No matter what you need help with, we encourage you to reach out!",
          icon: MessageSquare
      },
      {
          title: "DDOS PROTECTION STANDARD",
          desc: "All of our services include complimentary DDoS protection to keep your server running when you need it most.",
          icon: ShieldCheck
      },
      {
          title: "MOD SUPPORT",
          desc: "If the game of your choice can be modded, our servers support it! Experience modding made easy with custom panels designed for new users and veterans alike, countless knowledgebase guides, and a support team ready to assist you anytime.",
          icon: Download
      },
      {
          title: "SOLID-STATE DRIVES",
          desc: "A high-quality server begins with high-quality hardware, and at Codoen Hosting, we accept nothing less than the best. SSD and NVMe storage is used exclusively to cut down on I/O wait and speed up loading.",
          icon: HardDrive
      },
      {
          title: "21 GLOBAL LOCATIONS",
          desc: "All of our gaming servers are available at all of our locations. And with 21 locations to pick from, you'll certainly find one that gives you low latency for silky smooth gameplay. The best part is that you can switch locations at any time.",
          icon: Globe
      }
  ];

  const REVIEWS = [
      {
          user: "O'MALLY TUCKER",
          title: "BEST GUY EVER",
          content: "Bro was extremely helpful to me and didnt make me feel dumb that I just had a mod that didnt work. Was great overall and helped me figure out what took all day in about 10 minutes. He responded really quick as well."
      },
      {
          user: "JOE",
          title: "IF PROPER SUPPORT IS IMPORTANT FOR YOU.",
          content: "I am only subscribing to companies which have a proper customer support, since I am really not in the mood to wait hours or even days for an answer to a support ticket. Codoen never takes more than a couple of minutes to answer a ticket. And even if it takes a little longer sometimes, it never feels like they are just ignoring you (an experience which I have had with \"Hetner\" for example). So far, I could always solve all the issues I have had, thanks to their support."
      },
      {
          user: "ASTROCARBONS",
          title: "RAN WONDERFULLY",
          content: "Ran wonderfully, good dashboard. I'm sure I'll be back."
      }
  ];

  const SUPPORT_FEATURES = [
      {
          title: "PERSONALIZED SUPPORT",
          desc: "Automation and robots have their place, but at Codoen Hosting, we do not use them for support. Every ticket and LiveChat is a living human with you right from the start.",
          icon: UserCog
      },
      {
          title: "QUALIFIED STAFF",
          desc: "Whenever you receive support, you'll be talking to one of our friendly support team members. Whether you reach out via a ticket, live chat or Discord, you'll always be communicating with a real human being.",
          icon: IdCard
      },
      {
          title: "24/7/365 SUPPORT",
          desc: "We train our support team to help you with any of our services. We get it; running a server with hundreds of mods doesn't always go as planned. We're here to assist you no matter what problem you might be facing. We've seen it all with over a decade of experience and are ready to help!",
          icon: MessageSquare
      }
  ];

  return (
    <div className="bg-[#050b14] min-h-screen pt-20 font-sans text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#03060a] border-b border-white/5 pt-16 pb-24 lg:pt-32 lg:pb-40">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                  {/* Text Content */}
                  <div className="flex-1 space-y-8">
                      <h1 className="font-display font-black text-4xl lg:text-6xl uppercase leading-tight">
                          WHY CHOOSE <br/>
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">CODOEN HOSTING?</span>
                      </h1>
                      
                      <div className="text-gray-400 text-sm leading-relaxed space-y-4 max-w-xl">
                          <p>
                              We've been hosting servers for over a decade and have over half a million servers hosted under our belt. We know what it takes to run a successful server, and we're here to help you succeed!
                          </p>
                          <p>
                              We understand that when you mix dozens or even hundreds of mods and plugins, things can go wrong. That's why we've always emphasized support; we're always here when you need us most!
                          </p>
                          <p>
                              No matter how easy or complicated your question might be, our goal is always to help our customers as soon as possible. We are here to ensure that whatever vision you have for your server becomes a reality!
                          </p>
                      </div>

                      <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-10 rounded text-sm uppercase tracking-wider shadow-lg shadow-indigo-900/40 transition-all hover:-translate-y-1">
                          CREATE SERVER
                      </button>
                  </div>

                  {/* 3D Graphic */}
                  <div className="flex-1 flex justify-center perspective-1000">
                      <div className="relative w-80 h-80 lg:w-[500px] lg:h-[500px] flex items-center justify-center">
                          {/* Glow effect */}
                          <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
                          
                          {/* Character Image */}
                          <img 
                            src="https://i.postimg.cc/QMb5qLkB/Chat-GPT-Image-Feb-13-2026-09-51-24-AM-removebg-preview.png" 
                            alt="Codoen Hosting Character" 
                            className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_30px_rgba(79,70,229,0.4)] animate-pulse" 
                          />
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#050b14] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="font-display font-black text-2xl text-white uppercase tracking-widest">A LITTLE BIT MORE ABOUT US</h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {STATS.map((stat, i) => (
                      <div key={i} className="text-center group">
                          <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/10 text-cyan-400 group-hover:scale-110 transition-transform bg-[#0a101d]">
                              <stat.icon className="w-6 h-6" />
                          </div>
                          <div className="font-display font-black text-4xl text-white mb-2">{stat.value}</div>
                          <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#0a101d] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="font-display font-black text-3xl text-white uppercase tracking-widest">OUR GLOBAL FEATURES</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                  {FEATURES.map((feature, i) => (
                      <div key={i} className="flex flex-col items-start group">
                          <div className="mb-6 w-12 h-12 border border-white/10 bg-[#050b14] rounded-lg flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/50 group-hover:text-white transition-colors relative overflow-hidden">
                              <div className="absolute inset-0 bg-cyan-500/10 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                              <feature.icon className="w-6 h-6 relative z-10" />
                          </div>
                          <h3 className="font-display font-bold text-white text-sm uppercase mb-4 tracking-wide group-hover:text-cyan-400 transition-colors">{feature.title}</h3>
                          <p className="text-gray-400 text-xs leading-relaxed">
                              {feature.desc}
                          </p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-[#0a101d] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center mb-16 text-center">
                  <h2 className="font-display font-black text-2xl md:text-3xl text-white uppercase tracking-widest mb-4 flex flex-wrap justify-center items-center gap-2">
                      SEE OUR REVIEWS ON <span className="underline decoration-[#00b67a] underline-offset-4 decoration-4">TRUSTPILOT</span>
                  </h2>
                  <p className="text-gray-400 text-sm">We have thousands of verified customer reviews. See why our customers absolutely love us!</p>
                  <button className="mt-4 text-[10px] font-bold uppercase flex items-center gap-1 text-[#00b67a] hover:text-white transition-colors">
                      SEE ALL REVIEWS <ArrowRight className="w-3 h-3" />
                  </button>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                  {REVIEWS.map((review, i) => (
                      <div key={i} className="bg-[#050b14] border border-white/5 p-8 rounded-lg flex flex-col hover:border-white/10 transition-colors group relative">
                          <h4 className="font-display font-bold text-white text-xs uppercase mb-3">{review.user}</h4>
                          <div className="flex gap-1 mb-4">
                              {[1,2,3,4,5].map(s => (
                                  <div key={s} className="bg-[#00b67a] p-0.5 rounded-sm">
                                      <Star className="w-2 h-2 text-white fill-white" />
                                  </div>
                              ))}
                          </div>
                          <h3 className="text-[#00b67a] font-bold text-xs uppercase mb-3">"{review.title}"</h3>
                          <p className="text-gray-400 text-[11px] leading-relaxed flex-1">
                              {review.content}
                          </p>
                          <div className="mt-6 flex justify-end">
                              <button className="text-[9px] font-bold text-gray-500 uppercase flex items-center gap-1 group-hover:text-white transition-colors">
                                  OPEN REVIEW <ChevronRight className="w-3 h-3" />
                              </button>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Friendly Support Section */}
      <section className="py-24 bg-[#050b14]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20">
                  <h2 className="font-display font-black text-3xl text-white uppercase tracking-widest mb-6">FRIENDLY AND PROFESSIONAL SUPPORT</h2>
                  <p className="text-gray-400 text-sm max-w-3xl mx-auto leading-relaxed">
                      Your success is our top priority. We provide the best customer support and experience. We're always available to help, whether you need assistance uploading a file or installing a mod, or are looking for a plugin recommendation. If you have any questions, simply reach out to us via our ticket system or live chat support, and we'll be happy to answer them.
                  </p>
              </div>

              <div className="grid md:grid-cols-3 gap-16">
                  {SUPPORT_FEATURES.map((feature, i) => (
                      <div key={i} className="flex flex-col items-center text-center group">
                          <div className="w-16 h-16 border-2 border-cyan-500/50 rounded-xl flex items-center justify-center mb-8 text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-400 group-hover:scale-110 transition-all duration-300 relative">
                              <feature.icon className="w-8 h-8 relative z-10" />
                              {/* Decorative elements behind icon */}
                              <div className="absolute inset-0 bg-cyan-500/5 blur-lg rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          </div>
                          <h3 className="font-display font-bold text-white text-sm uppercase mb-4 tracking-wide">{feature.title}</h3>
                          <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
                              {feature.desc}
                          </p>
                      </div>
                  ))}
              </div>

              <div className="mt-20 text-center">
                  <a href="#" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-cyan-500 hover:text-white transition-colors border-b border-cyan-500/30 hover:border-white pb-1">
                      NEED HELP? PLEASE ASK US <ArrowRight className="w-3 h-3" />
                  </a>
              </div>
          </div>
      </section>

      <StartHereBanner />
    </div>
  )
}

export default WhyUsPage;