import React, { useEffect, useState } from "react";
import { IChampionInformation, IChampions } from "../types/champion";

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
  console.log(champions);
  return (
    <div className="champions">
      {champions
        ? champions.map((item: IChampionInformation) => {
            return (
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${item.id}_0.jpg`}
                alt=""
              />
            );
          })
        : null}
    </div>
  );
}

export default Champions;
