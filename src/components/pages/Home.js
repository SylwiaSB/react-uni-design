import React from "react";
import BannerSection from "../BannerSection";
import Cards from "../Cards";
import Footer from "../Footer";
import Welcome from "../Welcome";

import "../../App.css";

function Home() {
  return (
    <>
      <BannerSection />
      <Cards />
      <Welcome />
    </>
  );
}

export default Home;
