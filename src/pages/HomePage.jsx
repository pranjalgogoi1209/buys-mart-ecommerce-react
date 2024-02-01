
import React from "react";
import styles from "../styles/pages/Home.module.css";

export default function HomePage() {
  return (
    <div className={styles.home}>
        <div className={styles.homeLeft}>
            <h2>Shop</h2>
            <h3 className={styles.typist}>AnyWhere, Anytime, Anything....</h3>
            <h1>BuysMart</h1>
            <p>Elevating your shopping experience</p>
            <div className={styles.button}>Explore</div>
        </div>
        <div className={styles.animation}></div>
    </div>
    );
}
