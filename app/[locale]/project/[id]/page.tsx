import Header from "@/app/components/global/header/Header";
import AboutProject from "@/app/components/global/aboutProject/AboutProject";
import Footer from "@/app/components/global/footer/Footer";
import { getProject } from "@/app/utils/server/server";
import CustomCursor from "@/app/components/UI/customCursor/CustomCursor";
import ThanksPopup from "@/app/components/global/thanksPopup/ThanksPopup";
import ContactFormPopup from "@/app/components/global/contactFormPopup/ContactFormPopup";
import QuickContacts from "@/app/components/global/quickContacts/QuickContacts";
import Loader from "@/app/components/global/loader/Loader";

const Project = async ({ params }: { params: { id: string } }) => {
  const project: any = await getProject(params.id);

    if (!project ) {
        return  <Loader/>
    }

  return (
    <div>
      {project && <AboutProject project={project} />}
    </div>
  );
};

export default Project;
