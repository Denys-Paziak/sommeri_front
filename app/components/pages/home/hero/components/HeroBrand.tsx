import React, { FC } from "react";
import styles from "../Hero.module.css";

interface Props {
  brand: { image_path: string };
}

const HeroBrand: FC<Props> = ({ brand }) => {
  return (
    <li className={styles.hero__brands_item}>
      <img
        src={`../../images/${brand.image_path}.svg`}
        alt="brand logo"
        className={styles.hero__brands_logo}
      />
    </li>
  );
};

export default HeroBrand;
