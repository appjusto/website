import { Box, Center, Flex, HStack, Icon, Image, Link, Spinner, Text } from "@chakra-ui/react";
import React from 'react';
import { GetStaticPaths, GetStaticProps } from "next";
//import { Business, WithId } from '@appjusto/types';
import { Business, Category, Ordering, PartialBusiness, Product, WithId } from "../../types";
import { MdQueryBuilder, MdInfoOutline } from 'react-icons/md';
import { formatCEP, formatHour } from "../../utils";
import * as cnpjutils from '@fnando/cnpj';
import { getFirebaseProjectsClient } from "../../../firebaseProjects";
import { getBusinessObject, getCategoriesObjects, getDownloadURL, getOrderedCategories, getProductsObjects } from "../../utils/businesses";
import { CategoryItem } from "../../components/Restaurant/CategoryItem";
import { usePageContext } from "../../context";
import MenuPageLayout from "../../components/Restaurant/MenuPageLayout";
import { useRouter } from "next/router";
import { ProductDetail } from "../../components/Restaurant/ProductDetail";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const slug = params.slug[0];
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

interface RestaurantPageProps {
  business: WithId<Business>;
  categories: WithId<Category>[];
}

export default function RestaurantPage({ business, categories }: RestaurantPageProps) {
  // router
  const { query } = useRouter();
  console.log("query", query);
  // state
  const [isAbout, setIsAbout] = React.useState(false);
  const [logoUrl, setLogoUrl] = React.useState<string>();
  const [coverUrl, setCoverUrl] = React.useState<string>();
  const [sharingMsg, setSharingMsg] = React.useState("");
  const [product, setProduct] = React.useState<WithId<Product> | null>();
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
  React.useEffect(() => {
    if(!business?.slug) return;
    const env = process.env.NEXT_PUBLIC_EXTERNAL_ENV;
    const url = env === 'live' ? `https://appjusto.com.br/r/${business.slug}` :
    `https://app-justo-website-${env}.web.app/r/${business.slug}`;
    const message = encodeURIComponent(`Olá, queria indicar o ${business.name}! Pedindo pelo AppJusto os preços dos pratos são menores, e você valoriza mais ainda o restaurante e o entregador. Um delivery mais justo de verdade. Experimente ;)\n\n${url}`);
    setSharingMsg(message);
  }, [business?.slug]);
  React.useEffect(() => {
    if(!query?.slug) return;
    if(!categories) return;
    if(query.slug.length > 1) {
      const productId = query.slug[2];
      let data = null;
      categories.forEach(category => {
        const isProductCategory = category.items.map(item => item.id).includes(productId);
        if(isProductCategory) data = category.items.find(item => item.id === productId);
        setProduct(data);
      })
    } else setProduct(null);
  }, [query.slug, categories]);
  // UI
  if(product) {
    return (
      <MenuPageLayout
        businessName={business?.name}
        businessDescription={business?.description}
        businessPhone={business?.phone}
        isAbout={isAbout}
      >
        <ProductDetail businessId={business.id} product={product} />
      </MenuPageLayout>
    )
  }
  return (
    <MenuPageLayout
      businessName={business?.name}
      businessDescription={business?.description}
      businessPhone={business?.phone}
      isAbout={isAbout}
    >
      <Box
        position="relative"
        w="100%"
        h={{base: '117px', md: '264px', lg: '234px'}}
        bgColor="#F6F6F6"
        borderRadius="lg"
        overflow="hidden"
        zIndex="100"
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
        <Text
          position="absolute"
          display={{base: 'block', md: 'none'}}
          bottom="2"
          right="2"
          bgColor="white"
          border="1px solid black"
          borderRadius="24px"
          py="1"
          px="2"
          fontSize="13px"
          lineHeight="18px"
          fontWeight="500"
          cursor="pointer"
          onClick={() => setIsAbout(!isAbout)}
          zIndex="900"
        >
          {isAbout ? "Ver cardápio" : "Saber mais"}
        </Text>
      </Box>
      <Flex mt="6" justifyContent="space-between" alignItems="center">
        <Box>
          <HStack spacing={4}>
            <Text fontSize="24px" lineHeight="26px" fontWeight="700">
              {business?.name ?? 'N/E'}
            </Text>
            <Text
              ml="2"
              display={{base: 'none', md: 'block'}}
              as="span"
              border="1px solid black"
              borderRadius="24px"
              py="1"
              px="2"
              fontSize="13px"
              lineHeight="18px"
              fontWeight="500"
              cursor="pointer"
              onClick={() => setIsAbout(!isAbout)}
            >
              {isAbout ? "Ver cardápio" : "Saber mais"}
            </Text>
          </HStack>
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
        w={{base: '100%', md: '336px'}}
        h="40px"
        bgColor="#F6F6F6"
        borderRadius="lg"
        href={`https://api.whatsapp.com/send?text=${sharingMsg}`}
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
            <Flex mt="10" mb="4" flexDir={{base: 'column', lg: 'row'}} justifyContent="space-between">
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
              categories && categories.map((category: WithId<Category>) => <CategoryItem key={category.id} businessId={business?.id} category={category} />)
            }
          </Box>
        )
      }
    </MenuPageLayout>
  );
};
