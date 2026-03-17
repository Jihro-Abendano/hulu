import React, { useState } from "react";
import { plansData } from "../../data/plansData";
import arrow from "../../assets/arrow.svg";
import styles from "./LandingPlans.module.scss";
import Select from "../../components/select/Select";
import TableDesktop from "../../components/table/tabledesktop/TableDesktop";
import TableTablet from "../../components/table/tabletablet/TableTablet";
import TableAddonsDesktop from "../../components/table/tabledesktop/TableAddonsDesktop";
import TableAddonsTablet from "../../components/table/tabletablet/TableAddonsTablet";

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState("dh");
  const [showAddons, setShowAddons] = useState(false);

  const currentPlan = plansData[selectedPlan];

  const handleChange = (e) => {
    setSelectedPlan(e.target.value);
  };

  const toggleAddons = () => {
    setShowAddons((prev) => !prev);
  };

  return (
    <section className={styles["plans"]}>
      <div className={styles["plans-top-text"]}>
        <h1 className={styles["plans-top-text-title"]}>Select Your Plan</h1>
        <p className={styles["plans-top-text-subtitle"]}>
          No hidden fees, equipment rentals, or installation appointments.
        </p>
        <p className={styles["plans-top-text-switch"]}>
          Switch plans or cancel anytime.**
        </p>
      </div>

      <Select selectedPlan={selectedPlan} handleChange={handleChange} />

      {currentPlan && (
        <div className={styles["plans-table"]}>
          <TableDesktop currentPlan={currentPlan} />
          <TableTablet currentPlan={currentPlan} />

          <div className={styles["plans-table-disclaimer"]}>
            {currentPlan.disclaimer.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          {currentPlan.addons && (
            <div className={styles["plans-table-addons"]}>
              {showAddons && (
                <div className="plans-table-addons-container">
                  <h2
                    className={styles["plans-table-addons-container-available"]}
                  >
                    Available Add-ons
                  </h2>
                  <TableAddonsDesktop currentPlan={currentPlan} />
                  <TableAddonsTablet currentPlan={currentPlan} />
                </div>
              )}

              <button
                className={styles["plans-table-addons-toggle"]}
                onClick={toggleAddons}
              >
                {showAddons ? (
                  <>
                    Hide-Addons{" "}
                    <img
                      src={arrow}
                      alt="arrow"
                      className={styles["plans-table-addons-arrow-hide"]}
                    />
                  </>
                ) : (
                  <>
                    Show-Adons{" "}
                    <img
                      src={arrow}
                      alt="arrow"
                      className={styles["plans-table-addons-arrow-show"]}
                    />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Plans;
