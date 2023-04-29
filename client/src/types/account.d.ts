export interface IAccount {
  id?: number;
  _id?: number;
  mainAva: string;
  fullname: string;
  ingame: string;
  username: string;
  mail: string;
  date: string;
}

export interface IIngame {
  _id: string;
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: string;
  revisionDate: number;
  summonerLevel: number;
  createdAt: string;
  updatedAt: string;
}
