import React from "react";
import "./styles/App.scss";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import TvShows from "./sections/TvShows";
import Highlights from "./sections/Highlights";
import Plans from "./sections/Plans";
const App = () => {
  return (
    <>
      <div className="bg-wrapper">
        <Header />
        <Hero />
        <TvShows />
        <Highlights />
        <Plans />
      </div>
    </>
  );
};

export default App;
