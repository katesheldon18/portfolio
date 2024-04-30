import React from "react";
import styles from "./portfolio.module.scss";
import { Navigation } from "../../components/Navigation/Navigation";
import { Heading } from "../../components/Heading/Heading";
import { Footer } from "../../components/Footer/Footer";
import Document from "./../_document";
import { motion } from "framer-motion";
import { ProjectTile } from "../../components/ProjectTile/ProjectTile";

export default function Page() {
  return (
    <div className={styles.base}>
      <Navigation />
      <Heading heading="My Projects." />
      <div className={styles.container}>
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
      <Footer />
    </div>
  );
}
