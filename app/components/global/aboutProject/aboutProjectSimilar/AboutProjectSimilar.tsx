import styles from "./AboutProjectSimilar.module.css";
import { getSimilars } from "@/app/utils/server/server";
import { ProjectInterface } from "@/app/utils/interfaces/project";
import SimilarProjectItems from "@/app/components/global/similarProjects/SimilarProjectItems";
import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";

const AboutProjectSimilar = async ({ url }: { url: string }) => {
  const projects: ProjectInterface[] = await getSimilars(url);

  return (
    <>
      {projects.length > 0 && (
        <section className={styles.similar__projects_section}>
          <div className="container">
            <div className={styles.similar__project_wrapper}>
              <div className={styles.similar__wrapper_heading}>
                <TitleWrapper>Similar projects</TitleWrapper>
                <p className={styles.similar__heading_subtitle}>
                  Explore other projects we’ve delivered for clients who sought
                  tailored solutions for their websites. Each one showcases our
                  approach to creating high-quality and functional web products.
                </p>
              </div>
              <SimilarProjectItems projects={projects} />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AboutProjectSimilar;
