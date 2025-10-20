
export interface PlayerStats {
  pac: number;
  sho: number;
  pas: number;
  dri: number;
  def: number;
  phy: number;
}

export type CardType = 'gold' | 'purple' | 'blue' | 'red' | 'grey';

export interface CareerTeam {
    name: string;
    iconUrl: string;
}

export interface PlayerCareerStats {
    year: number;
    teams: CareerTeam[];
    mp: number; // matches played
    gls: number; // goals
    ast: number; // assists
    sh: number; // shots
    pas: number; // passes
    pa: number; // pass accuracy %
    asr: number; // avg season rating
}

export interface PlayerAttributes {
    att: number;
    cre: number;
    def: number;
    tac: number;
    tec: number;
}

export interface PlayerCardData {
  id: number;
  name: string;
  rating: number | string;
  photoUrl: string;
  clubLogoUrl: string;
  countryCode: string; // e.g., 'AR' for Argentina
  stats?: PlayerStats;
  cardType: CardType;
  careerHistory?: PlayerCareerStats[];
  attributes?: PlayerAttributes;
}

export interface TournamentYear {
  year: number;
  winner: {
    name: string;
    photoUrl: string;
    team: string;
    teamLogoUrl: string;
    cardColor: CardType;
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