import React, { useState } from 'react';
import PlayerCarousel from './components/PlayerCarousel';
import GridCard from './components/GridCard';
import Background from './components/Background';
import HallOfFameModal from './components/HallOfFameModal';
import HistoryPage from './components/HistoryPage';
import PlayerDetailPage from './components/PlayerDetailPage';
import CareerPage from './components/CareerPage';
import WinnersFramePage from './components/WinnersFramePage';
import UnderConstructionPage from './components/UnderConstructionPage';
import { playerCards, hallOfFameData } from './data/mockData';
import { TournamentYear, PlayerCardData } from './types';
import { CalendarIcon, TrophyIcon, HistoryIcon, CareerIcon, FrameIcon, HighlightsIcon, MatchIcon } from './components/icons';

const App: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<TournamentYear | null>(null);
  const [view, setView] = useState<'main' | 'history' | 'playerDetail' | 'career' | 'winnersFrame' | 'highlights' | 'headToHead' | 'tournament'>('main');
  const [selectedPlayer, setSelectedPlayer] = useState<PlayerCardData | null>(null);
  const [players, setPlayers] = useState<PlayerCardData[]>(playerCards);

  const handlePlayerSelect = (player: PlayerCardData) => {
    setSelectedPlayer(player);
    setView('playerDetail');
  };

  const handleBackToMain = () => {
    setView('main');
    setSelectedPlayer(null);
  };

  const handleAddNewPlayer = (name: string) => {
    const newPlayer: PlayerCardData = {
      id: Date.now(),
      name,
      rating: '??',
      photoUrl: `https://picsum.photos/seed/${name.replace(/\s/g, '')}/200/200`,
      clubLogoUrl: '',
      countryCode: 'XX', // A generic placeholder for the flag
      cardType: 'grey',
    };
    setPlayers(prevPlayers => [...prevPlayers, newPlayer]);
  };

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
          <GridCard 
            title="Winner's Frame"
            subtitle="Celebrating the best"
            icon={<FrameIcon className="w-8 h-8" />}
            onClick={() => setView('winnersFrame')}
          />
          <GridCard 
            title="Highlights" 
            subtitle="Relive the best moments" 
            icon={<HighlightsIcon className="w-8 h-8" />}
            onClick={() => setView('highlights')}
          />
          <GridCard 
            title="Head to Head" 
            subtitle="The season's best clash" 
            icon={<MatchIcon className="w-8 h-8" />}
            onClick={() => setView('headToHead')}
          />
        </div>

        {/* Center Panel */}
        <div className="lg:col-span-3">
          <PlayerCarousel players={players} onPlayerClick={handlePlayerSelect} />
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
          <GridCard 
            title="Tournament" 
            subtitle="Fixtures and standings" 
            icon={<CalendarIcon className="w-8 h-8"/>}
            onClick={() => setView('tournament')}
          />
          <GridCard 
            title="Career" 
            subtitle="Manage players" 
            icon={<CareerIcon className="w-8 h-8"/>} 
            onClick={() => setView('career')}
          />
        </div>
      </div>
    </main>
  );

  return (
    <div className="min-h-screen text-white relative bg-[#0a101f]">
      <Background />
      
      {view === 'main' && mainContent}
      {view === 'history' && <HistoryPage onBack={() => setView('main')} />}
      {view === 'career' && <CareerPage players={players} onBack={handleBackToMain} onPlayerClick={handlePlayerSelect} onAddNewPlayer={handleAddNewPlayer}/>}
      {view === 'winnersFrame' && <WinnersFramePage onBack={() => setView('main')} />}
      {view === 'highlights' && <UnderConstructionPage title="Highlights" message="Our video editors are hard at work clipping the best moments. Check back soon for some epic plays!" onBack={handleBackToMain} />}
      {view === 'headToHead' && <UnderConstructionPage title="Head to Head" message="Tracking the stats for the biggest rivalries. Get ready to see who has the ultimate bragging rights!" onBack={handleBackToMain} />}
      {view === 'tournament' && <UnderConstructionPage title="Tournament" message="The draw is being finalized! Get ready for some intense matchups. Fixtures coming soon." onBack={handleBackToMain} />}


      <HallOfFameModal yearData={selectedYear} onClose={() => setSelectedYear(null)} />
      
      {view === 'playerDetail' && selectedPlayer && (
        <PlayerDetailPage player={selectedPlayer} onBack={handleBackToMain} players={players} />
      )}
    </div>
  );
};

export default App;