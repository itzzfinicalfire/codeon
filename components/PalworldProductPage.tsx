import React, { useState } from 'react';
import {
    Star, Check, ShieldCheck, Rocket,
    LayoutDashboard, ArrowRightLeft, Box, HardDrive,
    Monitor, ChevronRight, User, Settings,
    Layers, MessageSquare, ChevronDown, ChevronUp,
    BadgeCheck, Zap, Gamepad, Globe
} from 'lucide-react';
import StartHereBanner from './StartHereBanner';
import LocationsMap from './LocationsMap';

// Reusing DashboardMockup for consistency
const DashboardMockup: React.FC<{ activeId: string }> = ({ activeId }) => {
    return (
        <div className="w-full h-full min-h-[400px] bg-[#0f1623] rounded-xl border border-white/10 relative overflow-hidden flex flex-col shadow-2xl">
            <div className="h-10 bg-[#0a101d] border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 bg-[#0f1623] p-6 flex items-center justify-center text-center">
                <div>
                    <div className="w-16 h-16 bg-indigo-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        {activeId === 'easy' && <LayoutDashboard className="w-8 h-8 text-indigo-400" />}
                        {activeId === 'instance' && <Layers className="w-8 h-8 text-indigo-400" />}
                        {activeId === 'swapping' && <ArrowRightLeft className="w-8 h-8 text-indigo-400" />}
                        {activeId === 'modding' && <Box className="w-8 h-8 text-indigo-400" />}
                        {activeId === 'backups' && <HardDrive className="w-8 h-8 text-indigo-400" />}
                        {activeId === 'setup' && <Rocket className="w-8 h-8 text-indigo-400" />}
                        {activeId === 'players' && <User className="w-8 h-8 text-indigo-400" />}
                    </div>
                    <h4 className="text-white font-bold text-lg mb-2">Codoen Panel v2.0</h4>
                    <p className="text-gray-500 text-sm max-w-xs mx-auto">
                        Managing your Palworld server is simple with our custom built control panel. Feature: {activeId.toUpperCase().replace('-', ' ')}
                    </p>
                </div>
            </div>
        </div>
    );
};

