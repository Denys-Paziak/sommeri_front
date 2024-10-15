import React from "react";
import styles from "./TitleWrapper.module.css";

interface iProps {
  children: React.ReactNode;
}

const TitleWrapper = ({ children }: iProps) => {
  return <h2 className={styles.title}>{children}</h2>;
};

export default TitleWrapper;
