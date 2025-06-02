import React from "react";
import styles from "./Footer.module.scss";
import fb from "../../assets/footer/facebook.svg";
import ig from "../../assets/footer/instagram.svg";
import x from "../../assets/footer/x_logo.svg";
import yt from "../../assets/footer/youtube.svg";

const browseLinks1 = [
  "Streaming Library",
  "Live TV",
  "Live News",
  "Live Sports",
];
const browseLinks2 = [
  "TV Shows",
  "Movies",
  "Originals",
  "Networks",
  "Kids",
  "FX",
];
const browseLinks3 = ["Max", "Cinemax", "Paramount+ with SHOWTIME", "STARZ"];
const browseLinks4 = [
  "Disney+, Hulu, ESPN+ Bundle Basic",
  "Disney+, Hulu, ESPN+ Bundle Premium",
  "Disney+, Hulu Bundle",
  "Disney+, Hulu, Max Bundle",
  "Student Discount",
];

const helpLinks = [
  "Account & Billing",
  "Plans & Pricing",
  "Supported Devices",
  "Accessibility",
];

const aboutLinks = [
  "Shop Hulu",
  "Press",
  "Jobs",
  "Contact",
  "Guides | What to Watch",
];

const policyLinks = [
  "© 2025 Hulu, LLC",
  "About Ads",
  "Subscriber Agreement",
  "Privacy Policy",
  "Do Not Sell or Share My Personal Information",
  "Your US State Privacy Rights",
  "TV Parental Guidelines",
  "Sitemap",
];
const Footer = () => {
  return (
    <footer>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-row"]}>
          <div className={`${styles["footer-box"]} ${styles["browse-box"]}`}>
            <h3>Browse</h3>
            <div className={styles["browse-columns"]}>
              <ul>
                {browseLinks1.map((i) => {
                  return (
                    <li>
                      <a href="/">{i}</a>
                    </li>
                  );
                })}
              </ul>
              <ul>
                {browseLinks2.map((i) => {
                  return (
                    <li>
                      <a href="/">{i}</a>
                    </li>
                  );
                })}
              </ul>
              <ul>
                {browseLinks3.map((i) => {
                  return (
                    <li>
                      <a href="/">{i}</a>
                    </li>
                  );
                })}
              </ul>
              <ul>
                {browseLinks4.map((i) => {
                  return (
                    <li>
                      <a href="/">{i}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div
            className={`${styles["footer-box"]} ${styles["small-box-container"]}`}
          >
            <div className={`${styles["footer-box"]} ${styles["small-box"]}`}>
              <h3>Help</h3>
              <ul>
                {helpLinks.map((i) => {
                  return (
                    <li>
                      <a href="/">{i}</a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className={`${styles["footer-box"]} ${styles["small-box"]}`}>
              <h3>About Us</h3>
              <ul>
                {aboutLinks.map((i) => {
                  return (
                    <li>
                      <a href="/">{i}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles["footer-dropdown"]}>
          <div className={`${styles["footer-box"]} ${styles["browse-box"]}`}>
            <details>
              <summary>Browse</summary>
              <div className={styles["browse-columns"]}>
                <ul></ul>
                <ul>
                  {browseLinks1.map((i) => {
                    return (
                      <li>
                        <a href="/">{i}</a>
                      </li>
                    );
                  })}
                </ul>
                <ul>
                  {browseLinks2.map((i) => {
                    return (
                      <li>
                        <a href="/">{i}</a>
                      </li>
                    );
                  })}
                </ul>
                <ul>
                  {browseLinks3.map((i) => {
                    return (
                      <li>
                        <a href="/">{i}</a>
                      </li>
                    );
                  })}
                </ul>

                <ul>
                  {browseLinks4.map((i) => {
                    return (
                      <li>
                        <a href="/">{i}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </details>
          </div>

          <div className={`${styles["footer-box"]} ${styles["small-box"]}`}>
            <details>
              <summary>Help</summary>
              <ul>
                {helpLinks.map((i) => {
                  return (
                    <li>
                      <a href="/">{i}</a>
                    </li>
                  );
                })}
              </ul>
            </details>
          </div>

          <div className={`${styles["footer-box"]} ${styles["small-box"]}`}>
            <details>
              <summary>About Us</summary>
              <ul>
                {aboutLinks.map((i) => {
                  return (
                    <li>
                      <a href="/">{i}</a>
                    </li>
                  );
                })}
              </ul>
            </details>
          </div>
        </div>

        <div className={styles["footer-socials"]}>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={fb} alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ig} alt="Instagram" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={x} alt="X" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={yt} alt="YouTube" />
          </a>
        </div>
        <div className={styles["footer-policies"]}>
          <ul>
            {policyLinks.map((i) => {
              return (
                <li>
                  <a href="/">{i}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
