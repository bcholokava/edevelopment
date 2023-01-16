import React from "react";
import Header from "./Header";
import Lines from "./Lines";
import Discover from "./Discover";
import Filter from "./Filter";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Discover />
    </div>
  );
};

export default Home;
