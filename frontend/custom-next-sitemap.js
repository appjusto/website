const env = process.env.NEXT_PUBLIC_EXTERNAL_ENV;
const baseUrl = `https://${env !== "live" ? `${env}.` : ""}appjusto.com.br`;

module.exports = {
  siteUrl: baseUrl,
  changefreq: "monthly",
  priority: 1.0,
  sitemapSize: 7000,
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"],
  alternateRefs: [],
  sourceDir: "nextjs",
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [`${baseUrl}/server-sitemap.xml`],
  },
};
