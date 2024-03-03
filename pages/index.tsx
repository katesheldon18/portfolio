import React from "react";
import styles from "./index.module.scss";
import { Navigation } from "../components/Navigation/Navigation";
import Document from "./_document";

export default function Page() {
  return (
    <div className={styles.base}>
      <Navigation />
      <div className={styles.welcome}>
        Hi, my name is <br />
        <span className={styles.name}>Kate.</span>
      </div>
      <div className={styles.content}>
        <span className={styles.heading}>About me.</span>
        <div className={styles.text}>
          I am a front end developer based in Auckland, NZ. I am an experienced
          Search Engine Optimisation professional, looking to pivot my career
          into frontend software development.
        </div>
      </div>
    </div>
  );
}
