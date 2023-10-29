import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import NewFeatured from "../sections/news/newFeatured";
import NewAll from "../sections/news/NewAll";
import WatchNews from "../sections/news/WatchNews";

const News = () => {
  return (
    <div className="news">
      <NewFeatured />
      <NewAll />
      <WatchNews />
    </div>
  );
};

export default News;
