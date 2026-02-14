import React, { useState } from 'react';
import {
    Star, Check, ShieldCheck, Rocket,
    LayoutDashboard, ArrowRightLeft, Box, HardDrive,
    Monitor, Gamepad, ChevronRight, User, Settings,
    MessageSquare, Layers, HelpCircle, Play, Globe,
    ChevronDown, ChevronUp
} from 'lucide-react';
import StartHereBanner from './StartHereBanner';
import LocationsMap from './LocationsMap';

// Mockup for the Dashboard in "Why Choose"
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
                        Managing your Hytale server is simple with our custom built control panel. Feature: {activeId.toUpperCase().replace('-', ' ')}
                    </p>
                </div>
            </div>
        </div>
    );
};

const HytaleProductPage: React.FC = () => {
    const [billingCycle, setBillingCycle] = useState('Monthly');
    const [activeFeature, setActiveFeature] = useState('easy');
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
            ram: "4GB",
            price: "$11.99",
            desc: "A solid starter server for Hytale pre-installed.",
            features: ["Supports 10 other games", "Includes a RAM Boost", "Great for Vanilla Experiences"]
        },
        {
            ram: "5GB",
            price: "$17.99",
            badge: "Most Popular",
            desc: "A standard game server with Hytale pre-installed.",
            features: ["Supports 20 other games", "Includes a RAM Boost", "Great for 1-10 Mods"]
        },
        {
            ram: "12GB",
            price: "$35.99",
            desc: "A high-end game server with Hytale pre-installed.",
            features: ["Supports 50 other games", "Includes a RAM Boost", "Supports Any Number of Players"]
        }
    ];

    const WHY_CHOOSE_TABS = [
        { id: 'easy', title: 'EASY TO USE', icon: LayoutDashboard },
        { id: 'instance', title: 'INSTANCE MANAGER', icon: Layers },
        { id: 'swapping', title: 'GAME SWAPPING', icon: ArrowRightLeft },
        { id: 'modding', title: 'MODDING SUPPORT', icon: Box },
        { id: 'backups', title: 'BACKUPS MANAGER', icon: HardDrive },
        { id: 'setup', title: 'INSTANT SETUP', icon: Rocket },
        { id: 'players', title: 'PLAYER MANAGEMENT', icon: User },
    ];

    const HYTALE_FAQS = [
        { q: "HOW DO I SET UP A HYTALE DEDICATED SERVER?", a: "Once Hytale is released, setting up a server will be instant with Codoen Hosting. Simply choose your plan, complete the checkout, and your server will be deployed automatically within seconds." },
        { q: "CAN I INSTALL MODS ON MY HYTALE SERVER?", a: "Yes! Hytale is built with modding in mind. Our panel will support one-click installations for mods and scripts as soon as they become available." },
        { q: "WHY IS CODOEN HOSTING THE BEST HYTALE SERVER HOST?", a: "We offer premium hardware, instant setup, and 24/7 support. Plus, we've been preparing for Hytale's launch to ensure day-one compatibility and performance." },
        { q: "HOW MANY PLAYERS CAN JOIN MY HYTALE SERVER?", a: "This depends on the plan you choose. Our higher-tier plans support more players. Hytale is designed to support large communities." },
        { q: "WHAT PLATFORMS ARE SUPPORTED ON MY HYTALE SERVER?", a: "Hytale is launching on PC (Windows/Mac) and potentially consoles. Our servers will support the primary PC version at launch." },
        { q: "WHAT CAN I CUSTOMIZE ON MY HYTALE SERVER?", a: "You'll have full access to server configuration files, allowing you to tweak game rules, world generation, and more." },
        { q: "HOW MUCH RAM WILL MY HYTALE SERVER COME WITH?", a: "Our plans range from 4GB to 12GB+ RAM, ensuring smooth gameplay whether you're running a small vanilla server or a large modded community." }
    ];

    return (
        <div className="bg-[#050b14] min-h-screen pt-20 font-sans text-white">
            {/* 1. HERO SECTION */}
            <div className="relative overflow-hidden bg-[#0a101d] border-b border-white/5">
                <div className="absolute inset-0 bg-[url('https://cdn.wallpapersafari.com/26/50/l6A4E3.jpg')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#050b14]/80 via-[#050b14]/90 to-[#050b14]"></div>

                <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Hero Art */}
                        <div className="w-full md:w-1/3">
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                                <img src="https://i.postimg.cc/tggHvWGh/image.png" alt="Hytale" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-white border border-white/20">
                                    <Monitor className="w-3 h-3 inline mr-1" /> PC
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-6">
                            <h1 className="font-display font-black text-5xl lg:text-7xl uppercase italic tracking-tighter leading-none">
                                Hytale Server <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Hosting</span>
                            </h1>
                            <ul className="space-y-2">
                                {[
                                    "Modding Support", "Instant Setup", "7 Days of Free Server Backups",
                                    "21 Worldwide Locations", "Swap between 100+ Games"
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
                                    <span className="text-[10px] font-bold text-white">Trustpilot</span>
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
                        <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight">Game On With <span className="text-indigo-500">Codoen</span></h2>

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
                            <div key={i} className="bg-[#0f1623] border border-white/10 rounded-xl p-6 relative group hover:border-indigo-500/50 transition-colors">
                                {plan.badge && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                                        {plan.badge}
                                    </div>
                                )}

                                {/* Icon Art Placeholder */}
                                <div className="h-32 mb-4 flex items-center justify-center">
                                    {/* Simplified isometric cube stack */}
                                    <div className="relative w-24 h-24">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-indigo-500/20 rotate-45 rounded-lg border border-indigo-500/50"></div>
                                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-indigo-500/40 rotate-45 rounded-lg border border-indigo-500/50"></div>
                                        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-indigo-500 rotate-45 rounded-lg shadow-lg flex items-center justify-center">
                                            <span className="text-white font-black -rotate-45">{plan.ram}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center mb-6">
                                    <h3 className="font-display font-black text-3xl text-white">{plan.ram}</h3>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase mb-4">{plan.desc}</p>
                                    <div className="text-2xl font-bold text-white mb-4">{plan.price}<span className="text-xs text-gray-500 font-normal"> /mo</span></div>
                                    <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 rounded text-xs uppercase transition-colors">
                                        Buy Plan
                                    </button>
                                </div>

                                <div className="space-y-2 pt-4 border-t border-white/5">
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
                        <div className="bg-[#0f1623] border border-white/10 rounded-xl p-6 relative flex flex-col items-center justify-center text-center group hover:border-indigo-500/50 transition-colors">
                            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-4">
                                <Settings className="w-10 h-10 text-gray-400" />
                            </div>
                            <h3 className="font-display font-black text-2xl text-white mb-1">4-48GB</h3>
                            <p className="text-[10px] text-gray-500 font-bold uppercase mb-4">STARTING AT <span className="text-white">$11.99</span></p>
                            <p className="text-xs text-gray-400 mb-6">Need help? Let us help you pick a plan that's right for you.</p>
                            <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-6 rounded text-xs uppercase transition-colors">
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
                                    className={`p-4 rounded-lg cursor-pointer flex items-center justify-between border transition-all ${activeFeature === tab.id ? 'bg-[#0f1623] border-indigo-500 text-white' : 'border-transparent text-gray-400 hover:text-white hover:bg-white/5'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <tab.icon className="w-5 h-5" />
                                        <span className="font-bold text-sm uppercase tracking-wide">{tab.title}</span>
                                    </div>
                                    {activeFeature === tab.id ? <ChevronRight className="w-4 h-4 text-indigo-500" /> : <ChevronRight className="w-4 h-4 opacity-0" />}
                                </div>
                            ))}
                        </div>

                        <div>
                            <DashboardMockup activeId={activeFeature} />
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. GAMEPLAY & ADVENTURE SECTION */}
            <div className="bg-[#050b14] py-24 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Video Thumbnail */}
                        <div className="flex-1 w-full relative group cursor-pointer">
                            <div className="aspect-video bg-[#0f1623] rounded-lg border-2 border-indigo-500/30 overflow-hidden relative shadow-2xl shadow-indigo-900/20">
                                <img src="https://i.postimg.cc/tggHvWGh/image.png" alt="Hytale Gameplay" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full group-hover:scale-110 transition-transform">
                                        <Play className="w-8 h-8 text-white fill-white" />
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-4">
                                    <div className="bg-indigo-600/90 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-white">HYTALE GAMEPLAY</div>
                                </div>
                            </div>
                        </div>

                        {/* Text */}
                        <div className="flex-1 space-y-6">
                            <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase tracking-tight">
                                A NEW ADVENTURE AWAITS
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Hytale promises all kinds of exciting adventures for players brave enough to take on the vibrant planet of Orbis. Explore diverse biomes, navigate tricky dungeons, fight dangerous foes, and build something worthy of legend! It's all in your hands.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. MYSTERY SECTION & CTA */}
            <div className="bg-[#0a101d] py-24 border-y border-white/5 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16 mb-16">
                        {/* Text */}
                        <div className="flex-1 space-y-6">
                            <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase tracking-tight">
                                MYSTERY AROUND EACH CORNER
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Like any good adventure, Hytale offers plenty of surprises and unique encounters. Maybe you'll meet skeletons in the basement of an abandoned shack. Perhaps a massive cathedral filled with hostile Trorks. You never know what each new environment will bring!
                            </p>
                        </div>
                        {/* Image */}
                        <div className="flex-1 w-full">
                            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl rotate-3 group hover:rotate-0 transition-transform duration-500">
                                <img src="https://i.postimg.cc/BQMgJK1X/image.png" alt="Hytale World" className="w-full h-full object-cover opacity-80" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Bar */}
                    <div className="bg-gradient-to-r from-indigo-900/40 to-blue-900/40 border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="relative z-10 flex items-start gap-6">
                            <div className="hidden md:block w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 border border-blue-500/30">
                                <Rocket className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="font-display font-black text-xl text-white uppercase mb-2">READY TO HOST YOUR HYTALE DEDICATED SERVER?</h3>
                                <p className="text-gray-400 text-xs max-w-lg">Begin your endless sandbox adventure by securing your Hytale dedicated server today!</p>
                            </div>
                        </div>
                        <button className="relative z-10 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded uppercase text-xs tracking-wider transition-all shadow-lg shadow-indigo-900/40 whitespace-nowrap">
                            CREATE SERVER
                        </button>
                    </div>
                </div>
            </div>

            {/* 6. LOCATIONS SECTION */}
            <LocationsMap />

            {/* 7. SUPPORT SECTION */}
            <div className="bg-[#050b14] py-24 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight">FRIENDLY AND PROFESSIONAL SUPPORT</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-[#0a101d] border border-cyan-500/30 p-8 rounded-2xl relative overflow-hidden group">
                            <div className="w-12 h-12 bg-cyan-900/30 rounded-lg flex items-center justify-center mb-6 text-cyan-400 border border-cyan-500/30">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <h3 className="font-display font-bold text-white text-sm uppercase mb-4 tracking-wide">INDUSTRY-STANDARD SUPPORT</h3>
                            <p className="text-gray-400 text-xs leading-relaxed mb-6">
                                At Codoen Hosting, our highest priority is to give our users the best possible Hytale server hosting experience from start to finish. To help us achieve this goal, our professional, 24/7 support staff is always available to answer questions and assist with any issues!
                            </p>
                            <button className="text-cyan-400 text-[10px] font-bold uppercase flex items-center gap-2 hover:text-white transition-colors">
                                Need help with anything? <ChevronRight className="w-3 h-3" />
                            </button>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#0a101d] border border-white/5 p-8 rounded-2xl relative overflow-hidden group hover:border-white/10 transition-colors">
                            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-gray-400 border border-white/10">
                                <User className="w-6 h-6" />
                            </div>
                            <h3 className="font-display font-bold text-white text-sm uppercase mb-4 tracking-wide">EXPERIENCED STAFF</h3>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                At Codoen Hosting, we don't just build dedicated servers, we play on them too! As a result, we know what to look for when you need help and can provide tailored advice based on real experience.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#0a101d] border border-white/5 p-8 rounded-2xl relative overflow-hidden group hover:border-white/10 transition-colors">
                            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-gray-400 border border-white/10">
                                <Settings className="w-6 h-6" />
                            </div>
                            <h3 className="font-display font-bold text-white text-sm uppercase mb-4 tracking-wide">PERSONALIZED SUPPORT</h3>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                When you reach out to our support team, you'll always receive personalized assistance tailored to meet your specific needs. No generic copy-paste answers here!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 8. FAQ SECTION */}
            <div className="bg-[#050b14] py-24 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="font-display font-black text-2xl text-white uppercase tracking-tight">FREQUENTLY ASKED QUESTIONS</h2>
                        <button className="bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold px-4 py-2 rounded uppercase tracking-wider transition-colors">
                            VIEW ALL FAQ
                        </button>
                    </div>

                    <div className="space-y-3">
                        {HYTALE_FAQS.map((item, index) => (
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
            <div className="bg-[#050b14] py-24 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="font-display font-black text-2xl text-white uppercase tracking-tight">READ REVIEWS FROM TRUSTPILOT</h2>
                        <button className="text-gray-400 text-[10px] font-bold uppercase hover:text-white transition-colors flex items-center gap-1">
                            SEE ALL REVIEWS <ChevronRight className="w-3 h-3" />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                user: "Austin",
                                title: "Amazing Service",
                                content: "He was Very efficient with what he had to do 10/10"
                            },
                            {
                                user: "Noblesofhelvetia Helvetia",
                                title: "Very Good Support Helped For The Whole...",
                                content: "Very Good Support Helped For The Whole Long Process And Got Everything Working With Ease While Also Having Good Server Provider With 0 Lag or Stuttering Ever"
                            },
                            {
                                user: "Johnnie E Templeton Jr",
                                title: "Best server hosting I have experienced.",
                                content: "I have had some issues with for one getting my mob pack installed on my previous server host. Their customer service was atrocious. While they did provide tutorials, I struggled to find the time to go through them all. Then frustrated with the lack of support loading my mod pack I turned to Codoen hosting..."
                            }
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

            <StartHereBanner />
        </div>
    );
};

export default HytaleProductPage;