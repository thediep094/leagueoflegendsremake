import "../../styles/sections/homepage/Gameplay2.scss";
import { gameplay2 } from "../../data/gameplay2";
import { useEffect, useState } from "react";
import Aos from "aos";
const Gameplay2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="gameplay2">
      <div className="gameplay2__container">
        <div className="gameplay2__container__title">
          <h1>POWER UP YOUR CHAMP</h1>
          <p>
            Champions get stronger by earning experience to level up and gold to
            buy more powerful items as the game progresses. Staying on top of
            these two factors is crucial to overpowering the enemy team and
            destroying their base.
          </p>
        </div>
        <div className="gameplay2__container--video">
          <video
            src={process.env.PUBLIC_URL + "/VideoBG/poweringup.mp4"}
            autoPlay
            muted
            loop
          ></video>
          <div className="gameplay2__container--video--text">
            {gameplay2.map((item, index) => {
              return (
                <div
                  className={
                    index === currentIndex
                      ? "gameplay2__container--video--info active"
                      : "gameplay2__container--video--info"
                  }
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                >
                  <div className="btn__gameplay2">
                    <svg
                      width="800px"
                      height="800px"
                      viewBox="0 -0.5 9 9"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>plus_mini [#1523]</title>
                      <desc>Created with Sketch.</desc>
                      <defs></defs>
                      <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          id="Dribbble-Light-Preview"
                          transform="translate(-345.000000, -206.000000)"
                          fill="currentColor"
                        >
                          <g
                            id="icons"
                            transform="translate(56.000000, 160.000000)"
                          >
                            <polygon
                              id="plus_mini-[#1523]"
                              points="298 49 298 51 294.625 51 294.625 54 292.375 54 292.375 51 289 51 289 49 292.375 49 292.375 46 294.625 46 294.625 49"
                            ></polygon>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <h1>{item.title}</h1>
                  </div>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="tag">
          <span>POWERING UP</span>
        </div>
      </div>
    </div>
  );
};

export default Gameplay2;
