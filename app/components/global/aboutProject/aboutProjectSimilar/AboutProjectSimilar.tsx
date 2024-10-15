import styles from "./AboutProjectSimilar.module.css";
import {getSimilars} from "@/app/utils/server/server";
import {ProjectInterface} from "@/app/utils/interfaces/project";
import SimilarProjectItems from "@/app/components/global/similarProjects/SimilarProjectItems";

const AboutProjectSimilar = async ({url}: {url: string}) => {
    const projects: ProjectInterface[] = await getSimilars(url);
    return (
        <>
            {projects.length > 0 && <section className={styles.similar__projects_section}>
                <div className="container">
                    <div className={styles.similar__project_wrapper}>
                        <h3 className={styles.similar__wrapper_title}>Similar projects:</h3>
                        <SimilarProjectItems projects={projects}/>
                    </div>
                </div>
            </section>}

        </>
    );
};

export default AboutProjectSimilar;
