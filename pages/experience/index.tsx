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
        Auckland I've been focused on self-directed study to gain knowledge in
        React, Vue & Node."
          />
          <div className={styles["space-below"]}></div>
          <Experience
            date-range="Jan 2021 - Sept 2021"
            job-title="SEO Specialist"
            employer="YoungShand"
            job-description="YoungShand is a creative & digital agency in Auckland. I worked across large NZ & AU
              brands, creating and executing SEO strategies to increase organic traffic."
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
            job-description="Vue / SASS / CSS website development. Following my career break I have returned to Blackpepper as a frontend developer part time. I complete frontend tasks for large ecommerce clients, working with devs and client service teams."
          />
          <div className={styles["space-below"]}></div>
          <Experience
            date-range="Sept 2021 - June 2023"
            job-title="Senior SEO Manager"
            employer="Blackpepper"
            job-description="I managed and grew Blackpepper's portfolio of ecommerce SEO clients. I was responsible for ensuring a high quality of work from the SEO team, and for client retention. Work included technical audits, on-page and off-page SEO."
          />
          <div className={styles["space-below"]}></div>
          <Experience
            date-range="May 2020 - Jan 2021"
            job-title="SEO Specialist"
            employer="Firefly Digital"
            job-description="I worked with small to medium sized businesses across NZ & AU. Main responsibilities included content writing, on-page and technical SEO. Managed a team of contract
              content writers."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
