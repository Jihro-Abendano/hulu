import React from "react";

import styles from "./LandingHero.module.scss";

import HeroCard from "../../components/herocard/HeroCard";

import dh from "../../assets/dh.png";
import dhm from "../../assets/dhm.png";

const Hero = () => {
  return (
    <section className={styles["hero"]}>
      <HeroCard
        title="DISNEY+, HULU BUNDLE BASIC"
        imageSrc={dh}
        description="Both with ads, for $10.99/month."
        buttonText="GET THEM BOTH"
      />

      <HeroCard
        title="DISNEY+, HULU, MAX BUNDLE"
        imageSrc={dhm}
        description="Plans starting at $16.99/month."
        buttonText="LEARN MORE"
      />
    </section>
  );
};

export default Hero;
