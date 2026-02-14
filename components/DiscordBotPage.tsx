import React, { useState } from 'react';
import { 
    Bot, ShieldCheck, Globe, HardDrive, Clock, Code, Database, 
    LayoutDashboard, Terminal, FileCode, 
    Settings, Folder, User, BadgeCheck, MessageSquare, Play, 
    ChevronRight, Star, ArrowRight, ChevronDown, ChevronUp, Check
} from 'lucide-react';
import StartHereBanner from './StartHereBanner';

const BotPanelMockup = () => (
    <div className="w-full h-full bg-[#1e1e1e] flex flex-col font-mono text-xs rounded-xl overflow-hidden shadow-2xl border border-white/10">
        {/* Top Bar */}
        <div className="h-10 bg-[#252526] flex items-center px-4 justify-between border-b border-[#3e3e42]">
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="text-gray-400 font-bold">Codoen Panel - File Manager</div>
            <div className="flex items-center gap-2">
                 <div className="px-2 py-1 bg-indigo-600 rounded text-white text-[10px] font-sans font-bold uppercase">Active</div>
            </div>
        </div>
        
        <div className="flex flex-1 overflow-hidden">
             {/* Sidebar */}
             <div className="w-14 bg-[#333333] flex flex-col items-center py-4 gap-6 text-gray-500 border-r border-[#3e3e42]">
                  <div className="text-indigo-400"><LayoutDashboard className="w-6 h-6" /></div>
                  <div className="hover:text-white cursor-pointer transition-colors"><Terminal className="w-6 h-6" /></div>
                  <div className="hover:text-white cursor-pointer transition-colors"><FileCode className="w-6 h-6 text-white" /></div>
                  <div className="mt-auto hover:text-white cursor-pointer transition-colors"><Settings className="w-6 h-6" /></div>
             </div>
  
             {/* Main Content */}
             <div className="flex-1 bg-[#1e1e1e] p-6 relative">
                  <div className="flex justify-between items-center mb-6">
                      <div className="text-gray-300 font-bold text-sm">/home/container</div>
                      <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded text-[10px] font-bold uppercase transition-colors">New File</button>
                  </div>
  
                  <div className="space-y-1">
                       <div className="grid grid-cols-12 gap-4 text-[10px] text-gray-500 font-bold uppercase border-b border-white/10 pb-2 mb-2 select-none">
                            <div className="col-span-6">Name</div>
                            <div className="col-span-3">Size</div>
                            <div className="col-span-3">Modified</div>
                       </div>
                       {/* File Items */}
                       {[
                           { name: 'node_modules', size: '-', mod: '2 days ago', isDir: true },
                           { name: 'src', size: '-', mod: '2 days ago', isDir: true },
                           { name: 'bot.js', size: '12 KB', mod: '1 hour ago', isDir: false },
                           { name: 'config.json', size: '2 KB', mod: '1 day ago', isDir: false },
                           { name: '.env', size: '1 KB', mod: '5 days ago', isDir: false },
                           { name: 'package.json', size: '1 KB', mod: '5 days ago', isDir: false },
                           { name: 'README.md', size: '4 KB', mod: '5 days ago', isDir: false },
                       ].map((file, i) => (
                           <div key={i} className="grid grid-cols-12 gap-4 text-xs py-2 border-b border-white/5 items-center hover:bg-white/5 cursor-pointer rounded px-2 -mx-2 group">
                                <div className="col-span-6 flex items-center gap-2 text-gray-400 group-hover:text-gray-200 transition-colors">
                                    {file.isDir ? <div className="w-4 h-4 bg-yellow-500/20 rounded flex items-center justify-center text-yellow-500"><Folder className="w-3 h-3 fill-current" /></div> : <div className="w-4 h-4 bg-blue-500/20 rounded flex items-center justify-center text-blue-500"><FileCode className="w-3 h-3" /></div>}
                                    {file.name}
                                </div>
                                <div className="col-span-3 text-gray-600 group-hover:text-gray-400">{file.size}</div>
                                <div className="col-span-3 text-gray-600 group-hover:text-gray-400">{file.mod}</div>
                           </div>
                       ))}
                  </div>
             </div>
        </div>
    </div>
);

interface Props {
    onNavigate: (view: string, data?: any) => void;
}

