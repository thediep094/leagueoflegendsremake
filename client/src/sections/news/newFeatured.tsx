import React, { useEffect } from "react";
import Aos from "aos";
import "../../styles/sections/news/newFeatured.scss";
const NewFeatured = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="newsfeatured">
      <div className="newsfeatured__background">
        <div className="newsfaatured__background__overlay"></div>
        <img
          src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt686035e751b05708/61d8fb621757dc6aed2adafc/SS22_TheCall_thumbnail_v2.jpg"
          alt=""
        />
      </div>

      <div className="newsfeatured__container">
        <div className="newsfeatured__container__content">
          <div
            className="newsfeatured__container__content__title"
            data-aos="fade-right"
          >
            <p>MEDIA</p>
            <h1>THE CALL - SEASON 2022 CINEMATIC</h1>
            <span>A new path beckons - will you answers?</span>
          </div>
          <div
            className="newsfeatured__container__content__img"
            data-aos="fade-left"
          >
            <img
              src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt686035e751b05708/61d8fb621757dc6aed2adafc/SS22_TheCall_thumbnail_v2.jpg"
              alt=""
            />
            <div className="newsfeatured__container__content__img__border"></div>
          </div>
        </div>
      </div>
      <div className="newfeatured__bottom">
        <div className="tag">FEATURED</div>
        <div className="newfeatured__bottom__item" data-aos="fade-up">
          <div className="newfeatured__bottom__item__img">
            <img
              src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt491b8e1f3ab4e341/620db1d89c50e50a64ea8517/22122_TFTMID622HKVideo_Banner.jpg?quality=90&crop=1%3A1&width=360"
              alt=""
            />
          </div>
          <div className="newfeatured__bottom__item__content">
            <p>GAME UPDATES</p>
            <span>PROJECT Abyssia | Little Legend Showcase - TFT</span>
          </div>
        </div>
        <div className="newfeatured__bottom__item" data-aos="fade-up">
          <div className="newfeatured__bottom__item__img">
            <img
              src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta994c96cd213519b/61e9b3c2c6172549a9716676/Zeri_Theme_Banner.jpg?quality=90&crop=1%3A1&width=360"
              alt=""
            />
          </div>
          <div className="newfeatured__bottom__item__content">
            <p>MEDIA</p>
            <span>Zeri CHampion Theme</span>
          </div>
        </div>
        <div className="newfeatured__bottom__item" data-aos="fade-up">
          <div className="newfeatured__bottom__item__img">
            <img
              src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3b25fc89c2a9bdf8/620c3af600f003242ae110f9/2172022_RenataChampInsightsArticle_00_Header_WEB.jpg?quality=90&crop=1%3A1&width=360"
              alt=""
            />
          </div>
          <div className="newfeatured__bottom__item__content">
            <p>DEV</p>
            <span>Champion Insights: Renata Glasc</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFeatured;
