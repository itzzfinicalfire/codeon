import React, { useState, useRef } from 'react';
import { MINECRAFT_PLANS } from '../constants';
import StartHereBanner from './StartHereBanner';
import {
    Star, Check, ChevronRight, ChevronLeft, Zap, Rocket,
    ShieldCheck, Globe, Database, Settings, HelpCircle,
    MessageSquare, Download, Layers, Monitor, Gamepad,
    LayoutDashboard, ArrowRightLeft, Box, HardDrive, FileText,
    ChevronDown, Smartphone, Laptop, User
} from 'lucide-react';
import LocationsMap from './LocationsMap';

interface ProductPageProps {
    onNavigate?: (view: string, data?: any) => void;
}

// Helper component for the Isometric Blocks
const PlanBlockArt: React.FC<{ id: string }> = ({ id }) => {
    // Define colors for various themes
    const yellowTheme = { top: '#facc15', side: '#eab308', front: '#ca8a04' }; // 4GB
    const greenTheme = { top: '#a3e635', side: '#65a30d', front: '#4d7c0f' }; // 2GB, 3GB
    const purpleTheme = { top: '#e879f9', side: '#c026d3', front: '#a21caf' }; // 5GB, 6GB
    const redTheme = { top: '#f87171', side: '#dc2626', front: '#b91c1c' }; // Bottoms
    const blueTheme = { top: '#60a5fa', side: '#2563eb', front: '#1d4ed8' }; // 10GB+

    // Logic to determine theme based on ID
    let topC = greenTheme;
    if (id === '4gb') topC = yellowTheme;
    if (id === '5gb' || id === '6gb' || id === '8gb') topC = purpleTheme;
    if (['10gb', '12gb', '16gb', '20gb'].includes(id)) topC = blueTheme;

    // Base Cube Path (Isometric)
    const Cube = ({ x, y, colorT, colorS, colorF }: { x: number, y: number, colorT: string, colorS: string, colorF: string }) => (
        <g transform={`translate(${x}, ${y})`}>
            <path d="M16 0 L32 8 L16 16 L0 8 Z" fill={colorT} />
            <path d="M0 8 L16 16 V32 L0 24 Z" fill={colorF} />
            <path d="M16 16 L32 8 V24 L16 32 Z" fill={colorS} />
        </g>
    );

    return (
        <div className="relative w-32 h-32 mx-auto flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
            <svg width="100%" height="100%" viewBox="0 0 100 100" className="drop-shadow-2xl">
                <g transform="translate(18, 20)">
                    {/* Render stacks based on ID to create different shapes */}
                    {id === '2gb' && (
                        <>
                            <Cube x={16} y={32} colorT={redTheme.top} colorS={redTheme.side} colorF={redTheme.front} />
                            <Cube x={16} y={16} colorT={topC.top} colorS={topC.side} colorF={topC.front} />
                        </>
                    )}
                    {id === '3gb' && (
                        <>
                            <Cube x={0} y={40} colorT={redTheme.top} colorS={redTheme.side} colorF={redTheme.front} />
                            <Cube x={32} y={24} colorT={redTheme.top} colorS={redTheme.side} colorF={redTheme.front} />
                            <Cube x={16} y={16} colorT={topC.top} colorS={topC.side} colorF={topC.front} />
                        </>
                    )}
                    {id === '4gb' && (
                        <>
                            <Cube x={16} y={48} colorT={redTheme.top} colorS={redTheme.side} colorF={redTheme.front} />
                            <Cube x={16} y={32} colorT={redTheme.top} colorS={redTheme.side} colorF={redTheme.front} />
                            <Cube x={16} y={16} colorT={topC.top} colorS={topC.side} colorF={topC.front} />
                        </>
                    )}
                    {(id === '5gb' || id === '10gb') && (
                        <>
                            <Cube x={32} y={40} colorT={redTheme.top} colorS={redTheme.side} colorF={redTheme.front} />
                            <Cube x={0} y={24} colorT={redTheme.top} colorS={redTheme.side} colorF={redTheme.front} />
                            <Cube x={16} y={16} colorT={topC.top} colorS={topC.side} colorF={topC.front} />
                        </>
                    )}
                    {(id === '6gb' || id === '12gb') && (
                        <>
                            <Cube x={16} y={40} colorT={topC.top} colorS={topC.side} colorF={topC.front} />
                            <Cube x={16} y={24} colorT='#e0e7ff' colorS='#c7d2fe' colorF='#a5b4fc' />
                        </>
                    )}
                    {(id === '8gb' || id === '16gb' || id === '20gb') && (
                        <>
                            <Cube x={0} y={40} colorT={topC.top} colorS={topC.side} colorF={topC.front} />
                            <Cube x={32} y={40} colorT={topC.top} colorS={topC.side} colorF={topC.front} />
                            <Cube x={16} y={24} colorT={topC.top} colorS={topC.side} colorF={topC.front} />
                            <Cube x={16} y={8} colorT='#f3e8ff' colorS='#d8b4fe' colorF='#c084fc' />
                        </>
                    )}
                </g>
            </svg>
        </div>
    );
};

