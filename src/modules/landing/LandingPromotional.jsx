import React from "react";
import styles from "./LandingPromotional.module.scss";
import dhe from "../../assets/dhe.png";

import HeroCard from "../../components/herocard/HeroCard";

const LandingPromotional = () => {
  return (
    <section className={styles["promotional"]}>
      <HeroCard
        title="DISNEY+, HULU, ESPN+, BUNDLE BASIC"
        imageSrc={dhe}
        description="Get Hulu, Disney+, and ESPN+, all with ads, for $16.99/mo."
        buttonText="GET ALL THREE"
        orientation="horizontal"
      />
    </section>
  );
};

export default LandingPromotional;
