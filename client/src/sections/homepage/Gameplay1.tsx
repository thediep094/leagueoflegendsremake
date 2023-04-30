import "../../styles/sections/homepage/Gameplay1.scss";
import { gameplay } from "../../data/gameplay";
import { useEffect, useState } from "react";
import Aos from "aos";
import GameplayInfo from "./GameplayInfo";

const Gameplay1 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="gameplay" style={{ backgroundImage: "url(/BG/bg2.png)" }}>
      {gameplay.map((item, index) => {
        const info = item.info;
        return (
          <div
            className="gameplay__container"
            key={index}
            data-aos="zoom-in-right"
          >
            <div className="goal">
              <div className="about">{item.about}</div>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <GameplayInfo info={info} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gameplay1;
