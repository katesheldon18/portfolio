import React from "react";
import styles from "./index.module.scss";
import { Navigation } from "../components/Navigation/Navigation";
import Document from "./_document";

export default function Page() {
  return (
    <div className={styles.base}>
      <Navigation />
      <div className={styles.welcome}>
          Hi, my name is <br/><span className={styles.name}>Kate.</span>
      </div>
    </div>
  );
}
