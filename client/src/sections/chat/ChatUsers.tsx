import React from "react";
import Icons from "../../components/icons/Icons";

const ChatUsers = () => {
  const mainUserData = {
    avatar:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_7.jpg",
    name: "x2muadacam",
    status: true,
  };

  const usersData = [
    {
      avatar:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_7.jpg",
      name: "x2muadacam",
      status: true,
    },
    {
      avatar:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_7.jpg",
      name: "x2muadacam",
      status: false,
    },
    {
      avatar:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_7.jpg",
      name: "x2muadacam",
      status: true,
    },
    {
      avatar:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_7.jpg",
      name: "x2muadacam",
      status: true,
    },
    {
      avatar:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_7.jpg",
      name: "x2muadacam",
      status: false,
    },
    {
      avatar:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_7.jpg",
      name: "x2muadacam",
      status: true,
    },
    {
      avatar:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_7.jpg",
      name: "x2muadacam",
      status: true,
    },
    {
      avatar:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_7.jpg",
      name: "x2muadacam",
      status: false,
    },
    {
      avatar:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_7.jpg",
      name: "x2muadacam",
      status: true,
    },
    {
      avatar:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_7.jpg",
      name: "x2muadacam",
      status: true,
    },
    {
      avatar:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_7.jpg",
      name: "x2muadacam",
      status: false,
    },
    {
      avatar:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_7.jpg",
      name: "x2muadacam",
      status: true,
    },
  ];
  return (
    <div className="chat-users">
      <div className="main-user">
        <div className="main-user__avatar">
          <img src={mainUserData?.avatar} alt="" />
        </div>

        <div className="main-user__info">
          <div className="main-user__name">{mainUserData.name}</div>
          <div className="main-user__status">
            {mainUserData.status ? "Online" : "Offline"}
          </div>
        </div>
      </div>
      <div className="chat-users__button">
        <div className="chat-users__button-title">SOCIAL</div>
        <div className="chat-users__button-icons">
          <div className="chat-users__button-icon">
            <Icons name="addfriend" />
          </div>
          <div className="chat-users__button-icon">
            <Icons name="icon-search" />
          </div>
        </div>
      </div>
      <div className="other-users">
        {usersData?.map((item: any, index: number) => {
          return (
            <div className="chat-user" key={index}>
              <div className="chat-user__avatar">
                <img src={item?.avatar} alt="" />
              </div>

              <div className="chat-user__info">
                <div className="chat-user__name">{item.name}</div>
                <div
                  className={`chat-user__status ${
                    item.status ? "online" : "offline"
                  }`}
                >
                  {item.status ? "Online" : "Offline"}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatUsers;
