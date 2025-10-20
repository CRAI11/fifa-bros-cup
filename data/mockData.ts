import { PlayerCardData, TournamentYear } from '../types';

// Real club logos and screenshot
const bayernLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/120px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png';
const manCityLogo = 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/120px-Manchester_City_FC_badge.svg.png';
const realMadridLogo = 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/120px-Real_Madrid_CF.svg.png';
const juventusLogo = 'https://ssl.gstatic.com/onebox/media/sports/logos/ovK8EHD-qJ9LS9naYsyb4A_96x96.png';
const finalScreenshot = 'https://i.ytimg.com/vi/g-a9k2G7_yM/maxresdefault.jpg';

export const playerCards: PlayerCardData[] = [
  {
    id: 1,
    name: 'CR11',
    rating: 94,
    photoUrl: 'https://picsum.photos/seed/cr11/200/200',
    clubLogoUrl: bayernLogo,
    countryCode: 'AR',
    stats: { pac: 182, sho: 186, pas: 162, dri: 192, def: 105, phy: 138 },
    cardType: 'gold',
    attributes: { att: 42, cre: 44, def: 65, tac: 60, tec: 51 },
    careerHistory: [
      { year: 2025, teams: [{ name: 'Bayern Munich', iconUrl: bayernLogo }], mp: 4, gls: 10, ast: 3, sh: 25, pas: 380, pa: 89, asr: 8.20 },
    ]
  },
  {
    id: 2,
    name: 'MR. Rex',
    rating: 90,
    photoUrl: 'https://picsum.photos/seed/mrex/200/200',
    clubLogoUrl: manCityLogo,
    countryCode: 'GB-ENG',
    stats: { pac: 158, sho: 164, pas: 148, dri: 186, def: 125, phy: 124 },
    cardType: 'blue',
    attributes: { att: 60, cre: 55, def: 40, tac: 45, tec: 75 },
    careerHistory: [
        { year: 2025, teams: [{ name: 'Manchester City', iconUrl: manCityLogo }, { name: 'Real Madrid', iconUrl: realMadridLogo }], mp: 4, gls: 6, ast: 4, sh: 20, pas: 400, pa: 90, asr: 8.50 },
    ],
  },
  {
    id: 3,
    name: 'MR. Bikrom',
    rating: 88,
    photoUrl: 'https://picsum.photos/seed/vikram/200/200',
    clubLogoUrl: realMadridLogo,
    countryCode: 'ES',
    stats: { pac: 142, sho: 124, pas: 135, dri: 182, def: 128, phy: 132 },
    cardType: 'purple',
    attributes: { att: 50, cre: 70, def: 30, tac: 35, tec: 80 },
    careerHistory: [
        { year: 2025, teams: [{ name: 'Real Madrid', iconUrl: realMadridLogo }], mp: 3, gls: 3, ast: 2, sh: 15, pas: 320, pa: 87, asr: 7.20 },
    ],
  },
  {
    id: 4,
    name: 'V. Choubey',
    rating: 91,
    photoUrl: 'https://picsum.photos/seed/vchoubey/200/200',
    clubLogoUrl: juventusLogo,
    countryCode: 'IT',
    stats: { pac: 170, sho: 180, pas: 150, dri: 175, def: 110, phy: 160 },
    cardType: 'red',
    attributes: { att: 80, cre: 40, def: 25, tac: 30, tec: 65 },
    careerHistory: [
        { year: 2025, teams: [{ name: 'Real Madrid', iconUrl: realMadridLogo }], mp: 2, gls: 1, ast: 1, sh: 8, pas: 200, pa: 85, asr: 6.50 },
    ],
  },
];

export const hallOfFameData: TournamentYear[] = [
  {
    year: 2025,
    winner: {
      name: 'MR. Rex',
      photoUrl: 'https://picsum.photos/seed/mrex/200/200',
      team: 'Manchester City',
      teamLogoUrl: manCityLogo,
      cardColor: 'blue',
    },
    finalist: {
      name: 'CR11',
      team: 'Bayern Munich',
      teamLogoUrl: bayernLogo,
    },
    finalScore: '2 - 1',
    finalScoreScreenshotUrl: finalScreenshot,
    matchOfTheYearHighlight: 'A nail-biting final that went into extra time, with Mr. Rex clinching the victory with a last-minute goal.',
    topScorer: 'CR11 (10 goals)',
    mvp: 'MR. Rex',
    bestGoal: 'CR11 - A stunning long-range volley in the semi-final.',
  },
];