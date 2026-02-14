import React, { useState, useEffect } from 'react';
import {
  Menu, X, ChevronDown, User, CreditCard, LayoutGrid,
  Server, Cpu, Headphones, Laptop, Bot, Gift,
  BookOpen, Sparkles, HelpCircle, Newspaper, Scale, Globe, Handshake,
  FileText, Shield, RefreshCw
} from 'lucide-react';
import { NAV_ITEMS, GAMES } from '../constants';

interface NavbarProps {
  onNavigate: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGameClick = (gameName: string) => {
    if (gameName === 'Minecraft: Java') {
      onNavigate('minecraft');
      setIsOpen(false);
      window.scrollTo(0, 0);
    } else if (gameName === 'Hytale') {
      onNavigate('hytale');
      setIsOpen(false);
      window.scrollTo(0, 0);
    } else if (gameName === 'Palworld') {
      onNavigate('palworld');
      setIsOpen(false);
      window.scrollTo(0, 0);
    }
  };

  const handleOtherServerClick = (serverType: string) => {
    if (serverType === 'DEDICATED SERVERS') {
      onNavigate('dedicated');
      setIsOpen(false);
      window.scrollTo(0, 0);
    } else if (serverType === 'VPS SERVERS') {
      onNavigate('vps');
      setIsOpen(false);
      window.scrollTo(0, 0);
    } else if (serverType === 'WEB HOSTING') {
      onNavigate('web-hosting');
      setIsOpen(false);
      window.scrollTo(0, 0);
    } else if (serverType === 'DISCORD BOT') {
      onNavigate('discord-bot');
      setIsOpen(false);
      window.scrollTo(0, 0);
    }
  };

  const handleLearnClick = (title: string) => {
    if (title === 'ABOUT US') {
      onNavigate('about');
      setIsOpen(false);
      window.scrollTo(0, 0);
    } else if (title === 'PANEL FEATURES') {
      onNavigate('panel-features');
      setIsOpen(false);
      window.scrollTo(0, 0);
    } else if (title === 'FAQ') {
      onNavigate('faq');
      setIsOpen(false);
      window.scrollTo(0, 0);
    } else if (title === 'BLOGS') {
      onNavigate('blogs');
      setIsOpen(false);
      window.scrollTo(0, 0);
    } else if (title === 'WHY US') {
      onNavigate('why-us');
      setIsOpen(false);
      window.scrollTo(0, 0);
    } else if (title === 'LOCATIONS') {
      onNavigate('locations');
      setIsOpen(false);
      window.scrollTo(0, 0);
    } else if (title === 'PARTNER PROGRAM') {
      onNavigate('partner-program');
      setIsOpen(false);
      window.scrollTo(0, 0);
    } else if (title === 'RETURN POLICY') {
      onNavigate('return-policy');
      setIsOpen(false);
      window.scrollTo(0, 0);
    } else if (title === 'PRIVACY POLICY') {
      onNavigate('privacy-policy');
      setIsOpen(false);
      window.scrollTo(0, 0);
    } else if (title === 'TERMS & CONDITIONS') {
      onNavigate('terms');
      setIsOpen(false);
      window.scrollTo(0, 0);
    }
  };

  const handleLogoClick = () => {
    onNavigate('home');
    setIsOpen(false);
    window.scrollTo(0, 0);
  }

