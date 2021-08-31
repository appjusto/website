import { Box, Center, Flex, HStack, Icon, Image, Link, Spinner, Text } from "@chakra-ui/react";
import NextLink from 'next/link';
import Head from 'next/head';
import Container from "../../components/Container";
import CustomLinkButton from "../../components/CustomLinkButton";
import Footer from "../../components/Footer";
import React from 'react';
import { GetStaticPaths, GetStaticProps } from "next";
//import { Business, WithId } from '@appjusto/types';
import { Business, BusinessAddress, BusinessSchedule } from "../../types";
import { RestaurantAppsBox } from "../../components/Restaurant/RestaurantAppsBox";
import { MdQueryBuilder, MdInfoOutline } from 'react-icons/md';
import { formatCEP, formatHour } from "../../utils";
import * as cnpjutils from '@fnando/cnpj';
import { getFirebaseProjectsClient } from "../../../firebaseProjects";

interface PartialBusiness {
  id: string;
  cnpj: string;
  name: string;
  cuisine: string;
  description: string;
  businessAddress: BusinessAddress;
  schedules: BusinessSchedule;
  logoUrl?: string;
  coverUrl?: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const slug = params.slug;
  const { db } = await getFirebaseProjectsClient();
  //const bucket = await getFirebaseProjectsAdmin();
  // handlers
  /*const getImageDownloadUrl = async (docId: string, imageName: string) => {
    try {
      const file = bucket.file(`businesses/${docId}/${imageName}`);
      const url = await file.getSignedUrl({action: 'read', expires: '12-31-2026'}).then(urls => urls[0]);
      return url;
    } catch (error) {
      console.error(error);
      return 'not_found';
    };
  };*/
  // queries
  let business = {} as PartialBusiness;
  const queryBySlug = await db.collection('businesses')
  .where('slug', '==', slug)
  .get()
  if(queryBySlug.docs.length > 0) {
    business = queryBySlug.docs.map(doc => {
      const docData = doc.data() as Business;
      return {
        id: doc.id,
        cnpj: docData.cnpj,
        name: docData.name,
        cuisine: docData.cuisine,
        description: docData.description,
        businessAddress: docData.businessAddress,
        schedules: docData.schedules,
      }
    })[0];
  } else {
    business = await db.collection('businesses')
    .where('code', '==', slug)
    .get()
    .then((data) => {
      if(!data.empty) return data.docs.map(doc => {
        const docData = doc.data() as Business;
        return {
          id: doc.id,
          cnpj: docData.cnpj,
          name: docData.name,
          cuisine: docData.cuisine,
          description: docData.description,
          businessAddress: docData.businessAddress,
          schedules: docData.schedules,
        }
      })[0];
      else return null
    });
  }
  /*if(business?.id) {
    const logoUrl = await getImageDownloadUrl(business.id, 'logo_240x240.jpg');
    const coverUrl = await getImageDownloadUrl(business.id, 'cover_1008x360.jpg');
    //const logoUrl = `https://storage.googleapis.com/app-justo-dev.appspot.com/businesses/${business.id}/logo_240x240.jpg`;
    //const coverUrl = `https://storage.googleapis.com/app-justo-dev.appspot.com/businesses/${business.id}/cover_1008x360.jpg`;
    business = {
      ...business,
      logoUrl,
      coverUrl,
    }
  }*/
  if (!business) {
    return {
      notFound: true,
    }
  };
  return {
    props: {
      business,
    },
    revalidate: 10,
  };
};

export default function RestaurantPage({ business }) {
  // state
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
  // UI
  return (
    <Box>
      <Head>
        <title>AppJusto | {business?.name ?? 'Restaurante'}</title>
      </Head>
      <RestaurantAppsBox />
      <Container position="relative" w="100vw" h={{base: 'auto', lg: '100vh'}} pb="24">
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
              link="https://apps.apple.com/br/app/appjusto/id1569067601"
              isExternal
            />
          </HStack>
          <Text mt="6" mb="4" fontSize="15px" lineHeight="21px" fontWeight="500">
            Ao usar o AppJusto, você paga menos, e colabora com uma economia mais
            justa para entregadores e restaurantes. Faça parte desse movimento!
          </Text>
          <Link
            href="https://appjusto.freshdesk.com/support/home"
            textDecor="underline"
            fontSize="15px"
            fontWeight="500"
            _focus={{ outline: 'none'}}
            isExternal
          >
            Saiba mais sobre o AppJusto
          </Link>
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
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};
