
export interface PlayerStats {
  pac: number;
  sho: number;
  pas: number;
  dri: number;
  def: number;
  phy: number;
}

export type CardType = 'gold' | 'purple' | 'blue';

export interface PlayerCardData {
  id: number;
  name: string;
  rating: number;
  position: string;
  photoUrl: string;
  clubLogoUrl: string;
  countryCode: string; // e.g., 'AR' for Argentina
  stats: PlayerStats;
  cardType: CardType;
}

export interface TournamentYear {
  year: number;
  winner: {
    name: string;
    photoUrl: string;
    team: string;
    teamLogoUrl: string;
  };
  finalist: {
    name: string;
    team: string;
    teamLogoUrl: string;
  };
  finalScore: string;
  finalScoreScreenshotUrl: string;
  matchOfTheYearHighlight: string;
  topScorer: string;
  mvp: string;
  bestGoal: string;
}
