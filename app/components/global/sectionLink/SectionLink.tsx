"use client";

import { handleScroll } from "@/app/helpers/scrollHelper/ScrollHelper";
import styles from "./SectionLink.module.css";
import { ReactNode } from "react";

interface SectionLinkProps {
  link: string;
  name: string;
}

const SectionLink = ({ link, name }: SectionLinkProps) => {
  return (
    <li className={styles.section__list_item}>
      <a
        onClick={() => handleScroll(link)}
        className={styles.section__item_link}
      >
        {name}
      </a>
    </li>
  );
};

export default SectionLink;
