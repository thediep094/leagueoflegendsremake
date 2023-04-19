import { useState } from "react";
const Skin = () => {
  const [skin, setSkin] = useState(0);

  return (
    <div className="skin">
      {/* <div className="tag">AVAILABLE SKINS</div>
      <div className="skin__title">AVAILABLE SKINS</div>
      <div className="skin__container">
        <div className="skin__container__image">
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championData.id}_${championData.skins[skin].num}.jpg`}
            alt="skin"
          />
        </div>
      </div>
      <div className="skin__btn"></div> */}
    </div>
  );
};

export default Skin;
