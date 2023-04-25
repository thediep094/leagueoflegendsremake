import "../../styles/sections/homepage/Featured.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Featured = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="featured">
      <div className="featured__container">
        <div data-aos="fade-down" className="featured__container--text">
          <span>WELCOME TO THE RIFT</span>
          <h1>LEARN THE BASICS</h1>
          <p>
            There’s a lot to learn about League, so we’ll start with the
            essentials. Explore the guide below to get the rundown on the most
            popular game mode.
          </p>
          <div className="featured__btn">
            <div className="btn">LET'S GO</div>
            <div className="btn-ef"></div>
          </div>
        </div>
        <img src={process.env.PUBLIC_URL + "/BG/bg1.png"} alt="" />
      </div>

      <div className="videoTheGame">
        <div className="videoTheGame__container">
          <video
            className="video"
            src={process.env.PUBLIC_URL + "/VideoBG/howtoplay.mp4"}
            autoPlay
            muted
            loop
          ></video>

          <div className="overlay"></div>
          <div className="tag">
            <span>ABOUT THE GAME</span>
          </div>
          <div className="videoTheGame__container--text">
            <h1>WHAT IS LEAGUE OF LEGENDS?</h1>
            <p>
              League of Legends is a team-based strategy game where two teams of
              five powerful champions face off to destroy the other’s base.
              Choose from over 140 champions to make epic plays, secure kills,
              and take down towers as you battle your way to victory.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Featured;
