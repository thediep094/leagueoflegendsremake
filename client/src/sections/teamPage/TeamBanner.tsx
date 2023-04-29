import React from "react";
import "../../styles/base.scss";
import "../../styles/sections/teamPage/TeamBanner.scss";
import { IIngame } from "../../types/account";

const TeamBanner = ({ teamData }: any) => {
  return (
    <div className="team-banner-container">
      <div
        className="team-banner"
        style={{
          backgroundImage: `url("https://am-a.akamaihd.net/image?resize=:&f=http%3A%2F%2Fassets.lolesports.com%2Fwatch%2Fteam-header-fallback.jpg")`,
        }}
      />

      <div className="team-logo">
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/13.8.1/img/profileicon/${teamData.profileIconId}.png`}
          alt={teamData.name}
        />
      </div>
      <div className="team-info">
        <div className="team-name">{teamData.name}</div>
        <div className="team-level">Level: {teamData.summonerLevel}</div>
      </div>
    </div>
  );
};

export default TeamBanner;
