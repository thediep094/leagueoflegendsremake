import React from "react";

const MainChatItem = ({ data }: any) => {
  return (
    <div
      className={`main-chat-item ${
        data.type === "user" ? "user" : "other-user"
      }`}
      key={data.type}
    >
      <div className="main-chat-item__heading">
        <div className="main-chat-item__name">{data?.name}</div>
        <img className="main-chat-items__avatar" src={data?.avatar} />
      </div>

      <div className="main-chat-item__content">{data?.comment}</div>
    </div>
  );
};

export default MainChatItem;
