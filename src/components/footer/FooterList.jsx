import React from "react";
import styles from "./Footer.module.scss";

const FooterList = ({
  browseLinks1,
  browseLinks2,
  browseLinks3,
  browseLinks4,
  helpLinks,
  aboutLinks,
}) => {
  return (
    <div className={styles["footer-container-row"]}>
      <div className={styles["footer-container-row-browse"]}>
        <h3 className={styles["footer-container-row-browse-text"]}>Browse</h3>
        <div className={styles["footer-container-row-browse-columns"]}>
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

      <div className={styles["footer-container-row-box"]}>
        <div className={styles["footer-container-row-box-help"]}>
          <h3 className={styles["footer-container-row-box-help-text"]}>Help</h3>
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

        <div className={styles["footer-container-row-box-about"]}>
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
  );
};

export default FooterList;
