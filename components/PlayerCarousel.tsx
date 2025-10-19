import React, { useState, useEffect } from 'react';
import { PlayerCardData } from '../types';
import PlayerCard from './PlayerCard';
import { FootballIcon } from './icons';

interface PlayerCarouselProps {
  players: PlayerCardData[];
}

const PlayerCarousel: React.FC<PlayerCarouselProps> = ({ players }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (players.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % players.length);
    }, 5000); // Change card every 5 seconds

    return () => clearInterval(timer);
  }, [players.length]);

  const getCardStyle = (index: number) => {
    const offset = index - currentIndex;
    const normalizedOffset = (offset + players.length) % players.length;

    const isLeft = normalizedOffset === players.length - 1;
    const isRight = normalizedOffset === 1;
    const isCenter = normalizedOffset === 0;

    if (isCenter) {
      return {
        transform: 'translateX(0) scale(1)',
        opacity: 1,
        zIndex: 10,
      };
    }
    if (isRight) {
      return {
        transform: 'translateX(60%) scale(0.8)',
        opacity: 0.7,
        zIndex: 5,
      };
    }
    if (isLeft) {
      return {
        transform: 'translateX(-60%) scale(0.8)',
        opacity: 0.7,
        zIndex: 5,
      };
    }

    // Other cards, hidden
    return {
      transform: `translateX(${offset > 0 ? 120 : -120}%) scale(0.6)`,
      opacity: 0,
      zIndex: 0,
    };
  };

  return (
    <div className="flex flex-col items-center justify-center h-full relative py-8">
      {/* Central decorative element */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-96 h-96 border-4 border-yellow-400/20 rounded-full animate-pulse"></div>
        <div className="absolute w-80 h-80 border-2 border-yellow-400/30 rounded-full"></div>
      </div>
      
      <div className="text-center mb-8 text-white relative">
        <FootballIcon className="w-24 h-24 text-yellow-400 mx-auto drop-shadow-lg"/>
        <h2 className="text-4xl font-bold uppercase tracking-widest mt-2">Players</h2>
        <p className="text-lg text-gray-300">Tournament Contenders</p>
      </div>

      <div className="relative w-full h-[30rem] flex items-center justify-center">
        {players.map((player, index) => (
          <div
            key={player.id}
            className="absolute transition-all duration-700 ease-in-out"
            style={getCardStyle(index)}
          >
            <PlayerCard player={player} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerCarousel;