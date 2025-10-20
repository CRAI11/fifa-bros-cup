import React, { useState } from 'react';
import { PlayerCardData, PlayerAttributes } from '../types';
import { InfoIcon, CloseIcon } from './icons';
import Tooltip from './Tooltip';

interface RadarChartProps {
  attributes: PlayerAttributes;
  comparedAttributes?: PlayerAttributes | null;
  size: number;
}

const RadarChart: React.FC<RadarChartProps> = ({ attributes, comparedAttributes, size }) => {
  const center = size / 2;
  const labels = ['ATT', 'TEC', 'TAC', 'DEF', 'CRE'];
  const values = [attributes.att, attributes.tec, attributes.tac, attributes.def, attributes.cre];
  const comparedValues = comparedAttributes ? [comparedAttributes.att, comparedAttributes.tec, comparedAttributes.tac, comparedAttributes.def, comparedAttributes.cre] : null;

  const getPoint = (value: number, index: number, offset: number = 0) => {
    const angle = (Math.PI / 2) - (2 * Math.PI * index) / labels.length;
    const radius = (value / 100) * (size / 2.5) + offset;
    return `${center + radius * Math.cos(angle)},${center - radius * Math.sin(angle)}`;
  };

  const pointsToString = (vals: number[]) => vals.map((v, i) => getPoint(v, i)).join(' ');

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <polygon points={pointsToString([100, 100, 100, 100, 100])} className="fill-cyan-400/10 stroke-cyan-400/30" />
        {[20, 40, 60, 80].map(v => (
          <polygon key={v} points={pointsToString([v, v, v, v, v])} className="fill-none stroke-cyan-400/30" />
        ))}
        {labels.map((_, i) => (
          <line key={i} x1={center} y1={center} x2={getPoint(100, i).split(',')[0]} y2={getPoint(100, i).split(',')[1]} className="stroke-cyan-400/30" />
        ))}
        {comparedValues && (
          <polygon points={pointsToString(comparedValues)} className="fill-cyan-400/30 stroke-[#00BFFF]" strokeWidth="2" />
        )}
        <polygon points={pointsToString(values)} className="fill-yellow-400/30 stroke-[#FFE600]" strokeWidth="2" />
      </svg>
      <div className="absolute inset-0">
        {labels.map((label, i) => {
          const angle = (Math.PI * 2 * i) / labels.length - Math.PI / 2;
          const x = 50 + 48 * Math.cos(angle);
          const y = 50 + 48 * Math.sin(angle);
          return (
            <div key={i} className="absolute text-center text-white" style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}>
              <span className="text-xs font-bold">{label}</span>
              <div className="bg-cyan-500 text-xs font-bold rounded-sm px-1 mt-1 text-black">{values[i]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface PlayerDetailPageProps {
  player: PlayerCardData;
  onBack: () => void;
  players: PlayerCardData[];
}

const PlayerDetailPage: React.FC<PlayerDetailPageProps> = ({ player, onBack, players }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<PlayerCardData[]>([]);
    const [comparedPlayer, setComparedPlayer] = useState<PlayerCardData | null>(null);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query) {
            const results = players.filter(p =>
                p.name.toLowerCase().includes(query.toLowerCase()) && p.id !== player.id
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    };

    const selectPlayerForCompare = (p: PlayerCardData) => {
        setComparedPlayer(p);
        setSearchQuery('');
        setSearchResults([]);
    };

    const clearComparedPlayer = () => {
        setComparedPlayer(null);
    };

  return (
    <div className="fixed inset-0 bg-[#0a101f]/90 backdrop-blur-sm text-white z-40 p-4 lg:p-8 overflow-y-auto animate-fade-in font-sans">
        <button onClick={onBack} className="absolute top-8 left-8 text-cyan-400 font-bold hover:text-cyan-300 transition-colors text-lg z-50">
            &larr; Back to Main Hub
        </button>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 h-full pt-12">
        {/* Left Panel: Career Stats */}
        <div className="lg:col-span-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
                <h2 className="text-xl font-bold tracking-wider text-gray-300 uppercase">Career</h2>
                <Tooltip text="Player's performance stats. MP: Matches Played, GLS: Goals, AST: Assists, SH: Shots, PAS: Passes, PA%: Pass Accuracy, ASR: Avg Season Rating.">
                    <InfoIcon className="w-5 h-5 text-gray-400" />
                </Tooltip>
            </div>
          
          <div className="flex-grow overflow-y-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-gray-400 uppercase">
                <tr>
                  <th className="py-2">Year</th>
                  <th className="py-2">Team</th>
                  <th className="py-2 text-center">MP</th>
                  <th className="py-2 text-center">GLS</th>
                  <th className="py-2 text-center">AST</th>
                  <th className="py-2 text-center">SH</th>
                  <th className="py-2 text-center">PAS</th>
                  <th className="py-2 text-center">PA%</th>
                  <th className="py-2 text-center">ASR</th>
                </tr>
              </thead>
              <tbody>
                {player.careerHistory?.map((row, index) => (
                  <tr key={index} className="border-t border-white/10">
                    <td className="py-3">{row.year}</td>
                    <td className="py-3 flex items-center gap-1">
                      {row.teams.map((team, i) => <img key={i} src={team.iconUrl} alt={team.name} title={team.name} className="w-6 h-6 rounded-full" />)}
                    </td>
                    <td className="py-3 text-center">{row.mp}</td>
                    <td className="py-3 text-center">{row.gls}</td>
                    <td className="py-3 text-center">{row.ast}</td>
                    <td className="py-3 text-center">{row.sh}</td>
                    <td className="py-3 text-center">{row.pas}</td>
                    <td className="py-3 text-center">{row.pa}%</td>
                    <td className="py-3 text-center">
                      <span className="bg-[#D1FF00] text-black font-bold px-3 py-1 rounded-md">{row.asr.toFixed(2)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Panel: Attribute Overview */}
        <div className="lg:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center">
          <div className="flex items-center gap-2 self-start">
            <h2 className="text-xl font-bold tracking-wider text-gray-300 uppercase">Attribute Overview</h2>
            <Tooltip text="A radar chart showing player attributes. ATT: Attack, TEC: Technique, TAC: Tactics, DEF: Defense, CRE: Creativity.">
              <InfoIcon className="w-5 h-5 text-gray-400" />
            </Tooltip>
          </div>
          <div className="flex-grow flex items-center justify-center">
             {player.attributes && <RadarChart attributes={player.attributes} comparedAttributes={comparedPlayer?.attributes} size={300} />}
          </div>
          <div className="w-full relative">
            <label className="text-sm text-gray-400">Search to Compare Players</label>
            <input 
                type="text"
                placeholder="e.g. MR. Rex"
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full bg-black/20 border border-white/20 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            {searchResults.length > 0 && (
                <ul className="absolute bottom-full mb-1 w-full bg-gray-800 border border-white/20 rounded-md max-h-40 overflow-y-auto z-10">
                    {searchResults.map(p => (
                        <li key={p.id} onClick={() => selectPlayerForCompare(p)} className="p-2 hover:bg-cyan-400/20 cursor-pointer text-sm">
                            {p.name}
                        </li>
                    ))}
                </ul>
            )}
            {comparedPlayer && (
                <div className="mt-2 flex items-center justify-between bg-black/30 p-2 rounded-md animate-fade-in">
                    <span className="text-sm">Comparing with: <span className="font-bold text-cyan-400">{comparedPlayer.name}</span></span>
                    <button onClick={clearComparedPlayer} className="text-gray-400 hover:text-white">
                        <CloseIcon className="w-4 h-4" />
                    </button>
                </div>
            )}
          </div>
           <div className="flex flex-col items-start gap-2 text-xs text-gray-400 mt-4 w-full">
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-yellow-400"></div><span>{player.name}</span></div>
                {comparedPlayer && <div className="flex items-center gap-2 animate-fade-in"><div className="w-3 h-3 rounded-sm bg-cyan-400"></div><span>{comparedPlayer.name}</span></div>}
           </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetailPage;