import React from 'react';
import { GAMES } from '../constants';
import { ArrowRight, Star } from 'lucide-react';

interface GameGridProps {
  onNavigate?: (view: string, data?: any) => void;
}

const GameGrid: React.FC<GameGridProps> = ({ onNavigate }) => {
  const handleGameClick = (game: any) => {
    if (onNavigate) {
      // Determine type based on game name to set appropriate config options
      const type = game.name.toLowerCase().includes('minecraft') ? 'minecraft' : 
                   game.name.toLowerCase().includes('hytale') ? 'hytale' : 
                   game.name.toLowerCase().includes('palworld') ? 'palworld' : 'minecraft'; // Default to minecraft structure for generic games
      
      onNavigate('configure', { 
        type: type, 
        plan: 'Standard Plan', 
        price: game.price || '9.99' 
      });
    }
  };

  return (
    <section className="py-20 bg-nexus-dark relative" id="games">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase tracking-wider mb-4">
            Other Games
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {GAMES.map((game) => (
            <div 
              key={game.id} 
              onClick={() => handleGameClick(game)}
              className="group relative overflow-hidden rounded-xl border border-white/5 bg-nexus-card hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-900/20 cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-nexus-dark via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-4">
                <h3 className="text-white font-display font-bold text-lg tracking-wide uppercase group-hover:text-cyan-400 transition-colors text-center">
                    {game.name}
                </h3>
              </div>
              
              {/* Badge if popular */}
              {game.popular && (
                <div className="absolute top-2 right-2 bg-yellow-500/90 text-black text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  HOT
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <button className="bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 px-8 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-2 mx-auto">
                SEE ALL 100+ GAMES
                <ArrowRight className="w-4 h-4" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default GameGrid;