const PalworldProductPage: React.FC = () => {
    const [billingCycle, setBillingCycle] = useState('Monthly');
    const [activeFeature, setActiveFeature] = useState('easy');
    const [activePeaceTab, setActivePeaceTab] = useState('ddos');
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    const billingOptions = [
        { id: 'Monthly', label: 'Monthly' },
        { id: 'Quarterly', label: 'Quarterly' },
        { id: 'Semi-annually', label: 'Semi-annually' },
        { id: 'Annually', label: 'Annually' },
    ];

    const PLANS = [
        {
            ram: "5GB",
            bonus: "+4GB",
            price: "$17.99",
            desc: "A CodoenOne game server with Palworld pre-installed.",
            features: ["Supports 10 other games", "Includes a RAM Boost", "1-10 players"]
        },
        {
            ram: "8GB",
            bonus: "+4GB",
            price: "$23.99",
            badge: "Most Popular",
            desc: "A CodoenOne game server with Palworld pre-installed.",
            features: ["Supports 116 other games", "Includes a RAM Boost", "10-20 players"]
        },
        {
            ram: "10GB",
            bonus: "+4GB",
            price: "$29.99",
            desc: "A CodoenOne game server with Palworld pre-installed.",
            features: ["Supports 116 other games", "Includes a RAM Boost", "20-32 players"]
        }
    ];

    const WHY_CHOOSE_TABS = [
        { id: 'easy', title: 'EASY TO USE', icon: LayoutDashboard, desc: "Our custom-built control panel makes server management much less daunting. With its user-first design, we've made customizing and controlling the depth of server hosting look that professionals love more approachable than ever." },
        { id: 'instance', title: 'INSTANCE MANAGER', icon: Layers, desc: "Create and manage multiple server instances from a single control panel." },
        { id: 'swapping', title: 'GAME SWAPPING', icon: ArrowRightLeft, desc: "Swap between Palworld and over 100 other games instantly." },
        { id: 'modding', title: 'MODDING SUPPORT', icon: Box, desc: "Full mod support with easy one-click installation for popular mods." },
        { id: 'backups', title: 'BACKUPS MANAGER', icon: HardDrive, desc: "Automated daily backups kept for 7 days to keep your progress safe." },
        { id: 'setup', title: 'INSTANT SETUP', icon: Rocket, desc: "Your server is online and ready to play seconds after payment." },
        { id: 'players', title: 'PLAYER MANAGEMENT', icon: User, desc: "Easily manage whitelist, bans, and player permissions." },
    ];

    const PALWORLD_FAQS = [
        { q: "HOW DO I SET UP A PALWORLD SERVER?", a: "Setting up is instant! Choose your plan, complete the purchase, and your server will be automatically deployed. You'll receive an email with login details to our control panel where you can start playing immediately." },
        { q: "WHAT PLATFORMS CAN JOIN MY PALWORLD SERVER FOR CROSSPLAY?", a: "Our servers support crossplay between Steam and Xbox (Game Pass PC) users. You can toggle this setting easily in our control panel." },
        { q: "DOES MY PALWORLD SERVER HOSTING COME WITH MOD SUPPORT?", a: "Yes! We support Palworld mods (Pak mods and Lua mods). You can install them easily via FTP or our file manager." },
        { q: "WHY IS CODOEN HOSTING THE BEST PALWORLD SERVER HOST?", a: "We offer premium hardware (Ryzen 9), instant setup, free DDoS protection, and 24/7 expert support specifically trained for Palworld issues." },
        { q: "WILL MY PALWORLD DEDICATED SERVER BE ONLINE 24/7?", a: "Yes, your server runs 24/7 on our enterprise infrastructure, allowing you and your friends to connect anytime." },
        { q: "HOW CAN I CUSTOMIZE MY PALWORLD SERVER?", a: "You have full access to PalWorldSettings.ini and other config files through our easy-to-use config editor, allowing you to change XP rates, catch rates, and more." }
    ];

    return (
        <div className="bg-[#050b14] min-h-screen pt-20 font-sans text-white">
            {/* 1. HERO SECTION */}
            <div className="relative overflow-hidden bg-[#0a101d] border-b border-white/5">
                {/* Background Art */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614294148960-9aa740632a87?q=80&w=2000')] bg-cover bg-center opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#050b14]/60 via-[#050b14]/80 to-[#050b14]"></div>

                <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Hero Art Card */}
                        <div className="w-full md:w-1/3">
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                                <img src="https://i.postimg.cc/pVDvc2nR/image.png" alt="Palworld" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                                    <div className="bg-white/10 backdrop-blur px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-white border border-white/20">
                                        <Monitor className="w-3 h-3 inline mr-1" /> PC
                                    </div>
                                    <div className="bg-white/10 backdrop-blur px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-white border border-white/20">
                                        Steam
                                    </div>
                                    <div className="bg-white/10 backdrop-blur px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-white border border-white/20">
                                        Cross-Play
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-6">
                            <h1 className="font-display font-black text-5xl lg:text-7xl uppercase italic tracking-tighter leading-none">
                                Palworld <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Server Hosting</span>
                            </h1>
                            <ul className="space-y-2">
                                {[
                                    "Full Mod Support", "Instant Setup", "3 Days of Free Server Backups",
                                    "Swap Between 100+ Games", "24/7/365 Support"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-gray-300">
                                        <div className="bg-indigo-600 rounded-full p-0.5"><Check className="w-3 h-3 text-white" /></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex items-center gap-4 pt-4">
                                <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded uppercase tracking-wider transition-colors shadow-lg shadow-indigo-900/40">
                                    Choose a Plan
                                </button>
                                <div className="bg-[#00b67a] px-3 py-1 rounded flex items-center gap-2">
                                    <div className="flex text-white">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                                    </div>
                                    <span className="text-[10px] font-bold text-white">Based on 23,000+ reviews on Trustpilot</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. PLANS SECTION */}
            <div id="pricing" className="py-24 bg-[#050b14] relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                        <div className="flex items-center gap-2">
                            <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight">Game On With <span className="text-indigo-500">CodoenOne™</span></h2>
                        </div>

                        <div className="bg-[#0f1623] p-1 rounded-lg flex border border-white/10">
                            {billingOptions.map(opt => (
                                <button
                                    key={opt.id}
                                    onClick={() => setBillingCycle(opt.id)}
                                    className={`px-4 py-2 text-[10px] font-bold uppercase rounded transition-colors ${billingCycle === opt.id ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'}`}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {PLANS.map((plan, i) => (
                            <div key={i} className="bg-[#0f1623] border border-white/10 rounded-xl p-6 relative group hover:border-indigo-500/50 transition-colors flex flex-col overflow-hidden">
                                {plan.badge && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg z-10">
                                        {plan.badge}
                                    </div>
                                )}

                                {/* Background Glow */}
                                <div className="absolute top-0 left-0 w-full h-32 bg-indigo-900/20 blur-2xl"></div>

                                {/* Icon Art Placeholder - Server Stack */}
                                <div className="h-32 mb-4 flex items-center justify-center relative z-10">
                                    <div className="relative w-20 h-20">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#2e1065] rotate-45 rounded-lg border border-indigo-500/50 shadow-lg z-10"></div>
                                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#4c1d95] rotate-45 rounded-lg border border-indigo-500/50 shadow-lg z-20"></div>
                                        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#6d28d9] rotate-45 rounded-lg shadow-xl border border-indigo-400 z-30 flex items-center justify-center">
                                            <Layers className="w-6 h-6 text-white -rotate-45" />
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center mb-6 relative z-10">
                                    <div className="flex items-center justify-center gap-1 mb-1">
                                        <h3 className="font-display font-black text-4xl text-white">{plan.ram}</h3>
                                        <span className="text-green-400 font-bold text-sm italic">{plan.bonus}</span>
                                    </div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase mb-4 h-8 px-2">{plan.desc}</p>
                                    <div className="text-2xl font-bold text-white mb-4">{plan.price}<span className="text-xs text-gray-500 font-normal"> /mo</span></div>
                                    <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded text-xs uppercase transition-colors shadow-lg shadow-indigo-900/20">
                                        Buy Plan
                                    </button>
                                </div>

                                <div className="space-y-2 pt-4 border-t border-white/5 relative z-10">
                                    {plan.features.map((feat, j) => (
                                        <div key={j} className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase">
                                            <Check className="w-3 h-3 text-indigo-500" />
                                            {feat}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Custom Plan Card */}
                        <div className="bg-[#0f1623] border border-white/10 rounded-xl p-6 relative flex flex-col items-center justify-center text-center group hover:border-indigo-500/50 transition-colors overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-32 bg-indigo-900/20 blur-2xl"></div>
                            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-4 relative z-10">
                                <Settings className="w-10 h-10 text-gray-400" />
                            </div>
                            <h3 className="font-display font-black text-2xl text-white mb-1 relative z-10">6-48GB</h3>
                            <p className="text-[10px] text-gray-500 font-bold uppercase mb-4 relative z-10">STARTING AT <span className="text-white">$17.99</span></p>
                            <p className="text-xs text-gray-400 mb-6 relative z-10">Need help? Let us help you pick a plan that's right for you.</p>
                            <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded text-xs uppercase transition-colors w-full relative z-10">
                                Help Me Decide
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. WHY CHOOSE SECTION */}
            <div className="py-24 bg-[#050b14] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight">WHY CHOOSE CODOEN HOSTING?</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-2">
                            {WHY_CHOOSE_TABS.map(tab => (
                                <div
                                    key={tab.id}
                                    onClick={() => setActiveFeature(tab.id)}
                                    className={`p-4 rounded-lg cursor-pointer transition-all ${activeFeature === tab.id ? 'bg-[#0f1623] border border-indigo-500/50 shadow-[0_0_20px_rgba(79,70,229,0.1)]' : 'border border-transparent hover:bg-white/5'}`}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <tab.icon className={`w-5 h-5 ${activeFeature === tab.id ? 'text-indigo-400' : 'text-gray-500'}`} />
                                            <span className={`font-bold text-sm uppercase tracking-wide ${activeFeature === tab.id ? 'text-white' : 'text-gray-400'}`}>{tab.title}</span>
                                        </div>
                                        <ChevronUp className={`w-4 h-4 transition-transform ${activeFeature === tab.id ? 'rotate-0 text-indigo-400' : 'rotate-180 text-gray-600'}`} />
                                    </div>
                                    {activeFeature === tab.id && (
                                        <p className="text-xs text-gray-400 leading-relaxed pl-8">
                                            {tab.desc}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div>
                            <DashboardMockup activeId={activeFeature} />
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. PEACE OF MIND SECTION (Purple Theme) */}
            <div className="bg-[#2e1065] relative overflow-hidden flex flex-col min-h-[600px]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2e1065] to-[#4c1d95]"></div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-full bg-indigo-500/10 blur-3xl"></div>

                <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col lg:flex-row items-center justify-center gap-16 relative z-10 w-full">
                    {activePeaceTab === 'ddos' ? (
                        <>
                            <div className="relative animate-in fade-in zoom-in duration-300">
                                <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center relative">
                                    {/* Shield graphic placeholder */}
                                    <div className="w-48 h-56 bg-white rounded-b-full rounded-t-lg flex items-center justify-center shadow-2xl relative z-10">
                                        <Monitor className="w-24 h-24 text-[#2e1065]" />
                                    </div>
                                    {/* Orbiting particles */}
                                    <div className="absolute inset-0 border-4 border-white/20 rounded-full animate-spin-slow"></div>
                                    <div className="absolute -inset-4 border border-white/10 rounded-full animate-pulse"></div>
                                </div>
                            </div>

                            <div className="max-w-xl text-center lg:text-left animate-in fade-in slide-in-from-right-4 duration-300">
                                <div className="inline-block bg-white/20 backdrop-blur px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-white mb-4 border border-white/10">
                                    DDoS Protection
                                </div>
                                <h2 className="font-display font-black text-3xl md:text-5xl text-white mb-6 uppercase leading-tight">PEACE OF MIND</h2>
                                <p className="text-gray-200 text-lg leading-relaxed mb-8 font-light">
                                    There are more than 100 different and unique Pals to see, capture, or conquer in Palworld. While you're focused on finding each one, we'll focus on server security and keep your data secure with our free DDoS protection.
                                </p>
                            </div>
                        </>
                    ) : activePeaceTab === 'locations' ? (
                        <>
                            <div className="flex-1 w-full max-w-2xl relative animate-in fade-in zoom-in duration-500">
                                <div className="relative w-full aspect-[16/9] lg:aspect-[2/1] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#1e0b4b]">
                                    {/* Map Background */}
                                    <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/2/23/Blue_Marble_2002.png')] bg-contain bg-center bg-no-repeat opacity-40 mix-blend-screen grayscale"></div>

                                    {/* Map Dots / Labels */}
                                    {/* NA */}
                                    <div className="absolute top-[25%] left-[20%] flex flex-col items-center">
                                        <div className="bg-white text-[#2e1065] text-[8px] font-bold px-1.5 py-0.5 rounded shadow-lg mb-1 whitespace-nowrap">NORTH AMERICA</div>
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 rounded-full bg-slate-700 border border-white/50 flex items-center justify-center text-[6px]">🇺🇸</div>
                                            <div className="w-2 h-2 rounded-full bg-slate-700 border border-white/50 flex items-center justify-center text-[6px]">🇺🇸</div>
                                            <div className="w-2 h-2 rounded-full bg-slate-700 border border-white/50 flex items-center justify-center text-[6px]">🇨🇦</div>
                                        </div>
                                    </div>

                                    {/* SA */}
                                    <div className="absolute top-[65%] left-[28%] flex flex-col items-center">
                                        <div className="bg-white text-[#2e1065] text-[8px] font-bold px-1.5 py-0.5 rounded shadow-lg mb-1 whitespace-nowrap">SOUTH AMERICA</div>
                                        <div className="w-2 h-2 rounded-full bg-slate-700 border border-white/50 flex items-center justify-center text-[6px]">🇧🇷</div>
                                    </div>

                                    {/* EU */}
                                    <div className="absolute top-[22%] left-[48%] flex flex-col items-center">
                                        <div className="bg-white text-[#2e1065] text-[8px] font-bold px-1.5 py-0.5 rounded shadow-lg mb-1 whitespace-nowrap">EUROPE</div>
                                        <div className="flex gap-1 flex-wrap justify-center w-12">
                                            <div className="w-2 h-2 rounded-full bg-slate-700 border border-white/50 flex items-center justify-center text-[6px]">🇬🇧</div>
                                            <div className="w-2 h-2 rounded-full bg-slate-700 border border-white/50 flex items-center justify-center text-[6px]">🇩🇪</div>
                                            <div className="w-2 h-2 rounded-full bg-slate-700 border border-white/50 flex items-center justify-center text-[6px]">🇫🇷</div>
                                        </div>
                                    </div>

                                    {/* ASIA */}
                                    <div className="absolute top-[35%] left-[72%] flex flex-col items-center">
                                        <div className="bg-white text-[#2e1065] text-[8px] font-bold px-1.5 py-0.5 rounded shadow-lg mb-1 whitespace-nowrap">ASIA</div>
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 rounded-full bg-slate-700 border border-white/50 flex items-center justify-center text-[6px]">🇮🇳</div>
                                            <div className="w-2 h-2 rounded-full bg-slate-700 border border-white/50 flex items-center justify-center text-[6px]">🇸🇬</div>
                                            <div className="w-2 h-2 rounded-full bg-slate-700 border border-white/50 flex items-center justify-center text-[6px]">🇯🇵</div>
                                        </div>
                                    </div>

                                    {/* OCEAN */}
                                    <div className="absolute top-[70%] left-[82%] flex flex-col items-center">
                                        <div className="bg-white text-[#2e1065] text-[8px] font-bold px-1.5 py-0.5 rounded shadow-lg mb-1 whitespace-nowrap">SOUTH PACIFIC</div>
                                        <div className="w-2 h-2 rounded-full bg-slate-700 border border-white/50 flex items-center justify-center text-[6px]">🇦🇺</div>
                                    </div>
                                </div>
                            </div>

                            <div className="max-w-xl text-center lg:text-left animate-in fade-in slide-in-from-right-4 duration-300">
                                <div className="inline-block bg-white text-[#2e1065] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                                    21 Locations
                                </div>
                                <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-6 uppercase leading-tight">
                                    MULTIPLE WORLDWIDE LOCATIONS
                                </h2>
                                <p className="text-gray-200 text-sm leading-relaxed font-light">
                                    Our Palworld server hosting is available from 21 locations around the world. Choosing the location closest to you ensures lower ping and latency, and you can automatically transfer your server to any of our locations, free of charge, at any time!
                                </p>
                            </div>
                        </>
                    ) : (
                        <div className="text-center text-white opacity-50">
                            <h3 className="text-2xl font-bold">Content for {activePeaceTab} goes here</h3>
                        </div>
                    )}
                </div>

                {/* Navigation Bar at bottom */}
                <div className="bg-[#1e0b4b] border-t border-white/10 relative z-10 mt-auto">
                    <div className="max-w-7xl mx-auto px-4 flex justify-center">
                        <div className="flex overflow-x-auto scrollbar-hide">
                            <button
                                onClick={() => setActivePeaceTab('ddos')}
                                className={`px-8 py-4 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${activePeaceTab === 'ddos' ? 'bg-[#5b21b6] text-white border-b-2 border-purple-400' : 'text-gray-400 hover:text-white'}`}
                            >
                                DDoS Protection
                            </button>
                            <button
                                onClick={() => setActivePeaceTab('locations')}
                                className={`px-8 py-4 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${activePeaceTab === 'locations' ? 'bg-[#5b21b6] text-white border-b-2 border-purple-400' : 'text-gray-400 hover:text-white'}`}
                            >
                                21 Locations
                            </button>
                            {['High Performance', 'Support'].map((item, i) => {
                                const id = item === 'High Performance' ? 'performance' : 'support';
                                return (
                                    <button
                                        key={i}
                                        onClick={() => setActivePeaceTab(id)}
                                        className={`px-8 py-4 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${activePeaceTab === id ? 'bg-[#5b21b6] text-white border-b-2 border-purple-400' : 'text-gray-400 hover:text-white'}`}
                                    >
                                        {item}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. MAKE YOUR MARK SECTION */}
            <div className="bg-[#050b14] py-24 border-t border-white/5 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        {/* Text */}
                        <div className="flex-1 space-y-6">
                            <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight">MAKE YOUR MARK</h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                The Pals of Palworld might be cute and helpful, but you don't have to be their friend. Palworld allows players to make good or evil choices. As a result, you can be a heroic buddy to all Pals, or a steel-hearted industrialist who steps on as many Pals as they need to succeed. Your path is in your hands!
                            </p>
                        </div>

                        {/* Image */}
                        <div className="flex-1 w-full">
                            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
                                <img src="https://images.unsplash.com/photo-1599351431202-6e0005a7d746?q=80&w=1000&auto=format&fit=crop" alt="Palworld Gameplay" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 hue-rotate-15" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 6. READY TO HOST CTA */}
            <div className="bg-[#050b14] pb-24 relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="bg-[#0f1623] rounded-2xl border border-white/10 p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
                        {/* Background subtle glow */}
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-3xl"></div>

                        <div className="flex items-center gap-8 relative z-10">
                            {/* Character Image (Lamball) */}
                            <div className="w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-full border-4 border-white/10 flex items-center justify-center shrink-0 overflow-hidden">
                                <img src="https://static.wikia.nocookie.net/palworld/images/0/01/Lamball_menu.png" alt="Lamball" className="w-full h-full object-contain p-2 hover:scale-110 transition-transform" />
                            </div>

                            <div>
                                <h3 className="font-display font-black text-xl md:text-2xl text-white uppercase italic">READY TO HOST YOUR PALWORLD DEDICATED SERVER?</h3>
                                <p className="text-gray-400 text-xs mt-2 max-w-lg">Embark on a bizarre journey with mysterious creatures by securing your own Palworld dedicated server with Codoen Hosting today!</p>
                            </div>
                        </div>

                        <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded uppercase text-xs tracking-wider transition-colors shadow-lg shadow-blue-900/40 whitespace-nowrap z-10">
                            CREATE SERVER
                        </button>
                    </div>
                </div>
            </div>

            {/* 7. WORLDWIDE LOCATIONS */}
            <LocationsMap />

            {/* 8. FAQ SECTION */}
            <div className="bg-[#050b14] pb-24 pt-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="font-display font-black text-2xl text-white uppercase tracking-tight">FREQUENTLY ASKED QUESTIONS</h2>
                        <button className="bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold px-4 py-2 rounded uppercase tracking-wider transition-colors">
                            VIEW ALL FAQ
                        </button>
                    </div>

                    <div className="space-y-3">
                        {PALWORLD_FAQS.map((item, index) => (
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

            {/* 9. REVIEWS SECTION */}
            <div className="bg-[#050b14] pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="font-display font-black text-2xl text-white uppercase tracking-tight">READ REVIEWS FROM TRUSTPILOT</h2>
                        <button className="text-gray-400 text-[10px] font-bold uppercase hover:text-white transition-colors flex items-center gap-1">
                            SEE ALL REVIEWS <ChevronRight className="w-3 h-3" />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { user: "PalTamer99", title: "Excellent Performance", content: "Moved my local co-op world to Codoen Hosting because of lag. The difference is night and day. Setup was instant and FTP access made moving the save easy." },
                            { user: "GuildMasterX", title: "Great for big groups", content: "Hosting a guild server for 20 people. The 10GB plan handles it perfectly even with big bases and lots of Pals working. Support helped me configure the settings." },
                            { user: "CasualGamer", title: "Super easy to use", content: "I've never hosted a server before but the panel made it super simple. Changed settings, added a password, and restarted in seconds. Highly recommend." }
                        ].map((review, i) => (
                            <div key={i} className="bg-[#0f1623] p-8 rounded-xl border border-white/5 relative group hover:border-white/10 transition-colors">
                                <div className="flex gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map(s => <div key={s} className="bg-[#00b67a] p-1 rounded-sm"><Star className="w-3 h-3 text-white fill-white" /></div>)}
                                </div>
                                <h3 className="font-bold text-white text-sm mb-2">"{review.title}"</h3>
                                <p className="text-gray-400 text-xs leading-relaxed mb-8 min-h-[60px]">{review.content}</p>

                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold text-white">
                                        <User className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-white">{review.user}</div>
                                        <div className="text-[10px] text-gray-500 flex items-center gap-1">
                                            <div className="w-2 h-2 rounded-full bg-[#00b67a]"></div> Verified customer
                                        </div>
                                    </div>
                                </div>

                                <button className="text-[10px] font-bold text-gray-500 uppercase flex items-center gap-1 group-hover:text-white transition-colors">
                                    OPEN REVIEW <ChevronRight className="w-3 h-3" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 10. OTHER GAMES SECTION */}
            <div className="bg-[#03060a] py-24 border-t border-white/5">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-display font-black text-2xl text-white uppercase tracking-tight mb-12">OTHER GAMES</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        {[
                            { name: 'Minecraft', img: 'https://i.postimg.cc/8cK6BM8H/image.png' },
                            { name: 'Vintage Story', img: 'https://i.postimg.cc/1Xj8NS6N/image.png' },
                            { name: 'Hytale', img: 'https://i.postimg.cc/hG1h1TT9/image.png' },
                            { name: 'Valheim', img: 'https://i.postimg.cc/PJgtj51d/image.png' },
                            { name: 'Terraria', img: 'https://i.postimg.cc/4NRdqWPZ/image.png' },
                            { name: 'Project Zomboid', img: 'https://i.postimg.cc/mg2bWJHW/image.png' },
                            { name: 'Palworld', img: 'https://i.postimg.cc/8C7Njvwz/image.png' },
                            { name: 'Farming Simulator 25', img: 'https://i.postimg.cc/CMGYBSCn/image.png' },
                        ].map((game, i) => (
                            <div key={i} className="group relative rounded-lg overflow-hidden border border-white/10 aspect-[16/9] cursor-pointer">
                                <img src={game.img} alt={game.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <span className="font-display font-bold text-white text-sm uppercase tracking-wider drop-shadow-lg text-center px-2">{game.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded uppercase text-xs tracking-wider transition-colors shadow-lg">
                        See All 100+ Games
                    </button>
                </div>
            </div>

            {/* 11. START HERE BANNER */}
            <div className="bg-[#050b14]">
                <StartHereBanner />
            </div>
        </div>
    );
};

export default PalworldProductPage;