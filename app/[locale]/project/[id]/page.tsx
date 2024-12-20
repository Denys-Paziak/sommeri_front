import dynamic from "next/dynamic";
import { getReviews, getProject } from "@/app/utils/server/server";
import Loader from "@/app/components/global/loader/Loader";
import { ProjectInterface } from "@/app/utils/interfaces/project";
import { Suspense } from "react";

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

export async function generateMetadata({
  params,
}: {
  params: { id: string; locale: string };
}) {
  const project: ProjectInterface = await getProject(params.id, params.locale);

  return {
    title: `${project.Name}`,
    description: `Sommeri - Портфоліо | Проєкт #${project.Name}`,

    openGraph: {
      type: "website",
      url: `https://sommeri.com/${project.Name}`,
      siteName: "Sommeri",
      locale: "uk_UA",
      title: `#${project.Name}`,
      description: `Sommeri - Портфоліо | Проєкт #${project.Name}`,
      images: [
        {
          url: "https://sommeri.com/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "Sommeri - Розробка Сайтів Під Ключ",
        },
      ],
    },
  };
}

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
      <Suspense fallback={<Loader />}>
        <DynamicAboutProjectTopBar project={project} />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <DynamicAboutProjectBanner project={project} />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <DynamicAboutProjectInfo project={project} />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <DynamicAboutProjectFrame project={project} />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <DynamicAboutProjectMockup project={project} />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <DynamicAboutProjectGalery project={project} />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <DynamicAboutProjectSimilar url={project.url} />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <DynamicClientsSay reviews={reviews} />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <DynamicContact />
      </Suspense>
    </main>
  );
};

export default Project;
