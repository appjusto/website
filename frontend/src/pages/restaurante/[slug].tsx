import { Box, Flex, HStack, Icon, Image, Link, Text } from "@chakra-ui/react";
import NextLink from 'next/link';
import Head from 'next/head';
import Container from "../../components/Container";
import CustomLinkButton from "../../components/CustomLinkButton";
import Footer from "../../components/Footer";
import React from 'react';
import { GetStaticPaths, GetStaticProps } from "next";
//import { Business, WithId } from '@appjusto/types';
import { Business, WithId } from "../../types";
import getFirebaseClient from "../../../firebaseApp";
import { usePageContext } from "../../context";
import { RestaurantAppsBox } from "../../components/Restaurant/RestaurantAppsBox";
import { MdQueryBuilder, MdInfoOutline } from 'react-icons/md';
import { formatHour } from "../../utils";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const slug = params.slug;
  const { db } = await getFirebaseClient();
  const businesses = await db.collection('businesses')
    .where('slug', '==', slug)
    .get()
    .then((data) => {
      //if(!data.empty) return documentsAs<Business>(data.docs);
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
      });
      else return null
    });
  return {
    props: {
      //businesses: JSON.stringify(businesses[0]),
      businesses: businesses,
    },
    revalidate: 10,
  };
};

export default function RestaurantPage({ businesses }) {
  // context
  const { storageRef } = usePageContext();
  // state
  const [business, setBusiness] = React.useState<WithId<Business>>();
  const [logo, setLogo] = React.useState<string | null>();
  const [cover, setCover] = React.useState<string | null>();
  // handlers
  const getDownloadURL = React.useCallback(async (ref: any) => {
    const uri = await ref
      .getDownloadURL()
      .then((res: string | null) => res)
      .catch(() => null);
    return uri;
  }, []);
  // side effects
  React.useEffect(() => {
    if(!businesses) return;
    //setBusiness(JSON.parse(businesses));
    setBusiness(businesses[0]);
  }, [businesses]);
  React.useEffect(() => {
    if(!business?.id) return;
    const logoRef = storageRef.child(`businesses/${businesses[0].id}/logo_240x240.jpg`);
    const coverRef = storageRef.child(`businesses/${businesses[0].id}/cover_1008x360.jpg`);
    getDownloadURL(logoRef).then((url) => setLogo(url));
    getDownloadURL(coverRef).then((url) => setCover(url));
  }, [business, getDownloadURL])
  // UI
  return (
    <Box>
      <Head>
        <title>AppJusto | {business?.name ?? 'Restaurante'}</title>
      </Head>
      <RestaurantAppsBox />
      <Container w="100vw" h={{base: 'auto', lg: '100vh'}} pb="16">
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
            h="auto"
            bg="gray.500"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image src={cover} w="100%"/>
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
            <Box position="relative" w="64px" h="64px">
              <Image src={logo} w="100%" />
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
                    <Text key={item.day} fontSize="15px" lineHeight="21px" fontWeight="500" color="gray.700">
                      {item.day}
                    </Text>
                  ))}
                </Box>
                <Box>
                  {business?.schedules.map((item) => {
                    return !item.checked ? (
                      <Text key={item.day} fontSize="15px" lineHeight="21px" fontWeight="500" color="gray.700">
                        Fechado
                      </Text>
                    ) : (
                      <Text key={item.day} fontSize="15px" lineHeight="21px" fontWeight="500" color="gray.700">
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
              <Text mt="4" fontSize="15px" lineHeight="21px" fontWeight="500" color="gray.700">
                {business?.businessAddress?.address ?? 'N/E'}
              </Text>
              <Text fontSize="15px" lineHeight="21px" fontWeight="500" color="gray.700">
                {`${business?.businessAddress?.city}, ${business?.businessAddress?.state}`}
              </Text>
              <Text fontSize="15px" lineHeight="21px" fontWeight="500" color="gray.700">
                {`CEP: ${business?.businessAddress?.cep ?? 'N/E'}`}
              </Text>
              <Text mt="4" fontSize="15px" lineHeight="21px" fontWeight="500" color="gray.700">
                {`CNPJ: ${business?.cnpj ?? 'N/E'}`}
              </Text>
            </Box>
          </Flex>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};
