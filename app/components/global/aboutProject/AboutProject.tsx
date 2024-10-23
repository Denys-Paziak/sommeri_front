import AboutProjectTopBar from "@/app/components/global/aboutProject/aboutProjectTopBar/AboutProjectTopBar";
import AboutProjectBanner from "@/app/components/global/aboutProject/aboutProjectBanner/AboutProjectBanner";
import AboutProjectInfo from "@/app/components/global/aboutProject/aboutProjectInfo/AboutProjectInfo";
import AboutProjectFrame from "@/app/components/global/aboutProject/aboutProjectFrame/AboutProjectFrame";
import AboutProjectMockup from "@/app/components/global/aboutProject/aboutProjectMockup/AboutProjectMockup";
import AboutProjectGalery from "@/app/components/global/aboutProject/aboutProjectGalery/AboutProjectGalery";
import { ProjectInterface } from "@/app/utils/interfaces/project";
import AboutProjectSimilar from "./aboutProjectSimilar/AboutProjectSimilar";
import ClientsSay from "@/app/components/pages/home/clientsSay/ClientsSay";
import Contact from "@/app/components/pages/home/contact/Contact";
import { getReviews } from "@/app/utils/server/server";
import Loader from "@/app/components/global/loader/Loader";

const AboutProject = async ({ project }: { project: ProjectInterface }) => {
  let reviews = await getReviews();

  if (!reviews) {
    return <Loader />;
  }

  return (
    <main>
      <AboutProjectTopBar project={project} />
      <AboutProjectBanner project={project} />
      <AboutProjectInfo project={project} />
      <AboutProjectFrame project={project} />
      <AboutProjectMockup project={project} />
      <AboutProjectGalery project={project} />
      <AboutProjectSimilar url={project.url} />
      <ClientsSay reviews={reviews} />
      <Contact />
    </main>
  );
};

export default AboutProject;
