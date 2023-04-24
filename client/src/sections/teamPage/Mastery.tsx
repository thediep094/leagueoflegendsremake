import React from "react";
import "../../styles/base.scss";
import "../../styles/sections/teamPage/Mastery.scss";

interface Mastery {
  logochamp1: string;
  masterychamp1: string;
  logochamp2: string;
  masterychamp2: string;
  logochamp3: string;
  masterychamp3: string;
}

interface MasteryProps {
  mastery: Mastery;
}

const Mastery: React.FC<MasteryProps> = ({ mastery }) => {
  return (
    <div className="mastery-table">
      <div className="title">Mastery</div>
      <div className="mastery-main">
        <div className="champ1">
          <div className="logo">
            <img src={mastery.logochamp1} alt="" />
          </div>
          <div className="mastery">
            <img src={mastery.masterychamp1} alt="" />
          </div>
        </div>
        {/* <div className="champ2">
                <div className="logo"><img src={mastery.logochamp2} alt="" /></div>
                <div className="mastery"><img src={mastery.masterychamp2} alt="" /></div>
            </div>
            <div className="champ3">
                <div className="logo"><img src={mastery.logochamp3} alt="" /></div>
                <div className="mastery"><img src={mastery.masterychamp3} alt="" /></div>
            </div> */}
      </div>
    </div>
  );
};

export default Mastery;
