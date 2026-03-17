import React from "react";
import "./styles/App.scss";

import LandingRoute from "./views/landing/index.js";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <LandingRoute />
      <Footer />
    </>
  );
};

export default App;
