import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { GetServerSideProps } from "next";
import { getBusinessesSlugs } from "../utils/businesses";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from firebase
  const businessSlugs = await getBusinessesSlugs();
  console.log(">>> businessSlugs.length", businessSlugs.length);
  const env = process.env.NEXT_PUBLIC_EXTERNAL_ENV;
  const baseUrl = `https://${env !== "live" ? `${env}.` : ""}appjusto.com.br`;
  const paths = businessSlugs.map((slug) => {
    return {
      loc: `${baseUrl}/r/${slug}`, // Absolute url
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.9,
    };
  }) as ISitemapField[];
  return getServerSideSitemap(ctx, paths);
};
// Default export to prevent next.js errors
export default () => {};
