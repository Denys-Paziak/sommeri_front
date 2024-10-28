"use client";

import { handleScroll } from "@/app/helpers/scrollHelper/ScrollHelper";
import styles from "./SectionLink.module.css";
import Link from "next/link";

interface SectionLinkProps {
  link: string;
  name: string;
}

const SectionLink = ({ link, name }: SectionLinkProps) => {
  return (
    <li className={styles.section__list_item}>
      <Link
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleScroll(link);
        }}
        className={styles.section__item_link}
      >
        {name}
      </Link>
    </li>
  );
};

export default SectionLink;
