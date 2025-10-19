import React, { useState } from 'react';
import PlayerCarousel from './components/PlayerCarousel';
import GridCard from './components/GridCard';
import Background from './components/Background';
import HallOfFameModal from './components/HallOfFameModal';
import HistoryPage from './components/HistoryPage';
import { playerCards, hallOfFameData } from './data/mockData';
import { TournamentYear } from './types';
import { CalendarIcon, FootballIcon, TrophyIcon, HistoryIcon } from './components/icons';

const App: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<TournamentYear | null>(null);
  const [view, setView] = useState<'main' | 'history'>('main');

  const mainContent = (
    <main className="container mx-auto px-4 py-8 relative z-10 animate-fade-in">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight uppercase">
          FIFA Bros <span className="text-cyan-400">Hall of Fame</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left Panel */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <GridCard title="My Team" subtitle="4-1-2-2" icon={<div className="text-3xl">⚽</div>} badge={12} />
          <GridCard title="VS Attack" subtitle="Play online against others" icon={<FootballIcon className="w-8 h-8" />} />
          <GridCard title="Head to Head" subtitle="Real time head to head action" icon={<div className="text-3xl">👥</div>} />
        </div>

        {/* Center Panel */}
        <div className="lg:col-span-3">
          <PlayerCarousel players={playerCards} />
        </div>

        {/* Right Panel */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <GridCard 
            title={`Hall of Fame ${hallOfFameData[0].year}`} 
            subtitle={`Winner: ${hallOfFameData[0].winner.name}`} 
            icon={<TrophyIcon className="w-8 h-8"/>}
            onClick={() => setSelectedYear(hallOfFameData[0])}
          />
           <GridCard 
            title="History" 
            subtitle="View past champions" 
            icon={<HistoryIcon className="w-8 h-8"/>}
            onClick={() => setView('history')}
          />
          <GridCard title="League" subtitle="Artful_Fury" icon={<CalendarIcon className="w-8 h-8"/>} />
          <GridCard title="Store" subtitle="TOTY Ultimate" icon={<div className="text-3xl">🛒</div>} />
        </div>
      </div>
    </main>
  );

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <Background />
      
      {view === 'main' ? mainContent : <HistoryPage onBack={() => setView('main')} />}

      <HallOfFameModal yearData={selectedYear} onClose={() => setSelectedYear(null)} />
    </div>
  );
};

export default App;