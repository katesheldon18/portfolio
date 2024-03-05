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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </div>
      </div>
    </div>
  );
}
