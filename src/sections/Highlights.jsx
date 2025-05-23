//Highlights.jsx
import React, { useState } from "react";
import HighlightOption from "../components/HighlightOption";
import { highlightData } from "../data/highlightData";
import "../styles/Highlights.scss";

const Highlights = () => {
  const [activeKey, setActiveKey] = useState("sports");
  const { title, description, background } = highlightData[activeKey];

  return (
    <section
      className="highlights"
      style={{ backgroundImage: `url(${background})` }}
    >
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

        <div className="highlight-content">
          <h2>{title}</h2>
          <p>{description}</p>
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
