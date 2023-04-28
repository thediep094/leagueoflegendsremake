import React from "react";

const Loading = () => {
  return (
    <div
      className="spinner-border"
      role="status"
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: "20px",
        margin: "auto",
        color: "#785a28",
      }}
    >
      <span className="sr-only"></span>
    </div>
  );
};

export default Loading;
