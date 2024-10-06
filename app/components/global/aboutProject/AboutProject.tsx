import AboutProjectTopBar from "@/app/components/global/aboutProject/aboutProjectTopBar/AboutProjectTopBar";
import AboutProjectBanner from "@/app/components/global/aboutProject/aboutProjectBanner/AboutProjectBanner";
import AboutProjectInfo from "@/app/components/global/aboutProject/aboutProjectInfo/AboutProjectInfo";
import AboutProjectFrame from "@/app/components/global/aboutProject/aboutProjectFrame/AboutProjectFrame";
import AboutProjectMockup from "@/app/components/global/aboutProject/aboutProjectMockup/AboutProjectMockup";
import AboutProjectGalery from "@/app/components/global/aboutProject/aboutProjectGalery/AboutProjectGalery";
import { ProjectInterface } from "@/app/project/[id]/ProjectInterface";
import AboutProjectSimilar from "./aboutProjectSimilar/AboutProjectSimilar";
import AboutProjectReviews from "./aboutProjectReviews/AboutProjectReviews";

const AboutProject = ({ project }: { project: ProjectInterface }) => {
  return (
    <main>
      <AboutProjectTopBar project={project} />
      <AboutProjectBanner project={project} />
      <AboutProjectInfo project={project} />
      <AboutProjectFrame project={project} />
      <AboutProjectMockup project={project} />
      <AboutProjectGalery project={project} />
      {/* <AboutProjectSimilar project={project} /> */}
      <AboutProjectReviews />
    </main>
  );
};

export default AboutProject;
