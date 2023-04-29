import React, { Fragment } from "react";
import "../../styles/base.scss";
import "../../styles/sections/teamPage/TeamInfo.scss";
import { IRank } from "../../types/rank";

const TeamInfo = ({ rank }: any) => {
  const imgPublic = {
    BRONZE: "Emblem_Bronze.png",
    CHALLENGER: "Emblem_Challenger.png",
    DIAMOND: "Emblem_Diamond.png",
    GOLD: "Emblem_Gold.png",
    GRANDMASTER: "Emblem_Grandmaster.png",
    MASTER: "Emblem_Master.png",
    IRON: "Emblem_Iron.png",
    PLATINUM: "Emblem_Platinum.png",
    SILVER: "Emblem_Silver.png",
  };
  const rankSolo = rank.find(
    (item: IRank) => item.queueType === "RANKED_SOLO_5x5"
  );
  const rankFlex = rank.find(
    (item: IRank) => item.queueType === "RANKED_FLEX_SR"
  );
  return (
    <div className="team-info-main">
      <div className="row">
        <div className="col-12 col-lg-6 team-info__layout">
          <div
            className="rank-info"
            style={{
              background: `url(https://nexus.leagueoflegends.com/wp-content/uploads/2018/04/LOL_CMS_203_Article_02_vbzxgdg7pain9awag9wt.jpg)`,
            }}
          >
            {rankSolo ? (
              <Fragment>
                <div className="rank-info__text">
                  <div className="rank-info__tier">
                    Solo/Duo: {rankSolo.tier}
                  </div>
                  <div className="rank-info__rank">
                    {rankSolo.rank} - {rankSolo.leaguePoints}points
                  </div>
                </div>
                <div className="rank-info__img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/lane/${
                        imgPublic[`${rankSolo.tier as keyof typeof imgPublic}`]
                      }`
                    }
                    alt=""
                  />
                </div>
              </Fragment>
            ) : null}
          </div>
        </div>
        <div className="col-12 col-lg-6 team-info__layout">
          <div
            className="rank-info"
            style={{
              background: `url(https://nexus.leagueoflegends.com/wp-content/uploads/2018/04/LOL_CMS_203_Article_02_vbzxgdg7pain9awag9wt.jpg)`,
            }}
          >
            {rankFlex ? (
              <Fragment>
                {" "}
                <div className="rank-info__text">
                  <div className="rank-info__tier">Flex: {rankFlex.tier}</div>
                  <div className="rank-info__rank">
                    {rankFlex.rank} - {rankFlex.leaguePoints}points
                  </div>
                </div>
                <div className="rank-info__img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/lane/${
                        imgPublic[`${rankFlex.tier as keyof typeof imgPublic}`]
                      }`
                    }
                    alt=""
                  />
                </div>
              </Fragment>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
