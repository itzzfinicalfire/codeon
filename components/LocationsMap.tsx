import React, { useState } from 'react';

interface Location {
  name: string;
  x: number;
  y: number;
  region: string;
}

const LocationsMap: React.FC = () => {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  // 21 worldwide server locations with accurate positioning
  const locations: Location[] = [
    // North America (8 locations)
    { name: 'Los Angeles', x: 22, y: 42, region: 'US West' },
    { name: 'Dallas', x: 26, y: 44, region: 'US Central' },
    { name: 'New York', x: 32, y: 40, region: 'US East' },
    { name: 'Miami', x: 31, y: 48, region: 'US Southeast' },
    { name: 'Montreal', x: 32, y: 36, region: 'Canada' },
    { name: 'Seattle', x: 21, y: 35, region: 'US Northwest' },
    { name: 'Chicago', x: 29, y: 40, region: 'US Midwest' },
    { name: 'Ashburn', x: 31, y: 42, region: 'US East' }, // Added to make 21

    // Europe (6 locations)
    { name: 'London', x: 46, y: 32, region: 'UK' },
    { name: 'Frankfurt', x: 49, y: 34, region: 'Germany' },
    { name: 'Paris', x: 47, y: 35, region: 'France' },
    { name: 'Amsterdam', x: 48, y: 33, region: 'Netherlands' },
    { name: 'Warsaw', x: 53, y: 34, region: 'Poland' },
    { name: 'Stockholm', x: 52, y: 28, region: 'Sweden' },

    // Asia (4 locations)
    { name: 'Singapore', x: 74, y: 60, region: 'Southeast Asia' },
    { name: 'Tokyo', x: 84, y: 42, region: 'Japan' },
    { name: 'Mumbai', x: 68, y: 52, region: 'India' },
    { name: 'Seoul', x: 80, y: 40, region: 'South Korea' },

    // Oceania (1 location)
    { name: 'Sydney', x: 86, y: 75, region: 'Australia' },

    // South America (2 locations)
    { name: 'São Paulo', x: 35, y: 70, region: 'Brazil' },
    { name: 'Santiago', x: 28, y: 75, region: 'Chile' },
  ];

  return (
    <section className="py-24 bg-[#050b14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase tracking-wider mb-2">
          Worldwide Server Hosting Locations
        </h2>
        <p className="text-gray-400 text-sm md:text-base mb-16">
          Host from any of our 20 worldwide locations with <span className="text-purple-400 font-bold">CodoenOne</span>
          <br className="hidden md:block" />
          and swap between locations free of charge!
        </p>

        <div className="relative w-full max-w-6xl mx-auto aspect-[16/9] md:aspect-[2/1] bg-[#0a0f1a] rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
          {/* Dotted World Map SVG */}
          {/* User Provided Map Image */}
          <div
            className="absolute inset-0 w-full h-full opacity-60"
            style={{
              backgroundImage: "url('https://i.postimg.cc/X7N75gf6/image-removebg-preview-(4).png')",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050b14]/10 to-[#050b14]/50"></div>

          {/* Location Markers */}
          {locations.map((location, i) => (
            <div
              key={i}
              className="absolute group/marker cursor-pointer"
              style={{
                left: `${location.x}%`,
                top: `${location.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onMouseEnter={() => setHoveredLocation(location.name)}
              onMouseLeave={() => setHoveredLocation(null)}
            >
              {/* Pulsing Glow Effect */}
              <div className="absolute inset-0 w-4 h-4 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <div className="absolute inset-0 bg-purple-500/40 rounded-full animate-ping"></div>
                <div className="absolute inset-0 bg-purple-500/60 rounded-full blur-md"></div>
              </div>

              {/* Main Dot */}
              <div className="relative w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.9)] group-hover/marker:scale-150 group-hover/marker:bg-purple-400 transition-all duration-300 z-10">
                <div className="absolute inset-0 bg-white/50 rounded-full animate-pulse"></div>
              </div>

              {/* Tooltip */}
              <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-[#0f1623]/95 backdrop-blur-md border border-purple-500/30 rounded-lg text-xs font-bold text-white uppercase tracking-wider whitespace-nowrap transition-all duration-200 pointer-events-none ${hoveredLocation === location.name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                <div className="text-purple-400 text-[10px] mb-0.5">{location.region}</div>
                <div>{location.name}</div>
                {/* Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                  <div className="border-4 border-transparent border-t-purple-500/30"></div>
                </div>
              </div>
            </div>
          ))}

          {/* Bottom Info Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#050b14] via-[#050b14]/90 to-transparent p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex gap-8 text-center md:text-left">
                <div>
                  <div className="text-2xl md:text-3xl font-display font-black text-white">20+</div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Locations</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-display font-black text-white">99.99%</div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-display font-black text-white">Free</div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Location Swap</div>
                </div>
              </div>

              <button className="bg-[#0f1623]/80 backdrop-blur border border-purple-500/20 text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-purple-600 hover:border-purple-500 transition-all shadow-lg hover:shadow-purple-500/20">
                Select a location above to view details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsMap;