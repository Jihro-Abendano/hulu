import React, { useState, useEffect } from "react";

import HighlightOption from "../../components/highlightoption/HighlightOption";
import { highlightData } from "../../data/highlightData";

import styles from "./LandingHighlights.module.scss";

import useHighlightAnimation from "../../hooks/useHighlightAnimation";

const Highlights = () => {
  const [activeKey, setActiveKey] = useState("sports");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const { title, description, background, backgroundMobile, logos } =
    highlightData[activeKey];
  const animateContent = useHighlightAnimation(activeKey);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bg = isMobile ? backgroundMobile : background;

  return (
    <section
      className={styles["highlights"]}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className={styles["highlight-tab-container"]}>
        <div className={styles["highlight-options"]}>
          {Object.entries(highlightData).map(([key, option]) => (
            <HighlightOption
              key={key}
              label={option.title}
              isActive={activeKey === key}
              onClick={() => setActiveKey(key)}
              className={`${styles["highlight-button"]} ${
                activeKey === key ? styles["active"] : ""
              }`}
            />
          ))}
        </div>

        <div
          className={`${styles["highlight-content"]} ${
            animateContent ? styles["fade-in-up"] : ""
          }`}
        >
          <h2>{title}</h2>
          <p>{description}</p>
          <div className={styles["logo-circles"]}>
            {logos.map((logo, index) => (
              <div className={styles["logo-circle"]} key={index}>
                <img src={logo} alt={`logo-${index}`} />
              </div>
            ))}
          </div>
          <p className={styles["disclaimer"]}>
            Live TV plan required. Regional restrictions, blackouts and
            additional terms apply. See details
          </p>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
