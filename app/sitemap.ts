import { MetadataRoute } from "next";
import { getProjects } from "@/app/utils/server/server";
import { ProjectInterface } from "@/app//utils/interfaces/project";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let posts = await getProjects("en");

  const postUrls = posts.map((post: ProjectInterface) => ({
    url: `http://test.com/uk/project/${post.url}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        uk: `http://test.com/uk/project/${post.url}`,
        en: `http://test.com/en/project/${post.url}`,
      },
    },
    priority: "0.8",
  }));

  return [
    {
      url: "http://test.com",
      lastModified: new Date(),
      alternates: {
        languages: {
          uk: "http://test.com/uk",
          en: "http://test.com/en",
        },
      },
      priority: "1.00",
    },
    ...postUrls,
    {
      url: "http://test.com/uk/privacy-policy",
      lastModified: new Date(),
      alternates: {
        languages: {
          uk: "http://test.com/uk/privacy-policy",
          en: "http://test.com/en/privacy-policy",
        },
      },
      priority: "0.7",
    },
    {
      url: "http://test.com/uk/terms-of-use",
      lastModified: new Date(),
      alternates: {
        languages: {
          uk: "http://test.com/uk/terms-of-use",
          en: "http://test.com/en/terms-of-use",
        },
      },
      priority: "0.7",
    },
  ];
}
