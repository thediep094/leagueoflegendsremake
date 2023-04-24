import React from "react";
import "../../styles/base.scss";
import "../../styles/sections/teamPage/TeamBanner.scss";

interface TeamData {
  name: string;
  logoUrl: string;
  bannerUrl: string;
  region: string;
  level: string;
}

interface TeamBannerProps {
  teamData: TeamData;
}

const TeamBanner: React.FC<TeamBannerProps> = ({ teamData }) => {
  return (
    <div className="team-banner-container">
      <div
        className="team-banner"
        style={{ backgroundImage: `url(${teamData.bannerUrl})` }}
      />

      <div className="team-logo">
        <img src={teamData.logoUrl} alt={teamData.name} />
      </div>
      <div className="team-info">
        <div className="team-name">{teamData.name}</div>
        <div className="team-region">{teamData.region}</div>
        <div className="team-level">{teamData.level}</div>
      </div>
    </div>
  );
};

export default TeamBanner;
