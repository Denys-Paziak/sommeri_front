import styles from "./AboutProjectMockup.module.css";
import { ProjectInterface } from "@/app/utils/interfaces/project";
import ImageServer from "@/app/components/UI/imageServer/imageServer";
import { useTranslations } from "next-intl";
import AnimatedWrapper from "@/app/components/UI/scrollAnimationWrapper/ScrollAnimationWrapper";

const AboutProjectMockup = ({ project }: { project: ProjectInterface }) => {
  const t = useTranslations("aboutProject");

  return (
    <section className={styles.project__mockup_section}>
      <div className="container">
        <div className={styles.project__mockup_wrapper}>

          <AnimatedWrapper type="fade-up" duration={1.2}>
            <div className={styles.project__info_block}>
              <h3 className={styles.project__block_subtitle}>
                {t("weDidTitle")}
              </h3>
              <p className={styles.project__block_text}>{project.We_did_1}</p>
            </div>
          </AnimatedWrapper>


          <AnimatedWrapper type="fade-up" duration={1.2}>
            <div className={styles.project__wrapper_inner}>
              {project.Mokup_2 && (
                <div className={styles.project__frame_image}>
                  <ImageServer link={project.Mokup_2 && project.Mokup_2.url} />
                </div>
              )}
              {project.Mokup_3 && (
                <div className={styles.project__frame_image}>
                  <ImageServer link={project.Mokup_3 && project.Mokup_3.url} />
                </div>
              )}
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper type="fade-up" duration={1.2}>
            <div className={styles.project__info_block}>
              <p className={styles.project__block_text}>{project.We_did_2}</p>
            </div>
          </AnimatedWrapper>
        </div>

      </div>
    </section>
  );
};

export default AboutProjectMockup;
