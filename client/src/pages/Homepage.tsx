import React, { Fragment, useEffect } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import Featured from "../sections/homepage/Featured";
import Gameplay1 from "../sections/homepage/Gameplay1";
import Gameplay2 from "../sections/homepage/Gameplay2";
import TheChampion from "../sections/homepage/TheChampion";

function Homepage() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://vn2.api.riotgames.com/lol/summoner/v4/summoners/by-name/x2muadacam?api_key=RGAPI-03cc609d-34f2-4ca3-a37d-481bf62dff18`
      );
      const data = await res.json();
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <div className="Homepage">
      <Header />
      <Featured />
      <Gameplay1 />
      <Gameplay2 />
      <TheChampion />
      <Footer />
    </div>
  );
}

export default Homepage;
