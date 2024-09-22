import styles from "./AboutProjectMockup.module.css";
import {ProjectInterface} from "@/app/project/[id]/ProjectInterface";
import ImageServer from "@/app/components/UI/imageServer/imageServer";

const AboutProjectMockup = ({project}: {project: ProjectInterface}) => {
  return (
    <section className={styles.project__mockup_section}>
      <div className="container">
        <div className={styles.project__mockup_wrapper}>
          <div className={styles.project__info_block}>
            <h3 className={styles.project__block_subtitle}>We did:</h3>
            <p className={styles.project__block_text}>
              {project.attributes.We_did}
            </p>
          </div>
          <div className={styles.project__wrapper_inner}>
            <ImageServer link={project.attributes.About_project_mockup.data.attributes.url}/>
          </div>
          <div className={styles.project__info_block}>
            <p className={styles.project__block_text}>
              {project.attributes.We_did_2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProjectMockup;
