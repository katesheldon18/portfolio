import React from "react";
import styles from "./index.module.scss";
import { Navigation } from "../components/Navigation/Navigation";

export default function Page() {
  return (
      <div className={styles.page}>
        <Navigation />
        <div className={styles.welcome}>
          <h1>
            Kate <br></br>Sheldon
          </h1>
          <p>frontend developer.</p>
        </div>
      </div>
  );
}
