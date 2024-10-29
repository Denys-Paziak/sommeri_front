import styles from "./AboutProjectBanner.module.css";
import { ProjectInterface } from "@/app/utils/interfaces/project";
import ImageServer from "@/app/components/UI/imageServer/imageServer";
import AnimatedWrapper from "@/app/components/UI/scrollAnimationWrapper/ScrollAnimationWrapper";

const AboutProjectBanner = ({ project }: { project: ProjectInterface }) => {
  return (
    <section className={styles.project__banner_section}>
      <AnimatedWrapper type="fade-up" duration={1.2} delay={1.6}>
        <div className={styles.project__banner_wrapper}>
          <div className={styles.project__banner_image}>
            <ImageServer link={project.Hero_image && project.Hero_image.url} />
          </div>
        </div>
      </AnimatedWrapper>
    </section>
  );
};

export default AboutProjectBanner;
