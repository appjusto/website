import { getServerSideSitemap, ISitemapField } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import { getFirebaseProjectsClient } from '../../../firebaseProjects';
import { getBusinessesObject } from '../../utils/businesses';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from firebase
  const { db } = await getFirebaseProjectsClient();
  const businessSlugs = await db.collection('businesses').orderBy('slug').get().then((res) => {
    if(!res.empty) {
      const slugs = getBusinessesObject(res.docs).map((business) => business.slug);
      return slugs;
    }
    return [];
  });
  console.log('>>> businessSlugs.length', businessSlugs.length);
  const paths = businessSlugs.map(slug => {
    return {
      loc: `https://appjusto.com.br/r/${slug}`, // Absolute url
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.7,
    }
  });
  const pathsWithMain = [
    {
      loc: `https://appjusto.com.br`, // Absolute url
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.7,
    },
    ...paths
  ] as ISitemapField[];

  return getServerSideSitemap(ctx, pathsWithMain)
};
// Default export to prevent next.js errors
export default () => {};
