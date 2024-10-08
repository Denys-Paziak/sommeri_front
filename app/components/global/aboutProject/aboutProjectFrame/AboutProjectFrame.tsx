import styles from "./AboutProjectFrame.module.css";
import {ProjectInterface} from "@/app/project/[id]/ProjectInterface";
import ImageServer from "@/app/components/UI/imageServer/imageServer";

const AboutProjectFrame = ({project}: {project: ProjectInterface}) => {
  return (
    <section className={styles.project__frame_section}>
      <div className="container">
        <div className={styles.project__frame_wrapper}>
            <div className={styles.project__frame_image}>
                <ImageServer link={project.Mokap_1 && project.Mokap_1.url}/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProjectFrame;
