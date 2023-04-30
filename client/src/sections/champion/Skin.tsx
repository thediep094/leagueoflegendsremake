import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../styles/sections/champion/skin.scss";
// import { ChevronLeft, ChevronRight } from "@material-ui/icons";
const Skin = ({ championData }: any) => {
  const [skin, setSkin] = useState(0);

  return (
    <div className="skin">
      <div className="tag">AVAILABLE SKINS</div>
      <div className="skin__title">AVAILABLE SKINS</div>
      <div className="skin__container">
        <TransitionGroup>
          <CSSTransition classNames="fade" key={skin} timeout={1000}>
            <div className="skin__container__image">
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championData?.name}_${championData?.skins[skin]?.num}.jpg`}
                alt="skin"
              />
            </div>
          </CSSTransition>
        </TransitionGroup>
        <div className="skin__btn">
          <button
            className="left"
            onClick={() => {
              if (skin === 0) {
                setSkin(championData.skins.length - 1);
              } else {
                setSkin(skin - 1);
              }
            }}
          >
            <svg
              className="icon icon-arrow-splide"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.487148 0.532316C0.833295 0.186169 1.39451 0.186168 1.74066 0.532314L5.45494 4.24659C5.62117 4.41282 5.71455 4.63827 5.71455 4.87335C5.71455 5.10843 5.62117 5.33388 5.45494 5.5001L1.74066 9.21439C1.39451 9.56053 0.833295 9.56053 0.487149 9.21439C0.141002 8.86824 0.141002 8.30703 0.487149 7.96088L3.57468 4.87335L0.48715 1.78582C0.141003 1.43968 0.141002 0.878462 0.487148 0.532316Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button
            className="right"
            onClick={() => {
              if (skin === championData.skins.length - 1) {
                setSkin(0);
              } else {
                setSkin(skin + 1);
              }
            }}
          >
            <svg
              className="icon icon-arrow-splide"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.487148 0.532316C0.833295 0.186169 1.39451 0.186168 1.74066 0.532314L5.45494 4.24659C5.62117 4.41282 5.71455 4.63827 5.71455 4.87335C5.71455 5.10843 5.62117 5.33388 5.45494 5.5001L1.74066 9.21439C1.39451 9.56053 0.833295 9.56053 0.487149 9.21439C0.141002 8.86824 0.141002 8.30703 0.487149 7.96088L3.57468 4.87335L0.48715 1.78582C0.141003 1.43968 0.141002 0.878462 0.487148 0.532316Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skin;
