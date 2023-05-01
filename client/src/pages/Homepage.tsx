import React, { Fragment, useEffect } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import Featured from "../sections/homepage/Featured";
import Gameplay1 from "../sections/homepage/Gameplay1";
import Gameplay2 from "../sections/homepage/Gameplay2";
import TheChampion from "../sections/homepage/TheChampion";

function Homepage() {
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
