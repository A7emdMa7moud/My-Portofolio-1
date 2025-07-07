/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://ahmed-ma7moud.vercel.app",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
