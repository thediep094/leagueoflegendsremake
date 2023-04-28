export interface IRank {
  _id: string;
  summonerId: string;
  summonerName: string;
  leaguePoints: number;
  wins: string;
  losses: string;
  summoner: [
    {
      profileIconId: string;
      summonerLevel: number;
    }
  ];
  tier: string;
  rank: string;
}
