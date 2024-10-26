import AboutProject from "@/app/components/global/aboutProject/AboutProject";
import { getProject } from "@/app/utils/server/server";

const Project = async ({
  params,
}: {
  params: { id: string; locale: string };
}) => {
  const project: any = await getProject(params.id, params.locale);

  return <div>{project && <AboutProject project={project} />}</div>;
};

export default Project;
