"use client";
import styles from "./MasonryGrid.module.css";

const MasonryGrid = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.masonryGrid}>{children}</div>;
};

export default MasonryGrid;
