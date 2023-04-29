import React, { useEffect, useState } from "react";
import TeamBanner from "../sections/teamPage/TeamBanner";
import Ranking from "../sections/teamPage/Ranking";
import Header from "../sections/Header";
import TeamInfo from "../sections/teamPage/TeamInfo";
import Mastery from "../sections/teamPage/Mastery";
import axios from "axios";
import { API_LINK } from "../default-value";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { IIngame } from "../types/account";
import { IRank } from "../types/rank";
import { useParams } from "react-router-dom";
const TeamPage = () => {
  const { id } = useParams();
  const mastery = {
    logochamp1:
      "https://p1.hiclipart.com/preview/529/39/766/181-lol-icons-league-of-legends-aatrox.jpg",
    masterychamp1:
      "https://i.pinimg.com/564x/82/6b/c9/826bc98f8f6290c598b5418ee38fb6e5.jpg",
    logochamp2:
      "https://p1.hiclipart.com/preview/529/39/766/181-lol-icons-league-of-legends-aatrox.jpg",
    masterychamp2:
      "https://i.pinimg.com/564x/82/6b/c9/826bc98f8f6290c598b5418ee38fb6e5.jpg",
    logochamp3:
      "https://p1.hiclipart.com/preview/529/39/766/181-lol-icons-league-of-legends-aatrox.jpg",
    masterychamp3:
      "https://i.pinimg.com/564x/82/6b/c9/826bc98f8f6290c598b5418ee38fb6e5.jpg",
  };

  const [ingame, setIngame] = useState<IIngame>();
  const [rank, setRank] = useState<IRank[]>();
  const user = useSelector((state: RootState) => state.account.user);
  const fetchData = async () => {
    const res = await axios.get(`${API_LINK}/users/me/${id}`);
    console.log(res.data.data);
    setIngame(res.data.data.ingame);
    setRank(res.data.data.rank);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className="teamPage"
      style={{
        paddingTop: "78px",
      }}
    >
      <Header />
      {ingame ? <TeamBanner teamData={ingame} /> : null}

      {rank ? <TeamInfo rank={rank} /> : null}
      {/* <Mastery mastery={mastery} /> */}
    </div>
  );
};

export default TeamPage;
