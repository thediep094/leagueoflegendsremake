import React, { useEffect, useState, useRef } from "react";
import MainChatItem from "./MainChatItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import axios from "axios";
import { API_LINK } from "../../default-value";

const MainChat = ({ socket, room }: any) => {
  const user = useSelector((state: RootState) => state.account.user);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState<any>([]);
  const chatParent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const domNode = chatParent.current;
    if (domNode) {
      domNode.scrollTop = domNode.scrollHeight;
    }
  });
  useEffect(() => {
    const fetchData = async () => {
      const resDataMessages = await axios.get(
        `${API_LINK}/chat/messages/6447f841a0d2f47c841d10b5`
      );
      resDataMessages.data.data.forEach((message: any) => {
        const messageData = {
          room: "6447f841a0d2f47c841d10b5",
          type: message.user === user?._id ? "user" : "other-user",
          name: message?.ingame ? message?.ingame : "Announymous",
          comment: message.message,
          avatar: message.mainAva,
        };
        if (messageData.room === "6447f841a0d2f47c841d10b5")
          setMessageList((list: any) => [...list, messageData]);
      });
    };
    fetchData();
  }, []);
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        type: "user",
        name: user?.ingame ? user?.ingame : "Anounymous",
        comment: currentMessage,
        avatar: user?.mainAva
          ? user.mainAva
          : "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_7.jpg",
      };

      const messageSendData = {
        room: room,
        type: "other-user",
        name: user?.ingame ? user?.ingame : "Anounymous",
        comment: currentMessage,
        avatar: user?.mainAva
          ? user.mainAva
          : "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_7.jpg",
      };
      const res = await axios.post(`${API_LINK}/message/`, {
        user: user?._id,
        message: currentMessage,
        boxchat: "6447f841a0d2f47c841d10b5",
      });
      await socket.emit("send_message", messageSendData);

      setMessageList((list: any) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data: any) => {
      if (data.room === "6447f841a0d2f47c841d10b5") {
        setMessageList((list: any) => [...list, data]);
      }
    });
  }, [socket]);

  return (
    <div className="main-chat">
      <div className="main-chat__items" ref={chatParent}>
        {messageList?.map((item: any) => {
          return <MainChatItem data={item} />;
        })}
      </div>
      <div className="main-chat__input">
        <div className="main-chat__input-text">COMMENT:</div>
        <input
          type="text"
          className="main-chat__field"
          value={currentMessage}
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onClick={() => socket.emit("join_room", "6447f841a0d2f47c841d10b5")}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button className="main-chat__button" onClick={() => sendMessage()}>
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3359 19.4102C12.0215 19.4102 12.4961 18.8564 12.8213 18.0127L18.6221 2.83398C18.7715 2.44727 18.8594 2.10449 18.8594 1.80566C18.8594 1.18164 18.4639 0.786133 17.8311 0.786133C17.541 0.786133 17.1895 0.865234 16.8027 1.01465L1.5625 6.85059C0.806641 7.14062 0.235352 7.61523 0.235352 8.30078C0.235352 9.13574 0.859375 9.45215 1.7207 9.71582L6.27344 11.1045C6.88867 11.2979 7.24902 11.2891 7.67969 10.8848L17.4707 1.81445C17.5938 1.7002 17.7432 1.71777 17.8398 1.80566C17.9365 1.89355 17.9365 2.05176 17.8311 2.16602L8.77832 11.9746C8.40918 12.3877 8.37402 12.7744 8.55859 13.3896L9.91211 17.8545C10.1758 18.751 10.4922 19.4102 11.3359 19.4102Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MainChat;
