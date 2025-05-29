import React from "react";

import styles from "./LandingStartBuilding.module.scss";
import Buttons from "../../components/buttons/Buttons";

const LandingStartBuilding = () => {
  return (
    <section className={styles["start-building"]}>
      <p>BUILD THE PLAN THAT'S RIGHT FOR YOU</p>
      <Buttons text="START BUILDING" variant="bot" />
    </section>
  );
};

export default LandingStartBuilding;
