import React from "react";
import styles from "./Navigation.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Link from "next/link";

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <Link href="/" className={styles.icon}>
        <HomeRoundedIcon />
      </Link>
      <div className={styles.container}>
        <Link href="/portfolio">
          <div className={styles.link}>Portfolio</div>
        </Link>
        <Link href="/experience">
          <div className={styles.link}>Experience</div>
        </Link>
        <Link href="/contact">
          <div className={styles.link}>Contact</div>
        </Link>
        <a
          href="https://www.linkedin.com/in/katesheldon18/"
          className={styles.icon}
          target="_blank"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/katesheldon18/"
          className={styles.icon}
          target="_blank"
        >
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
};
