import { championAll } from "../../data/championAll";
import "../../styles/sections/champion/abilities.scss";
// import { championAll } from "../../data/championAll";
import { useEffect, useState } from "react";
const Abilities = ({ championData }: any) => {
  const [abilities, setAbilities] = useState(0);
  const [spell, setSpell] = useState("P");
  const [keyNumber, setKeyNumber] = useState("0000");
  useEffect(() => {
    if (abilities === 0) setSpell("P");
    if (abilities === 1) setSpell("Q");
    if (abilities === 2) setSpell("W");
    if (abilities === 3) setSpell("E");
    if (abilities === 4) setSpell("R");
  }, [abilities]);

  return (
    <div
      className="abilities"
      style={{ backgroundImage: "url(/BG/bgaaa.jpg)" }}
    >
      <div className="tag">
        <span>ABILITIES</span>
      </div>
      <div className="abilities__title">ABILITIES</div>
      <div className="abilities-container">
        <div className="abilities-container-left">
          <div className="abilities-container-left-content">
            <div className="icons__abilities">
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/12.4.1/img/passive/${championData?.passive?.image?.full}`}
                alt=""
                onClick={() => {
                  setAbilities(0);
                }}
              />
              {championData?.spells?.map((spell: any, index: number) => {
                return (
                  <img
                    src={`https://ddragon.leagueoflegends.com/cdn/12.4.1/img/spell/${spell.image.full}`}
                    alt=""
                    onClick={() => {
                      setAbilities(index + 1);
                    }}
                  />
                );
              })}
            </div>
            <div className="abilities__info">
              {abilities === 0 ? (
                <div>
                  <p>{championData?.passive?.image.group}</p>
                  <h1>{championData?.passive?.name}</h1>
                  <span>{championData?.passive?.description}</span>
                </div>
              ) : (
                <div>
                  <p>{championData?.spells[abilities - 1]?.id}</p>
                  <h1>{championData?.spells[abilities - 1]?.name}</h1>
                  <span>
                    {championData?.spells[abilities - 1]?.description}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="abilities-container-right">
          <div className="abilities-container-right-content">
            <div className="video__fake"></div>
            <video
              autoPlay
              muted
              loop
              src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${
                championData?.key < 10
                  ? "000" + championData?.key
                  : championData?.key < 100
                  ? "00" + championData?.key
                  : championData?.key < 1000
                  ? "0" + championData?.key
                  : championData?.key
              }/ability_${
                championData?.key < 10
                  ? "000" + championData?.key
                  : championData?.key < 100
                  ? "00" + championData?.key
                  : championData?.key < 1000
                  ? "0" + championData?.key
                  : championData?.key
              }_${spell.toUpperCase()}1.webm`}
            ></video>

            <div className="border__video"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abilities;
