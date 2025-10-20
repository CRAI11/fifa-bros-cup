import React, { useState, useMemo } from 'react';
import { PlayerCardData } from '../types';
import PlayerCard from './PlayerCard';
import AddPlayerModal from './AddPlayerModal';

interface CareerPageProps {
  players: PlayerCardData[];
  onBack: () => void;
  onPlayerClick: (player: PlayerCardData) => void;
  onAddNewPlayer: (name: string) => void;
}

const CareerPage: React.FC<CareerPageProps> = ({ players, onBack, onPlayerClick, onAddNewPlayer }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredPlayers = useMemo(() => 
    players.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())),
    [players, searchQuery]
  );

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <button onClick={onBack} className="mb-8 text-cyan-400 font-bold hover:text-cyan-300 transition-colors text-lg">
        &larr; Back to Main Hub
      </button>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-4xl font-bold tracking-wider uppercase">Career</h1>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input 
            type="text"
            placeholder="Search players..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-auto bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Add New Player
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredPlayers.map(player => (
          <div key={player.id} onClick={() => onPlayerClick(player)} className="cursor-pointer transform hover:scale-105 transition-transform duration-300">
             <PlayerCard player={player} />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <AddPlayerModal 
          onClose={() => setIsModalOpen(false)} 
          onAddPlayer={(name) => {
            onAddNewPlayer(name);
            setIsModalOpen(false);
          }} 
        />
      )}
    </div>
  );
};

export default CareerPage;