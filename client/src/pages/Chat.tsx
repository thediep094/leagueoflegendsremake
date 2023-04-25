import React, { useEffect, useState } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import "../styles/pages/Chat.scss";
import MainChat from "../sections/chat/MainChat";
import ChatUsers from "../sections/chat/ChatUsers";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
const Chat = ({ socket }: any) => {
  const [room, setRoom] = useState("6447f841a0d2f47c841d10b5");
  const user = useSelector((state: RootState) => state.account.user);
  useEffect(() => {
    if (user && room !== "") {
      socket.emit("join_room", room);
    }
  }, []);

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
          <MainChat socket={socket} room={room} />
        </div>
        <div className="chat-wrapper__user">
          <ChatUsers socket={socket} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
