import { motion } from "framer-motion";
import styles from "./ProjectTile.module.scss";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";

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
      <div className={styles.header}>
        <div className={styles.title}>{props.title} </div>
        <a href={props.link} target="_blank" className={styles.link}>
          <OpenInNewOutlinedIcon />
        </a>
      </div>
      <div className={styles.description}>{props.description}</div>
    </motion.div>
  );
};
