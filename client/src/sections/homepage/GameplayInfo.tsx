import React, { Fragment, useState } from "react";

const GameplayInfo = ({ info }: any) => {
  const [current, setCurrent] = useState(0);
  return (
    <Fragment>
      {info.map((item: any, index: any) => {
        return (
          <div
            className={current === index ? "info active" : "info"}
            key={index}
          >
            <div className="info__title">{item.title}</div>
            <div className="info__content">{item.description}</div>
            <div className="icon">
              <button
                className="left"
                onClick={() => {
                  if (current !== 0) {
                    setCurrent(current - 1);
                  } else {
                    setCurrent(info.length - 1);
                  }
                }}
              >
                {"<"}
              </button>
              <button
                className="right"
                onClick={() => {
                  if (current !== info.length - 1) {
                    setCurrent(current + 1);
                  } else {
                    setCurrent(0);
                  }
                }}
              >
                {">"}
              </button>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default GameplayInfo;
