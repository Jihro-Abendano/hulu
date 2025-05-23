import React from "react";
import "./styles/App.scss";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import TvShows from "./sections/TvShows";
const App = () => {
  return (
    <>
      <div className="bg-wrapper">
        <Header />
        <Hero />
        <TvShows />
      </div>
    </>
  );
};

export default App;