// Dashboard Preview Component for "Why Choose" section
const DashboardMockup: React.FC<{ activeId: string }> = ({ activeId }) => {
    return (
        <div className="w-full h-full min-h-[500px] bg-[#0f1623] rounded-xl border border-white/10 relative overflow-hidden flex flex-col shadow-2xl">
            {/* Top Bar */}
            <div className="h-12 bg-[#0a101d] border-b border-white/5 flex items-center px-4 justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="text-[10px] text-gray-500 font-mono">codoen-panel-v2.4.1</div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className="w-16 bg-[#0a101d] border-r border-white/5 flex flex-col items-center py-4 gap-4">
                    <div className={`p-2 rounded-lg transition-colors ${activeId === 'easy' ? 'bg-indigo-600 text-white' : 'text-gray-500'}`}><LayoutDashboard className="w-5 h-5" /></div>
                    <div className={`p-2 rounded-lg transition-colors ${activeId === 'instance' ? 'bg-indigo-600 text-white' : 'text-gray-500'}`}><Layers className="w-5 h-5" /></div>
                    <div className={`p-2 rounded-lg transition-colors ${activeId === 'swapping' ? 'bg-indigo-600 text-white' : 'text-gray-500'}`}><ArrowRightLeft className="w-5 h-5" /></div>
                    <div className="w-8 h-[1px] bg-white/10 my-1"></div>
                    <div className={`p-2 rounded-lg transition-colors ${activeId === 'modding' ? 'bg-indigo-600 text-white' : 'text-gray-500'}`}><Box className="w-5 h-5" /></div>
                    <div className={`p-2 rounded-lg transition-colors ${activeId === 'backups' ? 'bg-indigo-600 text-white' : 'text-gray-500'}`}><HardDrive className="w-5 h-5" /></div>
                    <div className="mt-auto p-2 text-gray-500"><Settings className="w-5 h-5" /></div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 bg-[#0f1623] p-6 relative">
                    <div className="max-w-md mx-auto">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h4 className="text-white font-bold text-lg">My Minecraft Server</h4>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    <span className="text-xs text-green-400 font-mono">Online</span>
                                    <span className="text-xs text-gray-600 font-mono ml-2">192.168.1.1:25565</span>
                                </div>
                            </div>
                            <button className="bg-green-600 hover:bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded uppercase">Start</button>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            <div className="bg-[#172033] p-3 rounded border border-white/5">
                                <div className="text-[10px] text-gray-500 uppercase font-bold">CPU Usage</div>
                                <div className="text-white font-mono text-sm mt-1">12%</div>
                                <div className="h-1 w-full bg-gray-700 mt-2 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 w-[12%]"></div>
                                </div>
                            </div>
                            <div className="bg-[#172033] p-3 rounded border border-white/5">
                                <div className="text-[10px] text-gray-500 uppercase font-bold">RAM Usage</div>
                                <div className="text-white font-mono text-sm mt-1">2.4GB</div>
                                <div className="h-1 w-full bg-gray-700 mt-2 rounded-full overflow-hidden">
                                    <div className="h-full bg-purple-500 w-[40%]"></div>
                                </div>
                            </div>
                            <div className="bg-[#172033] p-3 rounded border border-white/5">
                                <div className="text-[10px] text-gray-500 uppercase font-bold">SSD Disk</div>
                                <div className="text-white font-mono text-sm mt-1">15GB</div>
                            </div>
                        </div>

                        {/* Interactive Area Mockups */}
                        <div className="bg-[#172033] rounded-lg border border-white/5 min-h-[240px] p-4 relative overflow-hidden">
                            {activeId === 'easy' && (
                                <div className="space-y-3">
                                    <div className="text-xs text-gray-400 uppercase font-bold mb-2">Console</div>
                                    <div className="font-mono text-xs text-green-400 opacity-80 space-y-1">
                                        <div>[12:45:01 INFO]: Server started successfully</div>
                                        <div>[12:45:02 INFO]: Loaded 43 recipes</div>
                                        <div>[12:45:05 INFO]: Player Steve joined the game</div>
                                    </div>
                                </div>
                            )}
                            {activeId === 'instance' && (
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-xs font-bold text-white uppercase">Active Instances</span>
                                        <button className="text-[10px] bg-indigo-600 px-2 py-1 rounded text-white">New</button>
                                    </div>
                                    <div className="bg-[#0a101d] p-3 rounded border border-indigo-500/30 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-green-900/30 rounded flex items-center justify-center text-green-500"><Box className="w-4 h-4" /></div>
                                            <div>
                                                <div className="text-xs text-white font-bold">Better MC</div>
                                                <div className="text-[10px] text-gray-500">1.20.1</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/* Fallback for other tabs */}
                            {['swapping', 'modding', 'backups', 'ddos'].includes(activeId) && (
                                <div className="flex flex-col items-center justify-center h-full text-center p-4">
                                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-3">
                                        <Zap className="w-6 h-6 text-yellow-400" />
                                    </div>
                                    <div className="text-xs text-gray-400 max-w-[200px]">
                                        Feature active and monitoring system status.
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile App floating mockup */}
                    <div className="absolute -bottom-16 -right-8 w-32 h-64 bg-black border-4 border-gray-800 rounded-2xl shadow-2xl rotate-12 flex flex-col overflow-hidden pointer-events-none z-20">
                        <div className="h-6 bg-gray-900 w-full border-b border-gray-800"></div>
                        <div className="flex-1 bg-[#111827] p-2">
                            <div className="w-full h-8 bg-indigo-600 rounded mb-2"></div>
                            <div className="w-full h-20 bg-white/5 rounded mb-2"></div>
                            <div className="w-full h-20 bg-white/5 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MinecraftProductPage: React.FC<ProductPageProps> = ({ onNavigate }) => {
    const [billingCycle, setBillingCycle] = useState('Monthly');
    const [activeFeature, setActiveFeature] = useState('easy');
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleBuyPlan = (plan: any) => {
        if (onNavigate) onNavigate('configure', { type: 'minecraft', plan: plan.ram + ' Plan', price: plan.price });
    };

    const billingOptions = [
        { id: 'Monthly', label: 'Monthly', pricePerGb: '$3.00', discount: 1 },
        { id: 'Quarterly', label: 'Quarterly', pricePerGb: '$2.70', discount: 0.9 },
        { id: 'Semi-annually', label: 'Semi-annually', pricePerGb: '$2.55', discount: 0.85 },
        { id: 'Annually', label: 'Annually', pricePerGb: '$2.40', discount: 0.8 },
    ];

    const WHY_CHOOSE_TABS = [
        {
            id: 'easy',
            title: 'EASY TO USE',
            icon: LayoutDashboard,
            description: "Our custom control panel allows you to control all aspects of your server. With features like seven days of backups, instance management, one-click modpack installation, and more."
        },
        {
            id: 'instance',
            title: 'INSTANCE MANAGER',
            icon: Layers,
            description: "Create multiple instances on one server! Want to try a new modpack but don't want to lose your current world? Create a new instance and switch between them in seconds."
        },
        {
            id: 'swapping',
            title: 'GAME SWAPPING',
            icon: ArrowRightLeft,
            description: "Switch between any of our 100+ supported games instantly. Your files are saved so you can switch back at any time."
        },
        {
            id: 'modding',
            title: 'MODPACK INSTALLER',
            icon: Box,
            description: "Install over 2,000 modpacks with a single click. We support all major launchers including CurseForge, FTB, Technic, and more."
        },
        {
            id: 'backups',
            title: 'AUTOMATED BACKUPS',
            icon: HardDrive,
            description: "We automatically backup your server every day and keep them for 7 days. You can also create manual backups at any time."
        },
        {
            id: 'ddos',
            title: 'DDOS PROTECTION',
            icon: ShieldCheck,
            description: "Our advanced DDoS protection is included for free with every server. It's built specifically for gaming to ensure zero lag during attacks."
        }
    ];

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 320;
            const currentScroll = scrollContainerRef.current.scrollLeft;
            scrollContainerRef.current.scrollTo({
                left: direction === 'right' ? currentScroll + scrollAmount : currentScroll - scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const getPrice = (basePrice: string, discount: number) => {
        const price = parseFloat(basePrice) * discount;
        return price.toFixed(2);
    }

    return (
        <div className="bg-[#050b14] min-h-screen pt-20 font-sans text-white">
            {/* 1. HERO SECTION */}
            <div className="relative overflow-hidden bg-[#0a101d] border-b border-white/5">
                {/* Background Image/Pattern */}
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1624138784181-2999e46ef284?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050b14] via-[#050b14]/90 to-[#050b14]"></div>

                <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 relative z-10 flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <div className="flex flex-wrap items-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                            <span className="flex items-center gap-1.5 bg-white/5 px-2 py-1 rounded"><ArrowRightLeft className="w-3 h-3" /> Cross-Play</span>
                            <span className="flex items-center gap-1.5 bg-white/5 px-2 py-1 rounded"><Monitor className="w-3 h-3" /> PC</span>
                            <span className="flex items-center gap-1.5 bg-white/5 px-2 py-1 rounded"><Gamepad className="w-3 h-3" /> Xbox</span>
                            <span className="flex items-center gap-1.5 bg-white/5 px-2 py-1 rounded"><Gamepad className="w-3 h-3" /> PlayStation</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-display font-black uppercase italic tracking-tighter leading-[0.9]">
                            Minecraft <br />
                            <span className="text-white">Server Hosting</span>
                        </h1>

                        <ul className="space-y-3">
                            {[
                                "Integrated Datapack and Plugins (ModrinthAPI)",
                                "21 Worldwide Locations",
                                "Full Mod Support",
                                "Automated Modpack Installations",
                                "24/7/365 Support"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm font-bold text-gray-300">
                                    <div className="bg-blue-600 rounded-full p-0.5 shadow-lg shadow-blue-900/50"><Check className="w-3 h-3 text-white" /></div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4">
                            <button
                                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded uppercase tracking-wider transition-all shadow-xl shadow-blue-900/40 hover:scale-105"
                            >
                                Choose a Plan
                            </button>

                            <div className="flex items-center gap-4 bg-[#0f1623] border border-white/10 px-4 py-2 rounded-lg">
                                <div className="bg-[#00b67a] p-1.5 rounded">
                                    <Star className="w-5 h-5 text-white fill-white" />
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-4 h-4 bg-[#00b67a] flex items-center justify-center"><Star className="w-2.5 h-2.5 text-white fill-white" /></div>)}
                                    </div>
                                    <span className="text-[10px] text-gray-400 mt-1">Based on <strong>25,000+ reviews</strong> on <span className="text-white font-bold">Trustpilot</span></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image / Graphic */}
                    <div className="flex-1 relative w-full max-w-lg lg:max-w-none hidden lg:block">
                        {/* Floating Elements for visual interest */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-600/20 blur-[60px] rounded-full animate-pulse"></div>
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-600/20 blur-[60px] rounded-full animate-pulse delay-700"></div>

                        <div className="relative group perspective-1000">
                            <img
                                src="https://i.postimg.cc/XJh18y4z/image.png"
                                alt="Minecraft Characters"
                                className="rounded-2xl shadow-2xl border-2 border-white/5 relative z-10 transform transition-transform duration-700 group-hover:rotate-1 group-hover:scale-105"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#050b14] via-transparent to-transparent opacity-60 z-20 pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. PRICING SECTION */}
            <div id="pricing" className="py-24 bg-[#050b14] relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* CodoenOne Header */}
                    <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <Rocket className="w-6 h-6 text-purple-500 transform -rotate-45" />
                                <h2 className="text-3xl font-black font-display text-white tracking-tight">Codoen<span className="text-purple-400">One</span>™</h2>
                            </div>
                            <p className="text-sm font-bold text-gray-400">100+ games, all in one plan. <span className="text-white font-bold cursor-pointer hover:underline">Learn More</span></p>
                        </div>

                        {/* Billing Toggle */}
                        <div className="bg-[#0f1623] p-1 rounded-xl inline-flex border border-white/10">
                            {billingOptions.map(option => (
                                <button
                                    key={option.id}
                                    onClick={() => setBillingCycle(option.id)}
                                    className={`px-4 py-2 rounded-lg flex flex-col items-center justify-center min-w-[100px] transition-all duration-300 border border-transparent ${billingCycle === option.id
                                        ? 'bg-blue-600 text-white shadow-lg border-blue-500/50'
                                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    <span className="font-bold text-[10px] uppercase">{option.label}</span>
                                    <div className="flex items-center gap-1">
                                        <span className={`text-[9px] font-mono ${billingCycle === option.id ? 'text-blue-100' : 'text-gray-500'}`}>
                                            {option.pricePerGb} / GB
                                        </span>
                                        {option.discount < 1 && (
                                            <span className="text-[8px] font-bold bg-white/20 px-1 rounded text-white ml-1">
                                                -{Math.round((1 - option.discount) * 100)}%
                                            </span>
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Carousel */}
                    <div className="relative group/carousel">
                        {/* Navigation Buttons */}
                        <button
                            onClick={() => scroll('left')}
                            className="absolute -left-4 top-1/2 -translate-y-1/2 z-30 bg-[#1e293b] hover:bg-blue-600 text-white p-3 rounded-full shadow-2xl border border-white/10 transition-all opacity-0 group-hover/carousel:opacity-100 transform -translate-x-4 group-hover/carousel:translate-x-0"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="absolute -right-4 top-1/2 -translate-y-1/2 z-30 bg-[#1e293b] hover:bg-blue-600 text-white p-3 rounded-full shadow-2xl border border-white/10 transition-all opacity-0 group-hover/carousel:opacity-100 transform translate-x-4 group-hover/carousel:translate-x-0"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        <div
                            ref={scrollContainerRef}
                            className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory scrollbar-hide px-4 -mx-4 md:mx-0"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {MINECRAFT_PLANS.map((plan) => {
                                const currentDiscount = billingOptions.find(b => b.id === billingCycle)?.discount || 1;
                                const displayedPrice = getPrice(plan.price, currentDiscount);
                                const isTopVanilla = plan.badge === 'Top Vanilla Plan';
                                const isTopModded = plan.badge === 'Top Modded Plan';

                                return (
                                    <div key={plan.id} className="min-w-[280px] snap-center relative group">
                                        {plan.badge && (
                                            <div className={`absolute -top-3 left-1/2 -translate-x-1/2 z-20 text-[10px] font-bold px-3 py-1 rounded-full shadow-xl flex items-center gap-1 whitespace-nowrap border border-white/10 uppercase tracking-wider
                                                ${isTopVanilla ? 'bg-gradient-to-r from-blue-600 to-blue-400 text-white' : ''}
                                                ${isTopModded ? 'bg-gradient-to-r from-purple-600 to-purple-400 text-white' : ''}
                                            `}>
                                                <Star className="w-3 h-3 fill-current" /> {plan.badge}
                                            </div>
                                        )}

                                        <div className={`h-full bg-gradient-to-b from-[#111827] to-[#0b0f19] border rounded-xl p-6 transition-all duration-300 relative overflow-hidden flex flex-col group-hover:-translate-y-2 group-hover:shadow-2xl
                                            ${plan.badge ? 'border-blue-500/30 shadow-blue-900/10' : 'border-white/5 hover:border-white/20'}
                                        `}>
                                            <div className="relative z-10 -mt-2 mb-6 shrink-0 transform group-hover:scale-105 transition-transform duration-500">
                                                <PlanBlockArt id={plan.id} />
                                            </div>

                                            <div className="relative z-10 flex-1 flex flex-col text-center">
                                                <h3 className="font-display font-black text-5xl text-white mb-1 tracking-tighter">{plan.ram}</h3>
                                                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-wider mb-6">Recommended for {plan.players} players</p>

                                                <div className="mb-6 flex items-baseline justify-center gap-1 mt-auto">
                                                    <span className="text-lg font-bold text-gray-400">$</span>
                                                    <span className="text-3xl font-bold text-white tracking-tight">{displayedPrice}</span>
                                                    <span className="text-[9px] text-gray-500 font-bold uppercase ml-1">/ {billingCycle === 'Monthly' ? 'Monthly' : billingCycle.replace('ly', '')}</span>
                                                </div>

                                                <button
                                                    onClick={() => handleBuyPlan(plan)}
                                                    className={`w-full text-white font-bold py-3 rounded text-xs shadow-lg mb-6 transition-all uppercase tracking-wide
                                                    ${plan.badge
                                                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-blue-900/30'
                                                            : 'bg-[#1e293b] hover:bg-[#334155] border border-white/5'}
                                                `}>
                                                    Buy Plan
                                                </button>

                                                <div className="space-y-2 text-left pt-4 border-t border-white/5">
                                                    <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-wide">
                                                        <Check className="w-3 h-3 text-gray-500" strokeWidth={3} />
                                                        <span>Supports {parseInt(plan.ram) * 10 + 20} other games</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-wide">
                                                        <Check className="w-3 h-3 text-gray-500" strokeWidth={3} />
                                                        <span>Great for {parseInt(plan.ram) > 6 ? 'modded' : 'vanilla'} servers</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="flex justify-center mt-4">
                        <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
                            <div className="w-1/3 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. HELP BANNER */}
            <div className="bg-[#111827] border-y border-white/5 py-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-900/10 to-blue-900/10 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                    <div>
                        <h3 className="font-display font-black text-white uppercase text-xl mb-1">Not sure where to start?</h3>
                        <p className="text-sm text-gray-400">Answer a few questions and we'll recommend a plan best for your use!</p>
                    </div>
                    <button className="bg-[#1e293b] hover:bg-[#334155] text-white px-8 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors border border-white/10 shadow-lg">
                        Help Me Decide
                    </button>

                    {/* Decorative character */}
                    <div className="hidden lg:block absolute right-64 bottom-[-60px] pointer-events-none opacity-20">
                        <img src="https://www.minecraft.net/content/dam/games/minecraft/key-art/Minecraft-xbox-keyart.jpg" className="w-32 h-32 object-cover rounded-full blur-sm" alt="" />
                    </div>
                </div>
            </div>

            {/* 4. FEATURE COMPARISON & BOOST SECTION */}
            <div className="py-24 bg-[#050b14]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8">

                        {/* LEFT CARD: CODOEN ONE FEATURES */}
                        <div className="lg:col-span-2 bg-[#0f1623] border border-white/10 rounded-2xl overflow-hidden flex flex-col">
                            {/* Header Banner */}
                            <div className="relative h-32 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 flex items-center px-8 border-b border-white/5">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1624138784181-2999e46ef284?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Rocket className="w-6 h-6 text-purple-500 transform -rotate-45" />
                                        <h2 className="text-2xl font-black font-display text-white tracking-tight">Codoen<span className="text-purple-400">One</span>™</h2>
                                    </div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Unlimited access to over 100 games.</p>
                                </div>
                            </div>

                            {/* Price Bar */}
                            <div className="bg-[#0a101d] py-6 text-center border-b border-white/5">
                                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">STARTING AT</p>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-3xl font-black text-white tracking-tighter">$3.00</span>
                                    <span className="text-xs text-gray-500 font-bold uppercase">/ Month</span>
                                </div>
                                <p className="text-[10px] text-purple-400 font-bold uppercase mt-2"><span className="text-white">CodoenOne</span> includes</p>
                            </div>

                            {/* Features Grid */}
                            <div className="p-8 grid md:grid-cols-2 gap-8 flex-1">
                                {/* Hardware Column */}
                                <div>
                                    <h3 className="font-bold text-white text-sm uppercase mb-6 tracking-wider pl-2 border-l-2 border-purple-500">Hardware</h3>
                                    <ul className="space-y-4">
                                        {[
                                            "Instant Setup", "DDoS Protection", "NVMe Drives", "Unlimited Disk Space",
                                            "Free MySQL Database", "Free Subdomains", "Modern Hardware", "Manual Modpack Installs"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-xs font-bold text-gray-400">
                                                <Check className="w-4 h-4 text-gray-600 shrink-0" strokeWidth={3} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <h3 className="font-bold text-white text-sm uppercase mt-8 mb-6 tracking-wider pl-2 border-l-2 border-purple-500">Support</h3>
                                    <ul className="space-y-4">
                                        {[
                                            "24/7/365 Support", "Quick Response", "Experienced Staff", "Personalized Support", "Over 2,000 Help Center Articles"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-xs font-bold text-gray-400">
                                                <Check className="w-4 h-4 text-gray-600 shrink-0" strokeWidth={3} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Panel Column */}
                                <div>
                                    <h3 className="font-bold text-white text-sm uppercase mb-6 tracking-wider pl-2 border-l-2 border-purple-500">Codoen Games Panel</h3>
                                    <ul className="space-y-4">
                                        {[
                                            "Game Swapping", "2,300+ Modpacks", "Instance Manager (2 Slots)",
                                            "Configurable Backups", "Pro File Manager", "Full FTP Access",
                                            "Live Performance Metrics", "8,000+ Minecraft Plugins",
                                            "Minecraft Datapack Manager", "In-Game Chat", "Mass Actions",
                                            "Auto Command Complete", "Daily Backups", "User-Friendly Config Editor",
                                            "Player Manager", "Steam Workshop", "Server Importing"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-xs font-bold text-gray-400">
                                                <Check className="w-4 h-4 text-gray-600 shrink-0" strokeWidth={3} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="p-4 bg-[#0a101d] border-t border-white/5">
                                <button onClick={() => handleBuyPlan({ ram: '4GB', price: '$11.99' })} className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-lg uppercase tracking-wider text-sm transition-colors shadow-lg">
                                    Choose a Plan
                                </button>
                            </div>
                        </div>

                        {/* RIGHT CARD: CODOEN BOOST */}
                        <div className="lg:col-span-1 bg-[#0f1623] border border-indigo-500/30 rounded-2xl overflow-hidden flex flex-col relative shadow-[0_0_40px_rgba(79,70,229,0.1)]">
                            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 to-transparent pointer-events-none"></div>

                            {/* Header */}
                            <div className="p-8 pb-4 text-center relative z-10">
                                <div className="border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[10px] font-bold px-3 py-1 rounded-full w-fit mx-auto mb-4 uppercase tracking-wider">
                                    Addon
                                </div>
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <Rocket className="w-6 h-6 text-cyan-400 fill-cyan-400/20" />
                                    <h2 className="text-2xl font-black font-display text-white">Codoen<span className="text-cyan-400">Boost</span>™</h2>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="text-center mb-8 relative z-10">
                                <div className="flex items-end justify-center gap-2 mb-2">
                                    <span className="text-xl text-white font-bold mb-1">+</span>
                                    <span className="text-4xl font-black text-white tracking-tighter">$4.99</span>
                                    <span className="text-[10px] text-gray-500 font-bold uppercase mb-1.5">/ Month</span>
                                </div>
                                <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">ADDED TO ANY CODOENONE PLAN</p>
                            </div>

                            <div className="text-center mb-6 relative z-10">
                                <p className="text-[10px] text-gray-400 font-bold uppercase">Everything in <span className="text-purple-400">CodoenOne</span>, plus:</p>
                            </div>

                            {/* Boost Features List */}
                            <div className="px-8 space-y-6 relative z-10">
                                <div>
                                    <div className="flex items-center gap-2 text-white font-bold text-xs mb-1">
                                        <div className="w-1.5 h-1.5 bg-cyan-400 rotate-45"></div>
                                        Increased Instance Slot Storage
                                    </div>
                                    <div className="pl-4 text-[10px] text-gray-500 font-mono space-y-0.5">
                                        <div>+ 2 instance slots</div>
                                        <div>+ 40GB storage</div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 text-white font-bold text-xs mb-1">
                                        <div className="w-1.5 h-1.5 bg-cyan-400 rotate-45"></div>
                                        Increased Backup Slot Storage
                                    </div>
                                    <div className="pl-4 text-[10px] text-gray-500 font-mono space-y-0.5">
                                        <div>+ 2 backup slots</div>
                                        <div>+ 40GB storage</div>
                                        <div>+ 4 daily backup slots</div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 text-white font-bold text-xs">
                                        <div className="w-1.5 h-1.5 bg-cyan-400 rotate-45"></div>
                                        Temporary RAM Boosting
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 text-white font-bold text-xs">
                                        <div className="w-1.5 h-1.5 bg-cyan-400 rotate-45"></div>
                                        Premium Subdomains
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 text-white font-bold text-xs">
                                        <div className="w-1.5 h-1.5 bg-cyan-400 rotate-45"></div>
                                        Boost Squad Discord Perks
                                    </div>
                                </div>
                            </div>

                            {/* Rocket Graphic area at bottom */}
                            <div className="flex-1 min-h-[200px] relative mt-8 flex items-end justify-center overflow-hidden">
                                {/* Atmosphere glow */}
                                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-indigo-600/20 to-transparent z-0"></div>

                                {/* Clouds */}
                                <div className="absolute bottom-0 w-full h-16 flex items-end text-white/5 z-10">
                                    {/* Using SVG shapes for cloud like appearance */}
                                    <svg viewBox="0 0 400 100" className="w-full h-full fill-current" preserveAspectRatio="none">
                                        <path d="M0 100 V 70 Q 30 50 60 70 T 120 70 T 180 70 T 240 70 T 300 70 T 360 70 T 400 70 V 100 Z" />
                                        <circle cx="50" cy="80" r="30" />
                                        <circle cx="150" cy="90" r="40" />
                                        <circle cx="280" cy="80" r="35" />
                                        <circle cx="380" cy="90" r="30" />
                                    </svg>
                                </div>

                                {/* Rocket */}
                                <div className="relative z-20 mb-10 animate-bounce">
                                    <Rocket className="w-24 h-24 text-white fill-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transform -rotate-45" />
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-4 w-4 h-20 bg-gradient-to-b from-orange-400 to-transparent opacity-80 blur-md"></div>
                                </div>

                                {/* Stars */}
                                <div className="absolute inset-0">
                                    <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                                    <div className="absolute top-20 right-20 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-100"></div>
                                    <div className="absolute top-40 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Section (Retained) */}
            <div className="bg-[#050b14] py-24 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="font-display text-3xl font-bold text-white mb-8">WHY CHOOSE CODOEN?</h2>
                            <div className="space-y-4">
                                {WHY_CHOOSE_TABS.map((tab) => (
                                    <div
                                        key={tab.id}
                                        onClick={() => setActiveFeature(tab.id)}
                                        className={`p-4 rounded-xl cursor-pointer transition-all border ${activeFeature === tab.id
                                            ? 'bg-[#0f1623] border-indigo-500/50 shadow-lg shadow-indigo-900/10'
                                            : 'border-transparent hover:bg-white/5'
                                            }`}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className={`p-2 rounded-lg ${activeFeature === tab.id ? 'bg-indigo-500/20 text-indigo-400' : 'bg-white/5 text-gray-400'}`}>
                                                <tab.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className={`font-bold mb-1 ${activeFeature === tab.id ? 'text-white' : 'text-gray-300'}`}>{tab.title}</h4>
                                                <p className="text-sm text-gray-500 leading-relaxed">{tab.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative h-full min-h-[600px] hidden lg:block">
                            <div className="sticky top-24">
                                <DashboardMockup activeId={activeFeature} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Locations Map */}
            <LocationsMap />

            {/* 6. COMPATIBILITY SECTION (NEW) */}
            <div className="bg-[#2e1065] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-center gap-16">
                    {/* Illustration Area */}
                    <div className="relative z-10">
                        <div className="relative w-full max-w-md mx-auto">
                            <div className="absolute inset-0 bg-white/20 blur-[60px] rounded-full"></div>
                            <img src="https://images.unsplash.com/photo-1624138784181-2999e46ef284?q=80&w=800&auto=format&fit=crop" className="relative z-10 rounded-xl shadow-2xl border-4 border-white/10 mix-blend-overlay opacity-50" alt="Crossplay" />
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <div className="flex gap-4">
                                    <Monitor className="w-16 h-16 text-white drop-shadow-lg" />
                                    <ArrowRightLeft className="w-16 h-16 text-white drop-shadow-lg animate-pulse" />
                                    <Gamepad className="w-16 h-16 text-white drop-shadow-lg" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Area */}
                    <div className="max-w-xl text-center lg:text-left relative z-10">
                        <div className="inline-block bg-white/10 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-white mb-4">Compatibility</div>
                        <h2 className="font-display font-black text-3xl md:text-5xl text-white mb-6 uppercase leading-tight">Play Where You Want</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            Whether you play Minecraft on PC or console, our server hosting has you covered! You can enjoy full crossplay functionality with your friends between these two platforms, or turn the setting on or off as you wish.
                        </p>
                    </div>
                </div>

                {/* Navigation Bar at bottom */}
                <div className="bg-[#1e0b4b] border-t border-white/10">
                    <div className="max-w-7xl mx-auto px-4 flex justify-center">
                        <div className="flex overflow-x-auto scrollbar-hide">
                            {['Compatibility', 'DDoS Protection', '21 Locations', 'High Performance', 'Support'].map((item, i) => (
                                <button key={i} className={`px-8 py-4 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${i === 0 ? 'bg-[#3b0764] text-white border-b-2 border-purple-400' : 'text-gray-400 hover:text-white'}`}>
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 7. MODDED MINECRAFT SECTION (NEW) */}
            <div className="bg-[#050b14] py-24 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Modpack Grid */}
                        <div className="grid grid-cols-2 gap-4 flex-1 w-full max-w-lg">
                            <div className="aspect-square bg-[#0f1623] rounded-2xl border border-white/10 overflow-hidden relative group">
                                <img src="https://i.postimg.cc/1zWjLYZ6/image-2026-02-12-221251344.png" alt="Better Minecraft" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                                    <span className="text-white font-bold text-xs">Better Minecraft</span>
                                </div>
                            </div>
                            <div className="aspect-square bg-[#0f1623] rounded-2xl border border-white/10 overflow-hidden relative group mt-8">
                                <img src="https://i.postimg.cc/W1TYtPNw/image.png" alt="All The Mods" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                                    <span className="text-white font-bold text-xs">All The Mods 9</span>
                                </div>
                            </div>
                            <div className="aspect-square bg-[#0f1623] rounded-2xl border border-white/10 overflow-hidden relative group -mt-8">
                                <img src="https://i.postimg.cc/PJNpSJQP/image.png" alt="RLCraft" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                                    <span className="text-white font-bold text-xs">RLCraft</span>
                                </div>
                            </div>
                            <div className="aspect-square bg-[#0f1623] rounded-2xl border border-white/10 overflow-hidden relative group flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-3xl font-black text-white mb-1">2000+</div>
                                    <div className="text-[10px] text-gray-400 uppercase font-bold">Modpacks</div>
                                </div>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="flex-1 space-y-6">
                            <h2 className="font-display font-black text-4xl lg:text-5xl text-white uppercase leading-[0.9]">
                                Play Modded <br />
                                Minecraft With <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Your Friends</span>
                            </h2>
                            <p className="text-cyan-400 font-bold text-xs uppercase tracking-widest">Choose from over 2,300 Modpacks</p>
                            <p className="text-gray-400 leading-relaxed">
                                With Codoen Hosting, enjoy easy access to over 2,300 of the best Minecraft mods and modpacks and install them with just a single click! This ensures you can build your gameplay experience to the tastes and needs of your community, however big or small.
                            </p>
                            <button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-lg font-bold uppercase text-xs tracking-wider transition-colors shadow-lg mt-4">
                                Browse Modpacks
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 8. LOCATIONS SECTION (NEW - Inline for specific styling) */}
            <div className="py-24 bg-[#050b14] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-display font-black text-3xl font-bold text-white uppercase tracking-tight mb-4">Worldwide Server Hosting Locations</h2>
                    <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-16">
                        Host from any of our 21 worldwide locations with <span className="text-white font-bold">CodoenOne</span> and swap between locations free of charge!
                    </p>

                    {/* Simplified Map Visualization */}
                    <div className="relative w-full aspect-[2/1] bg-[#0f1623] rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/2/23/Blue_Marble_2002.png')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
                        <div className="absolute inset-0 bg-[#050b14]/60"></div>

                        {/* Map Dots */}
                        {[
                            { top: '35%', left: '22%' }, { top: '38%', left: '28%' }, { top: '32%', left: '32%' },
                            { top: '25%', left: '48%' }, { top: '28%', left: '52%' }, { top: '30%', left: '55%' },
                            { top: '55%', left: '30%' }, { top: '60%', left: '85%' }, { top: '35%', left: '75%' },
                            { top: '22%', left: '68%' }, { top: '45%', left: '15%' }, { top: '70%', left: '60%' }
                        ].map((pos, i) => (
                            <div key={i} className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,1)] animate-pulse" style={{ top: pos.top, left: pos.left }}>
                                <div className="absolute inset-0 w-full h-full bg-purple-400 rounded-full animate-ping opacity-75 duration-3000"></div>
                            </div>
                        ))}

                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                            <div className="bg-[#050b14]/90 backdrop-blur px-6 py-2 rounded-lg border border-white/10 text-[10px] text-gray-400 uppercase font-bold tracking-widest">
                                Select a location to view latency
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 9. SUPPORT SECTION */}
            <div className="bg-[#0f1623] py-24 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight mb-2">Friendly and Professional Support</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-[#0a101d] border border-cyan-500/30 p-8 rounded-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <MessageSquare className="w-24 h-24 text-cyan-500" />
                            </div>
                            <div className="w-12 h-12 bg-cyan-900/30 rounded-lg flex items-center justify-center mb-6 text-cyan-400">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <h3 className="font-display font-bold text-white uppercase mb-4">24/7/365 Support</h3>
                            <p className="text-gray-400 text-xs leading-relaxed mb-8">
                                At Codoen Hosting, we offer 24/7/365 support through our live chat and ticket services. Get help instantly from our chat or submit a ticket with any questions or concerns you may have and get answers in an average 15 minutes.
                            </p>
                            <div className="mt-auto">
                                <p className="text-[10px] text-gray-500 font-bold uppercase mb-2">Need help with anything?</p>
                                <button className="text-white text-xs font-bold uppercase flex items-center gap-2 hover:text-cyan-400 transition-colors">
                                    Send us a message <ChevronRight className="w-3 h-3" />
                                </button>
                            </div>
                        </div>

                        <div className="bg-[#0a101d] border border-white/5 p-8 rounded-2xl relative overflow-hidden group hover:border-white/10 transition-colors">
                            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-gray-400">
                                <Check className="w-6 h-6" />
                            </div>
                            <h3 className="font-display font-bold text-white uppercase mb-4">Experienced Staff</h3>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                Our support staff is full of server hosting experts who have been building and playing on game servers for many years. We know the ins and outs of Minecraft and can help with specific technical issues.
                            </p>
                        </div>

                        <div className="bg-[#0a101d] border border-white/5 p-8 rounded-2xl relative overflow-hidden group hover:border-white/10 transition-colors">
                            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-gray-400">
                                <Settings className="w-6 h-6" />
                            </div>
                            <h3 className="font-display font-bold text-white uppercase mb-4">Personalized Support</h3>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                At Codoen Hosting, we tackle each situation in context from the very beginning. That means more accurate answers from support agents that actually care about your specific server needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 10. CONFIGURE PLAN SECTION */}
            <div className="bg-[#050b14] py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight mb-2">Ready to Start? Configure Your Plan</h2>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-12">What version of Minecraft do you play?</p>

                    <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        <button className="bg-[#0f1623] border-2 border-white/10 hover:border-white/30 hover:bg-[#161f30] p-6 rounded-xl flex items-center gap-4 transition-all group text-left">
                            <div className="w-12 h-12 bg-[#2d3748] rounded flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Monitor className="w-6 h-6 text-gray-300" />
                            </div>
                            <div>
                                <div className="font-display font-bold text-white text-lg">Java</div>
                                <div className="text-[10px] text-gray-500 font-bold uppercase">Original Version</div>
                            </div>
                        </button>

                        <button className="bg-[#0f1623] border-2 border-white/10 hover:border-white/30 hover:bg-[#161f30] p-6 rounded-xl flex items-center gap-4 transition-all group text-left">
                            <div className="w-12 h-12 bg-[#2d3748] rounded flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Smartphone className="w-6 h-6 text-gray-300" />
                            </div>
                            <div>
                                <div className="font-display font-bold text-white text-lg">Bedrock</div>
                                <div className="text-[10px] text-gray-500 font-bold uppercase">Windows 10, Console, Mobile</div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* 11. FAQ SECTION */}
            <div className="bg-[#050b14] py-24 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="font-display font-black text-2xl text-white uppercase tracking-tight">Frequently Asked Questions</h2>
                        <button className="bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold px-4 py-2 rounded uppercase tracking-wider transition-colors">
                            View All FAQ
                        </button>
                    </div>

                    <div className="space-y-3">
                        {[
                            "Do Minecraft servers run 24/7?",
                            "Can I change the modpack running on my server?",
                            "Does my server come with DDoS protection?",
                            "What is included in CodoenOne?",
                            "When will my Minecraft server be ready to play?",
                            "Will my Minecraft server support Crossplay?"
                        ].map((question, index) => (
                            <div key={index} className="bg-[#0f1623] hover:bg-[#161f30] border border-white/5 rounded-lg transition-colors cursor-pointer group">
                                <div className="px-6 py-4 flex justify-between items-center">
                                    <span className="font-display font-bold text-xs text-gray-300 uppercase tracking-wide group-hover:text-white transition-colors">
                                        {question}
                                    </span>
                                    <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 12. BOTTOM PROMO */}
            <div className="bg-[#03060a] py-16 border-t border-white/5">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 group cursor-pointer">
                                <img src="https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=1000&auto=format&fit=crop" alt="Video Thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-white border-b-8 border-b-transparent ml-1"></div>
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="font-display font-black text-2xl text-white uppercase italic leading-none">Minecraft <br /><span className="text-cyan-400">Server Hosting</span></h3>
                                </div>
                                <div className="absolute bottom-4 right-4 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                                    Watch on YouTube
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h3 className="font-display font-black text-xl text-white uppercase mb-4">Managing Minecraft Java Servers with Codoen Hosting</h3>
                            <p className="text-gray-400 text-xs leading-relaxed mb-6">
                                Minecraft is made better by bringing people together, and our Minecraft servers allow players of all experience levels to do exactly that!
                            </p>
                            <button className="bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-6 rounded uppercase text-xs tracking-wider transition-colors shadow-lg shadow-red-900/20">
                                Watch Video
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 13. REVIEWS SECTION */}
            <div className="bg-[#050b14] py-24 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="font-display font-black text-2xl text-white uppercase tracking-tight">READ REVIEWS FROM TRUSTPILOT</h2>
                        <button className="text-gray-400 text-[10px] font-bold uppercase hover:text-white transition-colors flex items-center gap-1">
                            See All Reviews <ChevronRight className="w-3 h-3" />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                user: "Jacob Tremblay",
                                title: "Very Good",
                                content: "Very fast and helpful answers when I needed it. Made many servers on this host and never been disappointed. Also very good tutorials."
                            },
                            {
                                user: "GuacGuardian",
                                title: "If you're looking for a host do it here",
                                content: "Awesome. So quick and easy. My server was up and running in minutes. The stickers were the cherry on top. Thanks for everything"
                            },
                            {
                                user: "Hugo Mathoux",
                                title: "Im using Codoen hosting for a server...",
                                content: "Im using Codoen hosting for a server with mods and around 20 players in the same time, and the performance are pretty good for the price"
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
                                    Open Review <ChevronRight className="w-3 h-3" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 14. OTHER GAMES SECTION */}
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
                                    <span className="font-display font-bold text-white text-sm uppercase tracking-wider drop-shadow-lg">{game.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded uppercase text-xs tracking-wider transition-colors shadow-lg">
                        See All 100+ Games
                    </button>
                </div>
            </div>

            {/* 15. START HERE BANNER */}
            <StartHereBanner />
        </div>
    );
};

export default MinecraftProductPage;