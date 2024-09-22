import SimilarProjectItem from "./similarProjectItem/SimilarProjectItem";
import styles from "./SimilarProjects.module.css";

const SimilarProjects = () => {
  return (
    <section className={styles.similar__projects_section}>
      <div className="container">
        <div className={styles.similar__project_wrapper}>
          <h3 className={styles.similar__wrapper_title}>Similar projects:</h3>
          <div className={styles.similar__wrapper_main}>
            <SimilarProjectItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimilarProjects;
