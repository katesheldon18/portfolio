import React from "react";
import styles from "./contact.module.scss";
import { Navigation } from "../../components/Navigation/Navigation";
import { Heading } from "../../components/Heading/Heading";
import { Footer } from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import Document from "./../_document";

export default function Page() {
  return (
    <div className={styles.base}>
      <Navigation />
      <Heading heading="Get in touch." />
      <div className={styles.text}>Contact form coming soon.</div>
      <Footer />
    </div>
  );
}
