import React, { useState } from 'react';
import { ShieldCheck, Database, MousePointerClick, Cloud, Clock, Layout, FileCode, Search, Settings, Folder, ChevronDown, User, BadgeCheck, MessageSquare, ArrowRight, Star, ChevronRight, ChevronUp } from 'lucide-react';
import StartHereBanner from './StartHereBanner';
import LocationsMap from './LocationsMap';

interface Props {
    onNavigate: (view: string, data?: any) => void;
}

const WebHostingPage: React.FC<Props> = ({ onNavigate }) => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    const handleOrder = (plan: any) => {
        onNavigate('configure', { type: 'web', plan: plan.name, price: plan.price });
    };

    const PLANS = [
        {
            name: "WEB HOSTING PACKAGE 1",
            specs: [
                "10GB HDD",
                "100GB Bandwidth",
                "Unlimited MySQL Databases",
                "Unlimited Addon Domains",
                "Instant Setup"
            ],
            price: "2.99"
        },
        {
            name: "WEB HOSTING PACKAGE 2",
            specs: [
                "20GB HDD",
                "200GB Bandwidth",
                "Unlimited MySQL Databases",
                "Unlimited Addon Domains",
                "Instant Setup"
            ],
            price: "4.99"
        },
        {
            name: "WEB HOSTING PACKAGE 3",
            specs: [
                "40GB HDD",
                "300GB Bandwidth",
                "Unlimited MySQL Databases",
                "Unlimited Addon Domains",
                "Instant Setup"
            ],
            price: "7.99"
        }
    ];

    const FEATURES = [
        {
            title: "WEBSITE DDOS PROTECTION",
            desc: "All of our web server host packages come with DDoS protection included, ensuring your server stays online and serves pages to users with no downtime.",
            icon: ShieldCheck
        },
        {
            title: "CPANEL CONTROL PANEL",
            desc: "No matter the time, you can manage every detail of your website with our cPanel control panel. With full FTP access, you can edit your files whenever you need to!",
            icon: Layout
        },
        {
            title: "WEBSITE DATA BACKUPS",
            desc: "We perform daily backups of all your website's data, ensuring you can always restore a backup in the event of a misconfiguration or any other issues you may run into.",
            icon: Database
        },
        {
            title: "EASY TO MANAGE",
            desc: "Managing your web hosting server has never been easier. Along with our support team being available anytime, you are able to access our cPanel which grants you full FTP access 24/7; this allows you to have full control over your server.",
            icon: MousePointerClick
        },
        {
            title: "SOFTACULOUS 1-CLICK INSTALLS",
            desc: "Install common scripts such as WordPress as well as hundreds of other scripts with a single click!",
            icon: Cloud
        },
        {
            title: "24/7 SERVER SUPPORT",
            desc: "Our average ticket response time is 15 minutes, ensuring you will receive the support you need quickly.",
            icon: Clock
        }
    ];

    const WEB_HOSTING_FAQS = [
        { q: "HOW QUICK IS YOUR SUPPORT?", a: "Our average ticket response time is under 15 minutes. We have staff online 24/7/365 to assist you with any issues you might encounter." },
        { q: "DO YOU PROVIDE DDOS PROTECTION?", a: "Yes, every web hosting plan includes our advanced DDoS protection capable of mitigating large-scale attacks, ensuring your website stays online." },
        { q: "WHAT PAYMENT METHODS DO YOU ACCEPT?", a: "We accept all major credit cards, PayPal, and various other local payment methods to make hosting accessible to everyone." },
        { q: "WHAT HAPPENS IF I DO NOT PAY ON TIME?", a: "We provide a grace period of 7 days after the due date. If payment is not received by then, the service may be suspended." },
        { q: "WHAT IS YOUR REFUND POLICY?", a: "We offer a 3-day money-back guarantee. If you are not satisfied with our services within the first 3 days, you can request a full refund." }
    ];

    const GAMES_LIST = [
        { name: 'Minecraft', img: 'https://i.postimg.cc/8cK6BM8H/image.png' },
        { name: 'Vintage Story', img: 'https://i.postimg.cc/1Xj8NS6N/image.png' },
        { name: 'Hytale', img: 'https://i.postimg.cc/hG1h1TT9/image.png' },
        { name: 'Valheim', img: 'https://i.postimg.cc/PJgtj51d/image.png' },
        { name: 'Terraria', img: 'https://i.postimg.cc/4NRdqWPZ/image.png' },
        { name: 'Project Zomboid', img: 'https://i.postimg.cc/mg2bWJHW/image.png' },
        { name: 'Palworld', img: 'https://i.postimg.cc/8C7Njvwz/image.png' },
        { name: 'Farming Simulator 25', img: 'https://i.postimg.cc/CMGYBSCn/image.png' },
    ];

    // Code Editor Mockup Component
    const CodeEditorMockup = () => (
        <div className="w-full h-full bg-[#1e1e1e] flex flex-col font-mono text-xs rounded-xl overflow-hidden shadow-2xl border border-white/10">
            {/* Title bar */}
            <div className="h-8 bg-[#252526] flex items-center px-4 justify-between border-b border-[#3e3e42]">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="text-gray-400 font-bold">index.php - cPanel File Manager</div>
                <div></div>
            </div>
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className="w-12 bg-[#333333] flex flex-col items-center py-4 gap-4 text-gray-500 border-r border-[#3e3e42]">
                    <FileCode className="w-6 h-6 text-white" />
                    <Search className="w-6 h-6 hover:text-white transition-colors" />
                    <Settings className="w-6 h-6 hover:text-white transition-colors" />
                </div>
                {/* File Tree */}
                <div className="w-48 bg-[#252526] p-4 text-gray-400 hidden md:block border-r border-[#3e3e42]">
                    <div className="flex items-center gap-2 text-white mb-2 font-bold"><ChevronDown className="w-3 h-3" /> public_html</div>
                    <div className="pl-4 space-y-2">
                        <div className="flex items-center gap-2"><Folder className="w-3 h-3 text-yellow-500" /> wp-admin</div>
                        <div className="flex items-center gap-2"><Folder className="w-3 h-3 text-yellow-500" /> wp-content</div>
                        <div className="flex items-center gap-2"><Folder className="w-3 h-3 text-yellow-500" /> wp-includes</div>
                        <div className="flex items-center gap-2 text-blue-400 bg-[#37373d] -mx-4 px-4 py-1 border-l-2 border-blue-400"><FileCode className="w-3 h-3" /> index.php</div>
                        <div className="flex items-center gap-2"><FileCode className="w-3 h-3" /> wp-config.php</div>
                        <div className="flex items-center gap-2"><FileCode className="w-3 h-3" /> .htaccess</div>
                    </div>
                </div>
                {/* Editor */}
                <div className="flex-1 bg-[#1e1e1e] p-6 overflow-hidden relative">
                    <div className="flex text-gray-500 font-mono text-sm leading-relaxed">
                        <div className="pr-4 text-right select-none opacity-50 border-r border-gray-700 mr-4">
                            1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10<br />11<br />12
                        </div>
                        <div className="text-blue-300">
                            <span className="text-pink-400">&lt;?php</span><br />
                            <span className="text-green-400">/**</span><br />
                            <span className="text-green-400"> * Front to the WordPress application.</span><br />
                            <span className="text-green-400"> */</span><br />
                            <br />
                            <span className="text-pink-400">define</span>( <span className="text-yellow-300">'WP_USE_THEMES'</span>, <span className="text-blue-400">true</span> );<br />
                            <br />
                            <span className="text-green-400">/** Loads the WordPress Environment and Template */</span><br />
                            <span className="text-pink-400">require</span>( <span className="text-yellow-300">__DIR__</span> . <span className="text-yellow-300">'/wp-blog-header.php'</span> );<br />
                            <br />
                            <span className="text-gray-500">// Custom Codoen Config</span><br />
                            <span className="text-blue-400">$server_config</span> = <span className="text-pink-400">new</span> CodoenConfig();<br />
                            <span className="text-blue-400">$server_config</span>{'->'}<span className="text-yellow-300">optimize</span>();
                        </div>
                    </div>
                </div>
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
                            <h1 className="font-display font-black text-4xl lg:text-6xl uppercase leading-none">
                                WEB SERVER <br />
                                HOSTING AT ITS <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">FINEST</span>
                            </h1>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                                Whether you're looking to start a community website, a forum for your game server, or just need web server hosting in general, we have you covered. With multiple feature-rich plans to choose from, hosting your website has never been easier.
                            </p>
                            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">
                                Let the experts at Codoen Hosting help you pick a plan!
                            </p>
                            <button onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })} className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded uppercase text-sm tracking-wider transition-colors shadow-lg shadow-indigo-900/40">
                                ORDER NOW
                            </button>
                        </div>

                        {/* Isometric Laptop Illustration */}
                        <div className="flex-1 flex justify-center perspective-1000">
                            <div className="relative w-full max-w-md aspect-square flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                                {/* Abstract Laptop Construction using CSS/SVG */}
                                <div className="relative w-80 h-48 bg-gray-800 rounded-lg transform rotateX-[10deg] rotateY-[-20deg] rotateZ-[5deg] shadow-2xl border border-gray-700">
                                    {/* Screen */}
                                    <div className="absolute top-2 left-2 right-2 bottom-6 bg-[#0a101d] rounded border border-gray-700 overflow-hidden flex flex-col p-2">
                                        <div className="text-[6px] font-mono text-cyan-400 leading-tight opacity-80">
                                            <div>&gt; connecting to server...</div>
                                            <div>&gt; connection established</div>
                                            <div>&gt; status: <span className="text-green-400">online</span></div>
                                            <div className="mt-2 text-blue-400">
                                                01010101 00101010 11010101<br />
                                                11100101 01010111 00101010
                                            </div>
                                        </div>
                                        {/* Graph Graphic */}
                                        <div className="mt-auto flex items-end gap-1 h-12 pb-1">
                                            {[40, 60, 30, 80, 50, 90, 70, 40, 60].map((h, i) => (
                                                <div key={i} className="flex-1 bg-indigo-500/50 rounded-t-sm" style={{ height: `${h}%` }}></div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Keyboard Base */}
                                    <div className="absolute -bottom-24 -left-12 w-96 h-24 bg-gray-900 transform rotateX-[60deg] rounded-lg border-b-4 border-gray-950 shadow-2xl">
                                        <div className="absolute inset-4 bg-gray-800 rounded opacity-50"></div>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute top-0 right-10 bg-cyan-500/10 backdrop-blur border border-cyan-500/30 p-4 rounded-lg transform rotate-6 animate-pulse">
                                    <div className="text-cyan-400 text-xs font-mono font-bold">STATUS: ONLINE</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Plans Section */}
            <div id="plans" className="py-24 bg-[#050b14]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-display font-black text-3xl text-white uppercase mb-12">PLANS AND PRICING</h2>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {PLANS.map((plan, index) => (
                            <div key={index} className="bg-[#050b14] border-2 border-indigo-900/50 rounded-lg p-8 flex flex-col items-center text-center hover:border-indigo-500 hover:shadow-[0_0_30px_rgba(79,70,229,0.15)] transition-all duration-300 group">
                                <h3 className="font-display font-black text-xl text-white uppercase mb-8 tracking-wide max-w-[200px] leading-tight group-hover:text-indigo-400 transition-colors">
                                    {plan.name}
                                </h3>

                                <div className="space-y-4 mb-10 w-full">
                                    {plan.specs.map((spec, i) => (
                                        <div key={i} className="text-[10px] text-gray-400 font-bold uppercase text-center border-b border-white/5 pb-2 last:border-0">
                                            {spec}
                                        </div>
                                    ))}
                                </div>

                                <div className="mb-8">
                                    <div className="text-4xl font-black text-white">$ {plan.price} <span className="text-xs text-gray-500 font-normal">/ month</span></div>
                                </div>

                                <button
                                    onClick={() => handleOrder(plan)}
                                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded text-[10px] uppercase tracking-wider transition-colors shadow-lg shadow-indigo-900/20"
                                >
                                    ORDER
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-24 bg-[#050b14] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-display font-black text-3xl text-white uppercase mb-16">OUR FEATURES</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                        {FEATURES.map((feature, index) => (
                            <div key={index} className="flex flex-col items-start group">
                                <div className="w-12 h-12 rounded-full border border-cyan-500/30 flex items-center justify-center mb-6 text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-400 transition-all duration-300">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-display font-bold text-white text-sm uppercase mb-3 tracking-wide">{feature.title}</h3>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Locations Map */}
            <LocationsMap />

            {/* EASY TO MANAGE SECTION */}
            <div className="py-24 bg-[#050b14] border-t border-white/5 relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight mb-6">EASY TO MANAGE</h2>
                        <p className="text-gray-400 text-xs max-w-4xl mx-auto leading-relaxed">
                            You have complete control over your website with the easy-to-use cPanel control panel. This control panel lets you control all aspects of your site, from databases to full file access and emails.
                            <br /><br />
                            We know that choosing a web server host can feel overwhelming with so many options. That's why Codoen Hosting offers a number of reasons to choose our web server hosting services, which include our <strong className="text-white">easy-to-use control panel</strong>, exceptional customer support, and payment options that scale with your needs!
                        </p>
                    </div>

                    {/* Dashboard Mockup */}
                    <div className="w-full aspect-video mx-auto max-w-5xl shadow-2xl relative">
                        <CodeEditorMockup />

                        {/* Pagination Dots */}
                        <div className="flex justify-center gap-2 mt-8 absolute -bottom-10 left-0 right-0">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* READY TO START CTA */}
            <div className="py-24 bg-[#050b14] border-t border-white/5 mt-12">
                <div className="max-w-4xl mx-auto px-4 flex justify-center">
                    <div className="bg-[#0f1623] border border-white/10 p-8 rounded-lg flex flex-col md:flex-row items-center justify-between gap-8 w-full shadow-2xl">
                        <div>
                            <h3 className="font-display font-black text-2xl text-white uppercase">READY TO START?</h3>
                        </div>
                        <button onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })} className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded text-[10px] uppercase tracking-wider transition-colors shadow-lg shadow-indigo-900/20">
                            CONFIGURE A PLAN
                        </button>
                    </div>
                </div>
            </div>

            {/* FRIENDLY AND PROFESSIONAL SUPPORT */}
            <div className="py-24 bg-[#050b14] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-display font-black text-3xl text-white uppercase tracking-tight mb-4">FRIENDLY AND PROFESSIONAL SUPPORT</h2>
                        <p className="text-gray-400 text-xs leading-relaxed">
                            Our web hosting experts are around 24/7 to provide any help you need with your web servers. We can help you with <span className="font-bold text-white">any questions</span> and point you in the right direction for any questions you may have.
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

            {/* EXPERTS PICK SECTION */}
            <div className="bg-[#03060a] py-24 border-t border-white/5">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-display font-black text-2xl text-white uppercase tracking-tight mb-2">LET OUR EXPERTS PICK THE RIGHT PLAN FOR YOU</h2>
                    <p className="text-gray-500 text-xs mb-12">Choose your web or video game hosting server today!</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        {GAMES_LIST.map((game, i) => (
                            <div key={i} className="group flex flex-col items-center">
                                <div className="relative rounded-lg overflow-hidden border border-white/10 aspect-[16/9] cursor-pointer w-full mb-3 group-hover:border-blue-500/50 transition-colors">
                                    <img src={game.img} alt={game.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <span className="font-display font-bold text-white text-[10px] uppercase tracking-wider">{game.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <StartHereBanner />
        </div>
    );
};

export default WebHostingPage;