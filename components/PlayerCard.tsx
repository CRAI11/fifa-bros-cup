import React from 'react';
import { PlayerCardData } from '../types';

interface PlayerCardProps {
  player: PlayerCardData;
}

const cardGradients = {
  gold: 'from-yellow-400/80 via-amber-200/80 to-yellow-500/80',
  purple: 'from-purple-500/80 via-fuchsia-300/80 to-purple-600/80',
  blue: 'from-blue-400/80 via-cyan-200/80 to-blue-500/80',
};

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  const gradient = cardGradients[player.cardType];
  const countryFlagUrl = `https://flagsapi.com/${player.countryCode}/shiny/64.png`;

  return (
    <div className="relative w-72 h-[28rem] text-black font-sans antialiased perspective-1000">
      <div 
        className="relative w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-80`}></div>
        <div className="absolute inset-0 p-4 flex flex-col items-center text-white font-bold">
          {/* Top Section: Rating, Position, Logos */}
          <div className="w-full flex justify-between items-start">
            <div className="text-center">
              <p className="text-4xl">{player.rating}</p>
              <p className="text-lg">{player.position}</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <img src={countryFlagUrl} alt={`${player.countryCode} flag`} className="w-10 h-auto" />
              <img src={player.clubLogoUrl} alt="Club logo" className="w-10 h-10" />
            </div>
          </div>
          
          {/* Player Image */}
          <div className="mt-2">
            <img src={player.photoUrl} alt={player.name} className="w-40 h-40 object-cover rounded-full border-4 border-white/20" />
          </div>
          
          {/* Player Name */}
          <p className="mt-2 text-3xl tracking-wider uppercase text-shadow">{player.name}</p>

          {/* Stats Section */}
          <div className="w-full mt-4 border-t-2 border-white/20 pt-4">
            <div className="grid grid-cols-3 gap-x-4 gap-y-2 text-center text-lg">
              <div>
                <span className="font-semibold">{player.stats.pac}</span> PAC
              </div>
              <div>
                <span className="font-semibold">{player.stats.dri}</span> DRI
              </div>
              <div>
                <span className="font-semibold">{player.stats.sho}</span> SHO
              </div>
              <div>
                <span className="font-semibold">{player.stats.def}</span> DEF
              </div>
              <div>
                <span className="font-semibold">{player.stats.pas}</span> PAS
              </div>
              <div>
                <span className="font-semibold">{player.stats.phy}</span> PHY
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;