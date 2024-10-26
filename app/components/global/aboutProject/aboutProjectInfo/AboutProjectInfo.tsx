import styles from "./AboutProjectInfo.module.css";
import LineVector from "@/app/components/global/lineVector/LineVector";
import { ProjectInterface } from "@/app/[locale]/project/[id]/ProjectInterface";

const AboutProjectInfo = ({ project }: { project: ProjectInterface }) => {

  console.log(project)

  return (
    <section className={styles.project__info_section}>
      <div className="container">
        <div className={styles.project__info_wrapper}>
          <div className={styles.project__wrapper_inner}>
            {project.About_the_project && (
              <div className={styles.project__inner_block}>
                <h3 className={styles.project__block_subtitle}>
                  About the project:
                </h3>
                <p className={styles.project__block_text}>
                  {project.About_the_project}
                </p>
              </div>
            )}

            {project.Objectives && (
              <div className={styles.project__inner_block}>
                <h3 className={styles.project__block_subtitle}>Objectives:</h3>
                <p className={styles.project__block_text}>
                  {project.Objectives}
                </p>
              </div>
            )}

            {project.Solution && (
              <div className={styles.project__inner_block}>
                <h3 className={styles.project__block_subtitle}>Solution:</h3>
                <p className={styles.project__block_text}>{project.Solution}</p>
              </div>
            )}

            <div className={styles.project__inner_block}>
              <h3 className={styles.project__block_subtitle}>Technologies:</h3>
              <div className={styles.project__block_technologies}>
                {project.technologies && project.technologies.map((technology: { Name: string }) => {
                  return (
                    <span className={styles.project__technologies_item}>
                      {technology.Name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.project__info_vector}>
            <LineVector />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProjectInfo;
