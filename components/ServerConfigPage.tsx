import React, { useState, useEffect } from 'react';
import { 
    Check, ChevronDown, MapPin, Globe, CreditCard, 
    Zap, Tag, Shield, Gift, Server, ArrowRight, Star
} from 'lucide-react';
import StartHereBanner from './StartHereBanner';

interface ServerConfigProps {
    initialData?: {
        type: string;
        plan?: string;
        price?: string;
    } | null;
}

const ServerConfigPage: React.FC<ServerConfigProps> = ({ initialData }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('Auto-detected (Dallas, TX)');
    const [billingCycle, setBillingCycle] = useState('Monthly');
    const [addons, setAddons] = useState<string[]>([]);
    
    // Determine context based on type
    const type = initialData?.type || 'minecraft';
    const planName = initialData?.plan || 'Standard Plan';
    const basePrice = initialData?.price ? parseFloat(initialData.price.replace('$', '')) : 11.99;

    // Configuration Options based on type
    const getOptionsForType = () => {
        switch(type) {
            case 'vps':
            case 'dedicated':
                return {
                    title: 'Configure Operating System',
                    desc: 'Select the operating system you would like pre-installed on your server.',
                    options: [
                        'Ubuntu 22.04 LTS (Recommended)',
                        'Ubuntu 20.04 LTS',
                        'Debian 12 (Bookworm)',
                        'CentOS Stream 9',
                        'AlmaLinux 9',
                        'Windows Server 2022 Standard (Evaluation)'
                    ],
                    icon: <HardDriveIcon className="w-6 h-6" />
                };
            case 'web':
                return {
                    title: 'Content Management System',
                    desc: 'Choose a CMS to be pre-installed or select Empty to start fresh.',
                    options: [
                        'WordPress (Recommended)',
                        'Joomla',
                        'Drupal',
                        'Magento',
                        'Empty (cPanel Access Only)'
                    ],
                    icon: <Globe className="w-6 h-6" />
                };
            case 'bot':
                return {
                    title: 'Runtime Environment',
                    desc: 'Select the primary language environment for your Discord bot.',
                    options: [
                        'Node.js (Latest LTS)',
                        'Python 3.11',
                        'Java 17 (JDK)',
                        'Go (Golang)',
                        'Rust'
                    ],
                    icon: <BotIcon className="w-6 h-6" />
                };
            case 'palworld':
            case 'hytale':
            case 'minecraft':
            default:
                return {
                    title: 'Configure Game Installation',
                    desc: 'We need a few details about your game installation in order to recommend the best plan for you.',
                    options: [
                        `${type === 'minecraft' ? 'Minecraft: Java Edition (Latest)' : type === 'palworld' ? 'Palworld (Steam/Xbox)' : 'Hytale (Latest)'}`,
                        'Paper / Spigot / Bukkit',
                        'Forge Modloader',
                        'Fabric Modloader',
                        'Vanilla',
                        'BungeeCord (Proxy)'
                    ],
                    icon: <Server className="w-6 h-6" />
                };
        }
    };

    const configOptions = getOptionsForType();

    useEffect(() => {
        if (configOptions.options.length > 0) {
            setSelectedOption(configOptions.options[0]);
        }
    }, [type]);

    // Toggle addon helper
    const toggleAddon = (id: string) => {
        if (addons.includes(id)) {
            setAddons(addons.filter(a => a !== id));
        } else {
            setAddons([...addons, id]);
        }
    };

    const LOCATIONS = [
        { id: 'na-east', name: 'New York, NY (NA East)', flag: '🇺🇸' },
        { id: 'na-central', name: 'Dallas, TX (NA Central)', flag: '🇺🇸' },
        { id: 'na-west', name: 'Los Angeles, CA (NA West)', flag: '🇺🇸' },
        { id: 'eu-west', name: 'London, UK (EU West)', flag: '🇬🇧' },
        { id: 'eu-central', name: 'Frankfurt, DE (EU Central)', flag: '🇩🇪' },
        { id: 'asia', name: 'Singapore (Asia)', flag: '🇸🇬' },
        { id: 'oce', name: 'Sydney, AU (Oceania)', flag: '🇦🇺' },
    ];

    // Calculate Total
    let multiplier = 1;
    if (billingCycle === 'Quarterly') multiplier = 3 * 0.9;
    if (billingCycle === 'Semi-annually') multiplier = 6 * 0.85;
    if (billingCycle === 'Annually') multiplier = 12 * 0.8;

    let addonTotal = 0;
    if (addons.includes('boost')) addonTotal += 4.99;
    if (addons.includes('dedicated-ip')) addonTotal += 3.99;

    const finalMonthly = basePrice + addonTotal;
    const dueToday = (basePrice * multiplier) + (addonTotal * (billingCycle === 'Monthly' ? 1 : multiplier)); 

    return (
        <div className="bg-[#050b14] min-h-screen pt-20 font-sans text-white">
            {/* Header */}
            <div className="bg-[#0a101d] border-b border-white/5 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                        <h1 className="font-display font-black text-3xl md:text-4xl text-white uppercase tracking-tight">
                            CONFIGURE <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">YOUR SERVER!</span>
                        </h1>
                    </div>
                    <div className="flex items-center gap-4 bg-[#0f1623] p-2 rounded-lg border border-white/10">
                        <div className="text-[10px] text-gray-400 font-bold uppercase pl-2">SERVICE:</div>
                        <div className="flex items-center gap-2 bg-[#1a2333] px-3 py-1.5 rounded border border-white/5">
                            <span className="text-xs font-bold text-white uppercase">{type} - {planName}</span>
                        </div>
                        <button className="text-[10px] font-bold text-indigo-400 uppercase hover:text-white transition-colors pr-2">CHANGE &gt;</button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    
                    {/* Main Config Area */}
                    <div className="flex-1 space-y-8">
                        
                        {/* Step 1: Dynamic Configuration */}
                        <div className="bg-[#0f1623] rounded-xl border border-white/10 overflow-hidden relative group z-10">
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-600"></div>
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center font-display font-bold text-lg shadow-lg shadow-indigo-900/50">1</div>
                                    <div>
                                        <h3 className="font-display font-bold text-lg text-white">{configOptions.title}</h3>
                                        <p className="text-gray-400 text-xs">{configOptions.desc}</p>
                                    </div>
                                </div>

                                <div className="bg-[#0a101d] rounded-lg border border-white/10 p-6 flex flex-col md:flex-row items-center gap-6">
                                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-gray-400">
                                        {configOptions.icon}
                                    </div>
                                    <div className="flex-1 w-full">
                                        <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Selection</label>
                                        <div className="relative">
                                            <select 
                                                className="w-full bg-[#151b28] border border-white/10 text-white text-sm rounded-lg p-3 appearance-none focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                                                value={selectedOption}
                                                onChange={(e) => setSelectedOption(e.target.value)}
                                            >
                                                {configOptions.options.map((opt, i) => (
                                                    <option key={i} value={opt}>{opt}</option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 2: Choose A Location */}
                        <div className="bg-[#0f1623] rounded-xl border border-white/10 relative z-30">
                            <div className="absolute top-0 left-0 w-1 h-full bg-gray-700 rounded-l-xl"></div>
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-8 h-8 bg-[#1f2937] rounded flex items-center justify-center font-display font-bold text-lg text-gray-400">2</div>
                                    <div>
                                        <h3 className="font-display font-bold text-lg text-white">Choose A Location</h3>
                                        <p className="text-gray-400 text-xs">Choose the server location which you and other players will connect to.</p>
                                    </div>
                                </div>

                                <div className="bg-[#0a101d] rounded-lg border border-white/10 p-2 flex items-center justify-between">
                                    <div className="flex items-center gap-4 px-4">
                                        <Globe className="w-5 h-5 text-indigo-400" />
                                        <span className="text-sm font-bold text-white uppercase">{selectedLocation}</span>
                                    </div>
                                    
                                    <div className="relative group/loc">
                                        <button className="text-[10px] font-bold text-gray-400 uppercase hover:text-white px-4 py-2 border-l border-white/10 transition-colors">
                                            CHANGE
                                        </button>
                                        
                                        {/* Dropdown for locations */}
                                        <div className="absolute right-0 top-full mt-2 w-64 bg-[#1a2333] border border-white/10 rounded-lg shadow-2xl opacity-0 invisible group-hover/loc:opacity-100 group-hover/loc:visible transition-all z-20">
                                            {LOCATIONS.map(loc => (
                                                <div 
                                                    key={loc.id}
                                                    onClick={() => setSelectedLocation(loc.name)}
                                                    className="px-4 py-2 hover:bg-white/5 cursor-pointer flex items-center gap-3 text-xs text-gray-300 border-b border-white/5 last:border-0"
                                                >
                                                    <span className="text-lg">{loc.flag}</span>
                                                    {loc.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 3: Billing Options */}
                        <div className="bg-[#0f1623] rounded-xl border border-white/10 overflow-hidden relative z-10">
                            <div className="absolute top-0 left-0 w-1 h-full bg-gray-700"></div>
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-8 h-8 bg-[#1f2937] rounded flex items-center justify-center font-display font-bold text-lg text-gray-400">3</div>
                                    <div>
                                        <h3 className="font-display font-bold text-lg text-white">Billing Options</h3>
                                        <p className="text-gray-400 text-xs">Choose a billing period which fits your needs, and apply any promo codes you have.</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-[10px] font-bold text-gray-500 uppercase mb-2">Billing Cycle</label>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                            {[
                                                { label: "Monthly", discount: null },
                                                { label: "Quarterly", discount: "10% OFF" },
                                                { label: "Semi-annually", discount: "15% OFF" },
                                                { label: "Annually", discount: "20% OFF" }
                                            ].map((opt) => (
                                                <button 
                                                    key={opt.label}
                                                    onClick={() => setBillingCycle(opt.label)}
                                                    className={`relative p-3 rounded-lg border text-center transition-all ${billingCycle === opt.label ? 'bg-indigo-600/20 border-indigo-500 text-white' : 'bg-[#0a101d] border-white/5 text-gray-400 hover:border-white/10'}`}
                                                >
                                                    <div className="text-[10px] font-bold uppercase mb-1">{opt.label}</div>
                                                    {opt.discount && (
                                                        <div className="absolute top-1 right-1 text-[8px] font-bold bg-white/10 text-white px-1 rounded">{opt.discount}</div>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-bold text-gray-500 uppercase mb-2">Promo Code</label>
                                        <div className="flex gap-2">
                                            <div className="relative flex-1">
                                                <input type="text" placeholder="Enter code here" className="w-full bg-[#0a101d] border border-white/10 rounded-lg py-3 pl-4 pr-10 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" />
                                                <Tag className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                            </div>
                                            <button className="bg-[#1f2937] hover:bg-[#374151] text-white text-xs font-bold uppercase px-6 rounded-lg transition-colors border border-white/5">
                                                APPLY
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 4: Addons */}
                        <div className="bg-[#0f1623] rounded-xl border border-white/10 overflow-hidden relative z-10">
                            <div className="absolute top-0 left-0 w-1 h-full bg-gray-700"></div>
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-8 h-8 bg-[#1f2937] rounded flex items-center justify-center font-display font-bold text-lg text-gray-400">4</div>
                                    <div>
                                        <h3 className="font-display font-bold text-lg text-white">Addons <span className="text-gray-500 text-xs font-normal ml-2">(optional)</span></h3>
                                        <p className="text-gray-400 text-xs">Select additional functionality and features for your server.</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    {/* Boost Addon */}
                                    <div 
                                        onClick={() => toggleAddon('boost')}
                                        className={`relative rounded-xl border p-4 cursor-pointer transition-all overflow-hidden flex flex-col md:flex-row gap-4 items-center ${addons.includes('boost') ? 'bg-indigo-900/10 border-indigo-500' : 'bg-[#0a101d] border-white/5 hover:border-white/10'}`}
                                    >
                                        <div className="w-20 h-20 shrink-0 bg-indigo-500/10 rounded-full flex items-center justify-center relative">
                                            <Zap className={`w-10 h-10 ${addons.includes('boost') ? 'text-indigo-400' : 'text-gray-600'}`} />
                                            {addons.includes('boost') && <div className="absolute top-0 right-0 w-4 h-4 bg-indigo-500 rounded-full flex items-center justify-center"><Check className="w-3 h-3 text-white" /></div>}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-1">
                                                <h4 className="font-display font-bold text-white uppercase">CodoenBoost™</h4>
                                            </div>
                                            <p className="text-gray-400 text-[10px] leading-tight mb-2">Boost your server with advanced features: extra backups, dedicated thread, more storage.</p>
                                            <div className="font-display font-bold text-lg text-white">+ $4.99 <span className="text-[10px] text-gray-500 font-normal">/ MONTH</span></div>
                                        </div>
                                    </div>

                                    {/* Stickers Addon */}
                                    <div 
                                        onClick={() => toggleAddon('stickers')}
                                        className={`relative rounded-xl border p-4 cursor-pointer transition-all overflow-hidden flex flex-col md:flex-row gap-4 items-center ${addons.includes('stickers') ? 'bg-pink-900/10 border-pink-500' : 'bg-[#0a101d] border-white/5 hover:border-white/10'}`}
                                    >
                                        <div className="w-20 h-20 shrink-0 bg-pink-500/10 rounded-full flex items-center justify-center relative">
                                            <Gift className={`w-10 h-10 ${addons.includes('stickers') ? 'text-pink-400' : 'text-gray-600'}`} />
                                            {addons.includes('stickers') && <div className="absolute top-0 right-0 w-4 h-4 bg-pink-500 rounded-full flex items-center justify-center"><Check className="w-3 h-3 text-white" /></div>}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-1">
                                                <h4 className="font-display font-bold text-white uppercase">Free Stickers</h4>
                                                <div className="text-[8px] font-bold bg-pink-500/20 text-pink-300 px-1.5 py-0.5 rounded uppercase">Requires Boost</div>
                                            </div>
                                            <p className="text-gray-400 text-[10px] leading-tight mb-2">We'll mail you some fun stickers for your order. We ship worldwide with a valid address.</p>
                                            <div className="font-display font-bold text-lg text-white">FREE</div>
                                        </div>
                                    </div>

                                    {/* Dedicated IP Addon */}
                                    <div 
                                        onClick={() => toggleAddon('dedicated-ip')}
                                        className={`relative rounded-xl border p-4 cursor-pointer transition-all overflow-hidden flex flex-col md:flex-row gap-4 items-center ${addons.includes('dedicated-ip') ? 'bg-blue-900/10 border-blue-500' : 'bg-[#0a101d] border-white/5 hover:border-white/10'}`}
                                    >
                                        <div className="w-20 h-20 shrink-0 bg-blue-500/10 rounded-full flex items-center justify-center relative">
                                            <Shield className={`w-10 h-10 ${addons.includes('dedicated-ip') ? 'text-blue-400' : 'text-gray-600'}`} />
                                            {addons.includes('dedicated-ip') && <div className="absolute top-0 right-0 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center"><Check className="w-3 h-3 text-white" /></div>}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-1">
                                                <h4 className="font-display font-bold text-white uppercase">Dedicated IP</h4>
                                            </div>
                                            <p className="text-gray-400 text-[10px] leading-tight mb-2">Establish a unique IP address for your server (no port number needed).</p>
                                            <div className="font-display font-bold text-lg text-white">+ $3.99 <span className="text-[10px] text-gray-500 font-normal">/ MONTH</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar Summary */}
                    <div className="w-full lg:w-80 shrink-0">
                        <div className="sticky top-24 space-y-6">
                            
                            {/* Summary Card */}
                            <div className="bg-[#0f1623] border border-indigo-500/30 rounded-xl p-6 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-indigo-500"></div>
                                
                                <div className="flex items-center gap-2 mb-4">
                                    <h3 className="font-display font-black text-xl text-white italic">Codoen<span className="text-indigo-400">One</span>™</h3>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-0.5 bg-green-500/20 p-1 rounded-full"><Check className="w-3 h-3 text-green-400" /></div>
                                        <div>
                                            <div className="text-xs font-bold text-white">{planName}</div>
                                            <div className="text-[10px] text-gray-500 uppercase">{type}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-0.5 bg-green-500/20 p-1 rounded-full"><Check className="w-3 h-3 text-green-400" /></div>
                                        <div>
                                            <div className="text-xs font-bold text-white">{selectedLocation}</div>
                                            <div className="text-[10px] text-gray-500">Premium Location</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-0.5 bg-green-500/20 p-1 rounded-full"><Check className="w-3 h-3 text-green-400" /></div>
                                        <div>
                                            <div className="text-xs font-bold text-white">{billingCycle} Billing</div>
                                            <div className="text-[10px] text-gray-500">Cancel Anytime</div>
                                        </div>
                                    </div>
                                    {addons.map(addon => (
                                        <div key={addon} className="flex items-start gap-3">
                                            <div className="mt-0.5 bg-indigo-500/20 p-1 rounded-full"><Zap className="w-3 h-3 text-indigo-400" /></div>
                                            <div>
                                                <div className="text-xs font-bold text-white uppercase">{addon.replace('-', ' ')}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-white/10 pt-4 mb-6">
                                    <div className="flex justify-between items-end">
                                        <span className="text-xs font-bold text-gray-400">TOTAL</span>
                                        <div className="text-right">
                                            <div className="text-2xl font-black text-white">${dueToday.toFixed(2)}</div>
                                            <div className="text-[10px] text-gray-500 font-bold uppercase">Due Today</div>
                                        </div>
                                    </div>
                                </div>

                                <button className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-lg uppercase tracking-wider shadow-lg shadow-green-900/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                                    Checkout <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Trust Card */}
                            <div className="bg-[#0a101d] border border-white/5 rounded-xl p-4 text-center">
                                <div className="flex justify-center gap-1 mb-2">
                                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-green-500 fill-current" />)}
                                </div>
                                <p className="text-[10px] text-gray-400">
                                    "Best hosting experience I've ever had. Support is instant."
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <StartHereBanner />
        </div>
    );
};

// Simple Icons for step 1 dynamic rendering
const HardDriveIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line></svg>
);

const BotIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line></svg>
);

export default ServerConfigPage;