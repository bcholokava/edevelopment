import React from "react";
import Header from "../components/Header";
import Lines from "../components/Lines";
import Discover from "../components/Discover";
import Filter from "../components/Filter";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Discover />
    </div>
  );
};

export default Home;
