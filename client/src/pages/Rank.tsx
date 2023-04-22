import React from "react";
import RankingTable from "../sections/rankingTable/RankingTable";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
const Rank: React.FC = () => {
  const teams = [
    {
      name: "Gam Esports",
      logo: "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1643263093448_GAMyellow.png",
      record: "14T-0B",
      solorank: "Gold",
      flexrank: "Gold",
    },
    {
      name: "TEAM WHALES",
      logo: "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1674646643550_TEAMWHALE_LOGO_VERSIONS_W_fullwhite-06-svg.png",
      record: "10T-5B",
      solorank: "Gold",
      flexrank: "Gold",
    },
    {
      name: "SBTC ESPORTS",
      logo: "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1656693279140_LOGOFINALKHNGCH-13.png",
      record: "9T-6B",
      solorank: "Gold",
      flexrank: "Gold",
    },
    {
      name: "CERBERUS ESPORTS ",
      logo: "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1636526090059_900px-CERBERUS_Esports.png",
      record: "9T-6B",
      solorank: "Gold",
      flexrank: "Gold",
    },
    {
      name: "Saigon Buffalo Esports",
      logo: "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1636524131703_900px-Saigon_Buffalo.png",
      record: "6T-8B",
      solorank: "Gold",
      flexrank: "Gold",
    },
    {
      name: "Team Flash",
      logo: "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1636631066814_TF.png",
      record: "5T-9B",
      solorank: "Gold",
      flexrank: "Gold",
    },
    {
      name: "Team Secret",
      logo: "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1656693717651_TS.png",
      record: "4T-10B",
      solorank: "Gold",
      flexrank: "Gold",
    },
    {
      name: "MGN Box Esports",
      logo: "https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1675846541430_Nowyprojekt.png",
      record: "1T-13B",
      solorank: "Gold",
      flexrank: "Gold",
    },
  ];
  return (
    <div className="rank">
      <Header />
      <div className="container">
        <h1 className="rank__title">League of Legends Esports Ranking</h1>
        <RankingTable teams={teams} />
      </div>
      <Footer />
    </div>
  );
};

export default Rank;
