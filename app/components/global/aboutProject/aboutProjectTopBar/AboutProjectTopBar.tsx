import styles from "./AboutProjectTopBar.module.css";
import { ProjectInterface } from "@/app/utils/interfaces/project";
import { useTranslations } from "next-intl";
import AnimatedWrapper from "@/app/components/UI/scrollAnimationWrapper/ScrollAnimationWrapper";

const AboutProjectTopBar = ({ project }: { project: ProjectInterface }) => {
  const t = useTranslations("aboutProject");

  return (
    <section className={styles.project__top_section}>
      <div className="container">
        <div className={styles.project__top_wrapper}>
          <div className={styles.project__top_info}>

            <AnimatedWrapper type="fade-up" duration={1.2}>
              <h2 className={styles.project__top_name}>{project.Name}</h2>
            </AnimatedWrapper>

            <AnimatedWrapper type="fade-up" duration={1.2}>
              <p className={styles.project__top_type}>
                {project.Category && project.Category.Name}
              </p>
            </AnimatedWrapper>
          </div>

          {project.Visit && <AnimatedWrapper type="fade-up" duration={1.2}>

            <button
              aria-label="visit website"
              className={styles.project__top_visit}
              type="button"
            >
              <a target="_blank" href={project.Visit}>
                {" "}
                <span className={styles.project__visit_text}>Visit</span>
              </a>
              <span className={styles.project__visit_icon}>
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9498 1.55026L1.0503 11.4498M10.9498 1.55026L10.9498 10.0355M10.9498 1.55026L2.46451 1.55026"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </AnimatedWrapper>}



        </div>
      </div>
    </section>
  );
};

export default AboutProjectTopBar;
