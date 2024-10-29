import styles from "./AboutProjectGalery.module.css";
import { ProjectInterface } from "@/app/utils/interfaces/project";
import ReactMarkdown from "react-markdown";
import React from "react";
import ImageServer from "@/app/components/UI/imageServer/imageServer";
import { useTranslations } from "next-intl";
import AnimatedWrapper from "@/app/components/UI/scrollAnimationWrapper/ScrollAnimationWrapper";

const AboutProjectGalery = ({ project }: { project: ProjectInterface }) => {
  const t = useTranslations("aboutProject");

  return (
    <section className={styles.project__galery_section}>
      <div className="container">
        <div className={styles.project__galery_wrapper}>
          <div className={styles.project__wrapper_banners}>
            {project.Galery &&
              project.Galery.map((image: { url: string }, index: number) => {
                return (
                  <div
                    key={index + Date.now()}
                    className={styles.project__banners_item}
                  >
                    <AnimatedWrapper type="fade-up" duration={1.2}>
                      <ImageServer link={image.url} />
                    </AnimatedWrapper>
                  </div>

                );
              })}
          </div>

          <div className={styles.project__wrapper_result}>
            <AnimatedWrapper type="fade-up" duration={1.2}>
              <div className={styles.project__inner_block}>
                <h3 className={styles.project__block_subtitle}>
                  {t("resultTitle")}
                </h3>
                <div className={styles.project__result_info}>
                  <div className={styles.project__block_text}>
                    <ReactMarkdown>{project.Result}</ReactMarkdown>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProjectGalery;
