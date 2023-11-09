import React, { useState } from "react";
import "../../styles/base.scss";
import "../../styles/sections/teamPage/TeamBanner.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ChangeIcon from "./ChangeIcon";
import Loading from "../../components/Loading";

const TeamBanner = ({ teamData }: any) => {
  const user = useSelector((state: RootState) => state.account.user);
  const [openChangeIconModal, setOpenChangeIconModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="team-banner-container">
      <div
        className="team-banner"
        style={{
          backgroundImage: `url("https://am-a.akamaihd.net/image?resize=:&f=http%3A%2F%2Fassets.lolesports.com%2Fwatch%2Fteam-header-fallback.jpg")`,
        }}
      />

      <div className="team-logo" onClick={() => setOpenChangeIconModal(true)}>
        <img
          src={
            !teamData
              ? `https://ddragon.leagueoflegends.com/cdn/13.8.1/img/profileicon/${teamData?.profileIconId}.png`
              : user?.mainAva
          }
          alt={
            !teamData
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
      {openChangeIconModal && (
        <ChangeIcon
          setIsLoading={setIsLoading}
          setOpenChangeIconModal={setOpenChangeIconModal}
        />
      )}
      {isLoading && <Loading />}
    </div>
  );
};

export default TeamBanner;
