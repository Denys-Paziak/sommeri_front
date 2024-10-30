import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
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
    },
    {
      url: "https://sommeri.com/uk/privacy-policy",
      lastModified: new Date(),
      alternates: {
        languages: {
          uk: "https://sommeri.com/uk/privacy-policy",
          en: "https://sommeri.com/en/privacy-policy",
        },
      },
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
    },
  ];
}
