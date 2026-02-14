import React, { useState } from 'react';
import { Globe, Server, ShieldCheck, Wifi, MapPin, Zap, ArrowRight, Activity, Clock } from 'lucide-react';
import StartHereBanner from './StartHereBanner';
import LocationsMap from './LocationsMap';

const LocationsPage: React.FC = () => {
    const [activeRegion, setActiveRegion] = useState('ALL');

    const LOCATIONS = [
        { city: "Los Angeles, CA", country: "United States", region: "NA", ping: "24ms", flag: "🇺🇸" },
        { city: "Dallas, TX", country: "United States", region: "NA", ping: "38ms", flag: "🇺🇸" },
        { city: "New York, NY", country: "United States", region: "NA", ping: "15ms", flag: "🇺🇸" },
        { city: "Miami, FL", country: "United States", region: "NA", ping: "42ms", flag: "🇺🇸" },
        { city: "Vint Hill, VA", country: "United States", region: "NA", ping: "18ms", flag: "🇺🇸" },
        { city: "Montreal", country: "Canada", region: "NA", ping: "22ms", flag: "🇨🇦" },
        { city: "London", country: "United Kingdom", region: "EU", ping: "88ms", flag: "🇬🇧" },
        { city: "Limburg", country: "Germany", region: "EU", ping: "95ms", flag: "🇩🇪" },
        { city: "Frankfurt", country: "Germany", region: "EU", ping: "92ms", flag: "🇩🇪" },
        { city: "Warsaw", country: "Poland", region: "EU", ping: "105ms", flag: "🇵🇱" },
        { city: "Paris", country: "France", region: "EU", ping: "90ms", flag: "🇫🇷" },
        { city: "Singapore", country: "Singapore", region: "ASIA", ping: "180ms", flag: "🇸🇬" },
        { city: "Tokyo", country: "Japan", region: "ASIA", ping: "165ms", flag: "🇯🇵" },
        { city: "Mumbai", country: "India", region: "ASIA", ping: "210ms", flag: "🇮🇳" },
        { city: "Sydney", country: "Australia", region: "OCE", ping: "220ms", flag: "🇦🇺" },
        { city: "Sao Paulo", country: "Brazil", region: "SA", ping: "140ms", flag: "🇧🇷" },
    ];

    const filteredLocations = activeRegion === 'ALL'
        ? LOCATIONS
        : LOCATIONS.filter(l => l.region === activeRegion);

    return (
        <div className="bg-[#050b14] min-h-screen pt-20 font-sans text-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-[#03060a] border-b border-white/5 py-24 lg:py-32">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/2/23/Blue_Marble_2002.png')] bg-cover bg-center opacity-10 mix-blend-screen animate-pulse-slow"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#050b14] via-[#050b14]/80 to-[#050b14]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8">
                        <Globe className="w-4 h-4" /> Global Infrastructure
                    </div>
                    <h1 className="font-display font-black text-5xl lg:text-7xl uppercase leading-none mb-6">
                        LOW LATENCY <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">EVERYWHERE</span>
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10">
                        Codoen Hosting operates a premium global network designed for gaming. With over 20+ locations worldwide connected by Tier 1 bandwidth providers, we ensure the lowest possible ping and 99.99% uptime for your players, no matter where they are.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-10 rounded text-sm uppercase tracking-wider shadow-lg shadow-indigo-900/40 transition-transform hover:-translate-y-1 flex items-center justify-center gap-2">
                            <Zap className="w-4 h-4 fill-white" /> Check Latency
                        </button>
                        <button className="bg-[#1e293b] hover:bg-[#253045] text-white font-bold py-4 px-10 rounded text-sm uppercase tracking-wider border border-white/10 transition-colors">
                            View Status
                        </button>
                    </div>
                </div>
            </section>

            {/* Interactive Map Area */}
            <LocationsMap />

            {/* Locations Grid */}
            <section className="py-16 bg-[#0a101d] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                        <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight">AVAILABLE LOCATIONS</h2>

                        {/* Filter Tabs */}
                        <div className="flex flex-wrap gap-2 bg-[#050b14] p-1 rounded-lg border border-white/5">
                            {['ALL', 'NA', 'EU', 'ASIA', 'OCE', 'SA'].map((region) => (
                                <button
                                    key={region}
                                    onClick={() => setActiveRegion(region)}
                                    className={`px-4 py-2 rounded text-[10px] font-bold uppercase tracking-wider transition-colors ${activeRegion === region ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
                                >
                                    {region === 'NA' ? 'North America' : region === 'SA' ? 'South America' : region === 'EU' ? 'Europe' : region === 'OCE' ? 'Oceania' : region}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredLocations.map((loc, i) => (
                            <div key={i} className="bg-[#0f1623] border border-white/5 p-6 rounded-xl hover:border-indigo-500/50 transition-colors group">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-2xl">{loc.flag}</span>
                                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-green-400 bg-green-900/20 px-2 py-1 rounded border border-green-500/20">
                                        <Activity className="w-3 h-3" /> {loc.ping}
                                    </div>
                                </div>
                                <h3 className="font-display font-bold text-white text-lg">{loc.city}</h3>
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-wide mt-1">{loc.country}</p>

                                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                                    <div className="text-[10px] text-gray-400 flex items-center gap-1">
                                        <Server className="w-3 h-3" /> Premium
                                    </div>
                                    <button className="text-[10px] font-bold text-indigo-400 uppercase flex items-center gap-1 group-hover:text-white transition-colors">
                                        Test Ping <ArrowRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Infrastructure Features */}
            <section className="py-24 bg-[#050b14]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight mb-4">ENTERPRISE INFRASTRUCTURE</h2>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto">We own and operate our hardware in Tier 3+ data centers, ensuring maximum control over performance, security, and reliability.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="text-center p-6 rounded-2xl bg-[#0f1623] border border-white/5 hover:border-indigo-500/30 transition-all">
                            <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-indigo-400">
                                <Wifi className="w-8 h-8" />
                            </div>
                            <h3 className="font-display font-bold text-white text-lg uppercase mb-3">TIER 1 NETWORK</h3>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                We utilize a blend of Tier 1 bandwidth providers including Level3, Telia, and Cogent to ensure the lowest latency and highest redundancy for your game servers.
                            </p>
                        </div>

                        <div className="text-center p-6 rounded-2xl bg-[#0f1623] border border-white/5 hover:border-indigo-500/30 transition-all">
                            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-purple-400">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="font-display font-bold text-white text-lg uppercase mb-3">ADVANCED DDOS PROTECTION</h3>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                Our custom-built DDoS protection instantly detects and mitigates attacks, ensuring your server stays online even during massive 100Gbps+ flood attacks.
                            </p>
                        </div>

                        <div className="text-center p-6 rounded-2xl bg-[#0f1623] border border-white/5 hover:border-indigo-500/30 transition-all">
                            <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-cyan-400">
                                <Clock className="w-8 h-8" />
                            </div>
                            <h3 className="font-display font-bold text-white text-lg uppercase mb-3">99.99% UPTIME SLA</h3>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                We are confident in our infrastructure. Our Service Level Agreement guarantees 99.99% network availability, backed by redundant power and cooling systems.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Start Here Banner */}
            <StartHereBanner />
        </div>
    );
};

export default LocationsPage;