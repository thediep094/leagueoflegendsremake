import React from "react";
import "../../styles/base.scss";
import "../../styles/sections/teamPage/TeamBanner.scss";

interface Team {
  name: string;
  logo: string;
  region: string;
  bannerUrl: string;
}

interface TeamProps {
  team: Team[];
}
const TeamBanner: React.FC<TeamProps> = ({ team }) => {
  return (
    <div className="team">
      {team.map((team, index) => (
        <div className="group">
          <img src={team.bannerUrl} className="bannerUrl" alt="" />
          <div className="team-logo">
            <img src={team.logo} className="logo" alt="" />
          </div>
          <div className="team-info">
            <div className="name">{team.name}</div>
            <div className="region">{team.region}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamBanner;
