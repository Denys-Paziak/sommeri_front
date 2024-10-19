import React from "react";
import styles from "./PopupWrapper.module.css";

interface iProps {
  children: React.ReactNode;
}

const PopupWrapper = ({ children }: iProps) => {
  return <div className={styles.popup__wrap}>{children}</div>;
};

export default PopupWrapper;
