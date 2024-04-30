import React from "react";
import styles from "./experience.module.scss";
import { Navigation } from "../../components/Navigation/Navigation";
import { Heading } from "../../components/Heading/Heading";
import { Experience } from "../../components/Experience/Experience";
import { Footer } from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import Document from "./../_document";

export default function Page() {
  return (
    <div className={styles.base}>
      <Navigation />
      <Heading heading="My Experience." />
      <div className={styles["column-container"]}>
        <div className={styles["left-column"]}>
          <Experience
            date-range="June 2023 - present"
            job-title="Career Break & Self-Directed Study"
            employer=""
            job-description="I spent 3 months in Cape Cod, Massachusetts, where I had the opportunity
        to coach a competitive youth sailing team. Since returning home to
        Auckland I’ve been focused on self-directed study to gain knowledge in
        React, Vue & Node."
          />
          <div className={styles["space-below"]}></div>
          <Experience
            date-range="Jan 2021 - Sept 2021"
            job-title="SEO Specialist"
            employer="YoungShand"
            job-description="SEO Specialist for Creative Agency, worked across large NZ & AU
              clients creating and executing SEO strategies."
          />
        </div>
        <div className={styles["column-break"]}>
          <div className={styles.circle}></div>
          <div className={styles.line}></div>
          <div className={styles.circle}></div>
          <div className={styles.line}></div>
          <div className={styles.circle}></div>
          <div className={styles.line}></div>
          <div className={styles.circle}></div>
          <div className={styles.line}></div>
          <div className={styles.circle}></div>
        </div>
        <div className={styles["right-column"]}>
          <Experience
            date-range="2024 (part-time)"
            job-title="Frontend Developer"
            employer="Blackpepper"
            job-description="Vue / SASS / CSS Website development for large ecommerce clients
              across NZ & AU Collaboration & peer programming with my squad and
              the wider frontend team Working with client service team to
              understand task requirements, going through the task review
              process with senior developers and making improvements."
          />
          <div className={styles["space-below"]}></div>
          <Experience
            date-range="Sept 2021 - June 2023"
            job-title="Senior SEO Manager"
            employer="Blackpepper"
            job-description="Senior SEO Manager for ecommerce agency, managed large clients,
              technical auditing, Core Web Vitals upgrades."
          />
          <div className={styles["space-below"]}></div>
          <Experience
            date-range="May 2020 - Jan 2021"
            job-title="SEO Specialist"
            employer="Firefly Digital"
            job-description="SEO Specialist for NZ digital agency working across small NZ
              clients and Australian law firms. Managed a team of contract
              content writers."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
