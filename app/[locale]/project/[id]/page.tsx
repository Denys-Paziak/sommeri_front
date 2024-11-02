import dynamic from "next/dynamic";
import { getReviews, getProject } from "@/app/utils/server/server";
import Loader from "@/app/components/global/loader/Loader";

const DynamicAboutProjectTopBar = dynamic(
  () =>
    import(
      "@/app/components/global/aboutProject/aboutProjectTopBar/AboutProjectTopBar"
    )
);
const DynamicAboutProjectBanner = dynamic(
  () =>
    import(
      "@/app/components/global/aboutProject/aboutProjectBanner/AboutProjectBanner"
    )
);
const DynamicAboutProjectInfo = dynamic(
  () =>
    import(
      "@/app/components/global/aboutProject/aboutProjectInfo/AboutProjectInfo"
    )
);
const DynamicAboutProjectFrame = dynamic(
  () =>
    import(
      "@/app/components/global/aboutProject/aboutProjectFrame/AboutProjectFrame"
    )
);
const DynamicAboutProjectMockup = dynamic(
  () =>
    import(
      "@/app/components/global/aboutProject/aboutProjectMockup/AboutProjectMockup"
    )
);
const DynamicAboutProjectGalery = dynamic(
  () =>
    import(
      "@/app/components/global/aboutProject/aboutProjectGalery/AboutProjectGalery"
    )
);
const DynamicAboutProjectSimilar = dynamic(
  () =>
    import(
      "@/app/components/global/aboutProject/aboutProjectSimilar/AboutProjectSimilar"
    )
);
const DynamicClientsSay = dynamic(
  () => import("@/app/components/pages/home/clientsSay/ClientsSay")
);
const DynamicContact = dynamic(
  () => import("@/app/components/pages/home/contact/Contact")
);

const Project = async ({
  params,
}: {
  params: { id: string; locale: string };
}) => {
  const project: any = await getProject(params.id, params.locale);
  let reviews = await getReviews(params.locale);

  if (!reviews) {
    return <Loader />;
  }

  return (
    <main>
      <DynamicAboutProjectTopBar project={project} />
      <DynamicAboutProjectBanner project={project} />
      <DynamicAboutProjectInfo project={project} />
      <DynamicAboutProjectFrame project={project} />
      <DynamicAboutProjectMockup project={project} />
      <DynamicAboutProjectGalery project={project} />
      <DynamicAboutProjectSimilar url={project.url} />
      <DynamicClientsSay reviews={reviews} />
      <DynamicContact />
    </main>
  );
};

export default Project;
