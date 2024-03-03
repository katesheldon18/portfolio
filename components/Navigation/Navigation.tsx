import React from "react";
import styles from "./Navigation.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.icon}>
        <HomeRoundedIcon />
      </div>
      <div className={styles.container}>
        <div className={styles.link}>Portfolio</div>
        <div className={styles.link}>About</div>
        <div className={styles.link}>Contact</div>
        <div className={styles.icon}>
          <LinkedInIcon />
        </div>
        <div className={styles.icon}>
          <GitHubIcon />
        </div>
      </div>
    </div>
  );
};
