import React, { Fragment } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

function Homepage() {
  return (
    <div className="Homepage">
      <Header />
      <Fragment>Home page</Fragment>
      <Footer />
    </div>
  );
}

export default Homepage;