const DiscordBotPage: React.FC<Props> = ({ onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
      setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleOrder = (plan: any) => {
      onNavigate('configure', { type: 'bot', plan: plan.name, price: plan.price });
  };

  const PLANS = [
    {
      name: "STARTER BOT",
      specs: [
          "256MB DDR4 RAM",
          "5GB NVMe Storage",
          "Unmetered Bandwidth",
          "1 vCore CPU",
          "Python, Node.js, Java",
          "24/7 Uptime"
      ],
      price: "1.49"
    },
    {
        name: "PREMIUM BOT",
        specs: [
            "1GB DDR4 RAM",
            "10GB NVMe Storage",
            "Unmetered Bandwidth",
            "2 vCore CPU",
            "Python, Node.js, Java",
            "24/7 Uptime"
        ],
        price: "2.99",
        popular: true
    },
    {
        name: "ADVANCED BOT",
        specs: [
            "4GB DDR4 RAM",
            "25GB NVMe Storage",
            "Unmetered Bandwidth",
            "4 vCore CPU",
            "Python, Node.js, Java",
            "24/7 Uptime"
        ],
        price: "6.99"
    }
  ];

  const FEATURES = [
      {
          title: "MULTIPLE LANGUAGES",
          desc: "We support a wide range of programming languages including Node.js, Python, Java, and more! Easily switch environments in our panel.",
          icon: Code
      },
      {
          title: "DEDICATED PANEL",
          desc: "Manage your bot's files, console, and resources effortlessly with our custom Pterodactyl-based panel designed for developers.",
          icon: LayoutDashboard
      },
      {
          title: "24/7 UPTIME",
          desc: "Keep your bot online 24/7 with our reliable infrastructure. No more hosting from your PC or dealing with downtime.",
          icon: Clock
      },
      {
          title: "NVME STORAGE",
          desc: "Experience lightning-fast read/write speeds with our NVMe SSDs, ensuring your bot's database and files load instantly.",
          icon: HardDrive
      },
      {
          title: "DDOS PROTECTION",
          desc: "Your bot is safe with us. Our advanced DDoS protection filters malicious traffic, keeping your bot responsive.",
          icon: ShieldCheck
      },
      {
          title: "EASY DATABASES",
          desc: "Spin up free MySQL/MariaDB databases directly from the panel to store your bot's data securely.",
          icon: Database
      }
  ];

  const BOT_FAQS = [
    { q: "WHAT LANGUAGES DO YOU SUPPORT?", a: "We natively support Node.js (JavaScript/TypeScript), Python, Java, Go, and more. You can also use Docker containers for custom environments." },
    { q: "CAN I HOST A MUSIC BOT?", a: "Yes! Our servers are optimized for audio processing, so you can host high-quality music bots like Lavalink without issues." },
    { q: "DO I GET ROOT ACCESS?", a: "These plans are containerized (Pterodactyl), providing file access and console but not full root access. For root access, check our VPS plans." },
    { q: "HOW DO I UPLOAD MY BOT?", a: "You can upload files via our web-based File Manager, or use SFTP for larger projects. We also support pulling from Git repositories!" },
    { q: "CAN I UPGRADE MY PLAN LATER?", a: "Absolutely. You can upgrade your RAM and CPU allocation instantly through the billing area without losing any data." }
  ];

  return (
    <div className="bg-[#050b14] min-h-screen pt-20 font-sans text-white">
        {/* Hero Section */}
        <div className="relative bg-[#050b14] overflow-hidden border-b border-white/5 pb-20">
            <div className="max-w-7xl mx-auto px-4 pt-16 lg:pt-24 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 space-y-6">
                        <h1 className="font-display font-black text-4xl lg:text-6xl uppercase leading-none">
                            DISCORD BOT <br/>
                            HOSTING MADE <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">SIMPLE</span>
                        </h1>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                            Host your Discord bot on our high-performance nodes ensuring 24/7 uptime. Whether it's a simple moderation bot or a complex music bot, we have the resources you need.
                        </p>
                        <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase text-gray-500 tracking-wider">
                            <span className="bg-white/5 px-2 py-1 rounded">Node.js</span>
                            <span className="bg-white/5 px-2 py-1 rounded">Python</span>
                            <span className="bg-white/5 px-2 py-1 rounded">Java</span>
                            <span className="bg-white/5 px-2 py-1 rounded">Lavalink</span>
                        </div>
                        <button onClick={() => document.getElementById('plans')?.scrollIntoView({behavior: 'smooth'})} className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded uppercase text-sm tracking-wider transition-colors shadow-lg shadow-indigo-900/40">
                            VIEW PLANS
                        </button>
                    </div>
                    
                    {/* Bot Illustration */}
                    <div className="flex-1 flex justify-center perspective-1000">
                        <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                             <div className="relative z-10 animate-bounce-slow">
                                <Bot className="w-64 h-64 text-indigo-500 drop-shadow-[0_0_50px_rgba(99,102,241,0.5)]" />
                             </div>
                             {/* Orbiting Elements */}
                             <div className="absolute w-full h-full animate-spin-slow opacity-30">
                                <div className="absolute top-0 left-1/2 w-4 h-4 bg-purple-500 rounded-full blur-sm"></div>
                                <div className="absolute bottom-0 right-1/2 w-6 h-6 bg-cyan-500 rounded-full blur-sm"></div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Plans Section */}
        <div id="plans" className="py-24 bg-[#050b14]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-display font-black text-3xl text-white uppercase mb-12 text-center">BOT HOSTING PLANS</h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {PLANS.map((plan, index) => (
                        <div key={index} className={`bg-[#0a101d] border ${plan.popular ? 'border-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.15)]' : 'border-white/10'} rounded-xl p-8 flex flex-col items-center text-center hover:border-indigo-500 transition-all duration-300 group relative overflow-hidden`}>
                            {plan.popular && (
                                <div className="absolute top-4 right-4 text-[10px] font-bold bg-indigo-600 text-white px-2 py-1 rounded uppercase">
                                    Popular
                                </div>
                            )}
                            
                            <h3 className="font-display font-black text-xl text-white uppercase mb-8 tracking-wide group-hover:text-indigo-400 transition-colors">
                                {plan.name}
                            </h3>
                            
                            <div className="space-y-4 mb-10 w-full">
                                {plan.specs.map((spec, i) => (
                                    <div key={i} className="text-[10px] text-gray-400 font-bold uppercase text-center border-b border-white/5 pb-2 last:border-0 flex justify-center items-center gap-2">
                                        <Check className="w-3 h-3 text-indigo-500" /> {spec}
                                    </div>
                                ))}
                            </div>

                            <div className="mb-8">
                                <div className="text-4xl font-black text-white">$ {plan.price} <span className="text-xs text-gray-500 font-normal">/ month</span></div>
                            </div>

                            <button 
                                onClick={() => handleOrder(plan)}
                                className={`w-full ${plan.popular ? 'bg-indigo-600 hover:bg-indigo-500' : 'bg-[#1e293b] hover:bg-[#253045]'} text-white font-bold py-3 rounded text-[10px] uppercase tracking-wider transition-colors shadow-lg`}
                            >
                                DEPLOY NOW
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Features Grid */}
        <div className="py-24 bg-[#0a101d] border-y border-white/5">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-display font-black text-3xl text-white uppercase mb-16 text-center">DEVELOPER FEATURES</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {FEATURES.map((feature, index) => (
                        <div key={index} className="flex flex-col items-start group">
                            <div className="w-12 h-12 rounded-lg border border-indigo-500/30 flex items-center justify-center mb-6 text-indigo-400 group-hover:bg-indigo-500/10 group-hover:border-indigo-400 transition-all duration-300">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-display font-bold text-white text-sm uppercase mb-3 tracking-wide">{feature.title}</h3>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
             </div>
        </div>

        {/* Panel Section */}
        <div className="py-24 bg-[#050b14] border-b border-white/5">
             <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-16">
                     <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight mb-6">POWERFUL CONTROL PANEL</h2>
                     <p className="text-gray-400 text-xs max-w-2xl mx-auto leading-relaxed">
                        Control every aspect of your Discord bot with our customized panel. Upload files, install packages, check console logs, and restart your bot from anywhere in the world.
                     </p>
                 </div>
                 
                 {/* Dashboard Mockup */}
                 <div className="w-full aspect-video mx-auto max-w-5xl shadow-2xl relative">
                    <BotPanelMockup />
                 </div>
             </div>
        </div>

        {/* FAQ Section */}
        <div className="py-24 bg-[#0a101d]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="font-display font-black text-2xl text-white uppercase tracking-tight">FREQUENTLY ASKED QUESTIONS</h2>
                </div>

                <div className="space-y-3">
                    {BOT_FAQS.map((item, index) => (
                    <div key={index} className="bg-[#0f1623] border border-white/5 rounded-lg overflow-hidden">
                        <button
                        onClick={() => toggleFaq(index)}
                        className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-[#161f30] transition-colors"
                        >
                        <span className="font-display font-bold text-xs text-white uppercase tracking-wide">
                            {item.q}
                        </span>
                        {openFaqIndex === index ? (
                            <ChevronUp className="w-4 h-4 text-white" />
                        ) : (
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                        )}
                        </button>
                        
                        {openFaqIndex === index && (
                            <div className="px-6 pb-6 pt-2 text-gray-400 text-sm leading-relaxed border-t border-white/5 bg-[#0c121d]">
                            {item.a}
                            </div>
                        )}
                    </div>
                    ))}
                </div>
            </div>
        </div>

        <StartHereBanner />
    </div>
  );
};

export default DiscordBotPage;