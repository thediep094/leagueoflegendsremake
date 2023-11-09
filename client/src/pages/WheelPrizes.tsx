import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import "../styles/pages/Game.scss";
import ButtonShop from "../components/button/ButtonShop";
import axios from "axios";
import { API_LINK } from "../default-value";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { changeBalance } from "../store/slice/walletSlice";

const data = [
  { option: "100" },
  { option: "50" },
  { option: "10", style: { textColor: "#f9dd50" } },
  { option: "1000" },
  { option: "2000" },
  { option: "1500" },
  { option: "10000", style: { textColor: "#70bbe0" } },
  { option: "2500" },
];

const backgroundColors = ["#ff8f43", "#70bbe0", "#0b3351", "#f9dd50"];
const textColors = ["#0b3351"];
const outerBorderColor = "#eeeeee";
const outerBorderWidth = 10;
const innerBorderColor = "#30261a";
const innerBorderWidth = 0;
const innerRadius = 0;
const radiusLineColor = "#eeeeee";
const radiusLineWidth = 8;
const fontFamily = "Nunito";
const fontWeight = "bold";
const fontSize = 20;
const fontStyle = "normal";
const textDistance = 60;
const spinDuration = 1.0;

const WheelPrizes = () => {
  const user = useSelector((state: RootState) => state.account.user);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const dispatch = useDispatch();
  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const getWallet = async () => {
    try {
      if (user) {
        const res = await axios.get(
          `${API_LINK}/wallet/get-wallet/${user?._id}`
        );
        dispatch(changeBalance(res.data.data.balance));
      }
    } catch (error) {}
  };

  const changeBalanceFetch = async () => {
    try {
      if (user) {
        const res = await axios.post(`${API_LINK}/wallet/increase-balance`, {
          userId: user?._id,
          amount: Number(data[prizeNumber].option) - 100,
        });
        getWallet();
        alert(`You win ${data[prizeNumber].option}`);
      }
    } catch (error) {}
  };

  return (
    <div className="game">
      <div className="container">
        <div className="game__wheel">
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            backgroundColors={backgroundColors}
            textColors={textColors}
            fontFamily={fontFamily}
            fontSize={fontSize}
            fontWeight={fontWeight}
            fontStyle={fontStyle}
            outerBorderColor={outerBorderColor}
            outerBorderWidth={outerBorderWidth}
            innerRadius={innerRadius}
            innerBorderColor={innerBorderColor}
            innerBorderWidth={innerBorderWidth}
            radiusLineColor={radiusLineColor}
            radiusLineWidth={radiusLineWidth}
            spinDuration={spinDuration}
            startingOptionIndex={2}
            // perpendicularText
            textDistance={textDistance}
            onStopSpinning={() => {
              setMustSpin(false);
              changeBalanceFetch();
            }}
          />
          <div className="game__wheel-button" onClick={handleSpinClick}>
            <ButtonShop name="100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WheelPrizes;
