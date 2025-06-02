import React from "react";

import styles from "./LandingTvShows.module.scss";

import TvCard from "../../components/tvcard/TvCard";

import family from "../../assets/family.jpeg";
import apes from "../../assets/apes.jpeg";
import shogun from "../../assets/shogun.jpeg";
import hod from "../../assets/hod.jpeg";

const tvShows = ["Past & Current Seasons", "TV Shows", family];

const movies = ["New & Classic", "Movies", apes];

const huluOriginals = ["Groundbreaking", "Hulu Originals", shogun];

const premiums = ["Add-on", "Premiums", hod];

const TvShows = () => {
  return (
    <>
      <section className={styles["tv-shows"]}>
        <h4 className={styles["subtitle"]}>INCLUDED IN ALL PLANS</h4>
        <h2>All The TV You Love</h2>
        <p className={styles["description"]}>
          Watch full seasons of exclusive streaming series, current-season
          episodes, hit movies, Hulu Originals, kids shows, and more.
        </p>

        <div className={styles["tv-card-list"]}>
          <TvCard
            description="Past & Current Seasons"
            title="TV Shows"
            imageSrc={family}
          />

          <TvCard description="New & Classic" title="Movies" imageSrc={apes} />

          <TvCard
            description="Groundbreaking"
            title="Hulu Originals"
            imageSrc={shogun}
          />

          <TvCard description="Add-on" title="Premiums" imageSrc={hod} />
        </div>
        <div className={styles["tv-shows-cards-disclaimer"]}>
          Premium network add-ons available for an additional cost
        </div>
      </section>
    </>
  );
};

export default TvShows;
