import React from "react";
import styles from "./Footer.module.scss";

const FooterPolicies = ({ policyLinks }) => {
  return (
    <div className={styles["footer-container-policies"]}>
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
  );
};

export default FooterPolicies;
