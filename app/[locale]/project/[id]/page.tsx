import Header from "@/app/components/global/header/Header";
import AboutProject from "@/app/components/global/aboutProject/AboutProject";
import Footer from "@/app/components/global/footer/Footer";
import { getProject } from "@/app/utils/server/server";
import CustomCursor from "@/app/components/UI/customCursor/CustomCursor";
import ThanksPopup from "@/app/components/global/thanksPopup/ThanksPopup";
import ContactFormPopup from "@/app/components/global/contactFormPopup/ContactFormPopup";
import QuickContacts from "@/app/components/global/quickContacts/QuickContacts";

const Project = async ({ params }: { params: { id: string } }) => {
  const project: any = await getProject(params.id);

  return (
    <div>
      <CustomCursor />
      <ContactFormPopup />
      <ThanksPopup />
      <QuickContacts />
      <Header />
      {project && <AboutProject project={project} />}
      <Footer />
    </div>
  );
};

export default Project;
