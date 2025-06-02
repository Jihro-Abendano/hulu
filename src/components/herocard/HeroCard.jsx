import React from "react";
import "./HeroCard.scss";
import Buttons from "../buttons/Buttons";

const HeroCard = ({
  title,
  imageSrc,
  description,
  buttonText,
  orientation,
}) => {
  return (
    <div className={`hero-card ${orientation}`}>
      {orientation === "horizontal" ? (
        <>
          <img src={imageSrc} alt={title} className="hero-card-image" />

          <div className="text-group">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href="" className="terms">
              What's included?
            </a>
          </div>

          <div className="button-group">
            {buttonText && <Buttons text={buttonText} variant="mid" />}
            <div className="terms-button">Terms apply</div>
          </div>
        </>
      ) : (
        <>
          <h2>{title}</h2>
          <img src={imageSrc} alt={title} className="hero-card-image" />
          <p>{description}</p>
          {buttonText && <Buttons text={buttonText} variant="hero" />}
          <a href="/" className="terms">
            Terms apply
          </a>
        </>
      )}
    </div>
  );
};

export default HeroCard;
