//Highlights.jsx
import React, { useState, useEffect } from "react";
import HighlightOption from "../components/HighlightOption";
import { highlightData } from "../data/highlightData";
import "../styles/Highlights.scss";
import useHighlightAnimation from "../hooks/useHighlightAnimation";

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
    <section className="highlights" style={{ backgroundImage: `url(${bg})` }}>
      <div className="highlight-tab-container">
        <div className="highlight-options">
          {Object.entries(highlightData).map(([key, option]) => (
            <HighlightOption
              key={key}
              label={option.title}
              isActive={activeKey === key}
              onClick={() => setActiveKey(key)}
            />
          ))}
        </div>

        <div
          className={`highlight-content ${animateContent ? "fade-in-up" : ""}`}
        >
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="logo-circles">
            {logos.map((logo, index) => (
              <div className="logo-circle" key={index}>
                <img src={logo} alt={`logo-${index}`} />
              </div>
            ))}
          </div>
          <p className="disclaimer">
            Live TV plan required. Regional restrictions, blackouts and
            additional terms apply. See details
          </p>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
