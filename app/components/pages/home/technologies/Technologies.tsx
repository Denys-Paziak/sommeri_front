"use client";

import Image from "next/image";
import styles from "./Technologies.module.css";
import { backHost, getTechnologiesWay } from "@/app/utils/server/server";
import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";
import SectionWrapper from "@/app/components/UI/sectionWrapper/SectionWrapper";
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useState } from "react";
import AnimatedWrapper from "@/app/components/UI/scrollAnimationWrapper/ScrollAnimationWrapper";

interface Technology {
  id: string;
  name: string;
  description: string;
  technologies: {
    Name: string;
    image: {
      url: string;
    };
  }[];
  right?: boolean;
}

interface BoxProps {
  data: Technology;
}

const Technologies = () => {
  const [data, setData] = useState<Technology[]>([]);
  const t = useTranslations("home.technologies");
  const locale = useLocale();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getTechnologiesWay(locale);
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <SectionWrapper sectionId="technologies">
      <div className="container">
        <div className={styles.technologies__wrapper}>
          <TitleWrapper>{t("title")}</TitleWrapper>

          <div className={styles.technologies__wrapper_main}>
            <div className={styles.technologies__main_column}>
              {data &&
                data
                  .filter((el) => !el.right)
                  .map((el) => <Box key={el.id} data={el} />)}
            </div>
            <div className={styles.technologies__main_line}></div>
            <div className={styles.technologies__main_column}>
              {data &&
                data
                  .filter((el) => el.right)
                  .map((el) => <Box key={el.id} data={el} />)}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const Box: React.FC<BoxProps> = ({ data }) => {
  return (
    <div className={styles.technologies__column_box}>
      <h3 className={styles.technologies__box_name}>{data.name}</h3>
      <p className={styles.technologies__box_description}>{data.description}</p>
      <div className={styles.technologies__box_list}>
        {data.technologies &&
          data.technologies.map((technology) => (
            <div
              key={technology.Name}
              className={styles.technologies__list_item}
            >
              <Image
                src={backHost + technology.image.url}
                width={50}
                height={50}
                alt={technology.Name}
                className={styles.technologies__item_icon}
              />
              <p className={styles.technologies__item_name}>
                {technology.Name}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Technologies;
