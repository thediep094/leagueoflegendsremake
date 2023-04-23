import React from "react";
import "../../styles/base.scss";
import "../../styles/sections/rankingTable/RankingTable.scss";

interface Team {
  name: string;
  logo: string;
  record: string;
  solorank: string;
  flexrank: string;
}

interface RankingTableProps {
  teams: Team[];
}

const RankingTable: React.FC<RankingTableProps> = ({ teams }) => {
  return (
    <div className="ranking-table">
      <div className="title">Bảng A</div>
      <div className="group">
        {teams.map((team, index) => (
          <a href="" className="ranking" key={index}>
            <div className="ordinal">{index + 1}</div>
            <div className="team">
              <div className="team-logo">
                <img src={team.logo} className="logo" alt="" />
              </div>
              <div className="team-info">
                <div className="name">{team.name}</div>
                <div className="record">{team.record}</div>
              </div>
              <div className="solorank">Solo/Duo Rank: {team.solorank}</div>
              <div className="flexrank">Flex Rank: {team.flexrank}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RankingTable;
