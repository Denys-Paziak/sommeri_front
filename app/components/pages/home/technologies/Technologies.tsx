import styles from "./Technologies.module.css";
import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";
import SectionWrapper from "@/app/components/UI/sectionWrapper/SectionWrapper";
import { useTranslations, useLocale } from "next-intl";
import AnimatedWrapper from "@/app/components/UI/scrollAnimationWrapper/ScrollAnimationWrapper";
import Image from "next/image";
import { backHost } from "@/app/utils/server/server";

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

const Technologies = ({ technologies }) => {
  const t = useTranslations("home.technologies");
  const leftCol = technologies.filter((el) => !el.right);
  const rightCol = technologies.filter((el) => el.right);

  return (
    <SectionWrapper sectionId="technologies">
      <div className="container">
        <div className={styles.technologies__wrapper}>

          <AnimatedWrapper type="fade-up" duration={1.4}>
            <TitleWrapper>{t("title")}</TitleWrapper>
          </AnimatedWrapper>


          <div className={styles.technologies__wrapper_main}>
            <div className={styles.technologies__main_column}>
              {leftCol && leftCol
                .map((el) => <Box key={el.id} data={el} />)}
            </div>
            <div className={styles.technologies__main_line}></div>
            <div className={styles.technologies__main_column}>
              {rightCol && rightCol
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
    <AnimatedWrapper duration={1.4} className={styles.technologies__column_box}>
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
    </AnimatedWrapper>
  );
};

export default Technologies;
