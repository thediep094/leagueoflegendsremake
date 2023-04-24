import React from "react";
import TeamBanner from "../sections/teamPage/TeamBanner";
import Ranking from "../sections/teamPage/Ranking";
import Header from "../sections/Header";
import TeamInfo from "../sections/teamPage/TeamInfo";
import Mastery from "../sections/teamPage/Mastery";
const TeamPage = () => {
  const teamData = {
    name: "GAM Esports",
    logoUrl:
      "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1643263093448_GAMyellow.png",
    bannerUrl:
      "https://am-a.akamaihd.net/image?resize=:&f=http%3A%2F%2Fassets.lolesports.com%2Fwatch%2Fteam-header-fallback.jpg",
    region: "VCS - Vietnam",
    level: "Level 280",
  };

  const rank = {
    solorank: "Platinum III",
    solologo:
      "https://static.wikia.nocookie.net/leagueoflegends/images/5/5f/Season_2019_-_Challenger_1.png/revision/latest/scale-to-width-down/250?cb=20181229234913",
    flexrank: "Gold II",
    flexlogo:
      "https://static.wikia.nocookie.net/leagueoflegends/images/5/5f/Season_2019_-_Challenger_1.png/revision/latest/scale-to-width-down/250?cb=20181229234913",
  };

  const soloRank = {
    rank: "Platinum III",
    logo: "https://static.wikia.nocookie.net/leagueoflegends/images/5/5f/Season_2019_-_Challenger_1.png/revision/latest/scale-to-width-down/250?cb=20181229234913",
    lp: "100",
    winRate: "60%",
  };

  const flexRank = {
    rank: "Gold II",
    logo: "https://static.wikia.nocookie.net/leagueoflegends/images/5/5f/Season_2019_-_Challenger_1.png/revision/latest/scale-to-width-down/250?cb=20181229234913",
    lp: "100",
    winRate: "60%",
  };

  const mastery = {
    logochamp1:
      "https://p1.hiclipart.com/preview/529/39/766/181-lol-icons-league-of-legends-aatrox.jpg",
    masterychamp1:
      "https://i.pinimg.com/564x/82/6b/c9/826bc98f8f6290c598b5418ee38fb6e5.jpg",
    logochamp2:
      "https://p1.hiclipart.com/preview/529/39/766/181-lol-icons-league-of-legends-aatrox.jpg",
    masterychamp2:
      "https://i.pinimg.com/564x/82/6b/c9/826bc98f8f6290c598b5418ee38fb6e5.jpg",
    logochamp3:
      "https://p1.hiclipart.com/preview/529/39/766/181-lol-icons-league-of-legends-aatrox.jpg",
    masterychamp3:
      "https://i.pinimg.com/564x/82/6b/c9/826bc98f8f6290c598b5418ee38fb6e5.jpg",
  };

  return (
    <div className="teamPage">
      <Header />
      <TeamBanner teamData={teamData} />
      <Ranking rank={rank} />
      <TeamInfo soloRank={soloRank} flexRank={flexRank} />
      <Mastery mastery={mastery} />
    </div>
  );
};

export default TeamPage;
