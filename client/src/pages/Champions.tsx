import React, { useEffect, useState } from "react";
import { IChampionInformation, IChampions } from "../types/champion";
import ChampionItem from "../sections/champions/ChampionItem";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import "../styles/pages/Champions.scss";
function Champions() {
  const [champions, setChampions] = useState<IChampionInformation[]>([]);
  const championUrl = `https://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion.json`;
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(championUrl);
      const productExtraJson: IChampions = await res.json();
      const data = [];
      for (const property in productExtraJson.data) {
        data.push(productExtraJson.data[property]);
      }
      setChampions(data);
    };
    fetchData();
  }, []);

  return (
    <div className="champions">
      <Header />
      <div className="container ">
        <div className="row champions__wrapper">
          {champions
            ? champions.map((item: IChampionInformation) => {
                return <ChampionItem data={item} />;
              })
            : null}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Champions;
