import React, { useState } from 'react';
import { 
    Check, ArrowRight, Download, Repeat, LayoutDashboard, 
    Database, Shield, Settings, Users, FileCode, HardDrive, 
    Activity, Search, Box, ChevronDown, ShieldCheck, UserPlus
} from 'lucide-react';
import StartHereBanner from './StartHereBanner';
import TrustBanner from './TrustBanner';
import GameGrid from './GameGrid';

// Mockup component for the big panel screenshot
const PanelScreenshotMockup: React.FC<{ activeTab: string }> = ({ activeTab }) => {
  return (
    <div className="w-full max-w-5xl mx-auto bg-[#0a101d] rounded-xl border border-white/10 overflow-hidden shadow-2xl relative min-h-[600px] flex flex-col font-sans">
        {/* Top Navigation Bar */}
        <div className="h-14 bg-[#0f1623] border-b border-white/5 flex items-center justify-between px-6">
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                        <span className="font-display font-bold text-white">C</span>
                    </div>
                    <span className="font-display font-bold text-white tracking-wider">CODOEN<span className="text-indigo-400">PANEL</span></span>
                </div>
                <div className="h-6 w-px bg-white/10"></div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>My Servers</span>
                    <ChevronDown className="w-4 h-4" />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="bg-green-500/10 text-green-400 text-xs font-bold px-3 py-1 rounded-full border border-green-500/20 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    System Operational
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-gray-300" />
                </div>
            </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
            {/* Sidebar */}
            <div className="w-64 bg-[#0f1623] border-r border-white/5 flex flex-col">
                <div className="p-4">
                    <div className="bg-[#1a2333] p-3 rounded-lg border border-white/5 mb-6">
                        <div className="text-xs text-gray-500 font-bold uppercase mb-1">Server Status</div>
                        <div className="flex items-center gap-2 text-white font-bold">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            Online
                        </div>
                        <div className="text-xs text-gray-500 mt-1">192.168.1.55:25565</div>
                    </div>

                    <div className="space-y-1">
                        <div className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors ${activeTab === 'metrics' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                            <LayoutDashboard className="w-4 h-4" /> Console
                        </div>
                        <div className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors ${activeTab === 'files' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                            <FileCode className="w-4 h-4" /> File Manager
                        </div>
                        <div className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors ${activeTab === 'modpacks' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                            <Box className="w-4 h-4" /> Modpacks
                        </div>
                        <div className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors ${activeTab === 'backups' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                            <HardDrive className="w-4 h-4" /> Backups
                        </div>
                        <div className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors ${activeTab === 'users' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                            <Users className="w-4 h-4" /> Users
                        </div>
                        <div className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors ${activeTab === 'config' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                            <Settings className="w-4 h-4" /> Startup
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-[#0a101d] p-8 overflow-y-auto">
                {activeTab === 'modpacks' && (
                    <div className="animate-in fade-in zoom-in duration-300">
                        <h2 className="text-2xl font-bold text-white mb-6">Modpack Manager</h2>
                        <div className="relative mb-6">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                            <input type="text" placeholder="Search for a modpack..." className="w-full bg-[#0f1623] border border-white/10 rounded-lg py-3 pl-12 pr-4 text-gray-300 focus:outline-none focus:border-indigo-500" />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { name: "Better Minecraft", ver: "v19.5", author: "Sharkie", img: "https://media.forgecdn.net/avatars/397/680/637905333575306560.png" },
                                { name: "RLCraft", ver: "v2.9.3", author: "Shivaxi", img: "https://media.forgecdn.net/avatars/615/634/638318721244030704.png" },
                                { name: "All The Mods 9", ver: "v0.2.1", author: "ATMTeam", img: "https://media.forgecdn.net/avatars/551/992/638210989063232049.png" },
                                { name: "Pixelmon", ver: "v9.1.0", author: "PixelmonMod", img: "https://media.forgecdn.net/avatars/637/13/638372647792737603.png" },
                                { name: "Vault Hunters", ver: "3rd Ed", author: "Iskall85", img: "https://media.forgecdn.net/avatars/639/682/638380387532395563.png" },
                                { name: "DawnCraft", ver: "v1.33", author: "bstylia14", img: "https://media.forgecdn.net/avatars/793/676/638166432655523927.png" },
                            ].map((mod, i) => (
                                <div key={i} className="bg-[#0f1623] border border-white/5 rounded-xl p-4 hover:border-indigo-500/50 transition-colors group cursor-pointer">
                                    <div className="flex items-start justify-between mb-4">
                                        <img src={mod.img} alt={mod.name} className="w-12 h-12 rounded-lg object-cover" />
                                        <div className="bg-indigo-500/10 text-indigo-400 text-[10px] font-bold px-2 py-1 rounded uppercase group-hover:bg-indigo-600 group-hover:text-white transition-colors">Install</div>
                                    </div>
                                    <h3 className="text-white font-bold text-sm mb-1">{mod.name}</h3>
                                    <div className="flex justify-between text-xs text-gray-500">
                                        <span>{mod.author}</span>
                                        <span>{mod.ver}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'instances' && (
                    <div className="animate-in fade-in zoom-in duration-300">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-white">Instance Manager</h2>
                            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded text-xs font-bold uppercase">Create New Instance</button>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-[#0f1623] border border-green-500/30 rounded-xl p-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-500 border border-green-500/20">
                                        <Activity className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold">Survival Season 4</h3>
                                        <p className="text-xs text-green-400">Running - Port 25565</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="px-3 py-1.5 bg-[#1a2333] hover:bg-[#253045] text-white text-xs font-bold rounded">Console</button>
                                    <button className="px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold rounded">Stop</button>
                                </div>
                            </div>
                            
                            <div className="bg-[#0f1623] border border-white/5 rounded-xl p-4 flex items-center justify-between opacity-70">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 border border-white/10">
                                        <Box className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold">Creative Plot World</h3>
                                        <p className="text-xs text-gray-500">Stopped</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="px-3 py-1.5 bg-green-600 hover:bg-green-500 text-white text-xs font-bold rounded">Start</button>
                                    <button className="px-3 py-1.5 bg-[#1a2333] hover:bg-[#253045] text-white text-xs font-bold rounded">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {['metrics', 'backups', 'users', 'config', 'plugins'].includes(activeTab) && (
                    <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
                        <div className="w-20 h-20 bg-indigo-500/10 rounded-full flex items-center justify-center mb-4">
                            <Settings className="w-10 h-10 text-indigo-400 animate-spin-slow" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Detailed Configuration</h3>
                        <p className="text-gray-400 max-w-sm text-sm">
                            This section provides advanced controls for {activeTab}. The Codoen Panel gives you full granular control over every aspect of your server.
                        </p>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
}

const PanelFeaturesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('modpacks');

  const TABS = [
      { id: 'modpacks', label: 'Automatic Modpack Installer' },
      { id: 'instances', label: 'Instance Manager' },
      { id: 'plugins', label: 'Plugins & Datapack Installer' },
      { id: 'users', label: 'Player Manager' },
      { id: 'backups', label: 'Configurable Backups' },
      { id: 'metrics', label: 'Server Performance Metrics' },
      { id: 'config', label: 'Advanced Config Editor' },
  ];

  return (
    <div className="bg-[#050b14] min-h-screen pt-20 text-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-32">
         {/* Background Elements */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="flex flex-col lg:flex-row items-center gap-16">
                 {/* Text Content */}
                 <div className="flex-1 space-y-8">
                     <div>
                         <h1 className="font-display font-black text-5xl lg:text-6xl uppercase leading-none mb-4">
                             CODOEN™ <br/>
                             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">GAMES PANEL</span>
                         </h1>
                         <div className="h-1 w-20 bg-indigo-600 rounded-full"></div>
                     </div>

                     <ul className="space-y-4">
                         {[
                             "Automatically Install Modpacks",
                             "Manage and Swap Game Instances",
                             "Save and Configure Backups",
                             "Install and Manage Databases and Plugins",
                             "Review and Edit Permissions for Subusers"
                         ].map((item, i) => (
                             <li key={i} className="flex items-center gap-3">
                                 <div className="bg-cyan-500/10 p-1 rounded-full">
                                     <Check className="w-4 h-4 text-cyan-400" strokeWidth={3} />
                                 </div>
                                 <span className="text-sm font-bold text-gray-300 uppercase tracking-wide">{item}</span>
                             </li>
                         ))}
                     </ul>

                     <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-10 rounded-lg uppercase tracking-wider transition-all shadow-lg shadow-indigo-900/40 hover:-translate-y-1">
                         ORDER NOW
                     </button>
                 </div>

                 {/* Hero Image / Isometric Mockup */}
                 <div className="flex-1 w-full flex justify-center">
                     <div className="relative w-full max-w-lg aspect-[4/3] perspective-1000">
                         {/* Stylized floating screens */}
                         <div className="absolute top-10 left-10 right-10 bottom-10 bg-[#0f1623] rounded-xl border-2 border-indigo-500/50 transform rotateX-10 rotateY-10 shadow-2xl z-10 flex flex-col overflow-hidden">
                             <div className="h-8 bg-[#1a2333] border-b border-white/5 flex items-center px-3 gap-2">
                                 <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                 <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                 <div className="w-2 h-2 rounded-full bg-green-500"></div>
                             </div>
                             <div className="flex-1 bg-[#0a101d] p-4 relative">
                                 {/* Abstract UI content */}
                                 <div className="flex gap-4 h-full">
                                     <div className="w-12 bg-white/5 rounded h-full"></div>
                                     <div className="flex-1 space-y-2">
                                         <div className="h-20 bg-indigo-900/20 rounded border border-indigo-500/30 w-full mb-4"></div>
                                         <div className="grid grid-cols-2 gap-2">
                                             <div className="h-24 bg-white/5 rounded"></div>
                                             <div className="h-24 bg-white/5 rounded"></div>
                                             <div className="h-24 bg-white/5 rounded"></div>
                                             <div className="h-24 bg-white/5 rounded"></div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         
                         {/* Floating elements behind */}
                         <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-lg border border-cyan-500/40 transform rotate-12 z-0 backdrop-blur-sm"></div>
                         <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl z-0"></div>
                         
                         {/* Floating Cubes */}
                         <div className="absolute top-0 right-20 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 transform rotate-45 animate-bounce shadow-lg z-20 rounded-lg"></div>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="py-24 bg-[#0a101d] border-y border-white/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid md:grid-cols-3 gap-8">
                 {/* Card 1 */}
                 <div className="bg-[#0f1623] border border-white/10 rounded-xl p-8 hover:border-indigo-500/50 transition-all duration-300 group hover:-translate-y-2">
                     <div className="w-14 h-14 bg-blue-900/20 rounded-lg flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                         <Download className="w-7 h-7" />
                     </div>
                     <h3 className="font-display font-bold text-white text-lg uppercase mb-4 tracking-wide">2000+ MODPACKS TO CHOOSE FROM</h3>
                     <p className="text-gray-400 text-sm leading-relaxed mb-6 min-h-[80px]">
                         Take your pick from thousands of available mods and modpacks to customize your gameplay experience quickly and easily with one-click installations!
                     </p>
                     <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider group-hover:text-white transition-colors cursor-pointer">
                         Learn More <ArrowRight className="w-3 h-3" />
                     </div>
                 </div>

                 {/* Card 2 */}
                 <div className="bg-[#0f1623] border border-white/10 rounded-xl p-8 hover:border-indigo-500/50 transition-all duration-300 group hover:-translate-y-2">
                     <div className="w-14 h-14 bg-purple-900/20 rounded-lg flex items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                         <Repeat className="w-7 h-7" />
                     </div>
                     <h3 className="font-display font-bold text-white text-lg uppercase mb-4 tracking-wide">SWAP BETWEEN INSTANCES INSTANTLY</h3>
                     <p className="text-gray-400 text-sm leading-relaxed mb-6 min-h-[80px]">
                         Want to shake things up? Save your instance and swap between others to instantly jump into new modpack configurations and gameplay setups.
                     </p>
                     <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider group-hover:text-white transition-colors cursor-pointer">
                         Learn More <ArrowRight className="w-3 h-3" />
                     </div>
                 </div>

                 {/* Card 3 */}
                 <div className="bg-[#0f1623] border border-white/10 rounded-xl p-8 hover:border-indigo-500/50 transition-all duration-300 group hover:-translate-y-2">
                     <div className="w-14 h-14 bg-cyan-900/20 rounded-lg flex items-center justify-center mb-6 text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                         <LayoutDashboard className="w-7 h-7" />
                     </div>
                     <h3 className="font-display font-bold text-white text-lg uppercase mb-4 tracking-wide">EASY-TO-USE CUSTOM CONTROL PANEL</h3>
                     <p className="text-gray-400 text-sm leading-relaxed mb-6 min-h-[80px]">
                         Our custom-built control panel prioritizes accessibility first, ensuring that users of all experience levels can navigate it seamlessly and take full advantage of its awesome features!
                     </p>
                     <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider group-hover:text-white transition-colors cursor-pointer">
                         Learn More <ArrowRight className="w-3 h-3" />
                     </div>
                 </div>
             </div>
         </div>
      </section>

      {/* Interactive Panel Section */}
      <section className="py-24 bg-[#050b14]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             {/* Navigation Tabs */}
             <div className="flex flex-wrap justify-center gap-3 mb-12">
                 {TABS.map((tab) => (
                     <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                            activeTab === tab.id 
                            ? 'bg-indigo-600 text-white border-indigo-500 shadow-[0_0_20px_rgba(79,70,229,0.4)]' 
                            : 'bg-[#0f1623] text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                        }`}
                     >
                         {tab.label}
                     </button>
                 ))}
             </div>

             {/* Screenshot Area */}
             <div className="relative">
                 <div className="absolute inset-0 bg-indigo-600/20 blur-[100px] -z-10 rounded-full"></div>
                 <PanelScreenshotMockup activeTab={activeTab} />
             </div>
         </div>
      </section>

      {/* 100+ Games Banner */}
      <section className="relative py-20 border-t border-white/10 overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
         <div className="absolute inset-0 bg-gradient-to-r from-[#050b14] via-[#050b14]/80 to-[#050b14]"></div>
         
         <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
             <h2 className="font-display font-black text-3xl md:text-5xl text-white uppercase mb-4 tracking-tight">NOW HOSTING 100+ GAMES!</h2>
             <p className="text-indigo-400 font-bold text-sm tracking-[0.2em] uppercase mb-8">SWAP BETWEEN THEM AT NO ADDITIONAL COST</p>
             <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-10 rounded-lg uppercase tracking-wider shadow-lg shadow-indigo-900/40 transition-transform hover:-translate-y-1">
                 CREATE A SERVER
             </button>
         </div>
      </section>

      {/* Sub Users & 2FA */}
      <section className="relative py-16 overflow-hidden bg-[#1e1b4b]">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-purple-900"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
                  <div className="max-w-lg text-center md:text-left">
                      <h3 className="font-display font-black text-2xl text-white uppercase mb-4">Sub Users & 2FA</h3>
                      <p className="text-indigo-200 text-xs md:text-sm leading-relaxed opacity-90">
                          Our hosting services emphasize server security, and as a result, we encourage all users to set up 2-factor authentication (2FA) to ensure accounts are safe and secure. With our games panel, manage your user permissions directly to ensure only the right users can send commands, stop and restart your server, edit files, and more.
                      </p>
                  </div>
                  
                  <div className="relative group perspective-1000">
                      <div className="bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex items-center gap-6 transform rotate-y-12 hover:rotate-0 transition-transform duration-500">
                          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-xl shadow-lg">
                              <ShieldCheck className="w-10 h-10 text-white" />
                          </div>
                          <div className="text-left">
                              <div className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest mb-1">SECURITY FIRST</div>
                              <div className="text-3xl font-black text-white uppercase leading-none font-display">
                                  ADDING<br/>
                                  SUB USERS<br/>
                                  <span className="text-cyan-400">& 2FA</span>
                              </div>
                          </div>
                          {/* Floating lock icon */}
                          <div className="absolute -top-4 -right-4 bg-[#0f1623] p-2 rounded-lg border border-white/10 shadow-xl">
                              <UserPlus className="w-5 h-5 text-purple-400" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Swap and Save */}
      <section className="py-24 bg-[#03060a] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center gap-16">
                  {/* Image Grid */}
                  <div className="flex-1 w-full max-w-lg">
                      <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-4 mt-8">
                              <img src="https://images.unsplash.com/photo-1624138784181-2999e46ef284?q=80&w=400&fit=crop" className="rounded-xl shadow-2xl border border-white/10 opacity-70 hover:opacity-100 transition-opacity duration-300" alt="Game 1" />
                              <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400&fit=crop" className="rounded-xl shadow-2xl border border-white/10 opacity-70 hover:opacity-100 transition-opacity duration-300" alt="Game 2" />
                          </div>
                          <div className="space-y-4">
                              <img src="https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=400&fit=crop" className="rounded-xl shadow-2xl border border-white/10 opacity-70 hover:opacity-100 transition-opacity duration-300" alt="Game 3" />
                              <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=400&fit=crop" className="rounded-xl shadow-2xl border border-white/10 opacity-70 hover:opacity-100 transition-opacity duration-300" alt="Game 4" />
                          </div>
                      </div>
                  </div>
                  
                  {/* Text */}
                  <div className="flex-1 space-y-6">
                      <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase leading-tight tracking-tight">
                          SWAP AND SAVE <br/>
                          YOUR FAVORITE <br/>
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">GAMES</span>
                      </h2>
                      <p className="text-cyan-500 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                          <Repeat className="w-4 h-4" />
                          WITH THE INSTANCE MANAGER
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                          With Codoen Hosting, you can enjoy many different games without the hassle of fully customizing your mods and settings or losing your progress each time you switch, thanks to the Instance Manager. This tool allows you to save instances of different games and configurations that you can swap between with just a single click!
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* Trust Banner with padding adjustment */}
      <div className="pt-16 pb-8 bg-[#050b14]">
          <TrustBanner />
      </div>

      {/* Other Games */}
      <GameGrid />

      <StartHereBanner />
    </div>
  )
}

export default PanelFeaturesPage;