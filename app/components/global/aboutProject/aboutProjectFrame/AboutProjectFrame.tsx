import styles from "./AboutProjectFrame.module.css";
import { ProjectInterface } from "@/app/utils/interfaces/project";
import ImageServer from "@/app/components/UI/imageServer/imageServer";
import AnimatedWrapper from "@/app/components/UI/scrollAnimationWrapper/ScrollAnimationWrapper";

const AboutProjectFrame = ({ project }: { project: ProjectInterface }) => {
  return (
    <section className={styles.project__frame_section}>
      <div className="container">
        <AnimatedWrapper type="fade-up" duration={1.2}>
          {project.Objectives && (
            <div className={styles.project__frame_wrapper}>
              <div className={styles.project__frame_image}>
                <ImageServer link={project.Mokap_1 && project.Mokap_1.url} />
              </div>
            </div>
          )}
        </AnimatedWrapper>

      </div>
    </section>
  );
};

export default AboutProjectFrame;
