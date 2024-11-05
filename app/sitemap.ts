import { MetadataRoute } from "next";
import { getProjects } from "@/app/utils/server/server";
import { ProjectInterface } from "@/app//utils/interfaces/project";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let posts = await getProjects("en");

  const postUrls = posts.map((post: ProjectInterface) => ({
    url: `https://sommeri.com/uk/project/${post.url}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        uk: `https://sommeri.com/uk/project/${post.url}`,
        en: `https://sommeri.com/en/project/${post.url}`,
      },
    },
    priority: "0.8",
  }));

  return [
    {
      url: "https://sommeri.com",
      lastModified: new Date(),
      alternates: {
        languages: {
          uk: "https://sommeri.com/uk",
          en: "https://sommeri.com/en",
        },
      },
      priority: "1.00",
    },
    ...postUrls,
    {
      url: "https://sommeri.com/uk/privacy-policy",
      lastModified: new Date(),
      alternates: {
        languages: {
          uk: "https://sommeri.com/uk/privacy-policy",
          en: "https://sommeri.com/en/privacy-policy",
        },
      },
      priority: "0.7",
    },
    {
      url: "https://sommeri.com/uk/terms-of-use",
      lastModified: new Date(),
      alternates: {
        languages: {
          uk: "https://sommeri.com/uk/terms-of-use",
          en: "https://sommeri.com/en/terms-of-use",
        },
      },
      priority: "0.7",
    },
  ];
}
