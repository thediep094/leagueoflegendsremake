import React, { useEffect, useState, Fragment } from "react";
import TeamBanner from "../sections/teamPage/TeamBanner";
import Ranking from "../sections/teamPage/Ranking";
import Header from "../sections/Header";
import TeamInfo from "../sections/teamPage/TeamInfo";
import Mastery from "../sections/teamPage/Mastery";
import axios from "axios";
import { API_LINK } from "../default-value";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { IAccount, IIngame } from "../types/account";
import { IRank } from "../types/rank";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import "../styles/pages/TeamPage.scss";
import { loginSuccess } from "../store/slice/accountSlice";
const TeamPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  // const mastery = {
  //   logochamp1:
  //     "https://p1.hiclipart.com/preview/529/39/766/181-lol-icons-league-of-legends-aatrox.jpg",
  //   masterychamp1:
  //     "https://i.pinimg.com/564x/82/6b/c9/826bc98f8f6290c598b5418ee38fb6e5.jpg",
  //   logochamp2:
  //     "https://p1.hiclipart.com/preview/529/39/766/181-lol-icons-league-of-legends-aatrox.jpg",
  //   masterychamp2:
  //     "https://i.pinimg.com/564x/82/6b/c9/826bc98f8f6290c598b5418ee38fb6e5.jpg",
  //   logochamp3:
  //     "https://p1.hiclipart.com/preview/529/39/766/181-lol-icons-league-of-legends-aatrox.jpg",
  //   masterychamp3:
  //     "https://i.pinimg.com/564x/82/6b/c9/826bc98f8f6290c598b5418ee38fb6e5.jpg",
  // };

  const [ingame, setIngame] = useState<IIngame>();
  const [rank, setRank] = useState<IRank[]>();
  const user = useSelector((state: RootState) => state.account.user);
  const [password, setPassword] = useState("");
  const [userForm, setUserForm] = useState<any>({
    fullname: "",
    ingame: "",
    mail: "",
    date: "",
  });
  const dispatch = useDispatch();
  const fetchData = async () => {
    setLoading(true);
    const res = await axios.get(`${API_LINK}/users/me/${id}`);
    setIngame(res.data.data.ingame);
    setRank(res.data.data.rank);
    setLoading(false);
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setUserForm((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    setUserForm({
      fullname: user?.fullname,
      ingame: user?.ingame,
      mail: user?.mail,
      date: user?.date,
    });
    try {
      fetchData();
    } catch (error) {}
  }, [id, user]);

  const handleSubmit = async () => {
    try {
      if (user?.ingame !== userForm.ingame) {
        const res2 = await axios.get(
          `${API_LINK}/ingame/search?summonerName=${userForm.ingame}`
        );
        const res = await axios.put(`${API_LINK}/users/${user?._id}`, {
          ...userForm,
          mainAva: res2?.data?.ingame?.profileIconId
            ? `https://ddragon.leagueoflegends.com/cdn/13.8.1/img/profileicon/${res2?.data?.ingame?.profileIconId}.png`
            : user?.mainAva,
        });
        const res3 = await axios.post(`${API_LINK}/rank/search/`, {
          username: res.data.user.username,
        });
        dispatch(loginSuccess(res.data.user));
        window.location.reload();
      }

      alert("Change infomation successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const changePassword = async () => {
    try {
      const res = await axios.put(`${API_LINK}/users/${user?._id}`, {
        password: password,
      });
      alert("Change password successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="teamPage"
      style={{
        paddingTop: "78px",
      }}
    >
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          {" "}
          <TeamBanner teamData={ingame} />
          {rank ? <TeamInfo rank={rank} /> : null}
        </Fragment>
      )}
      {user?._id === id ? (
        <div className="profile__infomation">
          <div className="profile__information-heading">User information</div>
          <div className="input_field">
            <input
              type="text"
              name="username"
              id="username"
              value={user?.username}
              onChange={(e: any) => handleInputChange(e)}
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="input_field">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className="input_field">
            <input
              type="text"
              name="mail"
              id="mail"
              value={userForm.mail}
              onChange={(e: any) => handleInputChange(e)}
            />
            <label htmlFor="mail">Mail</label>
          </div>

          <div className="input_field">
            <input
              type="text"
              name="fullname"
              id="fullname"
              value={userForm.fullname}
              onChange={(e: any) => handleInputChange(e)}
            />
            <label htmlFor="fullname">Fullname</label>
          </div>

          <div className="input_field">
            <input
              type="text"
              name="ingame"
              id="ingame"
              value={userForm.ingame}
              onChange={(e: any) => handleInputChange(e)}
            />
            <label htmlFor="ingame">Ingame</label>
          </div>

          <div className="input_field">
            <input
              type="text"
              name="date"
              id="date"
              value={userForm.date}
              onChange={(e: any) => handleInputChange(e)}
            />
            <label htmlFor="date">Date</label>
          </div>
          <div className="profile__infomation-buttons">
            <button
              className="profile__infomation-button"
              onClick={() => handleSubmit()}
            >
              Update infomation
            </button>

            <button
              className="profile__infomation-button"
              onClick={() => changePassword()}
            >
              Change Password
            </button>
          </div>
        </div>
      ) : null}
      {/* <Mastery mastery={mastery} /> */}
    </div>
  );
};

export default TeamPage;
