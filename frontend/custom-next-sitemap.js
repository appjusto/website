module.exports = {
  siteUrl: 'https://appjusto.com.br',
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  alternateRefs: [],
  sourceDir: 'nextjs',
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  // additionalPaths: async (config) => [
  //   await config.transform(config, '/additional-page'),
  // ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://appjusto.com.br/server-sitemap.xml',
    ],
  },
}
