import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import "../styles/pages/Chat.scss";
import MainChat from "../sections/chat/MainChat";
import ChatUsers from "../sections/chat/ChatUsers";
const Chat = () => {
  return (
    <div className="chat">
      <Header />
      <div className="chat-wrapper">
        <img
          className="chat-wrapper__img"
          src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_7.jpg"
          alt=""
        />
        <div className="chat-wrapper__main">
          <MainChat />
        </div>
        <div className="chat-wrapper__user">
          <ChatUsers />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Chat;
