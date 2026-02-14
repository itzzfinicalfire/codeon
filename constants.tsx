import {
  ShieldCheck,
  Globe2,
  Download,
  Headphones,
  Zap,
  Repeat,
  Laptop,
  Mic,
  Server,
  Database
} from 'lucide-react';
import { Game, Feature, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Game Servers', href: '#games', isDropdown: true },
  { label: 'Other Servers', href: '#other', isDropdown: true },
  { label: 'Learn', href: '#learn', isDropdown: true },
  { label: 'Support', href: 'https://discord.gg/RWxp7hRU' },
];

export const GAMES: Game[] = [
  { id: '1', name: 'Minecraft: Java', image: 'https://i.postimg.cc/8cK6BM8H/image.png', popular: true, price: '5.99' },
  { id: '3', name: 'Hytale', image: 'https://i.postimg.cc/hG1h1TT9/image.png', price: '11.99' },
  { id: '2', name: 'Vintage Story', image: 'https://i.postimg.cc/1Xj8NS6N/image.png', price: '8.99' },
  { id: '7', name: 'Palworld', image: 'https://i.postimg.cc/8C7Njvwz/image.png', popular: true, price: '17.99' },
];

export const MINECRAFT_PLANS = [
  { id: '2gb', ram: '2GB', players: '3', price: '5.99', badge: null },
  { id: '3gb', ram: '3GB', players: '4', price: '8.99', badge: null },
  { id: '4gb', ram: '4GB', players: '6', price: '11.99', badge: null },
  { id: '5gb', ram: '5GB', players: '8', price: '14.99', badge: 'Top Vanilla Plan' },
  { id: '6gb', ram: '6GB', players: '10', price: '17.99', badge: null },
  { id: '8gb', ram: '8GB', players: '16', price: '23.99', badge: 'Top Modded Plan' },
  { id: '10gb', ram: '10GB', players: '24', price: '29.99', badge: null },
  { id: '12gb', ram: '12GB', players: '30+', price: '35.99', badge: null },
  { id: '16gb', ram: '16GB', players: '45+', price: '47.99', badge: null },
  { id: '20gb', ram: '20GB', players: '60+', price: '59.99', badge: null },
];

export const FEATURES: Feature[] = [
  {
    id: 'support',
    title: '24/7/365 Support',
    description: 'Get the best customer support of any server host. Average ticket reply under 15 minutes.',
    icon: Headphones
  },
  {
    id: 'global',
    title: 'Servers Worldwide',
    description: 'We offer game server hosting at 20+ locations worldwide for low latency wherever you are.',
    icon: Globe2
  },
  {
    id: 'modpack',
    title: 'Automated Modpacks',
    description: 'Our Minecraft hosting plans include automatic installation making modpacks a breeze.',
    icon: Download
  },
  {
    id: 'ddos',
    title: 'DDoS Protection',
    description: 'All our gaming servers come outfitted with advanced DDoS protection at no extra cost.',
    icon: ShieldCheck
  },
  {
    id: 'subdomains',
    title: 'Free Subdomains',
    description: 'Get a free subdomain for your server ip so your friends can connect easily.',
    icon: Zap
  },
  {
    id: 'swap',
    title: 'Game Swapping',
    description: 'Want to shake things up? You can swap between different games instantly.',
    icon: Repeat
  }
];

export const HERO_POINTS = [
  'Server hosting for 100+ games with Instant Setup',
  'Pre-install 2,000+ Modpacks automatically',
  '24/7/365 support troubleshooting your server',
  'Powered by Latest Ryzen Hardware',
  '21 Locations across the globe',
  'Advanced DDoS Protection'
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    title: "OUR SUPPORT TEAM IS AVAILABLE 24/7/365",
    description: "When you run into an issue with a mod, modpack, plugin, or setting on your server, our support team is here to help within 15 minutes on average. From Minecraft to Garry's Mod server hosting, our team does it all. Spend more time playing with your friends instead of troubleshooting your server.",
    image: "https://i.postimg.cc/hjfWtQ88/image.png"
  },
  {
    title: "POWERFUL CONTROL PANEL FOR EASY SERVER MANAGEMENT",
    description: "Our easy-to-use control panel allows you to take charge of all aspects of your hosted Minecraft and gaming servers. From stopping and starting your server to adding modpacks with a few clicks, editing config files, or adjusting player slots, the interface is easy to navigate for new players and powerful enough for advanced users.",
    image: "https://i.postimg.cc/XJxDyDzZ/image.png"
  },
  {
    title: "AUTOMATED MODPACK INSTALLATION & UPDATES",
    description: "With our automated modpack installer, you can play your favorite modpacks with just a few clicks. We support thousands of modpacks from CurseForge, FTB, Technic, and more. Plus, we keep them updated so you don't have to worry about manual file management.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop"
  }
];

export const FAQ_ITEMS = [
  {
    question: "HOW QUICK IS YOUR SUPPORT?",
    answer: "Our average ticket response time is under 15 minutes. We have staff online 24/7/365 to assist you with any issues you might encounter."
  },
  {
    question: "WHAT ARE THE SPECIFICATIONS OF CODOEN SERVER NODES?",
    answer: "We use high-performance enterprise hardware, typically featuring latest generation Ryzen processors (such as Ryzen 9 7950X) and high-speed NVMe SSDs to ensure lag-free gameplay."
  },
  {
    question: "ARE YOUR MINECRAFT AND GAMING SERVERS ON 24/7?",
    answer: "Yes! Once you purchase a server, it stays online 24/7 even when you are not logged in, so your friends can play anytime."
  },
  {
    question: "CAN I SWITCH BETWEEN MODPACKS ON MY MINECRAFT SERVER WHENEVER I WANT?",
    answer: "Absolutely. Our control panel allows you to switch modpacks or even game types at any time with just a few clicks. Data for previous setups can be saved."
  },
  {
    question: "ARE THE PLAYER SLOTS UNLIMITED/ADJUSTABLE?",
    answer: "Yes, you can adjust player slots to your liking. We do not limit player slots on most plans, though we recommend a player count based on your RAM allocation for performance."
  },
  {
    question: "DO YOU PROVIDE DDOS PROTECTION?",
    answer: "Every server comes with our custom advanced DDoS protection standard, free of charge. It's built specifically to filter gaming traffic."
  },
  {
    question: "WHAT IS CODOENONE?",
    answer: "CodoenOne is our premium support add-on that gives you priority access and hands-on help with advanced configuration and modpack setups."
  },
  {
    question: "DO YOU ALLOW CUSTOM JARS/MODS TO BE UPLOADED?",
    answer: "Yes, you have full FTP access to your server files. You can upload any custom jars, mods, or plugins you wish to use."
  }
];

export const BEYOND_GAMING_ITEMS = [
  {
    id: 'web',
    title: 'WEB HOSTING',
    icon: Laptop,
    image: 'https://i.postimg.cc/cHR0gFXW/image.png'
  },
  {
    id: 'voice',
    title: 'VOICE SERVERS',
    icon: Mic,
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 'vps',
    title: 'VPS SERVERS',
    icon: Server,
    image: 'https://images.unsplash.com/photo-1558494949-ef253b294275?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 'dedicated',
    title: 'DEDICATED SERVERS',
    icon: Database,
    image: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?q=80&w=500&auto=format&fit=crop'
  }
];