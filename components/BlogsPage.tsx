import React, { useState } from 'react';
import { Search, ChevronDown, Calendar, User, Clock, ArrowRight, Star } from 'lucide-react';
import StartHereBanner from './StartHereBanner';

const BlogsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ALL BLOGS');

  const CATEGORIES = ['ALL BLOGS', 'MINECRAFT', 'HYTALE', 'VINTAGE STORY', 'VALHEIM', 'TERRARIA'];

  const POPULAR_BLOGS = [
      {
          title: "Terraria 1.4.5 Secret Seeds: All Hidden World Seeds",
          date: "Jan 28, 2025",
          image: "https://images.unsplash.com/photo-1599351431202-6e0005a7d746?q=80&w=200&auto=format&fit=crop"
      },
      {
          title: "5 Minecraft Cherry Blossom Seeds & Location Coordinates",
          date: "Dec 15, 2024",
          image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=200&auto=format&fit=crop"
      },
      {
          title: "Best Spear Enchantments in Minecraft 1.21",
          date: "Oct 28, 2024",
          image: "https://images.unsplash.com/photo-1624138784181-2999e46ef284?q=80&w=200&auto=format&fit=crop"
      },
      {
          title: "Schedule 1 Bed: OG Kush Combination: All Ingredients",
          date: "Apr 18, 2024",
          image: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?q=80&w=200&auto=format&fit=crop"
      },
      {
          title: "Schedule 1 Bed: Lab Mixer: All Ingredients, Prices & Mix Level",
          date: "Apr 11, 2024",
          image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=200&auto=format&fit=crop"
      }
  ];

  const NEWS_POSTS = [
      {
          title: "Introducing Codoen Hosting Server Donations",
          desc: "How to Activate, Send, Receive, & more. There's so much to enjoy when you're playing on a dedicated server from...",
          author: "Cade-Davie",
          date: "Jan 21, 2025",
          image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=600&auto=format&fit=crop",
          tag: "DONATIONS"
      },
      {
          title: "Introducing CodoenOne: The Future of Server Hosting",
          desc: "We're happy to introduce our brand new all-in-one hosting plan,...",
          author: "Brandon",
          date: "Nov 12, 2024",
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
          tag: "CodoenOne"
      },
      {
          title: "Introducing Our New Help Center & Ticketing System",
          desc: "We are happy to introduce our new help center and ticket systems, the...",
          author: "Brandon",
          date: "Nov 7, 2024",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=600&auto=format&fit=crop",
          tag: "BREAKING NEWS"
      }
  ];

  const LATEST_BLOGS = [
      {
          title: "Rust Garage Door Guide: Where to Find Unit, Craft, Durability Stats, & More",
          author: "Justin",
          date: "Feb 11, 2025",
          image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
          tag: "GARAGE DOOR GUIDE"
      },
      {
          title: "Vintage Story Controls Guide: All PC Keybinds",
          author: "Cade-Davie",
          date: "Feb 11, 2025",
          image: "https://images.unsplash.com/photo-1612287230217-969869828789?q=80&w=600&auto=format&fit=crop",
          tag: "CONTROLS GUIDE"
      },
      {
          title: "Rust Deep Sea Location Guide: POIs, Locations, How to Enter, Exit, & More",
          author: "Justin",
          date: "Feb 11, 2025",
          image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop",
          tag: "DEEP SEA GUIDE"
      },
      {
          title: "Hytale Farming Guide: Farmer's Workbench Upgrade Requirements, Seeds",
          author: "Cade-Davie",
          date: "Feb 10, 2025",
          image: "https://images.unsplash.com/photo-1624138784181-2999e46ef284?q=80&w=600&auto=format&fit=crop",
          tag: "FARMING GUIDE"
      },
      {
          title: "Rust Boat Building Guide: How to Build, Blueprints, Materials, & More",
          author: "Justin",
          date: "Feb 10, 2025",
          image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600&auto=format&fit=crop",
          tag: "HOW TO BUILD A BOAT"
      },
      {
          title: "Best New Items in Terraria 1.4.5",
          author: "Justin",
          date: "Feb 6, 2025",
          image: "https://images.unsplash.com/photo-1599351431202-6e0005a7d746?q=80&w=600&auto=format&fit=crop",
          tag: "UPDATE 1.4.5 BEST ITEMS"
      }
  ];

  return (
    <div className="bg-[#050b14] min-h-screen pt-20 font-sans text-white">
      {/* Top Filter Bar */}
      <div className="bg-[#050b14] pt-8 pb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                  <div className="relative w-full md:w-64">
                      <input 
                          type="text" 
                          placeholder="Search Blogs..." 
                          className="w-full bg-[#0a101d] border border-white/10 rounded-lg py-2 pl-4 pr-10 text-xs text-gray-300 focus:outline-none focus:border-indigo-500"
                      />
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-500" />
                  </div>
                  <button className="bg-[#1e293b] hover:bg-[#253045] text-white text-xs font-bold px-6 py-2 rounded flex items-center gap-2 transition-colors">
                      <Search className="w-3 h-3" /> Search
                  </button>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-1 bg-[#0a101d] p-1 rounded-lg border border-white/5">
                  {CATEGORIES.map((cat) => (
                      <button 
                          key={cat}
                          onClick={() => setActiveCategory(cat)}
                          className={`flex-1 min-w-[100px] py-3 text-[10px] font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1 ${activeCategory === cat ? 'bg-[#151b28] text-white border border-white/10 shadow-sm' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
                      >
                          {cat} {cat === 'ALL BLOGS' && <ChevronDown className="w-3 h-3" />}
                      </button>
                  ))}
              </div>
          </div>
      </div>

      {/* Hero Section Grid */}
      <div className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-3 gap-8">
                  
                  {/* Featured Post (Left - 2 Cols) */}
                  <div className="lg:col-span-2 group cursor-pointer">
                      <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                          <img 
                              src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop" 
                              alt="HumanitZ Update" 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                          />
                          <div className="absolute top-4 left-4 bg-cyan-500 text-black text-[10px] font-black px-3 py-1 rounded uppercase flex items-center gap-1">
                              <Star className="w-3 h-3 fill-black" /> Featured
                          </div>
                          
                          <div className="absolute bottom-4 right-4 flex items-center gap-2">
                               <div className="flex items-center gap-1 text-white font-display font-bold text-lg">
                                   <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center font-bold">C</div>
                                   CODOEN<span className="text-cyan-400">HOSTING</span>
                               </div>
                          </div>
                      </div>
                      
                      <div className="mt-6">
                          <h1 className="font-display font-black text-2xl md:text-3xl text-white uppercase tracking-tight mb-2 group-hover:text-cyan-400 transition-colors">
                              HumanitZ 1.0 Update: Patch Notes, New Features, Changes, & more
                          </h1>
                          <div className="flex items-center gap-4 text-[10px] text-gray-400 font-bold uppercase mb-4">
                              <span className="text-indigo-400">Posted on Feb 6, 2025</span>
                              <span className="flex items-center gap-1"><div className="w-4 h-4 rounded-full bg-cyan-900 flex items-center justify-center text-cyan-400"><User className="w-3 h-3" /></div> Cade-Davie</span>
                          </div>
                          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                              HumanitZ 1.0 has arrived, and it's bringing an enormous amount of new content. New weapons, quests, and plenty more!
                          </p>
                      </div>
                  </div>

                  {/* Most Popular (Right - 1 Col) */}
                  <div className="bg-[#0a101d] rounded-xl border border-white/10 p-6 h-fit">
                      <h3 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-6 border-b border-white/5 pb-4">MOST POPULAR BLOGS</h3>
                      <div className="space-y-4">
                          {POPULAR_BLOGS.map((blog, i) => (
                              <div key={i} className="flex gap-4 group cursor-pointer">
                                  <div className="w-24 h-16 rounded-lg overflow-hidden shrink-0 border border-white/10">
                                      <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                  </div>
                                  <div>
                                      <h4 className="font-bold text-xs text-white leading-tight mb-1 group-hover:text-cyan-400 transition-colors line-clamp-2">{blog.title}</h4>
                                      <span className="text-[10px] text-gray-500 font-bold uppercase">{blog.date}</span>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>

              </div>
          </div>
      </div>

      {/* Codoen Hosting News Section */}
      <div className="py-12 bg-[#050b14]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                  <h2 className="font-display font-black text-2xl text-white uppercase tracking-widest">CODOEN HOSTING NEWS</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                  {NEWS_POSTS.map((post, i) => (
                      <div key={i} className="bg-[#0a101d] rounded-xl border border-white/5 overflow-hidden group hover:border-indigo-500/30 transition-colors cursor-pointer flex flex-col">
                          <div className="relative aspect-[16/9] overflow-hidden">
                              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#0a101d] via-transparent to-transparent"></div>
                              
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-6 text-center">
                                  <h3 className="font-display font-black text-xl text-white uppercase italic tracking-tighter drop-shadow-lg leading-none">
                                      {post.tag === "CodoenOne" ? (
                                          <>CODOEN<span className="text-purple-400">ONE</span></>
                                      ) : post.tag === "DONATIONS" ? (
                                          <>CODOEN<br/><span className="text-indigo-400">DONATIONS</span></>
                                      ) : (
                                          <><span className="text-white">BREAKING</span><br/><span className="text-cyan-400">NEWS</span></>
                                      )}
                                  </h3>
                              </div>
                          </div>
                          
                          <div className="p-6 flex-1 flex flex-col">
                              <h3 className="font-bold text-white text-sm mb-2 line-clamp-2 group-hover:text-indigo-400 transition-colors">{post.title}</h3>
                              <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-1">{post.desc}</p>
                              
                              <div className="flex items-center gap-4 text-[10px] text-gray-500 font-bold uppercase border-t border-white/5 pt-4 mt-auto">
                                  <span className="text-indigo-400">Posted on {post.date}</span>
                                  <span className="flex items-center gap-1"><div className="w-4 h-4 rounded-full bg-indigo-900 flex items-center justify-center text-indigo-400"><User className="w-3 h-3" /></div> {post.author}</span>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>

              <div className="mt-12 text-center">
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded text-[10px] uppercase tracking-wider transition-colors shadow-lg">
                      READ MORE
                  </button>
              </div>
          </div>
      </div>

      {/* Latest Blogs Section */}
      <div className="py-12 bg-[#050b14] pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                  <h2 className="font-display font-black text-2xl text-white uppercase tracking-widest">LATEST BLOGS</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {LATEST_BLOGS.map((post, i) => (
                      <div key={i} className="group cursor-pointer">
                          <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10 mb-4">
                              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                              
                              <div className="absolute bottom-4 left-4">
                                  <h3 className="font-display font-black text-lg text-white uppercase italic tracking-tighter leading-none max-w-[200px]">
                                      {post.tag}
                                  </h3>
                              </div>
                              <div className="absolute top-4 right-4 bg-[#0f1623]/90 backdrop-blur px-2 py-1 rounded border border-white/10">
                                  <div className="w-12 h-6 flex items-center justify-center">
                                      <div className="w-4 h-4 bg-indigo-600 rounded-sm flex items-center justify-center text-[8px] font-bold text-white">C</div>
                                  </div>
                              </div>
                          </div>
                          
                          <h3 className="font-bold text-white text-xs mb-2 leading-snug group-hover:text-cyan-400 transition-colors">{post.title}</h3>
                          
                          <div className="flex items-center gap-4 text-[9px] text-gray-500 font-bold uppercase">
                              <span className="text-cyan-400">Posted on {post.date}</span>
                              <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-cyan-900 flex items-center justify-center text-cyan-400"><User className="w-2 h-2" /></div> {post.author}</span>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      <StartHereBanner />
    </div>
  )
}

export default BlogsPage;