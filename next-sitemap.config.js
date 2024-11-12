// next-sitemap.config.js
module.exports = {
  siteUrl: "https://sommeri.com/uk",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.8,
  sitemapSize: 7000,
  exclude: ["/some-private-page"],
  alternateRefs: [
    {
      href: "https://sommeri.com/uk",
      hreflang: "uk",
    },
    {
      href: "https://sommeri.com/en",
      hreflang: "en",
    },
  ],
};
