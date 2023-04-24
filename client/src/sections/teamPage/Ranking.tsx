import React from "react";
import "../../styles/base.scss";
import "../../styles/sections/teamPage/Ranking.scss";

interface Rank {
  solorank: string;
  solologo: string;
  flexrank: string;
  flexlogo: string;
}

interface RankingProps {
  rank: Rank;
}

const Ranking: React.FC<RankingProps> = ({ rank }) => {
  return (
    <div className="ranking-table">
      <div className="team">
        <div className="solo">
          <div className="solologo">
            <img src={rank.solologo} />
          </div>
          <div className="solorank">Solo/Duo Rank: {rank.solorank}</div>
        </div>
        <div className="flex">
          <div className="flexlogo">
            <img src={rank.flexlogo} />
          </div>
          <div className="flexrank">Flex Rank: {rank.flexrank}</div>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
