import { Box, Center, Flex, HStack, Icon, Image, Link, Spinner, Text } from "@chakra-ui/react";
import NextLink from 'next/link';
import Head from 'next/head';
import Container from "../../components/Container";
import CustomLinkButton from "../../components/CustomLinkButton";
import Footer from "../../components/Footer";
import React from 'react';
import { GetStaticPaths, GetStaticProps } from "next";
//import { Business, WithId } from '@appjusto/types';
import { Category, Ordering, PartialBusiness, Product, WithId } from "../../types";
import { RestaurantAppsBox } from "../../components/Restaurant/RestaurantAppsBox";
import { MdQueryBuilder, MdInfoOutline } from 'react-icons/md';
import { formatCEP, formatHour } from "../../utils";
import * as cnpjutils from '@fnando/cnpj';
import { getFirebaseProjectsClient } from "../../../firebaseProjects";
import Seo from "../../components/Seo";
import { getBusinessObject, getCategoriesObjects, getOrderedCategories, getProductsObjects } from "./utils";
import { CategoryItem } from "../../components/Restaurant/CategoryItem";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const slug = params.slug;
  const { db } = await getFirebaseProjectsClient();
  // queries
  let business = {} as PartialBusiness;
  const queryBySlug = await db.collection('businesses')
  .where('slug', '==', slug)
  .get()
  if(queryBySlug.docs.length > 0) {
    business = getBusinessObject(queryBySlug.docs);
  } else {
    business = await db.collection('businesses')
    .where('code', '==', slug)
    .get()
    .then((data) => {
      if(!data.empty) return getBusinessObject(data.docs);
      else return null
    });
  }
  if (!business) {
    return {
      notFound: true,
    }
  };
  const unorderedCategories = await db.collection('businesses').doc(business.id).collection('categories').get().then((data) => getCategoriesObjects(data.docs));
  const products = await db.collection('businesses').doc(business.id).collection('products').get().then((data) => getProductsObjects(data.docs));
  const ordering = await db.collection('businesses').doc(business.id).collection('menu').doc('default').get().then((data) => data.data()) as Ordering;
  const categories = getOrderedCategories(unorderedCategories, products, ordering);
  return {
    props: {
      business,
      categories,
    },
    revalidate: 10,
  };
};

