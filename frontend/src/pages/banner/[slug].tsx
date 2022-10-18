import { Box, Center, Image, Link, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Seo from "../../components/Seo";
import { getBannerBySlug } from "../../utils/banners";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug as string;
  const banner = await getBannerBySlug(slug);
  if (!banner) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      banner,
    },
    revalidate: 10,
  };
};

export default function BannerPage({ banner }) {
  // UI
  return (
    <Box>
      <Head>
        <title>AppJusto | {banner?.pageTitle ?? "Banner"}</title>
        <Seo
          metaDescription="Mais do que um app de entregas. Um movimento por relações mais justas e transparentes para restaurantes, entregadores e clientes. Faça parte desse movimento!"
          title={`AppJusto | ${banner?.pageTitle ?? "Banner"}`}
          author="@appjusto"
        />
      </Head>
      <Container maxW="1120px" h={{ base: "auto", lg: "100vh" }} pb="16">
        <Center>
          <Link href={banner.link} _focus={{ outline: "none" }}>
            <Image
              src={banner.images[0]}
              alt="banner"
              width="100%"
              maxW="700px"
              h="auto"
            />
          </Link>
        </Center>
      </Container>
      <Footer sharing={false} containerMaxWidth="1120px" />
    </Box>
  );
}
