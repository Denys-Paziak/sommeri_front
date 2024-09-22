import styles from "./AboutProjectFrame.module.css";
import {ProjectInterface} from "@/app/project/[id]/ProjectInterface";
import ImageServer from "@/app/components/UI/imageServer/imageServer";

const AboutProjectFrame = ({project}: {project: ProjectInterface}) => {
  return (
    <section className={styles.project__frame_section}>
      <div className="container">
        <div className={styles.project__frame_wrapper}>
            <ImageServer link={project.attributes.About_project_frame.data.attributes.url}/>
        </div>
      </div>
    </section>
  );
};

export default AboutProjectFrame;