export default function RestaurantPage({ business, categories }) {
  // state
  const [isAbout, setIsAbout] = React.useState(false);
  const [logoUrl, setLogoUrl] = React.useState<string>();
  const [coverUrl, setCoverUrl] = React.useState<string>();
  // handlers
  const getDownloadURL = React.useCallback(async (ref: any) => {
    const uri = await ref
      .getDownloadURL()
      .then((res: string | null) => res)
      .catch(() => 'not_found');
    return uri;
  }, []);
  // side effects
  React.useEffect(() => {
    if(!business?.id) return;
    (async () => {
      const { storage } = await getFirebaseProjectsClient();
      const logoRef = storage.ref().child(`businesses/${business.id}/logo_240x240.jpg`);
      const coverRef = storage.ref().child(`businesses/${business.id}/cover_1008x360.jpg`);
      getDownloadURL(logoRef).then(uri => setLogoUrl(uri));
      getDownloadURL(coverRef).then(uri => setCoverUrl(uri));
    })();
  }, [business?.id]);
  console.log('categories', categories);
  // UI
  return (
    <Box>
      <Head>
        <title>AppJusto | {business?.name ?? 'Restaurante'}</title>
        <Seo
          metaDescription={business?.description ?? "Mais do que um app de entregas. Um movimento por relações mais justas e transparentes para restaurantes, entregadores e clientes. Faça parte desse movimento!"}
          title={`AppJusto | ${business?.name ?? 'Restaurante'}`}
          author="@appjusto"
          canonical_url="https://appjusto.com.br/"
        />
      </Head>
      <RestaurantAppsBox />
      <Container position="relative" w="100vw" pb="24">
        <Box display={{base:  'block', md: 'none'}} mb="4">
          <NextLink href="/" passHref>
            <Link _focus={{ outline: 'none'}} w='94px'>
              <Image
                src="/logo-pages.svg"
                alt="Logo AppJusto"
                width="94px"
              />
            </Link>
          </NextLink>
          <Text mt="6" fontSize="24px" lineHeight="26px" fontWeight="700">
            Baixe o app e faça seu pedido!
          </Text>
          <HStack mt="6" w="100%" spacing={4}>
            <CustomLinkButton
              mt="0"
              name="app-consumer-android"
              linkLabel="Android"
              variant="primary"
              fontSize="16px"
              icon="/icon-play-store.png"
              iconAlt="ícone play store"
              link="https://play.google.com/store/apps/details?id=br.com.appjusto.consumer.live"
              isExternal
            />
            <CustomLinkButton
              mt="0"
              name="app-consumer-ios"
              linkLabel="iPhone"
              variant="primary"
              fontSize="16px"
              icon="/icon-apple-black.png"
              iconAlt="ícone apple store"
              link="https://apps.apple.com/br/app/appjusto/id1569067601"
              isExternal
            />
          </HStack>
          <Text mt="6" mb="4" fontSize="15px" lineHeight="21px" fontWeight="500">
            Ao usar o AppJusto, você paga menos, e colabora com uma economia mais
            justa para entregadores e restaurantes. Faça parte desse movimento!
          </Text>
          <NextLink href="/" passHref>
            <Link
              mt="6"
              textDecor="underline"
              fontWeight="500"
              _focus={{ outline: 'none'}}
            >
              Saiba mais sobre o AppJusto
            </Link>
          </NextLink>
        </Box>
        <Box mt={{base: '6', md: '0'}} maxW={{base: '100%', md: '320px' ,lg: '656px'}}>
          <Box
            position="relative"
            w="100%"
            h={{base: '117px', md: '114px', lg: '234px'}}
            bgColor="#F6F6F6"
            borderRadius="lg"
            overflow="hidden"
          >
            {
              coverUrl ? coverUrl !== 'not_found' ? (
                <Image src={coverUrl} w="100%" alt="Foto de capa do restaurante" ignoreFallback />
                ) : (
                  <Center w="100%" h="100%">
                    <Image
                      src="/placeholder.svg"
                      w="34px"
                      h="34px"
                      alt="Foto de capa do restaurante não encontrada"
                      ignoreFallback
                    />
                  </Center>
                ) : (
                <Center w="100%" h="100%">
                  <Spinner size="md" color="white" />
                </Center>
              )
            }
          </Box>
          <Flex mt="6" justifyContent="space-between" alignItems="center">
            <Box>
              <Text fontSize="24px" lineHeight="26px" fontWeight="700">
                {business?.name ?? 'N/E'}
              </Text>
              <Text mt="1" fontSize="16px" lineHeight="22px" fontWeight="500" color="#4EA031">
                {business?.cuisine ?? 'N/E'}
              </Text>
            </Box>
            <Box position="relative" w="64px" h="64px" bgColor="#F6F6F6" borderRadius="lg">
              {
                logoUrl ? logoUrl !== 'not_found' ? (
                  <Image src={logoUrl} w="100%" alt="Logo do restaurante" ignoreFallback />
                  ) : (
                    <Center w="100%" h="100%">
                      <Image
                        src="/logo-placeholder.png"
                        w="64px"
                        h="64px"
                        alt="Foto de capa do restaurante não encontrada"
                        ignoreFallback
                      />
                    </Center>
                  ) : (
                  <Center w="100%" h="100%">
                    <Spinner size="sm" color="white" />
                  </Center>
                )
              }
            </Box>
          </Flex>
          <Box>
          <Link
            mt="4"
            w={{base: '100%', lg: '336px'}}
            h="40px"
            bgColor="#F6F6F6"
            borderRadius="lg"
            href="#"
            display="inline-flex"
            justifyContent="center"
            alignItems="center"
            fontSize="13px"
            lineHeight="18px"
            fontWeight="500"
            isExternal
          >
            <Image src="/icon-share.png" w="24px" h="24px" mr="2" ignoreFallback />
            Compartilhe esse restaurante com seus amigos!
          </Link>
          </Box>
          {
            isAbout ? (
              <>
                <Text mt="6" fontSize="16px" lineHeight="22px" fontWeight="500">{business?.description ?? 'N/E'}</Text>
                <Flex mt="10" flexDir={{base: 'column', lg: 'row'}} justifyContent="space-between">
                  <Box>
                    <HStack spacing={2}>
                      <Icon as={MdQueryBuilder} />
                      <Text fontSize="16px" lineHeight="21px" fontWeight="500">
                        Horário de entrega
                      </Text>
                    </HStack>
                    <HStack mt="4" spacing={2}>
                      <Box>
                        {business?.schedules.map((item) => (
                          <Text key={item.day} fontSize="15px" lineHeight="21px" fontWeight="500" color="#697667">
                            {item.day}
                          </Text>
                        ))}
                      </Box>
                      <Box>
                        {business?.schedules.map((item) => {
                          return !item.checked ? (
                            <Text key={item.day} fontSize="15px" lineHeight="21px" fontWeight="500" color="#697667">
                              Fechado
                            </Text>
                          ) : (
                            <Text key={item.day} fontSize="15px" lineHeight="21px" fontWeight="500" color="#697667">
                              {item.schedule
                                .map(({ from, to }) => `${formatHour(from)} ${'às'} ${formatHour(to)}`)
                                .join('  -  ')}
                            </Text>
                          );
                        })}
                      </Box>
                    </HStack>
                  </Box>
                  <Box mt={{base: '8', lg: '0'}}>
                    <HStack spacing={2}>
                      <Icon as={MdInfoOutline} />
                      <Text fontSize="16px" lineHeight="21px" fontWeight="500">
                        Outras informações
                      </Text>
                    </HStack>
                    <Text mt="4" fontSize="15px" lineHeight="21px" fontWeight="500" color="#697667">
                      {`${business?.businessAddress?.address ?? 'N/E'}, ${business?.businessAddress?.number}`}
                    </Text>
                    <Text fontSize="15px" lineHeight="21px" fontWeight="500" color="#697667">
                      {`${business?.businessAddress?.city}, ${business?.businessAddress?.state}`}
                    </Text>
                    <Text fontSize="15px" lineHeight="21px" fontWeight="500" color="#697667">
                      {`CEP: ${business?.businessAddress?.cep ? formatCEP(business.businessAddress?.cep) : 'N/E'}`}
                    </Text>
                    <Text mt="4" fontSize="15px" lineHeight="21px" fontWeight="500" color="#697667">
                      {`CNPJ: ${business?.cnpj ? cnpjutils.format(business.cnpj) : 'N/E'}`}
                    </Text>
                  </Box>
                </Flex>
              </>
            ) : (
              <Box>
                {
                  categories && categories.map((category: WithId<Category>) => <CategoryItem category={category} />)
                }
              </Box>
            )
          }
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};
