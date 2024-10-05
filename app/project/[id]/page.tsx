import Header from "@/app/components/global/header/Header";
import Footer from "@/app/components/global/footer/Footer";
import AboutProject from "@/app/components/global/aboutProject/AboutProject";
import { getProject } from "@/app/utils/server/server";
import { ProjectInterface } from "@/app/project/[id]/ProjectInterface";
import CustomCursor from "@/app/components/UI/customCursor/CustomCursor";

const Project = async ({ params }: { params: { id: string } }) => {
  const res: any = await getProject(params.id);
  const { data }: { data: ProjectInterface } = await res.json();

  return (
    <div>
      <CustomCursor />
      <Header />
      <AboutProject project={data} />
      <Footer />
    </div>
  );
};

export default Project;
