import React from "react";
import styles from "./experience.module.scss";
import { Navigation } from "../../components/Navigation/Navigation";
import { Heading } from "../../components/Heading/Heading";
import { motion } from "framer-motion";
import Document from "./../_document";

export default function Page() {
  return (
    <div className={styles.base}>
      <Navigation />
      <Heading heading="My Experience." />
      <div className={styles.columnContainer}>
        <div className={styles.leftColumn}>
          <motion.div
            whileInView={{ opacity: 1 }}
            style={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className={styles.experience}
          >
            <div className={styles.dateRange}>June 2023 - present</div>
            <div className={styles.jobTitle}>
              Career Break & Self-Directed Study
            </div>
            <div className={styles.jobDescription}>
              I spent 3 months in Cape Cod, Massachusetts, where I had the
              opportunity to coach a competitive youth sailing team. Since
              returning home to Auckland I’ve been focused on self-directed
              study to gain knowledge in React, Vue & Node.
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            style={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className={styles.experience}
          >
            <div className={styles.dateRange}>Jan 2021 - Sept 2021</div>
            <div className={styles.jobTitle}>SEO Specialist</div>
            <div className={styles.employer}>YoungShand.</div>
            <div className={styles.jobDescription}>
              SEO Specialist for Creative Agency, worked across large NZ & AU
              clients creating and executing SEO strategies.
            </div>
          </motion.div>
        </div>
        <div className={styles.columnBreak}>
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
        <div className={styles.rightColumn}>
          <motion.div
            whileInView={{ opacity: 1 }}
            style={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className={styles.experience}
          >
            {" "}
            <div className={styles.dateRange}>2024 (part-time)</div>
            <div className={styles.jobTitle}>Frontend Developer</div>
            <div className={styles.employer}>Blackpepper</div>
            <div className={styles.jobDescription}>
              Vue / SASS / CSS Website development for large ecommerce clients
              across NZ & AU Collaboration & peer programming with my squad and
              the wider frontend team Working with client service team to
              understand task requirements, going through the task review
              process with senior developers and making improvements
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            style={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className={styles.experience}
          >
            <div className={styles.dateRange}>Sept 2021 - June 2023</div>
            <div className={styles.jobTitle}>Senior SEO Manager</div>
            <div className={styles.employer}>Blackpepper</div>
            <div className={styles.jobDescription}>
              Senior SEO Manager for ecommerce agency, managed large clients,
              technical auditing, Core Web Vitals upgrades.
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            style={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className={styles.experience}
          >
            <div className={styles.dateRange}>May 2020 - Jan 2021</div>
            <div className={styles.jobTitle}>SEO Specialist</div>
            <div className={styles.employer}>Firefly Digital</div>
            <div className={styles.jobDescription}>
              SEO Specialist for NZ digital agency working across small NZ
              clients and Australian law firms. Managed a team of contract
              content writers.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
