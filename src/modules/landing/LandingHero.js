import React from "react";
import HeroCard from "../../components/HeroCard";

import styles from "./LandingHero.module.scss";

function LandingHero() {
	return (
		<section className={styles["hero"]}>
			<HeroCard
				buttonText="GET THEM BOTH"
				title="DISNEY+, HULU BUNDLE BASIC"
				description="Both with ads, for $10.99/month."
			/>
		</section>
	);
}

export default LandingHero;
