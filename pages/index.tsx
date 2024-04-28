import React from "react";
import styles from "./index.module.scss";
import { Navigation } from "../components/Navigation/Navigation";
import Document from "./_document";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className={styles.base}>
      <Navigation />
      <div className={styles.welcome}>
        Hi, my name is <br />
        <span className={styles.name}>Kate.</span>
      </div>
      <motion.div
        className={styles.content}
        whileInView={{ opacity: 1 }}
        style={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <span className={styles.heading}>About me.</span>
        <div className={styles.text}>
          I am a self-taught software developer with frontend work experience
          and a background in Search Engine Optimisation. After a fulfilling
          career break, I am now seeking a full-time role.
        </div>
      </motion.div>
    </div>
  );
}
