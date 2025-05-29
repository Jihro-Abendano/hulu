import React from "react";
import LandingHero from "./LandingHero";
import LandingTvShows from "./LandingTvShows";
import LandingHighlights from "./LandingHighlights";
import LandingPlans from "./LandingPlans";
import LandingPromotional from "./LandingPromotional";
import LandingStartBuilding from "./LandingStartBuilding";
import LandingWatchLive from "./LandingWatchLive";

function Landing() {
  return (
    <div>
      <LandingHero />
      <LandingPromotional />
      <LandingStartBuilding />
      <LandingTvShows />
      <LandingWatchLive />
      <LandingHighlights />
      <LandingPlans />
    </div>
  );
}

export default Landing;
