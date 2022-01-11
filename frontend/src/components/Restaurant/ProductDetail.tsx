import { Box, Button, Center, Flex, Image, Skeleton, Spinner, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from '@chakra-ui/icons';
import { formatCurrency } from "../../utils/index";
import { ComplementGroup, Product, WithId } from "../../types";
import React from 'react';
import { getDownloadURL } from "../../utils/businesses";
import { getFirebaseProjectsClient } from "../../../firebaseProjects";
import { useRouter } from "next/router";
import { ComplementsGroupItem } from "./ComplementsGroupItem";

interface ProductDetailProps {
  businessId: string;
  businessName: string;
  getProductById(productId: string): WithId<Product>;
  orderedGroups: WithId<ComplementGroup>[];
}

export const ProductDetail = ({ businessId, businessName, getProductById, orderedGroups }: ProductDetailProps) => {
  // context
  const router = useRouter();
  const productId = router.query.slug[2];
  // state
  const [product, setProduct] = React.useState<WithId<Product> | null>();
  const [imageUrl, setImageUrl] = React.useState<string | null>();
  const [groups, setGroups] = React.useState<WithId<ComplementGroup>[]>();
  // helpers
  const productPrice = product?.price > 0 ? product.price : 0;
  // handlers
  const handleBack = () => {
    router.back();
  }
  // side effects
  React.useEffect(() => {
    if(!productId) return;
    const data = getProductById(productId);
    setProduct(data);
  }, [productId])
  React.useEffect(() => {
    if(!product?.complementsGroupsIds || !orderedGroups) return;
    setGroups(orderedGroups.filter(group => product.complementsGroupsIds.includes(group.id)))
  }, [product?.complementsGroupsIds, orderedGroups]);
  React.useEffect(() => {
    if(!businessId || !productId) return;
    (async () => {
      const { storage } = await getFirebaseProjectsClient();
      const imageRef = storage.ref().child(`businesses/${businessId}/products/${productId}_1008x720.jpg`);
      getDownloadURL(imageRef).then(uri => {
        if(!uri || uri === 'not_found') setImageUrl(null);
        else setImageUrl(uri);
      });
    })();
  }, [businessId, productId]);
  // UI
  if(product === undefined) {
    return (
      <Box>
        <Box position="relative" w="100%" mb={{lg: '2'}}>
          <Flex
            position="absolute"
            top="0"
            left="0"
            alignItems="center"
            h="48px"
            >
              <ArrowBackIcon display={{lg: 'none'}} w="20px" h="20px" cursor="pointer" onClick={handleBack} />
              <Button
                display={{base: 'none', lg: 'inline-block'}}
                variant="outline"
                fontSize="15px"
                lineHeight="21px"
                fontWeight="500"
                borderColor="black"
                onClick={handleBack}>
                <ArrowBackIcon mr="2" w="20px" h="20px" />
                Voltar
              </Button>
          </Flex>
          <Flex w="100%" h="48px" justifyContent={{base: 'center', lg: 'flex-start'}} alignItems="center">
            <Text ml={{lg: '120px'}} fontSize="16px" lineHeight="26px" fontWeight="500">{businessName}</Text>
          </Flex>
        </Box>
        <Flex position="relative" flexDir={{base: 'column', lg: 'row'}} alignItems={{lg: 'center'}}>
          <Center
            position="relative"
            w="100%"
            h="222px"
            bgColor="#F6F6F6"
            borderRadius="lg"
            overflow="hidden"
          >
            <Spinner />
          </Center>
          <Flex w="100%" ml={{lg: '8'}} py={{base: '3', lg: '0'}} justifyContent="space-between">
            <Box w="100%" maxW={{base: '228px', lg: '400px'}}>
              <Skeleton h='20px' w="80%" />
              <Skeleton mt="2" h='20px' w="100%" />
              <Skeleton mt="2" h='20px' w="100%" />
            </Box>
          </Flex>
        </Flex>
      </Box>
    )
  }
  return (
    <Box>
      <Box position="relative" w="100%" mb={{lg: '2'}}>
        <Flex
          position="absolute"
          top="0"
          left="0"
          alignItems="center"
          h="48px"
          >
            <ArrowBackIcon display={{lg: 'none'}} w="20px" h="20px" cursor="pointer" onClick={handleBack} />
            <Button
              display={{base: 'none', lg: 'inline-block'}}
              variant="outline"
              fontSize="15px"
              lineHeight="21px"
              fontWeight="500"
              borderColor="black"
              onClick={handleBack}>
              <ArrowBackIcon mr="2" w="20px" h="20px" />
              Voltar
            </Button>
        </Flex>
        <Flex w="100%" h="48px" justifyContent={{base: 'center', lg: 'flex-start'}} alignItems="center">
          <Text ml={{lg: '120px'}} fontSize="16px" lineHeight="26px" fontWeight="500">{businessName}</Text>
        </Flex>
      </Box>
      <Flex position="relative" flexDir={{base: 'column', lg: 'row'}} alignItems={{lg: 'center'}}>
          {
            imageUrl === undefined ? (
              <Center
                position="relative"
                w="100%"
                h="222px"
                bgColor="#F6F6F6"
                borderRadius="lg"
                overflow="hidden"
              >
                <Spinner />
              </Center>
            ) : imageUrl === null ? (
              <Center w="100%" h="100%">
                <Image
                  src="/placeholder.svg"
                  w="34px"
                  h="34px"
                  alt="Foto do produto não encontrada"
                  ignoreFallback
                />
              </Center>
            ) : (
              <Box
                position="relative"
                w="100%"
                minH="222px"
                bgColor="#F6F6F6"
                borderRadius="lg"
                overflow="hidden"
                zIndex="100"
              >
                <Image src={imageUrl} w="100%" ignoreFallback />
              </Box>
            )
          }
        <Flex w="100%" ml={{lg: '8'}} py={{base: '3', lg: '0'}} justifyContent="space-between">
          <Box maxW={{base: '228px', lg: '400px'}}>
            <Text fontSize="20px" lineHeight="26px" fontWeight="500">
              {product?.name ?? 'Não foi possível carregar o nome do produto'}
            </Text>
            <Text mt="1" color="#697667" fontSize="15px" lineHeight="21px" fontWeight="500">
              {product?.description  ?? 'Não foi possível carregar a descrição do produto'}
            </Text>
            <Text mt="1" fontSize="15px" lineHeight="21px" fontWeight="500">
              {groups?.length > 0 && 'A partir de '}{formatCurrency(productPrice)}
            </Text>
          </Box>
        </Flex>
      </Flex>
      {
        groups && groups.map(group => <ComplementsGroupItem key={group.id} group={group} />)
      }
    </Box>
  )
}
