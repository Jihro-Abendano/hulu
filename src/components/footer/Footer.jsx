import React from "react";
import FooterList from "./FooterList";
import FooterSocials from "./FooterSocials";
import FooterPolicies from "./FooterPolicies";
import Dropdown from "../../components/dropdown/Dropdown";

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
        <FooterList
          browseLinks1={browseLinks1}
          browseLinks2={browseLinks2}
          browseLinks3={browseLinks3}
          browseLinks4={browseLinks4}
          helpLinks={helpLinks}
          aboutLinks={aboutLinks}
        />
        <FooterSocials fb={fb} ig={ig} x={x} yt={yt} />
        <FooterPolicies policyLinks={policyLinks} />

        <Dropdown
          className
          browseLinks1={browseLinks1}
          browseLinks2={browseLinks2}
          browseLinks3={browseLinks3}
          browseLinks4={browseLinks4}
          helpLinks={helpLinks}
          aboutLinks={aboutLinks}
        />
      </div>
    </footer>
  );
};

export default Footer;
