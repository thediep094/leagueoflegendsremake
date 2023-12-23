import React, { useEffect, useRef, useState } from "react";
import Icons from "../../components/icons/Icons";
import axios from "axios";
import { API_LINK } from "../../default-value";
import { IAccount } from "../../types/account";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Loading from "../../components/Loading";
const ChatUsers = ({ socket }: any) => {
  const [searchIngame, setSearchIngame] = useState("");
  const [openPopup, setOpenPopup] = useState(false);
  const [clickUser, setClickUser] = useState<IAccount>();
  const [roomId, setRoomId] = useState();
  const user = useSelector((state: RootState) => state.account.user);
  const [messageList, setMessageList] = useState<any>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const chatParent = useRef<HTMLDivElement>(null);
  const [loadingMessage, setLoadingMessage] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState<any[]>([]);
  useEffect(() => {
    const domNode = chatParent.current;
    if (domNode) {
      domNode.scrollTop = domNode.scrollHeight;
    }
  });
  const [usersData, setUsersData] = useState<IAccount[]>();

  const fetchAllUser = async () => {
    const res = await axios.post(`${API_LINK}/friend/find`, {
      friendIngame: "",
    });
    setUsersData(res.data.data);
  };

  const findUser = async (ingame: string) => {
    const res = await axios.post(`${API_LINK}/friend/find`, {
      friendIngame: ingame,
    });
    setUsersData(res.data.data);
  };

  useEffect(() => {
    fetchAllUser();
  }, [user]);
  const openPopupChat = () => {
    setOpenPopup(true);
  };

  const clickUserHandle = async (item: IAccount) => {
    setMessageList([]);
    setLoadingMessage(true);
    document
      .getElementById(`chat-user-${item._id}`)
      ?.classList.remove("have-message");
    if (user) {
      setClickUser(item);
      setOpenPopup(true);
      const resId = await axios.post(`${API_LINK}/chat/`, {
        user1: user?._id,
        user2: item._id,
      });
      const resDataMessages = await axios.get(
        `${API_LINK}/chat/messages/${resId.data.id}`
      );
      socket.emit("join_room", resId.data.id);
      resDataMessages.data.data.forEach((message: any) => {
        const messageData = {
          room: resId.data.id,
          type: message.user === user._id ? "user" : "other-user",
          name: message?.ingame,
          comment: message.message,
          avatar: message.mainAva,
        };
        if (messageData.room === resId.data.id)
          setMessageList((list: any) => [...list, messageData]);
      });
      setRoomId(resId.data.id);
      setLoadingMessage(false);
    } else {
      alert("Bạn cần đăng nhập");
    }
  };

  const sendMessage = async (account: IAccount) => {
    const res = await axios.post(`${API_LINK}/message/`, {
      user: user?._id,
      message: currentMessage,
      boxchat: roomId,
    });
    if (currentMessage !== "") {
      const messageData = {
        room: roomId,
        type: "user",
        name: account?.ingame,
        comment: currentMessage,
        avatar: account.mainAva,
      };

      const messageSendData = {
        room: roomId,
        type: "other-user",
        name: account?.ingame ? account?.ingame : "Anounymous",
        comment: currentMessage,
        avatar: account.mainAva,
        fromUser: user?._id,
        toUser: clickUser?._id,
      };

      await socket.emit("send_message", messageSendData);
      setMessageList((list: any) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  const addFriendByIngame = async (ingame: string) => {
    try {
      const res = await axios.post(`${API_LINK}/friend/byIngame`, {
        userId: user?._id,
        friendIngame: ingame,
      });
    } catch (error: any) {
      // console.log(error);
      alert(error.response.data.message);
    }
  };

  const onSearch = () => {
    findUser(searchIngame);
  };

  useEffect(() => {
    socket.on("receive_message", (data: any) => {
      if (data.room === roomId) {
        setMessageList((list: any) => [...list, data]);
      }
    });
    socket.on("receive_alert", (data: any) => {
      if (user?._id === data.toUser) {
        document
          .getElementById(`chat-user-${data.fromUser}`)
          ?.classList.add("have-message");
      }
    });
    socket.on("update_online_users", (onlineUsers: any) => {
      setOnlineUsers(onlineUsers);
    });

    socket.on("disconnect", (data: any) => {
      console.log(data);
    });
  }, [socket, roomId]);

  return (
    <div className="chat-users">
      <div className="main-user">
        <div className="main-user__avatar">
          <img
            src={
              user?.mainAva
                ? user?.mainAva
                : "https://ddragon-webp.lolmath.net/latest/img/profileicon/5710.webp"
            }
            alt=""
          />
        </div>

        <div className="main-user__info">
          <div className="main-user__name">
            {user?.ingame ? user?.ingame : "Anonymous"}
          </div>
          <div className="main-user__status">
            <div></div>
            Online
          </div>
        </div>
      </div>
      <div className="chat-users__button">
        <div className="chat-users__button-title">SOCIAL</div>
        <input
          type="text"
          className="chat-users__button-input"
          placeholder="search..."
          onChange={(e) => setSearchIngame(e.target.value)}
        />
        <div className="chat-users__button-icons">
          <div className="chat-users__button-icon" onClick={() => onSearch()}>
            <Icons name="icon-search" />
          </div>
        </div>
      </div>
      <div className="other-users">
        {usersData?.map((item: IAccount, index: number) => {
          let checkOnlineUser = false;
          if (item && onlineUsers.hasOwnProperty(`${item?._id}`)) {
            checkOnlineUser = true;
          }
          return item._id !== user?._id ? (
            <div
              className="chat-user"
              key={index}
              id={`chat-user-${item._id}`}
              onClick={() => {
                clickUserHandle(item);
              }}
            >
              <div
                className={`chat-user__avatar  ${
                  checkOnlineUser ? "online" : "offline"
                }`}
              >
                <img src={item?.mainAva} alt="" />
              </div>

              <div className="chat-user__info">
                <div className="chat-user__name">{item.ingame}</div>
                <div
                  className={`chat-user__status ${
                    checkOnlineUser ? "online" : "offline"
                  }`}
                >
                  {checkOnlineUser ? "Online" : "Offline"}
                </div>
              </div>
            </div>
          ) : null;
        })}
      </div>
      <div className="chat__bottom">
        <button
          className="chat__bottom-btn"
          onClick={() => setOpenPopup(!openPopup)}
        >
          <Icons name="chat" />
        </button>
        <span>V1.1</span>
      </div>
      <div className={`chat__popup ${openPopup ? "active" : ""}`}>
        <div className="chat__popup-heading">
          <div className="chat__popup-heading-info">
            <img src={clickUser?.mainAva} alt="" />
            <div className="chat__popup-heading-name">
              <div className="chat__popup-heading-mainname">
                {clickUser?.ingame}
              </div>
              <div className="chat__popup-heading-subname">
                {clickUser?.ingame} #VN2
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              className="chat__popup-heading-button"
              onClick={() => setOpenPopup(false)}
            >
              -
            </div>
          </div>
        </div>
        <div className="chat__popup-content" ref={chatParent}>
          {loadingMessage ? (
            <Loading />
          ) : (
            messageList.map((message: any) => {
              return (
                <div
                  className={`chat__popup-content-comment ${
                    message.type === "user" ? "user" : "other-user"
                  }`}
                >
                  {message?.comment}
                </div>
              );
            })
          )}
        </div>
        <div className="chat__popup-input">
          <input
            type="text"
            placeholder="Viết tại đây"
            value={currentMessage}
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
            onKeyPress={(event) => {
              if (clickUser) {
                event.key === "Enter" && sendMessage(clickUser);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatUsers;
