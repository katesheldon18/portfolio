import React from "react";
import styles from "./index.module.scss";
import { Navigation } from "../components/Navigation/Navigation";
import Document from "./_document";
import { motion } from "framer-motion";
import { ProjectTile } from "../components/ProjectTile/ProjectTile";

export default function Page() {
  return (
    <div className={styles.base}>
      <Navigation />
      <div className={styles.welcome}>
        <span className={styles.name}>My Projects.</span>
      </div>
      <div className={styles.projectsContainer}>
        <ProjectTile
          title={"SEO WEBSITE CRAWLER"}
          link={"https://www.github.com"}
          description={"SEO spider to crawl websites."}
        />
        <ProjectTile
          title={"BITFINDER"}
          link={"https://www.github.com"}
          description={"Kate, it's my bitfinder!"}
        />
      </div>
    </div>
  );
}
