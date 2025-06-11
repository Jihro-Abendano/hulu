import React from "react";
import styles from "./Footer.module.scss";
const FooterSocials = ({ fb, ig, x, yt }) => {
  return (
    <div className={styles["footer-container-socials"]}>
      <a href="https://www.facebook.com">
        <img src={fb} alt="Facebook" />
      </a>
      <a href="https://www.instagram.com">
        <img src={ig} alt="Instagram" />
      </a>
      <a href="https://twitter.com">
        <img src={x} alt="X" />
      </a>
      <a href="https://www.youtube.com">
        <img src={yt} alt="YouTube" />
      </a>
    </div>
  );
};

export default FooterSocials;
