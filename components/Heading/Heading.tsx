import styles from "./Heading.module.scss";

type Props = {
  heading: string;
};

export const Heading = (props: Props) => {
  return (
    <div className={styles.headingWrap}>
      <span className={styles.heading}>{props.heading}</span>
    </div>
  );
};
