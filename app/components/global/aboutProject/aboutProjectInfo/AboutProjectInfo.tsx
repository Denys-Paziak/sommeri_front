import AnimatedWrapper from "@/app/components/UI/scrollAnimationWrapper/ScrollAnimationWrapper";
import styles from "./AboutProjectInfo.module.css";
import { ProjectInterface } from "@/app/utils/interfaces/project";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

const DynamicLineVectorComponent = dynamic(
  () => import("@/app/components/global/lineVector/LineVector"),
  {
    ssr: false,
  }
);

const AboutProjectInfo = ({ project }: { project: ProjectInterface }) => {
  const t = useTranslations("aboutProject");

  return (
    <section className={styles.project__info_section}>
      <div className="container">
        <div className={styles.project__info_wrapper}>
          <div className={styles.project__wrapper_inner}>
            <AnimatedWrapper type="fade-up" duration={1.2}>
              {project.About_the_project && (
                <div className={styles.project__inner_block}>
                  <h3 className={styles.project__block_subtitle}>
                    {t("aboutTitle")}
                  </h3>
                  <p className={styles.project__block_text}>
                    {project.About_the_project}
                  </p>
                </div>
              )}
            </AnimatedWrapper>

            <AnimatedWrapper type="fade-up" duration={1.2}>
              {project.Objectives && (
                <div className={styles.project__inner_block}>
                  <h3 className={styles.project__block_subtitle}>
                    {t("objectivesTitle")}
                  </h3>
                  <p className={styles.project__block_text}>
                    {project.Objectives}
                  </p>
                </div>
              )}
            </AnimatedWrapper>

            <AnimatedWrapper type="fade-up" duration={1.2}>
              {project.Solution && (
                <div className={styles.project__inner_block}>
                  <h3 className={styles.project__block_subtitle}>
                    {t("solutionTitle")}
                  </h3>
                  <p className={styles.project__block_text}>
                    {project.Solution}
                  </p>
                </div>
              )}
            </AnimatedWrapper>

            <AnimatedWrapper type="fade-up" duration={1.2}>
              <div className={styles.project__inner_block}>
                <h3 className={styles.project__block_subtitle}>
                  {t("technologiesTitle")}
                </h3>
                <div className={styles.project__block_technologies}>
                  {project.technologies &&
                    project.technologies.map(
                      (technology: { Name: string }, index: number) => {
                        return (
                          <span
                            key={index + Date.now()}
                            className={styles.project__technologies_item}
                          >
                            {technology.Name}
                          </span>
                        );
                      }
                    )}
                </div>
              </div>
            </AnimatedWrapper>
          </div>
          <div className={styles.project__info_vector}>
            <DynamicLineVectorComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProjectInfo;
