import React, { useEffect, useState } from "react";
import { IChampionInformation, IChampions } from "../types/champion";
import ChampionItem from "../sections/champions/ChampionItem";

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
      <div className="container">
        <div className="row">
          {champions
            ? champions.map((item: IChampionInformation) => {
                return <ChampionItem data={item} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default Champions;
