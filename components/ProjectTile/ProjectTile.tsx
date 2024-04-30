import { motion } from "framer-motion";
import styles from "./ProjectTile.module.scss";

type Props = {
  title: string;
  link: string;
  description: string;
};

export const ProjectTile = (props: Props) => {
  return (
    <motion.div
      className={styles.base}
      whileInView={{ opacity: 1 }}
      style={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className={styles.title}>{props.title}</div>
      <div className={styles.link}>{props.link}</div>
      {/* <div className={styles.icons}>* icons *</div> */}
      <div>{props.description}</div>
    </motion.div>
  );
};
