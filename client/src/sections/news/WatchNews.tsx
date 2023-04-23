import React, { useEffect } from "react";
import { watchNews } from "../../data/watchNews";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../styles/sections/news/watchNews.scss";
const WatchNews = () => {
  const [news, setNews] = useState(0);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="watchNews">
      <div className="watchNews__tag">Watch</div>
      <div className="watchNews__container">
        <div className="watchNews__container__left">
          <div className="watchNews__container__left__title" data-aos="fade-up">
            LEAGUE OF LEGENDS
          </div>
          <div className="watchNews__container__left__video" data-aos="fade-up">
            <iframe
              src={watchNews[news].vid}
              title={`${watchNews[news].id}`}
            ></iframe>
          </div>
          <div
            className="watchNews__container__left__description"
            data-aos="fade-right"
          >
            <h1>
              Renata Glasc Champion Spotlight | Gameplay - League of Legends
            </h1>
            <span>Everyone has their price.</span>
            <div className="span1">
              Renata Glasc Teaser:{" "}
              <a href="https://www.glascindustries.com/">
                https://www.glascindustries.com/
              </a>
            </div>
            <div className="span1">
              Champion Trailer:{" "}
              <a href="https://www.youtube.com/watch?v=X20X781I_-I">
                https://www.youtube.com/watch?v=X20X781I_-I/
              </a>
            </div>
            <div className="span1">
              Abilities Rundown:{" "}
              <a href="https://www.leagueoflegends.com/en-us/event/renata-glasc-abilities-rundown/">
                https://www.leagueoflegends.com/en-us/event/renata-glasc-abilities-rundown/
              </a>
            </div>
            <div className="span1">
              Chamion Theme:{" "}
              <a href="https://www.youtube.com/watch?v=3v7ZGvXmSUA">
                https://www.youtube.com/watch?v=3v7ZGvXmSUA
              </a>
            </div>
            <div className="span1">
              Champion Insights:{" "}
              <a href="https://www.leagueoflegends.com/en-us/news/dev/champion-insights-renata-glasc/">
                https://www.leagueoflegends.com/en-us/news/dev/champion-insights-renata-glasc/
              </a>
            </div>
            <div className="span1">
              League of Legens - Free Download & Play:{" "}
              <a href="https://signup.leagueoflegends.com/">
                https://signup.leagueoflegends.com/
              </a>
            </div>
          </div>
        </div>
        <div className="watchNews__container__right">
          {watchNews.map((item, index) => {
            return (
              <div
                className="watchNews__container__right__item"
                key={index}
                onClick={() => {
                  setNews(index);
                }}
              >
                <img src={item.img} alt="" />
                <h1>{item.title}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WatchNews;
