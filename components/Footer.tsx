import React from 'react';
import { Twitter, Facebook, Instagram, Github, Youtube } from 'lucide-react';

interface FooterProps {
    onNavigate?: (view: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (view: string, e: React.MouseEvent) => {
      e.preventDefault();
      if (onNavigate) {
          onNavigate(view);
          window.scrollTo(0, 0);
      }
  };

  return (
    <footer className="bg-nexus-dark pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
               <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-400 rounded flex items-center justify-center">
                  <span className="font-display font-bold text-lg text-white">C</span>
                </div>
                <span className="font-display font-bold text-xl text-white">CODOEN</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs mb-6">
              Premium game server hosting services established in 2024. 
              Built for gamers, by gamers.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" onClick={(e) => handleNav('minecraft', e)} className="hover:text-cyan-400 transition-colors">Minecraft Hosting</a></li>
              <li><a href="#" onClick={(e) => handleNav('home', e)} className="hover:text-cyan-400 transition-colors">Game Servers</a></li>
              <li><a href="#" onClick={(e) => handleNav('web-hosting', e)} className="hover:text-cyan-400 transition-colors">Web Hosting</a></li>
              <li><a href="#" onClick={(e) => handleNav('dedicated', e)} className="hover:text-cyan-400 transition-colors">Dedicated Servers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Knowledgebase</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Submit Ticket</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Server Status</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" onClick={(e) => handleNav('about', e)} className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#" onClick={(e) => handleNav('partner-program', e)} className="hover:text-cyan-400 transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Jobs</a></li>
              <li><a href="#" onClick={(e) => handleNav('return-policy', e)} className="hover:text-cyan-400 transition-colors">Return Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2024 Codoen Hosting. All rights reserved. Not affiliated with Mojang.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" onClick={(e) => handleNav('terms', e)} className="hover:text-white transition-colors">Business Terms & Conditions</a>
            <a href="#" onClick={(e) => handleNav('privacy-policy', e)} className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;