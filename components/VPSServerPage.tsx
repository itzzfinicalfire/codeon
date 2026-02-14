import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight, LayoutDashboard, Terminal, Activity, HardDrive, User, BadgeCheck, MessageSquare, Star, ChevronRight } from 'lucide-react';
import StartHereBanner from './StartHereBanner';
import LocationsMap from './LocationsMap';

interface Props {
    onNavigate: (view: string, data?: any) => void;
}

const VPSServerPage: React.FC<Props> = ({ onNavigate }) => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    const handleOrder = (plan: any) => {
        onNavigate('configure', { type: 'vps', plan: plan.ram + ' Plan', price: plan.price });
    };

    const TAGS = [
        "Dedicated IPv4 Address", "Instant Setup", "KVM", "VirtFusion",
        "24/7 Support", "Auto-Install OS", "AMD Ryzen 7 3700X or better CPU"
    ];

    const PLANS = [
        { ram: "1GB", storage: "10GB", bandwidth: "1TB", cores: "2 vCores", price: "4.00" },
        { ram: "2GB", storage: "20GB", bandwidth: "2TB", cores: "3 vCores", price: "8.00" },
        { ram: "4GB", storage: "40GB", bandwidth: "4TB", cores: "4 vCores", price: "16.00" },
        { ram: "8GB", storage: "80GB", bandwidth: "5TB", cores: "5 vCores", price: "32.00" },
        { ram: "16GB", storage: "160GB", bandwidth: "16TB", cores: "6 vCores", price: "64.00" },
        { ram: "20GB", storage: "160GB", bandwidth: "16TB", cores: "7 vCores", price: "80.00" },
        { ram: "24GB", storage: "160GB", bandwidth: "16TB", cores: "8 vCores", price: "96.00" },
        { ram: "32GB", storage: "160GB", bandwidth: "16TB", cores: "8 vCores", price: "128.00" },
    ];

    const VPS_FAQS = [
        { q: "ARE THE VPS SERVERS ON 24/7?", a: "Yes, our VPS servers run 24/7 on our enterprise infrastructure, ensuring your services are always online and accessible." },
        { q: "WHAT VPS SERVER SHOULD I CHOOSE?", a: "It depends on your needs. For simple websites or discord bots, 1-2GB RAM is sufficient. For game servers like Minecraft, we recommend 4GB or more for optimal performance." },
        { q: "DO YOU OFFER DDOS PROTECTION?", a: "Yes, every VPS includes our advanced DDoS protection capable of mitigating large-scale attacks to keep your server safe." },
        { q: "WHAT IS A VPS?", a: "A Virtual Private Server (VPS) is a virtualized server that mimics a dedicated server within a shared hosting environment. It provides you with dedicated resources (CPU, RAM) and root access." },
        { q: "WHAT ARE THE ADVANTAGES OF USING A VPS OVER SHARED HOSTING?", a: "VPS hosting gives you full root access, dedicated resources that aren't shared with other users, and the freedom to install any software or OS you want, providing much more control and better performance." }
    ];

    // Isometric Server Icon Component
    const ServerIcon = () => (
        <div className="w-20 h-20 relative mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
            <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full"></div>
            {/* Simple SVG representation of a server stack */}
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl relative z-10">
                {/* Bottom Unit */}
                <path d="M50 65 L90 45 V55 L50 75 L10 55 V45 Z" fill="#312e81" />
                <path d="M10 55 L50 75 V85 L10 65 Z" fill="#3730a3" />
                <path d="M50 75 L90 55 V65 L50 85 Z" fill="#4338ca" />

                {/* Middle Unit */}
                <path d="M50 50 L90 30 V40 L50 60 L10 40 V30 Z" fill="#3730a3" />
                <path d="M10 40 L50 60 V70 L10 50 Z" fill="#4338ca" />
                <path d="M50 60 L90 40 V50 L50 70 Z" fill="#4f46e5" />

                {/* Top Unit */}
                <path d="M50 20 L90 40 L50 60 L10 40 Z" fill="#6366f1" />
                <path d="M10 40 L50 60 V70 L10 50 Z" fill="#4f46e5" opacity="0.5" />

                {/* Glows/Lights */}
                <circle cx="20" cy="45" r="1.5" fill="#4ade80" />
                <circle cx="25" cy="47" r="1.5" fill="#22d3ee" />

                <circle cx="20" cy="60" r="1.5" fill="#4ade80" />
                <circle cx="25" cy="62" r="1.5" fill="#22d3ee" />
            </svg>
        </div>
    );

    const ProgressBar: React.FC<{ label: string; width: string; colorClass: string }> = ({ label, width, colorClass }) => (
        <div className="mb-4">
            <div className="flex justify-between text-[10px] uppercase font-bold text-gray-400 mb-1">
                <span>{label}</span>
            </div>
            <div className="h-2 w-full bg-[#1e293b] rounded-full overflow-hidden border border-white/5">
                <div className={`h-full ${colorClass} rounded-full shadow-[0_0_10px_currentColor]`} style={{ width }}></div>
            </div>
        </div>
    );

    return (
        <div className="bg-[#050b14] min-h-screen pt-20 font-sans text-white">
            {/* Hero Section */}
            <div className="relative bg-[#050b14] overflow-hidden border-b border-white/5 pb-20">
                <div className="max-w-7xl mx-auto px-4 pt-16 lg:pt-24 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1 space-y-6">
                            <h1 className="font-display font-black text-5xl lg:text-7xl uppercase leading-none">
                                GAME VPS <br />
                                SERVER <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">HOSTING</span>
                            </h1>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                                Whether you want to run a Minecraft server, run a <span className="text-white font-bold underline decoration-indigo-500">voice-server</span>, or host a website, a VPS server allows you to do what you want without limitation! Our VPS server hosting provides you with stable and secure resources in order to allow your ideas to come to life, packed with protections and reference databases to help you make the most of your server.
                            </p>
                            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">
                                Let our experts pick the plan that's right for you!
                            </p>
                            <button onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })} className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded uppercase text-sm tracking-wider transition-colors shadow-lg shadow-indigo-900/40">
                                ORDER NOW
                            </button>
                        </div>

                        {/* Isometric Illustration */}
                        <div className="flex-1 flex justify-center">
                            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                                <div className="relative w-80 h-80">
                                    {/* Stylized CSS/SVG Server Stack representation for Hero */}
                                    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_60px_rgba(79,70,229,0.3)]">
                                        <defs>
                                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" style={{ stopColor: '#4f46e5', stopOpacity: 1 }} />
                                                <stop offset="100%" style={{ stopColor: '#818cf8', stopOpacity: 1 }} />
                                            </linearGradient>
                                        </defs>
                                        <g transform="translate(100, 20)">
                                            {[0, 1, 2, 3].map(i => (
                                                <g key={i} transform={`translate(0, ${i * 35})`}>
                                                    <path d="M0 -20 L70 15 V45 L0 10 Z" fill="#312e81" />
                                                    <path d="M0 10 L-70 45 V15 L0 -20 Z" fill="#3730a3" />
                                                    <path d="M-70 15 L0 -20 L70 15 L0 50 Z" fill="url(#grad1)" />
                                                    {/* Lights */}
                                                    <circle cx="-50" cy="20" r="2" fill="#4ade80" className="animate-pulse" />
                                                    <circle cx="-40" cy="25" r="2" fill="#22d3ee" className="animate-pulse" />
                                                    <rect x="-20" y="10" width="40" height="2" transform="skewY(26.5) skewX(0)" fill="rgba(255,255,255,0.3)" />
                                                </g>
                                            ))}
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Plans Section */}
            <div id="plans" className="py-24 bg-[#050b14]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-display font-black text-3xl text-white uppercase mb-8">PLANS AND PRICING</h2>

                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-3 mb-12">
                        {TAGS.map((tag, i) => (
                            <div key={i} className="bg-[#0a101d] border border-white/5 px-4 py-2 rounded text-[10px] font-bold uppercase text-gray-400 hover:text-white hover:border-indigo-500/50 transition-colors cursor-default">
                                {tag}
                            </div>
                        ))}
                    </div>

                    {/* Pricing Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {PLANS.map((plan, index) => (
                            <div key={index} className="bg-[#0a101d] border border-indigo-500/10 rounded-lg p-6 flex flex-col items-center text-center hover:border-indigo-500 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-900/20">
                                <ServerIcon />

                                <h3 className="font-display font-black text-2xl text-white uppercase mb-6 tracking-wide relative z-10">VPS - {plan.ram}</h3>

                                <div className="space-y-3 mb-8 w-full relative z-10">
                                    <div className="text-[10px] text-gray-400 font-bold uppercase border-b border-white/5 pb-2">{plan.ram} RAM</div>
                                    <div className="text-[10px] text-gray-400 font-bold uppercase border-b border-white/5 pb-2">{plan.storage} NVMe Storage</div>
                                    <div className="text-[10px] text-gray-400 font-bold uppercase border-b border-white/5 pb-2">{plan.bandwidth} Bandwidth</div>
                                    <div className="text-[10px] text-gray-400 font-bold uppercase border-b border-white/5 pb-2">{plan.cores} @ 3.8GHz+</div>
                                </div>

                                <div className="mb-6 relative z-10">
                                    <div className="text-2xl font-black text-white">$ {plan.price} <span className="text-[10px] text-gray-500 font-normal">/ per month</span></div>
                                </div>

                                <button
                                    onClick={() => handleOrder(plan)}
                                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded text-[10px] uppercase tracking-wider transition-colors flex items-center justify-center gap-2 relative z-10 shadow-lg shadow-indigo-900/30"
                                >
                                    SELECT PLAN <ChevronDown className="w-3 h-3" />
                                </button>

                                {/* Card Hover Glow */}
                                <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Comparison Section */}
            <div className="py-24 bg-[#03060a] border-t border-white/5 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 relative">
                        {/* VS Divider */}
                        <div className="hidden lg:flex absolute left-1/2 top-0 bottom-0 w-px bg-white/5 justify-center">
                            <div className="mt-10 bg-[#03060a] p-2 h-fit">
                                <span className="font-display font-black text-4xl text-white italic drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">VS</span>
                            </div>
                        </div>

                        {/* LEFT: DEDICATED */}
                        <div className="space-y-12">
                            <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight">DEDICATED GAME<br />SERVERS</h2>

                            <div className="space-y-4">
                                <ProgressBar label="PERFORMANCE" width="100%" colorClass="bg-blue-600" />
                                <ProgressBar label="CUSTOMIZATION" width="100%" colorClass="bg-purple-600" />
                                <ProgressBar label="PRICE" width="50%" colorClass="bg-green-500" />
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="font-bold text-white text-xs uppercase mb-2">DEDICATED SERVER HARDWARE</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        You have full control over all the hardware in the system, ensuring all the resources can be used for the services and games you are running. Organize your resources as you see fit, letting you run anything from web servers to control panels to any game server software you want.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-xs uppercase mb-2">LARGER STORAGE CAPACITY</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        Our <strong className="text-white">dedicated servers</strong> come with a much larger storage capacity than VPS servers, making them the better server hosting option when speed is key. Dedicated servers are hosted with ultra-fast NVMe SSDs, along with larger-capacity HDDs.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-xs uppercase mb-2">CUSTOMIZATION</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        With the flexibility of options we provide for Dedicated servers, you can choose the configuration and setup you want, from being able to choose your own OS along with different CPU, RAM, and Storage options.
                                    </p>
                                </div>
                            </div>

                            <button className="flex items-center gap-2 text-[10px] font-bold uppercase text-purple-400 hover:text-white transition-colors group border-b border-transparent hover:border-white w-fit">
                                CHOOSE PACKAGES <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* RIGHT: VPS */}
                        <div className="space-y-12">
                            <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight">VPS SERVERS</h2>

                            <div className="space-y-4">
                                <ProgressBar label="PERFORMANCE" width="75%" colorClass="bg-blue-600" />
                                <ProgressBar label="CUSTOMIZATION" width="60%" colorClass="bg-purple-600" />
                                <ProgressBar label="PRICE" width="25%" colorClass="bg-green-500" />
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="font-bold text-white text-xs uppercase mb-2">US AND EUROPEAN LOCATIONS</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        Our VPS Servers are hosted in three locations - Los Angeles, CA, Vint Hill, VA, and London, UK. This means you can enjoy great latency connections to the US and Europe!
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-xs uppercase mb-2">VIRTUALIZOR CONTROL PANEL</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        Our fully featured control panel allows you to control all aspects of your server along with full root SSH/SFTP access! You have full control over your server's setup and configuration, but with this, the easy-to-use control panel for reinstalling your OS or installing additional software with one click. If you can dream it, chances are our VPS hosting services can make it a reality for you!
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-xs uppercase mb-2">DAILY BACKUPS</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        All of our VPS server hosting includes automatic backups every day, ensuring any bad configuration change or issue that could happen, you are always able to keep your data secure.
                                    </p>
                                </div>
                            </div>

                            <button className="flex items-center gap-2 text-[10px] font-bold uppercase text-purple-400 hover:text-white transition-colors group border-b border-transparent hover:border-white w-fit">
                                CHOOSE PACKAGES <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Easy To Manage Section */}
            <div className="py-24 bg-[#050b14] border-t border-white/5 relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight mb-4">EASY TO MANAGE</h2>
                        <p className="text-gray-400 text-xs max-w-3xl leading-relaxed">
                            With our different options for <strong className="text-white">control panels</strong> that can be installed on your VPS, along with the Virtualizor Control panel, you will be able to get your server up and running with ease. With prices starting at just $4/month, hosting a VPS has never been easier!
                        </p>
                    </div>

                    {/* Dashboard Mockup - Recreating the visual in the screenshot */}
                    <div className="w-full bg-[#111827] rounded-xl border border-white/10 shadow-2xl overflow-hidden relative">
                        {/* Top Bar */}
                        <div className="h-10 bg-[#1f2937] flex items-center px-4 justify-between border-b border-gray-700">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-[10px] text-green-400">LK</div>
                                <span className="text-[10px] text-gray-400">Lite One</span>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-6 grid grid-cols-4 gap-6 bg-[#0f1623]">
                            {/* Sidebar */}
                            <div className="col-span-1 space-y-2">
                                <div className="bg-blue-600 text-white text-[10px] font-bold p-2 rounded flex items-center gap-2 shadow-lg shadow-blue-900/50">
                                    <LayoutDashboard className="w-3 h-3" /> Dashboard
                                </div>
                                <div className="text-gray-500 hover:text-white text-[10px] font-bold p-2 rounded flex items-center gap-2 cursor-pointer transition-colors">
                                    <HardDrive className="w-3 h-3" /> Media
                                </div>
                                <div className="text-gray-500 hover:text-white text-[10px] font-bold p-2 rounded flex items-center gap-2 cursor-pointer transition-colors">
                                    <Activity className="w-3 h-3" /> System
                                </div>
                            </div>

                            {/* Main Dashboard */}
                            <div className="col-span-3 space-y-6">
                                {/* Status Header */}
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-white font-bold text-sm">Test Server</h3>
                                        <div className="flex gap-4 mt-2">
                                            <div className="bg-gray-800 p-2 rounded w-8 h-8 flex items-center justify-center border border-gray-700">
                                                <HardDrive className="w-4 h-4 text-gray-400" />
                                            </div>
                                            <div className="bg-gray-800 p-2 rounded w-8 h-8 flex items-center justify-center border border-gray-700">
                                                <Terminal className="w-4 h-4 text-gray-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="bg-blue-600 px-3 py-1 rounded text-[10px] text-white font-bold">Start</button>
                                        <button className="bg-blue-500 px-3 py-1 rounded text-[10px] text-white font-bold">Restart</button>
                                        <button className="bg-blue-400 px-3 py-1 rounded text-[10px] text-white font-bold">Stop</button>
                                    </div>
                                </div>

                                {/* Stats Cards */}
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="bg-[#1f2937] p-4 rounded border border-gray-700 relative overflow-hidden">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-[10px] text-gray-400 font-bold uppercase">Memory</span>
                                            <span className="text-[10px] text-green-400 font-bold">53.7%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-500 w-[53%]"></div>
                                        </div>
                                        <div className="text-[9px] text-gray-500 mt-2">493.58 MB of 17.65 GB Used</div>
                                    </div>

                                    <div className="bg-[#1f2937] p-4 rounded border border-gray-700 relative overflow-hidden">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-[10px] text-gray-400 font-bold uppercase">CPU</span>
                                            <span className="text-[10px] text-green-400 font-bold">6.7%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-purple-500 w-[6.7%]"></div>
                                        </div>
                                        <div className="text-[9px] text-gray-500 mt-2">2 Cores</div>
                                    </div>

                                    <div className="bg-[#1f2937] p-4 rounded border border-gray-700 relative overflow-hidden">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-[10px] text-gray-400 font-bold uppercase">Disk</span>
                                            <span className="text-[10px] text-green-400 font-bold">12%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-orange-500 w-[12%]"></div>
                                        </div>
                                        <div className="text-[9px] text-gray-500 mt-2">12 GB of 100 GB Used</div>
                                    </div>
                                </div>

                                {/* Network Chart Placeholder */}
                                <div className="bg-[#1f2937] p-4 rounded border border-gray-700">
                                    <h4 className="text-[10px] text-gray-400 font-bold uppercase mb-4">Network</h4>
                                    <div className="flex items-center gap-8">
                                        <div className="w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center">
                                            <span className="text-[10px] font-bold text-white">2.7 MB</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-[9px]">
                                            <div className="text-gray-400">Inbound</div> <div className="text-white text-right">100.04 MB</div>
                                            <div className="text-gray-400">Outbound</div> <div className="text-white text-right">37.04 MB</div>
                                            <div className="text-gray-400">Total</div> <div className="text-white text-right">137.08 MB</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dots Pagination */}
                    <div className="flex justify-center gap-2 mt-8">
                        <button className="w-1.5 h-1.5 rounded-full bg-blue-600"></button>
                        <button className="w-1.5 h-1.5 rounded-full bg-gray-700 hover:bg-gray-600"></button>
                        <button className="w-1.5 h-1.5 rounded-full bg-gray-700 hover:bg-gray-600"></button>
                        <button className="w-1.5 h-1.5 rounded-full bg-gray-700 hover:bg-gray-600"></button>
                    </div>
                </div>
            </div>

            {/* Ready To Start CTA */}
            <div className="py-20 bg-[#050b14] border-t border-white/5">
                <div className="max-w-4xl mx-auto px-4 flex justify-center">
                    <div className="bg-[#0f1623] border border-white/10 p-8 rounded-lg flex flex-col md:flex-row items-center justify-between gap-8 w-full shadow-2xl">
                        <div>
                            <h3 className="font-display font-black text-2xl text-white uppercase">READY TO START?</h3>
                        </div>
                        <button onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })} className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded text-[10px] uppercase tracking-wider transition-colors shadow-lg shadow-indigo-900/40">
                            CONFIGURE A PLAN
                        </button>
                    </div>
                </div>
            </div>

            {/* Locations Map */}
            <LocationsMap />

            {/* FRIENDLY AND PROFESSIONAL SUPPORT */}
            <div className="py-24 bg-[#050b14] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight mb-4">FRIENDLY AND PROFESSIONAL SUPPORT</h2>
                        <p className="text-gray-400 text-xs leading-relaxed">
                            Our VPS server experts are around 24/7 to provide any help you need with your VPS servers. Whilst our VPS servers are unmanaged, we can help you with <span className="font-bold text-white">any questions</span> and point you in the right direction for any questions you may have.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Personalized */}
                        <div className="text-center group">
                            <div className="w-16 h-16 mx-auto mb-6 relative">
                                <div className="absolute inset-0 border-2 border-green-500 rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <User className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <h3 className="font-display font-bold text-white text-sm uppercase mb-4">PERSONALIZED SUPPORT</h3>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                No one likes bots (Sorry if you are one); our staff are 100% human and on hand, ready to help you out with any questions regarding your servers with us.
                            </p>
                        </div>

                        {/* Experienced */}
                        <div className="text-center group">
                            <div className="w-16 h-16 mx-auto mb-6 relative">
                                <div className="absolute inset-0 border-2 border-green-500 rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <BadgeCheck className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <h3 className="font-display font-bold text-white text-sm uppercase mb-4">EXPERIENCED STAFF</h3>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                Our support team has a variety of backgrounds covering pretty much everything from OS quirks to installing different software; we are always on hand to help you out.
                            </p>
                        </div>

                        {/* 24/7 */}
                        <div className="text-center group">
                            <div className="w-16 h-16 mx-auto mb-6 relative">
                                <div className="absolute inset-0 border-2 border-green-500 rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <MessageSquare className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <h3 className="font-display font-bold text-white text-sm uppercase mb-4">24/7/365 SUPPORT</h3>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                We offer support every day, every hour of the year. With an average response time of only 15, rest assured that you can get help with your servers no matter what.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <a href="#" className="text-[10px] font-bold text-green-500 uppercase hover:text-white transition-colors flex items-center justify-center gap-1">
                            NEED HELP? <span className="underline">WRITE TO US</span> <ArrowRight className="w-3 h-3" />
                        </a>
                    </div>
                </div>
            </div>

            {/* REVIEWS SECTION */}
            <div className="py-24 bg-[#050b14] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="font-display font-black text-2xl text-white uppercase tracking-tight">A FEW REVIEWS FROM <span className="underline decoration-white/30">TRUSTPILOT</span></h2>
                        <button className="text-purple-400 text-[10px] font-bold uppercase hover:text-white transition-colors flex items-center gap-1">
                            SEE ALL REVIEWS <ArrowRight className="w-3 h-3" />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Review 1 */}
                        <div className="bg-[#0f1623] p-6 rounded-lg border border-white/5 relative group hover:border-purple-500/30 transition-colors">
                            <h4 className="font-display font-bold text-white text-xs uppercase mb-2">HAYLEE BP</h4>
                            <div className="flex gap-0.5 mb-4">
                                {[1, 2, 3, 4, 5].map(i => <div key={i} className="bg-green-500 p-0.5"><Star className="w-2 h-2 text-white fill-white" /></div>)}
                            </div>
                            <h5 className="text-green-400 text-[10px] font-bold uppercase mb-2">"QUICK AND CARING"</h5>
                            <p className="text-gray-400 text-[10px] leading-relaxed mb-6">
                                Very quick responses and very helpful overall!
                            </p>
                            <button className="text-[9px] font-bold text-gray-500 uppercase flex items-center gap-1 group-hover:text-white transition-colors">
                                OPEN REVIEW <ChevronRight className="w-3 h-3" />
                            </button>
                        </div>

                        {/* Review 2 */}
                        <div className="bg-[#0f1623] p-6 rounded-lg border border-white/5 relative group hover:border-purple-500/30 transition-colors">
                            <h4 className="font-display font-bold text-white text-xs uppercase mb-2">ALEX</h4>
                            <div className="flex gap-0.5 mb-4">
                                {[1, 2, 3, 4, 5].map(i => <div key={i} className="bg-green-500 p-0.5"><Star className="w-2 h-2 text-white fill-white" /></div>)}
                            </div>
                            <h5 className="text-green-400 text-[10px] font-bold uppercase mb-2">"MY CONCERNS WERE ADDRESSED"</h5>
                            <p className="text-gray-400 text-[10px] leading-relaxed mb-6">
                                The agent understood my needs, he gave a good explanation and service
                            </p>
                            <button className="text-[9px] font-bold text-gray-500 uppercase flex items-center gap-1 group-hover:text-white transition-colors">
                                OPEN REVIEW <ChevronRight className="w-3 h-3" />
                            </button>
                        </div>

                        {/* Review 3 */}
                        <div className="bg-[#0f1623] p-6 rounded-lg border border-white/5 relative group hover:border-purple-500/30 transition-colors">
                            <h4 className="font-display font-bold text-white text-xs uppercase mb-2">ALEXANDRA GALLAGHER</h4>
                            <div className="flex gap-0.5 mb-4">
                                {[1, 2, 3, 4, 5].map(i => <div key={i} className="bg-green-500 p-0.5"><Star className="w-2 h-2 text-white fill-white" /></div>)}
                            </div>
                            <h5 className="text-green-400 text-[10px] font-bold uppercase mb-2">"EXCELLENT CUSTOMER SERVICE"</h5>
                            <p className="text-gray-400 text-[10px] leading-relaxed mb-6">
                                The customer service rep pretty much handled my situation (connection to my private server) right away, and made things very easy and simple for me to use.
                            </p>
                            <button className="text-[9px] font-bold text-gray-500 uppercase flex items-center gap-1 group-hover:text-white transition-colors">
                                OPEN REVIEW <ChevronRight className="w-3 h-3" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* FREQUENTLY ASKED QUESTIONS */}
            <div className="py-24 bg-[#050b14] border-t border-white/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="font-display font-black text-2xl text-white uppercase tracking-tight">FREQUENTLY ASKED QUESTIONS</h2>
                        <button className="bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold px-4 py-2 rounded uppercase tracking-wider transition-colors">
                            VIEW ALL FAQ
                        </button>
                    </div>

                    <div className="space-y-3">
                        {VPS_FAQS.map((item, index) => (
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

            {/* Start Here Banner */}
            <StartHereBanner />
        </div>
    );
};

export default VPSServerPage;