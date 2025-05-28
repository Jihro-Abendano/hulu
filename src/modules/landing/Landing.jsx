import React from "react";
import LandingHero from "./LandingHero";
import LandingTvShows from "./LandingTvShows";
import LandingHighlights from "./LandingHighlights";
import LandingPlans from "./LandingPlans";
import LandingFooter from "./LandingFooter";

function Landing() {
  return (
    <div>
      <LandingHero />
      <LandingTvShows />
      <LandingHighlights />
      <LandingPlans />
      <LandingFooter />
    </div>
  );
}

export default Landing;
