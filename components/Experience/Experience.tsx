import styles from "./Experience.module.scss";
import { motion } from "framer-motion";

type Props = {
  ["date-range"]: string;
  ["job-title"]: string;
  employer: string;
  ["job-description"]: string;
};

export const Experience = (props: Props) => {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      style={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className={styles.experience}
    >
      <div className={styles["date-range"]}>{props["date-range"]}</div>
      <div className={styles["job-title"]}>{props["job-title"]}</div>
      <div className={styles.employer}>{props.employer}</div>
      <div className={styles["job-description"]}>
        {props["job-description"]}
      </div>
    </motion.div>
  );
};
