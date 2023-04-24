import React from "react";
import "../../styles/base.scss";
import "../../styles/sections/teamPage/TeamInfo.scss";

interface soloRank {
  rank: string;
  logo: string;
  lp: string;
  winRate: string;
}

interface flexRank {
  rank: string;
  logo: string;
  lp: string;
  winRate: string;
}

interface TeamInfoProps {
  soloRank: soloRank;
  flexRank: flexRank;
}

const TeamInfo: React.FC<TeamInfoProps> = ({ soloRank, flexRank }) => {
  return (
    <div className="team-info-main">
      <div className="team-info-solo">
        <div className="logo">
          <img src={soloRank.logo} alt="" />
        </div>
        <div className="rank">Solo/Duo Rank: {soloRank.rank}</div>
        <div className="lp"> LP : {soloRank.lp} </div>
        <div className="winRate">Win rate: {soloRank.winRate}</div>
      </div>

      <div className="team-info-flex">
        <div className="logo">
          <img src={flexRank.logo} alt="" />
        </div>
        <div className="rank">Solo/Duo Rank: {flexRank.rank}</div>
        <div className="lp"> LP : {flexRank.lp} </div>
        <div className="winRate">Win rate: {flexRank.winRate}</div>
      </div>
    </div>
  );
};

export default TeamInfo;
