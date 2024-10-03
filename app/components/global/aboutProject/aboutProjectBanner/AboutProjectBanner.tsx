import styles from "./AboutProjectBanner.module.css";
import {ProjectInterface} from "@/app/project/[id]/ProjectInterface";
import ImageServer from "@/app/components/UI/imageServer/imageServer";

const AboutProjectBanner = ({project}: {project: ProjectInterface}) => {
  return (
    <section className={styles.project__banner_section}>
      <div className={styles.project__banner_wrapper}>
          <div className={styles.project__banner_image}>
              <ImageServer link={project.Hero_image.url}/>
          </div>
      </div>
    </section>
  );
};

export default AboutProjectBanner;
