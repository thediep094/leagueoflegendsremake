import "../../styles/sections/homepage/TheChampion.scss";
import { theChampion } from "../../data/theChampion";
import { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Aos from "aos";
const TheChampion = () => {
  const [champion, setChampion] = useState(
    Math.floor(Math.random() * theChampion.length)
  );
  const handleClick = () => {
    if (champion < theChampion.length - 1) {
      setChampion(champion + 1);
    } else {
      setChampion(0);
    }
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="thechampion">
      <TransitionGroup>
        <CSSTransition classNames="fade" key={champion} timeout={2000}>
          <div
            className="thechampion__container"
            style={{
              backgroundImage: theChampion[champion].imgBg,
            }}
          >
            <div className="overlay"></div>

            <div className="thechampion__container__champ">
              <div className="info">
                <h1>{theChampion[champion].name}</h1>
                <p>{theChampion[champion].nickname}</p>
                <div className="difficulty">
                  <span>DIFFICULTY:</span>
                  <span>{theChampion[champion].difficulty}</span>
                </div>
                <div className="role__lane">
                  <div className="role">
                    <span>ROLE</span>
                    <img
                      src={process.env.PUBLIC_URL + theChampion[champion].role}
                      alt=""
                    />
                  </div>
                  <div className="lane">
                    <span>SUGGESTED LANE</span>
                    <img
                      src={process.env.PUBLIC_URL + theChampion[champion].lane}
                      alt=""
                    />
                  </div>
                </div>
                <div className="moreInfo">
                  <p>{theChampion[champion].more}</p>
                </div>
                <div className="btn__champions" onClick={handleClick}>
                  <span>DISCOVER MORE CHAMPIONS</span>
                </div>
              </div>

              <div className="thechampion__container__img">
                <div className="thechampion__container__text">
                  <span>MEET SOME OF</span>
                  <h1>THE CHAMPS</h1>
                </div>
                <img
                  src={process.env.PUBLIC_URL + theChampion[champion].img}
                  alt=""
                />
              </div>

              <div className="tag">
                <span>STARTER CHAMPION</span>
              </div>
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default TheChampion;
