import React, { useState } from 'react';
import { Server, Cpu, HardDrive, ShieldCheck, Network, Clock, CheckCircle2, ArrowRight, Terminal, ChevronRight, Check, User, BadgeCheck, MessageSquare, Play, Star, ChevronDown, ChevronUp } from 'lucide-react';
import StartHereBanner from './StartHereBanner';
import LocationsMap from './LocationsMap';

interface Props {
    onNavigate: (view: string, data?: any) => void;
}

const DedicatedServerPage: React.FC<Props> = ({ onNavigate }) => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    const handleOrder = (plan: any) => {
        onNavigate('configure', { type: 'dedicated', plan: plan.name, price: plan.price });
    };

    const PLANS = [
        {
            name: "RYZEN 3700X",
            specs: [
                "8 Core (16 thread) - 3.6/4.4GHz",
                "10Gbps DDoS Protection",
                "64GB DDR4 RAM",
                "2 x 500GB NVMe + 4TB HDD",
                "1Gbit/s port (10TB Traffic)",
                "Ready in 24 hours"
            ],
            price: "$109",
            stock: "OUT OF STOCK"
        },
        {
            name: "RYZEN 3900X",
            specs: [
                "12 Core (24 thread) - 3.8/4.6GHz",
                "10Gbps DDoS Protection",
                "64GB DDR4 RAM",
                "2 x 500GB NVMe + 4TB HDD",
                "1Gbit/s port (10TB Traffic)",
                "Ready in 24 hours"
            ],
            price: "$119",
            stock: "OUT OF STOCK"
        },
        {
            name: "RYZEN 5900X",
            specs: [
                "12 Core (24 thread) - 3.7/4.8GHz",
                "10Gbps DDoS Protection",
                "Up to 128GB DDR4 RAM",
                "Up to 2 x 1TB NVMe + 4TB HDD",
                "1Gbit/s port (10TB Traffic)",
                "Ready in 24 hours"
            ],
            price: "$149",
            stock: "OUT OF STOCK"
        },
        {
            name: "RYZEN 5950X",
            specs: [
                "16 Core (32 thread) - 3.4/4.9GHz",
                "10Gbps DDoS Protection",
                "Up to 128GB DDR4 RAM",
                "Up to 2 x 1TB NVMe + 4TB HDD",
                "1Gbit/s port (10TB Traffic)",
                "Ready in 24 hours"
            ],
            price: "$169",
            stock: "OUT OF STOCK"
        }
    ];

    const DEDICATED_FAQS = [
        { q: "ARE DEDICATED SERVERS BETTER?", a: "Dedicated servers provide exclusive access to hardware resources, ensuring consistent performance without the 'noisy neighbor' effect of shared hosting. They offer complete control, better security, and the ability to customize the server environment to your exact specifications." },
        { q: "DOES THE DEDICATED SERVER COME WITH A CONTROL PANEL?", a: "By default, dedicated servers are unmanaged with root access via SSH. However, we offer options to pre-install control panels like Multicraft, Pterodactyl, or our custom Codoen panel during checkout for easier management." },
        { q: "WHAT DEDICATED SERVER SHOULD I CHOOSE?", a: "For game servers like Minecraft that rely on single-thread performance, the Ryzen 5000 series (5900X/5950X) is ideal. For multi-threaded workloads or hosting multiple smaller servers, the Ryzen 3900X offers great value." },
        { q: "ARE DEDICATED SERVERS COVERED BY DDOS PROTECTION?", a: "Yes, every dedicated server includes our advanced DDoS protection capable of mitigating large-scale attacks, ensuring your server stays online and accessible." }
    ];

    const ProgressBar: React.FC<{ label: string; width: string; colorClass: string }> = ({ label, width, colorClass }) => (
        <div className="mb-4">
            <div className="flex justify-between text-[10px] uppercase font-bold text-gray-400 mb-1">
                <span>{label}</span>
            </div>
            <div className="h-3 w-full bg-[#1e293b] rounded-full overflow-hidden border border-white/5">
                <div className={`h-full ${colorClass} rounded-full`} style={{ width }}></div>
            </div>
        </div>
    );

    return (
        <div className="bg-[#050b14] min-h-screen pt-20 font-sans text-white">
            {/* 1. HERO SECTION */}
            <div className="relative bg-[#0a101d] border-b border-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        {/* Text Content */}
                        <div className="flex-1 space-y-6">
                            <h1 className="font-display font-black text-5xl lg:text-6xl uppercase leading-none">
                                DEDICATED <br />
                                <span className="text-white">SERVERS</span>
                            </h1>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                                Take your game to the next level with dedicated game server hosting from Codoen Hosting. Our dedicated servers utilize robust hardware and are maintained within a secure infrastructure. These servers are perfect for <span className="text-white font-bold">hosting Minecraft</span> or other game servers, <span className="text-white font-bold">websites</span>, and even custom applications. Having a dedicated server provides you with all of the resources and control you need to host your game, website, or something completely custom.
                            </p>

                            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Let our experts help you pick a plan!</p>

                            <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded uppercase text-sm tracking-wider transition-colors shadow-lg shadow-indigo-900/40">
                                ORDER NOW
                            </button>
                        </div>

                        {/* Isometric Server Illustration */}
                        <div className="flex-1 flex justify-center">
                            <div className="relative w-full max-w-md aspect-square">
                                {/* Abstract representation of the server rack from screenshot */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative w-64 h-80 bg-[#1e293b] transform rotate-[-10deg] skew-y-12 rounded-xl border-4 border-indigo-500/30 shadow-2xl z-10 flex flex-col p-4 gap-2">
                                        {/* Server Rack Slots */}
                                        {[1, 2, 3, 4, 5, 6].map(i => (
                                            <div key={i} className="flex-1 bg-[#0f1623] rounded border border-white/5 flex items-center px-2 gap-2">
                                                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                                                <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                                                <div className="flex-1 h-1 bg-gray-700 rounded-full ml-2"></div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Second Rack behind */}
                                    <div className="absolute top-10 right-0 w-64 h-80 bg-[#0f1623] transform rotate-[-10deg] skew-y-12 rounded-xl border-4 border-blue-500/20 shadow-xl z-0 flex flex-col p-4 gap-2 opacity-60">
                                        {[1, 2, 3, 4, 5, 6].map(i => (
                                            <div key={i} className="flex-1 bg-[#0a101d] rounded border border-white/5"></div>
                                        ))}
                                    </div>
                                </div>
                                {/* Glow effects */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/20 blur-[100px] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. PLANS AND PRICING */}
            <div id="pricing" className="py-24 bg-[#050b14]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-display font-black text-3xl text-white uppercase mb-12">PLANS AND PRICING</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {PLANS.map((plan, index) => (
                            <div key={index} className="bg-[#0a101d] border border-indigo-900/30 rounded-lg p-6 flex flex-col hover:border-indigo-500 transition-colors group">
                                <h3 className="font-display font-bold text-xl text-white uppercase mb-6 tracking-wide text-center group-hover:text-indigo-400 transition-colors">{plan.name}</h3>

                                <div className="space-y-4 mb-8 flex-1">
                                    {plan.specs.map((spec, i) => (
                                        <div key={i} className="text-[10px] text-gray-400 font-bold uppercase text-center border-b border-white/5 pb-2 last:border-0">
                                            {spec}
                                        </div>
                                    ))}
                                </div>

                                <div className="text-center mb-6">
                                    <div className="text-3xl font-black text-white">{plan.price} <span className="text-xs text-gray-500 font-normal">/ month</span></div>
                                </div>

                                <button
                                    onClick={() => handleOrder(plan)}
                                    disabled={plan.stock === "OUT OF STOCK"}
                                    className={`w-full font-bold py-3 rounded text-[10px] uppercase tracking-wider transition-colors border ${plan.stock === "OUT OF STOCK" ? 'bg-[#1e293b] text-gray-500 border-white/5 cursor-not-allowed' : 'bg-indigo-600 text-white border-transparent hover:bg-indigo-500'}`}
                                >
                                    {plan.stock === "OUT OF STOCK" ? "Sold Out" : "Configure"}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. COMPARISON SECTION */}
            <div className="py-24 bg-[#050b14] border-t border-white/5 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 relative">
                        {/* VS Divider - Absolute centered for LG screens, hidden on small */}
                        <div className="hidden lg:flex absolute left-1/2 top-0 bottom-0 w-px bg-white/5 justify-center">
                            <div className="mt-20 bg-[#050b14] p-2 h-fit">
                                <span className="font-display font-black text-3xl text-white italic">VS</span>
                            </div>
                        </div>

                        {/* LEFT: DEDICATED */}
                        <div className="space-y-8 pr-0 lg:pr-12">
                            <h2 className="font-display font-black text-2xl text-white uppercase tracking-tight mb-8">DEDICATED SERVERS</h2>

                            <div className="space-y-4 mb-12">
                                <ProgressBar label="PERFORMANCE" width="100%" colorClass="bg-blue-600" />
                                <ProgressBar label="CUSTOMIZATION" width="100%" colorClass="bg-purple-600" />
                                <ProgressBar label="PRICE" width="100%" colorClass="bg-green-500" />
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="font-bold text-white text-xs uppercase mb-2">DEDICATED SERVER HARDWARE</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        With dedicated hardware, you'll have full control over your hardware and server configuration. <strong className="text-white">Best of all</strong>, you won't be sharing the hardware with anyone, ensuring maximum performance and security for your applications.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-xs uppercase mb-2">SERVER SETUP OPTIONS</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        For a minimal fee, we'll set up your dedicated server for game hosting—or anything else you'd like to use it for! Just let us know your goals, and we'll help you achieve them.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-xs uppercase mb-2">PROFESSIONAL HOSTING SERVICE</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        Codoen Hosting only uses the highest quality server hardware, hosted in secure and professional data centers—giving you the best possible server reliability and peace of mind.
                                    </p>
                                </div>
                            </div>

                            <button className="flex items-center gap-2 text-[10px] font-bold uppercase text-purple-400 hover:text-white transition-colors mt-4 group">
                                CHOOSE PACKAGES <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* RIGHT: VPS */}
                        <div className="space-y-8 pl-0 lg:pl-12">
                            <h2 className="font-display font-black text-2xl text-white uppercase tracking-tight mb-8">VPS SERVERS</h2>

                            <div className="space-y-4 mb-12">
                                <ProgressBar label="PERFORMANCE" width="60%" colorClass="bg-blue-900" />
                                <ProgressBar label="CUSTOMIZATION" width="70%" colorClass="bg-purple-900" />
                                <ProgressBar label="PRICE" width="40%" colorClass="bg-green-900" />
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="font-bold text-white text-xs uppercase mb-2">US AND EUROPEAN LOCATIONS</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        Our VPS servers are hosted in Los Angeles, California; Vint Hill, Virginia; and London, United Kingdom - providing great low latency connections across the US and Europe. These servers allow users to install their own OS and software.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-xs uppercase mb-2">VIRTUALIZOR CONTROL PANEL</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        Manage your VPS Server details with the Virtualizor control panel and control your server in any way you want with full root SSH/SFTP access! You decide the details about your server's resource limits including everything from the allocated RAM, bandwidth, and many other components.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-xs uppercase mb-2">DATA BACKUPS</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        Daily backups are taken of all your server site data that can be restored if anything goes wrong at any point in time! This assures that no matter what you're working on, you're able to keep previous data secure.
                                    </p>
                                </div>
                            </div>

                            <button className="flex items-center gap-2 text-[10px] font-bold uppercase text-purple-400 hover:text-white transition-colors mt-4 group">
                                CHOOSE PACKAGES <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. EASY TO MANAGE SECTION */}
            <div className="py-24 bg-[#080c14] border-t border-white/5 relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight mb-4">EASY TO MANAGE</h2>
                        <p className="text-gray-400 text-xs max-w-2xl mx-auto mb-4">
                            You have full SSH access to install any control panel you want, but our dedicated servers come with a choice of control panels. These options allow you to easily manage game servers on your dedicated server:
                        </p>
                        <div className="flex justify-center gap-6 text-[10px] text-gray-400 font-bold uppercase">
                            <div className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-cyan-500" /> Multicraft</div>
                            <div className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-cyan-500" /> Pterodactyl</div>
                            <div className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-cyan-500" /> Codoen Hosting Control Panel (No SSH Access)</div>
                        </div>
                        <p className="text-gray-500 text-[10px] mt-4">
                            For the most streamlined experience, we recommend using our custom control panel featured below:
                        </p>
                    </div>

                    {/* Terminal Mockup */}
                    <div className="w-full max-w-4xl mx-auto">
                        <div className="bg-[#0f1623] rounded-lg border border-white/10 shadow-2xl overflow-hidden">
                            {/* Window Bar */}
                            <div className="bg-[#1e293b] px-4 py-2 flex items-center justify-between border-b border-white/5">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                </div>
                                <div className="text-[10px] text-gray-500 font-mono flex items-center gap-2">
                                    <Terminal className="w-3 h-3" /> codoen-dedicated-console — ssh root@192.168.0.1
                                </div>
                                <div className="w-10"></div> {/* Spacer */}
                            </div>

                            {/* Content */}
                            <div className="p-6 font-mono text-xs bg-[#050b14] h-[300px] overflow-y-auto text-gray-300">
                                <div className="mb-2 text-cyan-400">Welcome to Codoen Hosting Dedicated Server Management Console v2.4</div>
                                <div className="mb-4">System check... <span className="text-green-500">OK</span></div>

                                <div className="space-y-1 opacity-80">
                                    <div className="flex gap-2">
                                        <span className="text-purple-400">root@codoen:~#</span>
                                        <span>htop</span>
                                    </div>
                                    <div className="pl-4 text-[10px] text-gray-500">
                                        <div className="grid grid-cols-4 gap-4 mb-2">
                                            <div>CPU[||||||||||| 12%]</div>
                                            <div>Tasks: 42, 128 thr</div>
                                            <div>Load avg: 0.42</div>
                                            <div>Uptime: 14 days</div>
                                        </div>
                                        <div className="grid grid-cols-4 gap-4">
                                            <div>Mem[||||||||||| 8G/64G]</div>
                                            <div>Swp[| 0K/0K]</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 space-y-1">
                                    <div className="flex gap-2">
                                        <span className="text-purple-400">root@codoen:~#</span>
                                        <span>docker ps</span>
                                    </div>
                                    <div className="pl-4 text-[10px] text-gray-500 overflow-x-auto whitespace-nowrap">
                                        <div className="grid grid-cols-5 gap-4 border-b border-gray-800 pb-1 mb-1 font-bold text-gray-400">
                                            <div>CONTAINER ID</div>
                                            <div>IMAGE</div>
                                            <div>STATUS</div>
                                            <div>PORTS</div>
                                            <div>NAMES</div>
                                        </div>
                                        <div className="grid grid-cols-5 gap-4">
                                            <div>a1b2c3d4e5f6</div>
                                            <div>itzg/minecraft-server</div>
                                            <div className="text-green-500">Up 3 days</div>
                                            <div>0.0.0.0:25565-&gt;25565/tcp</div>
                                            <div>mc_survival</div>
                                        </div>
                                        <div className="grid grid-cols-5 gap-4">
                                            <div>f6e5d4c3b2a1</div>
                                            <div>pterodactyl/panel</div>
                                            <div className="text-green-500">Up 3 days</div>
                                            <div>0.0.0.0:80-&gt;80/tcp</div>
                                            <div>panel</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 flex gap-2 items-center animate-pulse">
                                    <span className="text-purple-400">root@codoen:~#</span>
                                    <span className="w-2 h-4 bg-gray-500 block"></span>
                                </div>
                            </div>

                            {/* Bottom Bar mockup */}
                            <div className="bg-[#1e293b] px-4 py-2 border-t border-white/5 flex gap-4">
                                <div className="flex items-center gap-1.5 px-2 py-1 bg-black/20 rounded">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                    <span className="text-[9px] text-gray-400 font-bold uppercase">Online</span>
                                </div>
                                <div className="flex items-center gap-1.5 px-2 py-1 bg-black/20 rounded">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                    <span className="text-[9px] text-gray-400 font-bold uppercase">1Gbps Uplink</span>
                                </div>
                            </div>
                        </div>

                        {/* Pagination Dots */}
                        <div className="flex justify-center gap-2 mt-8">
                            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Locations Map */}
            <LocationsMap />

            {/* 5. FRIENDLY AND PROFESSIONAL SUPPORT */}
            <div className="py-24 bg-[#050b14] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight mb-4">FRIENDLY AND PROFESSIONAL SUPPORT</h2>
                        <p className="text-gray-400 text-xs leading-relaxed">
                            Our dedicated servers are unmanaged, but we still provide assistance and advice! With our custom-built control panel for dedicated server hosting, we can even manage the hardware/software on the server, so you can focus on running your game server.
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
                                Our support team is 100% human and is typically available within 15 minutes or less.
                            </p>
                        </div>

                        {/* Qualified */}
                        <div className="text-center group">
                            <div className="w-16 h-16 mx-auto mb-6 relative">
                                <div className="absolute inset-0 border-2 border-green-500 rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <BadgeCheck className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <h3 className="font-display font-bold text-white text-sm uppercase mb-4">QUALIFIED STAFF</h3>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                Our team has a vast array of knowledge. From running different games and mod packs to dedicated servers and different operating systems, we can provide you with the support you need.
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
                                We're available 24/7, so you have the support you need to run your server without issues.
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

            {/* 6. DIFFERENCE VIDEO SECTION */}
            <div className="py-24 bg-[#03060a] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        {/* Video Thumbnail */}
                        <div className="flex-1 w-full relative group cursor-pointer">
                            <div className="aspect-video bg-[#0f1623] rounded-lg border-2 border-purple-500/30 overflow-hidden relative shadow-2xl shadow-purple-900/20">
                                <img src="https://images.unsplash.com/photo-1558494949-ef253b294275?q=80&w=1000" alt="Server Room" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
                                {/* Overlay Graphics to match screenshot roughly */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex flex-col items-center">
                                        <Server className="w-12 h-12 text-white mb-2" />
                                        <h3 className="font-display font-black text-2xl text-white uppercase italic leading-none text-center">
                                            DEDICATED <br /> <span className="text-purple-500">SERVER HOSTING</span>
                                        </h3>
                                    </div>
                                </div>
                                {/* Play Button */}
                                <div className="absolute bottom-4 right-4 bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded font-bold text-[10px] uppercase flex items-center gap-2 transition-colors">
                                    WATCH ON <Play className="w-3 h-3 fill-current" /> YOUTUBE
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-6">
                            <h2 className="font-display font-black text-2xl text-white uppercase tracking-tight">THE DEDICATED SERVER DIFFERENCE</h2>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                With Codoen Hosting dedicated servers, our top-of-the-line tech ensures that your gameplay experience is seamless and something you can rely on. With the ability to customize your dedicated server exactly how you want it and a 24/7 customer support team available to assist, you have all the tools to play your games exactly how you want to.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 7. REVIEWS SECTION */}
            <div className="py-24 bg-[#050b14] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="font-display font-black text-2xl text-white uppercase tracking-tight">A FEW REVIEWS FROM TRUSTPILOT</h2>
                        <button className="text-purple-400 text-[10px] font-bold uppercase hover:text-white transition-colors flex items-center gap-1">
                            SEE ALL REVIEWS <ArrowRight className="w-3 h-3" />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Review 1 */}
                        <div className="bg-[#0f1623] p-6 rounded-lg border border-white/5 relative group hover:border-purple-500/30 transition-colors">
                            <h4 className="font-display font-bold text-white text-xs uppercase mb-2">FARIS ALTAQI</h4>
                            <div className="flex gap-0.5 mb-4">
                                {[1, 2, 3, 4, 5].map(i => <div key={i} className="bg-green-500 p-0.5"><Star className="w-2 h-2 text-white fill-white" /></div>)}
                            </div>
                            <h5 className="text-green-400 text-[10px] font-bold uppercase mb-2">"BEST SUPPORT!!"</h5>
                            <p className="text-gray-400 text-[10px] leading-relaxed mb-6">
                                The support team quickly resolves the issues in minutes! Quick ticket responses are one of the best!
                            </p>
                            <button className="text-[9px] font-bold text-gray-500 uppercase flex items-center gap-1 group-hover:text-white transition-colors">
                                OPEN REVIEW <ChevronRight className="w-3 h-3" />
                            </button>
                        </div>

                        {/* Review 2 */}
                        <div className="bg-[#0f1623] p-6 rounded-lg border border-white/5 relative group hover:border-purple-500/30 transition-colors">
                            <h4 className="font-display font-bold text-white text-xs uppercase mb-2">ZOY</h4>
                            <div className="flex gap-0.5 mb-4">
                                {[1, 2, 3, 4, 5].map(i => <div key={i} className="bg-green-500 p-0.5"><Star className="w-2 h-2 text-white fill-white" /></div>)}
                            </div>
                            <h5 className="text-green-400 text-[10px] font-bold uppercase mb-2">"USING CODOEN HOSTING"</h5>
                            <p className="text-gray-400 text-[10px] leading-relaxed mb-6">
                                the moderating team is excellent and helped me solve 2 major specific problems and overall great hosting company
                            </p>
                            <button className="text-[9px] font-bold text-gray-500 uppercase flex items-center gap-1 group-hover:text-white transition-colors">
                                OPEN REVIEW <ChevronRight className="w-3 h-3" />
                            </button>
                        </div>

                        {/* Review 3 */}
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
                    </div>
                </div>
            </div>

            {/* 8. FREQUENTLY ASKED QUESTIONS */}
            <div className="py-24 bg-[#050b14] border-t border-white/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="font-display font-black text-2xl text-white uppercase tracking-tight">FREQUENTLY ASKED QUESTIONS</h2>
                        <button className="bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold px-4 py-2 rounded uppercase tracking-wider transition-colors">
                            VIEW ALL FAQ
                        </button>
                    </div>

                    <div className="space-y-3">
                        {DEDICATED_FAQS.map((item, index) => (
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

export default DedicatedServerPage;