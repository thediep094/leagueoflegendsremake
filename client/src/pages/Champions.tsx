import React, { useEffect, useState } from "react";
import { IChampionInformation, IChampions } from "../types/champion";
import ChampionItem from "../sections/champions/ChampionItem";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import "../styles/pages/Champions.scss";
import SectionTitle from "../components/section-title/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
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
      <div className="champions_heading">
        <div className="champions__heading-news">
          <div className="champions__heading-news-desktop">
            <div className="champions__heading-article">
              <img
                src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt398b5bd347a34e86/635c684dda572d57ecd26a5c/110322_KSante_Champion_Spotlight_Banner.jpg?quality=90&crop=12%3A7&width=300"
                alt=""
              />
              <div className="champions__heading-article-content">
                <div className="champions__heading-article-category">
                  Game Updates
                </div>
                <div className="champions__heading-article-title">
                  K’Sante Champion Spotlight
                </div>
              </div>
            </div>
            <div className="champions__heading-article-second">
              <img
                src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta49af2d89002f965/625896162777714c51b30986/041822_ChampionRoadmapApril2022_Banner.jpg?quality=90&crop=12%3A7&width=300"
                alt=""
              />
              <div className="champions__heading-article-content">
                <div className="champions__heading-article-category">Dev</div>
                <div className="champions__heading-article-title">
                  Champion Roadmap: April 2022
                </div>
              </div>
            </div>
            <div className="champions__heading-article-second">
              <img
                src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0060849db5c9144a/62bdda094673394f64680347/00_Header_SG2.jpg?quality=90&crop=12%3A7&width=300"
                alt=""
              />
              <div className="champions__heading-article-content">
                <div className="champions__heading-article-category">Lore</div>
                <div className="champions__heading-article-title">
                  Previously on Star Guardian
                </div>
              </div>
            </div>
          </div>
          <div className="champions__heading-news-mobile">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="champions__heading-article">
                  <img
                    src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt398b5bd347a34e86/635c684dda572d57ecd26a5c/110322_KSante_Champion_Spotlight_Banner.jpg?quality=90&crop=12%3A7&width=300"
                    alt=""
                  />
                  <div className="champions__heading-article-content">
                    <div className="champions__heading-article-category">
                      Game Updates
                    </div>
                    <div className="champions__heading-article-title">
                      K’Sante Champion Spotlight
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="champions__heading-article-second">
                  <img
                    src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta49af2d89002f965/625896162777714c51b30986/041822_ChampionRoadmapApril2022_Banner.jpg?quality=90&crop=12%3A7&width=300"
                    alt=""
                  />
                  <div className="champions__heading-article-content">
                    <div className="champions__heading-article-category">
                      Dev
                    </div>
                    <div className="champions__heading-article-title">
                      Champion Roadmap: April 2022
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="champions__heading-article-second">
                  <img
                    src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0060849db5c9144a/62bdda094673394f64680347/00_Header_SG2.jpg?quality=90&crop=12%3A7&width=300"
                    alt=""
                  />
                  <div className="champions__heading-article-content">
                    <div className="champions__heading-article-category">
                      Lore
                    </div>
                    <div className="champions__heading-article-title">
                      Previously on Star Guardian
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <SectionTitle
          data={{
            subtitle: "Choose Your",
            title: "CHAMPION",
            description:
              "With more than 140 champions, you’ll find the perfect match for your playstyle. Master one, or master them all.",
          }}
        />
      </div>
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
