import { useState, useEffect } from "react";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
// import "./championView.scss";
import { useParams } from "react-router-dom";
import ChampionViewOverview from "../sections/champion/ChampionViewOverview";
import Abilities from "../sections/champion/Abilities";
import Skin from "../sections/champion/Skin";
const ChampionView = () => {
  const { name } = useParams();
  const [nameChampion, setNameChampion] = useState(name);
  const [championData, setChampionData] = useState<any>();
  const championUrl = `http://ddragon.leagueoflegends.com/cdn/13.7.1/data/en_US/champion/${nameChampion}.json`;
  useEffect(() => {
    if (name?.includes("'")) {
      const parts = name.replace("'", "").toLowerCase();
      const newName = parts.charAt(0).toUpperCase() + parts.slice(1);
      setNameChampion(newName);
    } else {
      setNameChampion(name?.replace(" ", ""));
    }
  }, [name]);
  useEffect(() => {
    fetch(championUrl)
      .then((response) => response.json())
      .then((data) => {
        if (nameChampion) {
          setChampionData(data.data[nameChampion]);
        }
      });
  }, [nameChampion, championUrl]);
  return (
    <div className="championView">
      <Header />
      <ChampionViewOverview championData={championData} name={nameChampion} />
      <Abilities championData={championData} />
      <Skin championData={championData} />
      <Footer />
    </div>
  );
};

export default ChampionView;
