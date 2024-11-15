"use client";

import styles from "./SectionLink.module.css";
import Link from "next/link";

interface SectionLinkProps {
  link: string;
  name: string;
  closeBurgerMenu?: () => void;
}

const SectionLink = ({ link, name, closeBurgerMenu }: SectionLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (closeBurgerMenu) {
      closeBurgerMenu();
    }
  };

  return (
    <li className={styles.section__list_item}>
      <Link
        href={`/#${link}`}
        onClick={handleClick}
        className={styles.section__item_link}
      >
        {name}
      </Link>
    </li>
  );
};

export default SectionLink;
