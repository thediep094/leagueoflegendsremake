import React from "react";
import "../../styles/base.scss";
import "../../styles/sections/teamPage/RankingTable.scss";

interface Rank {
  solologo: string;
  solorank: string;
  flexlogo: string;
  flexrank: string;
}

interface RankingTableProps {
  rank: Rank[];
}

const RankingTable: React.FC<RankingTableProps> = ({ rank }) => {
  return (
    <div className="ranking-table">
      <div className="group">
        {rank.map((team, index) => (
          <div className="team">
            <div className="solorank">
              {team.solologo} {team.solorank}
            </div>
            <div className="flexrank">
              {team.flexlogo} {team.flexrank}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RankingTable;
