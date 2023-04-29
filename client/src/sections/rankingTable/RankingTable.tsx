import React from "react";
import "../../styles/base.scss";
import "../../styles/sections/rankingTable/RankingTable.scss";
import { Link } from "react-router-dom";
import { IRank } from "../../types/rank";

const RankingTable = ({ teams }: any) => {
  // https://ddragon.leagueoflegends.com/cdn/{version}/img/profileicon/{profileIconId}.png
  return (
    <div className="ranking-table">
      <div className="group">
        {teams?.map((team: IRank, index: number) => {
          return team?.user[0]?._id ? (
            <Link
              to={`/profile/${team?.user[0]?._id}`}
              className="ranking"
              key={index}
            >
              <div className="ordinal">{index + 1}</div>
              <div className="team">
                <div className="team-logo">
                  <img
                    src={`https://ddragon.leagueoflegends.com/cdn/13.8.1/img/profileicon/${team.summoner[0].profileIconId}.png`}
                    className="logo"
                    alt=""
                  />
                </div>
                <div className="team-info">
                  <div className="name">{team.summonerName}</div>
                  {/* <div className="record">{team.record}</div> */}
                </div>
                <div className="solorank">
                  Solo/Duo Rank: {team.tier} {team.rank}
                </div>
                {/* <div className="flexrank">Flex Rank: {team.flexrank}</div> */}
              </div>
            </Link>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default RankingTable;