  const LEARN_ITEMS = [
    { title: 'ABOUT US', desc: 'Our story & mission', icon: BookOpen },
    { title: 'PANEL FEATURES', desc: 'Inside the Codoen Panel', icon: Sparkles },
    { title: 'FAQ', desc: 'Answers to your top questions', icon: HelpCircle },
    { title: 'BLOGS', desc: 'Game guides, server tips & updates', icon: Newspaper },
    { title: 'WHY US', desc: 'The CodoenHosting difference', icon: Scale },
    { title: 'LOCATIONS', desc: 'Low latency, everywhere', icon: Globe },
    { title: 'PARTNER PROGRAM', desc: 'For creators, studios & communities', icon: Handshake },
    { title: 'RETURN POLICY', desc: 'Refunds & Guarantee', icon: RefreshCw },
    { title: 'PRIVACY POLICY', desc: 'Data protection', icon: Shield },
    { title: 'TERMS & CONDITIONS', desc: 'Usage rules', icon: FileText },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-nexus-dark/95 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div onClick={handleLogoClick} className="flex-shrink-0 flex items-center gap-2 cursor-pointer relative z-50">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center transform rotate-3">
              <span className="font-display font-bold text-2xl text-white">C</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-wider text-white leading-none">CODOEN</span>
              <span className="text-[0.6rem] uppercase tracking-[0.2em] text-cyan-400 font-bold">Hosting</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group h-full flex items-center">
                <a
                  href={item.href}
                  className="group flex items-center text-sm font-semibold text-gray-300 hover:text-white transition-colors py-4"
                  onClick={(e) => {
                    if (item.isDropdown) e.preventDefault();
                  }}
                  {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {item.label}
                  {item.isDropdown && (
                    <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </a>

                {/* Dropdown for Game Servers - Mega Menu */}
                {item.label === 'Game Servers' && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-[900px] z-50">
                    <div className="bg-[#050b14] border border-white/10 rounded-xl shadow-2xl p-6 grid grid-cols-3 gap-4">
                      {/* Map games here */}
                      {GAMES.slice(0, 8).map(game => (
                        <div
                          key={game.id}
                          onClick={() => handleGameClick(game.name)}
                          className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group/game"
                        >
                          <div className="w-12 h-16 shrink-0 overflow-hidden rounded-md shadow-sm border border-white/5">
                            <img src={game.image} alt={game.name} className="w-full h-full object-cover group-hover/game:scale-110 transition-transform duration-500" />
                          </div>
                          <div>
                            <h4 className="font-display font-bold text-white text-sm uppercase group-hover/game:text-cyan-400 transition-colors">{game.name}</h4>
                            <p className="text-gray-500 text-xs mt-1">Starting at <span className="text-white font-bold">${game.price}</span></p>
                          </div>
                        </div>
                      ))}

                      {/* Other Games Button */}
                      <div className="bg-blue-600 rounded-lg p-3 flex items-center gap-4 cursor-pointer hover:bg-blue-500 text-white transition-colors">
                        <div className="p-2 bg-white/20 rounded-md">
                          <LayoutGrid className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-sm uppercase">OTHER GAMES</h4>
                          <p className="text-blue-100 text-xs mt-1">Choose from 100+ games</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Dropdown for Other Servers */}
                {item.label === 'Other Servers' && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-[340px] z-50">
                    <div className="bg-[#050b14] border border-white/10 rounded-xl shadow-2xl p-2 flex flex-col gap-1">
                      {[
                        { title: 'DEDICATED SERVERS', desc: 'Full control, no compromises', icon: Server },
                        { title: 'VPS SERVERS', desc: 'Flexible, affordable VPS hosting', icon: Cpu },
                        { title: 'MUMBLE SERVERS', desc: 'High quality voice chat servers', icon: Headphones },
                        { title: 'WEB HOSTING', desc: 'Simple, reliable website hosting', icon: Laptop },
                        { title: 'DISCORD BOT', desc: 'Pre-made bots for music, games, and more', icon: Bot },
                        { title: 'GIFT CARDS', desc: 'Buy and share gift cards', icon: Gift },
                      ].map((subItem) => (
                        <div
                          key={subItem.title}
                          onClick={() => handleOtherServerClick(subItem.title)}
                          className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 cursor-pointer group/item transition-colors"
                        >
                          <div className="text-gray-400 group-hover/item:text-cyan-400 transition-colors">
                            <subItem.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wide group-hover/item:text-cyan-400 transition-colors">{subItem.title}</h4>
                            <p className="text-gray-500 text-xs mt-0.5">{subItem.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Dropdown for Learn */}
                {item.label === 'Learn' && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-[600px] z-50">
                    <div className="bg-[#050b14] border border-white/10 rounded-xl shadow-2xl p-4 grid grid-cols-2 gap-2">
                      {LEARN_ITEMS.map((subItem) => (
                        <div
                          key={subItem.title}
                          onClick={() => handleLearnClick(subItem.title)}
                          className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 cursor-pointer group/item transition-colors"
                        >
                          <div className="text-gray-400 group-hover/item:text-cyan-400 transition-colors">
                            <subItem.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wide group-hover/item:text-cyan-400 transition-colors">{subItem.title}</h4>
                            <p className="text-gray-500 text-[10px] mt-0.5">{subItem.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Simple Dropdown fallback */}
                {item.isDropdown && item.label !== 'Game Servers' && item.label !== 'Other Servers' && item.label !== 'Learn' && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 min-w-[200px] z-50">
                    <div className="bg-[#050b14] border border-white/10 rounded-xl shadow-2xl p-2">
                      <div className="px-4 py-2 hover:bg-white/5 rounded-lg cursor-pointer text-sm text-gray-300 hover:text-white font-medium">
                        Option 1
                      </div>
                      <div className="px-4 py-2 hover:bg-white/5 rounded-lg cursor-pointer text-sm text-gray-300 hover:text-white font-medium">
                        Option 2
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm font-bold text-gray-300 hover:text-white transition-colors">
              <CreditCard className="w-4 h-4" />
              BILLING
            </button>
            <a href="https://control.codeon.codes" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-md font-bold text-sm transition-all flex items-center gap-2 shadow-lg shadow-indigo-900/50 hover:shadow-indigo-600/50">
              <User className="w-4 h-4" />
              PANEL
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-nexus-card border-b border-white/10 absolute w-full top-full left-0 max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 flex justify-between items-center"
                  onClick={(e) => {
                    if (item.isDropdown) {
                      e.preventDefault();
                    }
                  }}
                  {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {item.label}
                  {item.isDropdown && <ChevronDown className="w-4 h-4" />}
                </a>

                {/* Mobile Expansion for Game Servers */}
                {item.label === 'Game Servers' && (
                  <div className="pl-4 pr-2 pb-2 space-y-2">
                    {GAMES.slice(0, 4).map(game => (
                      <div
                        key={game.id}
                        className="flex items-center gap-3 p-2 rounded hover:bg-white/5 cursor-pointer"
                        onClick={() => handleGameClick(game.name)}
                      >
                        <img src={game.image} alt={game.name} className="w-8 h-8 rounded object-cover" />
                        <span className="text-sm text-gray-400">{game.name}</span>
                      </div>
                    ))}
                    <div className="p-2 text-center text-xs text-indigo-400 uppercase font-bold cursor-pointer">View All Games</div>
                  </div>
                )}

                {/* Mobile Expansion for Other Servers */}
                {item.label === 'Other Servers' && (
                  <div className="pl-4 pr-2 pb-2 space-y-2">
                    {[
                      { title: 'DEDICATED SERVERS', icon: Server },
                      { title: 'VPS SERVERS', icon: Cpu },
                      { title: 'MUMBLE SERVERS', icon: Headphones },
                      { title: 'WEB HOSTING', icon: Laptop },
                      { title: 'DISCORD BOT', icon: Bot },
                      { title: 'GIFT CARDS', icon: Gift },
                    ].map(subItem => (
                      <div
                        key={subItem.title}
                        onClick={() => handleOtherServerClick(subItem.title)}
                        className="flex items-center gap-3 p-2 rounded hover:bg-white/5 cursor-pointer text-gray-400 hover:text-white"
                      >
                        <subItem.icon className="w-5 h-5" />
                        <span className="text-sm font-bold uppercase">{subItem.title}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Mobile Expansion for Learn */}
                {item.label === 'Learn' && (
                  <div className="pl-4 pr-2 pb-2 space-y-2">
                    {LEARN_ITEMS.map(subItem => (
                      <div
                        key={subItem.title}
                        onClick={() => handleLearnClick(subItem.title)}
                        className="flex items-center gap-3 p-2 rounded hover:bg-white/5 cursor-pointer text-gray-400 hover:text-white"
                      >
                        <subItem.icon className="w-5 h-5" />
                        <div>
                          <div className="text-sm font-bold uppercase">{subItem.title}</div>
                          <div className="text-[10px] text-gray-500">{subItem.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="border-t border-white/10 mt-4 pt-4 flex flex-col gap-3">
              <button className="flex items-center gap-2 text-sm font-bold text-gray-300 hover:text-white px-3 py-2">
                <CreditCard className="w-4 h-4" />
                BILLING
              </button>
              <a href="https://control.codeon.codes" target="_blank" rel="noopener noreferrer" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3 rounded-md font-bold text-sm flex items-center justify-center gap-2">
                <User className="w-4 h-4" />
                ACCESS PANEL
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;