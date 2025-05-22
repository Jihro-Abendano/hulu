import React from "react";
import "./styles/App.scss";
import Header from "./sections/Header";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <>
      <div className="bg-wrapper">
        <Header />
        <Hero />
      </div>
    </>
  );
};

export default App;
