import Header from "@/app/components/global/header/Header";
import AboutProject from "@/app/components/global/aboutProject/AboutProject";
import Footer from "@/app/components/global/footer/Footer";
import { getProject } from "@/app/utils/server/server";
import { ProjectInterface } from "@/app/project/[id]/ProjectInterface";

import CustomCursor from "@/app/components/UI/customCursor/CustomCursor";


const Project = async ({ params }: { params: { id: string } }) => {
    let project: ProjectInterface | undefined = undefined;

    try {
        const data: any = await getProject(params.id);
        project = data.json();
    }catch (error) {
        console.error("Error fetching project:", error);
    }


    return (
    <div>
      <CustomCursor />
      <Header />
      {project && <AboutProject project={project} />}
      <Footer />
    </div>
  );

};

export default Project;
