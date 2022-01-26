const env = process.env.NEXT_PUBLIC_EXTERNAL_ENV;
const baseUrl = `https://${env !== 'live' ? `${env}.` : ''}appjusto.com.br`;

module.exports = {
  siteUrl: baseUrl,
  changefreq: 'monthly',
  priority: 1.0,
  sitemapSize: 7000,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  alternateRefs: [],
  sourceDir: 'nextjs',
  // Default transformation function
  // transform: async (config, path) => {
  //   return {
  //     loc: path,
  //     changefreq: config.changefreq,
  //     priority: config.priority,
  //     lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
  //     alternateRefs: config.alternateRefs ?? [],
  //   }
  // },
  //additionalPaths: async () => [],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      `${baseUrl}/server-sitemap.xml`,
    ],
  },
}
