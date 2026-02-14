import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, Gamepad, Monitor } from 'lucide-react';
import StartHereBanner from './StartHereBanner';

interface FAQItem {
    q: string;
    a: string;
}

interface FAQCategory {
    id: string;
    title: string;
    items: FAQItem[];
}

const FAQPage: React.FC = () => {
    const [openItem, setOpenItem] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleItem = (id: string) => {
        setOpenItem(openItem === id ? null : id);
    };

    const FAQ_DATA: FAQCategory[] = [
        {
            id: 'general',
            title: 'GENERAL',
            items: [
                { q: "HOW QUICK IS YOUR SUPPORT?", a: "Our average ticket response time is under 15 minutes. We have staff online 24/7/365 to assist you with any issues you might encounter." },
                { q: "ARE YOUR MINECRAFT AND GAMING SERVERS ON 24/7?", a: "Yes! Once you purchase a server, it stays online 24/7 even when you are not logged in, so your friends can play anytime." },
                { q: "DO YOU PROVIDE DDOS PROTECTION?", a: "Every server comes with our custom advanced DDoS protection standard, free of charge. It's built specifically to filter gaming traffic." },
                { q: "CAN I MOVE MY SERVER TO A DIFFERENT LOCATION AFTER I PURCHASE IT?", a: "Yes, you can request a location transfer at any time through our support ticket system. We will move your files and data to the new location." }
            ]
        },
        {
            id: 'billing',
            title: 'BILLING',
            items: [
                { q: "WHAT PAYMENT METHODS DO YOU ACCEPT?", a: "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and various local payment methods depending on your region." },
                { q: "WHAT HAPPENS IF I DO NOT PAY ON TIME?", a: "We provide a grace period of 7 days. If payment is not received within this timeframe, the service may be suspended, but your data will be kept for a period before termination." },
                { q: "WHAT IS YOUR REFUND POLICY?", a: "We offer a 3-day money-back guarantee. If you are not satisfied with our services within the first 72 hours, you can request a full refund, no questions asked." },
                { q: "CAN DISCOUNT CODES BE USED ON ALL BILLING CYCLES?", a: "Most discount codes apply to the first invoice of any billing cycle. Some special promotions may have specific terms." }
            ]
        },
        {
            id: 'minecraft',
            title: 'MINECRAFT',
            items: [
                { q: "CAN I SWITCH BETWEEN MODPACKS ON MY MINECRAFT SERVER WHENEVER I WANT?", a: "Absolutely. Our Instance Manager allows you to switch between modpacks or game versions instantly without losing data from your other instances." },
                { q: "ARE THE PLAYER SLOTS UNLIMITED/ADJUSTABLE?", a: "Yes, you can adjust player slots to your liking in the server properties. We do not strictly limit slots, but we recommend sticking to a number suitable for your RAM plan." },
                { q: "WHAT IS CODOENONE?", a: "CodoenOne is our premium all-in-one hosting package that gives you access to host over 100 different games on a single plan, allowing you to swap between them at will." },
                { q: "DO YOU ALLOW CUSTOM JARS/MODS TO BE UPLOADED?", a: "Yes, you have full FTP/SFTP access to your server. You can upload any custom server JARs, mods, plugins, or config files you need." },
                { q: "IS THE LATEST VERSION AVAILABLE ON YOUR SERVERS?", a: "Yes, we update our systems immediately when new Minecraft versions are released. You can switch to the latest snapshot or release version instantly." }
            ]
        },
        {
            id: 'hardware',
            title: 'HARDWARE',
            items: [
                { q: "WHAT ARE THE SPECIFICATIONS OF CODOEN HOSTING SERVER NODES?", a: "We use high-performance enterprise hardware, typically featuring Ryzen 9 7950X or equivalent processors, DDR5 RAM, and NVMe SSDs for maximum performance." },
                { q: "DOES CODOEN HOSTING LIMIT THE VCPUS AVAILABLE TO GAME SERVERS?", a: "We do not strictly throttle vCPUs. We ensure fair usage policies so that every server gets the processing power it needs for a lag-free experience." },
                { q: "DOES CODOEN HOSTING LEASE OR OWN ITS HARDWARE?", a: "We own the vast majority of our hardware, allowing us to have full control over the specifications, maintenance, and network quality." }
            ]
        }
    ];

    const GAMES_LIST = [
       { name: 'Minecraft', img: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=400&auto=format&fit=crop' },
       { name: 'Vintage Story', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400&auto=format&fit=crop' },
       { name: 'Hytale', img: 'https://images.unsplash.com/photo-1612287230217-969869828789?q=80&w=400&auto=format&fit=crop' },
       { name: 'Valheim', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=400&auto=format&fit=crop' },
       { name: 'Terraria', img: 'https://images.unsplash.com/photo-1599351431202-6e0005a7d746?q=80&w=400&auto=format&fit=crop' },
       { name: 'Project Zomboid', img: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop' },
       { name: 'Palworld', img: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=400&auto=format&fit=crop' },
       { name: 'Farming Simulator 25', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=400&auto=format&fit=crop' },
    ];

    return (
        <div className="bg-[#050b14] min-h-screen pt-20 font-sans text-white">
            {/* Header Section */}
            <div className="bg-[#050b14] pt-16 pb-12 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Home / FAQ</div>
                    <h1 className="font-display font-black text-4xl lg:text-5xl text-white uppercase tracking-tight mb-4">
                        FREQUENTLY ASKED QUESTIONS
                    </h1>
                    <p className="text-gray-400 text-xs mb-12">Click on a question for detailed info.</p>

                    {/* Search and Filter */}
                    <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4">
                        <div className="relative min-w-[200px]">
                            <select className="w-full bg-[#03060a] border border-white/10 text-gray-300 text-xs py-3 px-4 rounded appearance-none focus:outline-none focus:border-indigo-500 uppercase font-bold tracking-wide">
                                <option>All Categories</option>
                                <option>General</option>
                                <option>Billing</option>
                                <option>Minecraft</option>
                                <option>Hardware</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                        </div>
                        <div className="relative flex-1">
                            <input 
                                type="text" 
                                placeholder="Search a question" 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white text-gray-900 placeholder-gray-400 text-xs py-3 px-4 pl-10 rounded focus:outline-none border border-transparent focus:border-indigo-500 font-medium"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Content Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                    {/* Left Column: General & Minecraft */}
                    <div className="space-y-12">
                        {/* General Section */}
                        <div>
                            <h2 className="text-indigo-500 font-bold text-sm uppercase tracking-wider mb-6 border-b border-indigo-500/30 pb-2 inline-block">GENERAL</h2>
                            <div className="space-y-4">
                                {FAQ_DATA.find(c => c.id === 'general')?.items.map((item, idx) => (
                                    <div key={`gen-${idx}`} className="border-b border-white/5 pb-4">
                                        <button 
                                            onClick={() => toggleItem(`gen-${idx}`)}
                                            className="w-full flex justify-between items-start text-left group"
                                        >
                                            <span className={`font-display font-bold text-xs uppercase tracking-wide leading-relaxed transition-colors ${openItem === `gen-${idx}` ? 'text-green-400' : 'text-white group-hover:text-gray-300'}`}>
                                                {item.q}
                                            </span>
                                            {openItem === `gen-${idx}` ? (
                                                <ChevronUp className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                                            ) : (
                                                <ChevronDown className="w-4 h-4 text-gray-500 shrink-0 mt-0.5 group-hover:text-white" />
                                            )}
                                        </button>
                                        {openItem === `gen-${idx}` && (
                                            <div className="mt-3 text-gray-400 text-[11px] leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                                                {item.a}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Minecraft Section */}
                        <div>
                            <h2 className="text-indigo-500 font-bold text-sm uppercase tracking-wider mb-6 border-b border-indigo-500/30 pb-2 inline-block">MINECRAFT</h2>
                            <div className="space-y-4">
                                {FAQ_DATA.find(c => c.id === 'minecraft')?.items.map((item, idx) => (
                                    <div key={`mc-${idx}`} className="border-b border-white/5 pb-4">
                                        <button 
                                            onClick={() => toggleItem(`mc-${idx}`)}
                                            className="w-full flex justify-between items-start text-left group"
                                        >
                                            <span className={`font-display font-bold text-xs uppercase tracking-wide leading-relaxed transition-colors ${openItem === `mc-${idx}` ? 'text-green-400' : 'text-white group-hover:text-gray-300'}`}>
                                                {item.q}
                                            </span>
                                            {openItem === `mc-${idx}` ? (
                                                <ChevronUp className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                                            ) : (
                                                <ChevronDown className="w-4 h-4 text-gray-500 shrink-0 mt-0.5 group-hover:text-white" />
                                            )}
                                        </button>
                                        {openItem === `mc-${idx}` && (
                                            <div className="mt-3 text-gray-400 text-[11px] leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                                                {item.a}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Billing & Hardware */}
                    <div className="space-y-12">
                        {/* Billing Section */}
                        <div>
                            <h2 className="text-indigo-500 font-bold text-sm uppercase tracking-wider mb-6 border-b border-indigo-500/30 pb-2 inline-block">BILLING</h2>
                            <div className="space-y-4">
                                {FAQ_DATA.find(c => c.id === 'billing')?.items.map((item, idx) => (
                                    <div key={`bill-${idx}`} className="border-b border-white/5 pb-4">
                                        <button 
                                            onClick={() => toggleItem(`bill-${idx}`)}
                                            className="w-full flex justify-between items-start text-left group"
                                        >
                                            <span className={`font-display font-bold text-xs uppercase tracking-wide leading-relaxed transition-colors ${openItem === `bill-${idx}` ? 'text-green-400' : 'text-white group-hover:text-gray-300'}`}>
                                                {item.q}
                                            </span>
                                            {openItem === `bill-${idx}` ? (
                                                <ChevronUp className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                                            ) : (
                                                <ChevronDown className="w-4 h-4 text-gray-500 shrink-0 mt-0.5 group-hover:text-white" />
                                            )}
                                        </button>
                                        {openItem === `bill-${idx}` && (
                                            <div className="mt-3 text-gray-400 text-[11px] leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                                                {item.a}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Hardware Section */}
                        <div>
                            <h2 className="text-indigo-500 font-bold text-sm uppercase tracking-wider mb-6 border-b border-indigo-500/30 pb-2 inline-block">HARDWARE</h2>
                            <div className="space-y-4">
                                {FAQ_DATA.find(c => c.id === 'hardware')?.items.map((item, idx) => (
                                    <div key={`hw-${idx}`} className="border-b border-white/5 pb-4">
                                        <button 
                                            onClick={() => toggleItem(`hw-${idx}`)}
                                            className="w-full flex justify-between items-start text-left group"
                                        >
                                            <span className={`font-display font-bold text-xs uppercase tracking-wide leading-relaxed transition-colors ${openItem === `hw-${idx}` ? 'text-green-400' : 'text-white group-hover:text-gray-300'}`}>
                                                {item.q}
                                            </span>
                                            {openItem === `hw-${idx}` ? (
                                                <ChevronUp className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                                            ) : (
                                                <ChevronDown className="w-4 h-4 text-gray-500 shrink-0 mt-0.5 group-hover:text-white" />
                                            )}
                                        </button>
                                        {openItem === `hw-${idx}` && (
                                            <div className="mt-3 text-gray-400 text-[11px] leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                                                {item.a}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Let Our Experts Pick Section */}
            <div className="bg-[#03060a] py-24 border-t border-white/5">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-display font-black text-2xl text-white uppercase tracking-tight mb-2">LET OUR EXPERTS PICK THE RIGHT PLAN FOR YOU</h2>
                    <a href="#" className="text-blue-500 text-xs font-bold hover:text-white transition-colors mb-12 inline-block underline underline-offset-4 decoration-blue-500/50 hover:decoration-white">Choose your hosting!</a>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                         {GAMES_LIST.map((game, i) => (
                             <div key={i} className="group flex flex-col items-center">
                                 <div className="relative rounded-lg overflow-hidden border border-white/10 aspect-[16/9] cursor-pointer w-full mb-3 group-hover:border-blue-500/50 transition-colors">
                                     <img src={game.img} alt={game.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                     <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                 </div>
                                 <span className="font-display font-bold text-white text-[10px] uppercase tracking-wider">{game.name}</span>
                             </div>
                         ))}
                    </div>
                </div>
            </div>

            <StartHereBanner />
        </div>
    );
};

export default FAQPage;