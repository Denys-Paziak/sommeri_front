import React from "react";
import styles from "./SectionWrapper.module.css";

interface iProps {
  children: React.ReactNode;
  sectionId?: string;
}

const SectionWrapper = ({ children, sectionId }: iProps) => {
  return (
    <section id={sectionId ? sectionId : ""} className={styles.section}>
      {children}
    </section>
  );
};

export default SectionWrapper;
