import styles from "./AboutProjectInfo.module.css";
import LineVector from "@/app/components/lineVector/LineVector";
import {ProjectInterface} from "@/app/project/[id]/ProjectInterface";

const AboutProjectInfo = ({project}: {project: ProjectInterface}) => {
  return (
    <section className={styles.project__info_section}>
      <div className="container">
        <div className={styles.project__info_wrapper}>
          <div className={styles.project__wrapper_inner}>
            <div className={styles.project__inner_block}>
              <h3 className={styles.project__block_subtitle}>
                About the project:
              </h3>
              <p className={styles.project__block_text}>
                {project.attributes.About_the_project}
              </p>
            </div>
            <div className={styles.project__inner_block}>
              <h3 className={styles.project__block_subtitle}>Objectives:</h3>
              <p className={styles.project__block_text}>
                {project.attributes.Objectives}
              </p>
            </div>
            <div className={styles.project__inner_block}>
              <h3 className={styles.project__block_subtitle}>Solution:</h3>
              <p className={styles.project__block_text}>
                {project.attributes.Solution}
              </p>
            </div>
            <div className={styles.project__inner_block}>
              <h3 className={styles.project__block_subtitle}>Technologies:</h3>
              <div className={styles.project__block_technologies}>
                {project.attributes.Technologies.map((technologi) => {
                  return <span className={styles.project__technologies_item}>{technologi}</span>
                })}
              </div>
            </div>
          </div>
          <div className={styles.project__info_vector}>
            <LineVector/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProjectInfo;
