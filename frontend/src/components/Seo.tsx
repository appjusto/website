interface SeoProps {
  metaDescription: string;
  title: string;
  author: string;
  keywords?: string[];
}

const env = process.env.NEXT_PUBLIC_EXTERNAL_ENV;
const baseUrl = `https://${env !== "live" ? `${env}.` : ""}appjusto.com.br`;

const Seo: React.FC<SeoProps> = ({
  metaDescription,
  title,
  author,
  keywords,
}) => {
  const keywordsArray = [];
  const siteKeywords = [...keywordsArray, keywords].join(", ");
  const metaTags = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      name: `image`,
      content: `${baseUrl}/share-social.png`,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:image`,
      content: `${baseUrl}/share-social.png`,
    },
    {
      property: `og:image:secure_url`,
      content: `${baseUrl}/share-social.png`,
    },
    {
      property: `og:image:type`,
      content: `image/png`,
    },
    {
      property: `og:image:width`,
      content: `1200`,
    },
    {
      property: `og:image:height`,
      content: `600`,
    },
    {
      property: `og:image:alt`,
      content: `Ilustração de uma motocicleta de entregas com o fundo verde.`,
    },
    {
      name: `twitter:card`,
      content: `summary_large_image`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
    {
      property: `twitter:image`,
      content: `${baseUrl}/share-social.png`,
    },
    {
      property: `twitter:image:src`,
      content: `${baseUrl}/share-social.png`,
    },
    {
      property: `twitter:image:width`,
      content: `1200`,
    },
    {
      property: `twitter:image:height`,
      content: `600`,
    },
    {
      property: `twitter:image:alt`,
      content: `Ilustração de uma motocicleta de entregas com o fundo verde.`,
    },
  ];
  return (
    <>
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={baseUrl} />
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <link rel="manifest" href="/manifest.webmanifest" />
      {metaTags.map((meta) => {
        if (meta.name === "keywords" && siteKeywords.length < 1) {
          return;
        }
        if (meta.name) {
          return (
            <meta key={meta.name} name={meta.name} content={meta.content} />
          );
        } else {
          return (
            <meta
              key={meta.property}
              property={meta.property}
              content={meta.content}
            />
          );
        }
      })}
      <link rel="apple-touch-icon" sizes="48x48" href="/icons/icon-48x48.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/icons/icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="96x96" href="/icons/icon-96x96.png" />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/icons/icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/icons/icon-192x192.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="256x256"
        href="/icons/icon-256x256.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="384x384"
        href="/icons/icon-384x384.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="512x512"
        href="/icons/icon-512x512.png"
      />
    </>
  );
};

export default Seo;
