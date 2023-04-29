import React from "react";
import "../../styles/base.scss";
import "../../styles/sections/teamPage/TeamBanner.scss";
import { IIngame } from "../../types/account";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const TeamBanner = ({ teamData }: any) => {
  const user = useSelector((state: RootState) => state.account.user);
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
          src={
            teamData
              ? `https://ddragon.leagueoflegends.com/cdn/13.8.1/img/profileicon/${teamData?.profileIconId}.png`
              : user?.mainAva
          }
          alt={
            teamData
              ? `https://ddragon.leagueoflegends.com/cdn/13.8.1/img/profileicon/${teamData?.profileIconId}.png`
              : user?.mainAva
          }
        />
      </div>
      <div className="team-info">
        <div className="team-name">
          {teamData?.name ? teamData?.name : user?.fullname}
        </div>
        <div className="team-level">
          Level: {teamData?.summonerLevel ? teamData?.summonerLevel : 1}
        </div>
      </div>
    </div>
  );
};

export default TeamBanner;
