import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from '@chakra-ui/icons';
import { formatCurrency } from "../../utils/index";
import { Product, WithId } from "../../types";
import React from 'react';
import Image from "../Image";
import { getDownloadURL, productFetcher } from "../../utils/businesses";
import { getFirebaseProjectsClient } from "../../../firebaseProjects";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useComplementsGroups } from "../../hooks/useComplementsGroups";
import { ComplementsGroupItem } from "./ComplementsGroupItem";

interface ProductDetailProps {
  businessId: string;
  businessName: string;
  back(): void;
}

export const ProductDetail = ({ businessId, businessName, back }: ProductDetailProps) => {
  // router
  const router = useRouter();
  const productId = router.query.slug[2];
  // swr
  const { data: product } = useSWR<WithId<Product> | null, any>(
    '/product', () => productFetcher(businessId, productId)
  );
  // state
  const [imageUrl, setImageUrl] = React.useState<string | null>();
  const groups = useComplementsGroups(businessId, productId, product?.complementsGroupsIds);
  // handlers
  const handleBack = () => {
    router.back();
    back()
  }
  // side effects
  React.useEffect(() => {
    if(!productId) return;
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
  return (
    <Box>
      <Box position="relative" w="100%">
        <Flex
          position="absolute"
          top="0"
          left="0"
          alignItems="center"
          h="48px"
          >
            <ArrowBackIcon w="20px" h="20px" cursor="pointer" onClick={handleBack} />
        </Flex>
        <Flex w="100%" h="48px" justifyContent={{base: 'center', lg: 'flex-start'}} alignItems="center">
          <Text ml={{lg: '36px'}} fontSize="16px" lineHeight="26px" fontWeight="500">{businessName}</Text>
        </Flex>
      </Box>
      <Flex position="relative" flexDir={{base: 'column', lg: 'row'}} alignItems={{lg: 'flex-end'}}>
        {
          imageUrl && (
            <Box
              position="relative"
              w="100%"
              bgColor="#F6F6F6"
              borderRadius="lg"
              overflow="hidden"
              zIndex="100"
            >
              <Image src={imageUrl} w="100%" />
            </Box>
          )
        }
        <Flex w="100%" ml={{lg: '4'}} py={{base: '3', lg: '0'}} justifyContent="space-between">
          <Box maxW={{base: '228px', lg: '400px'}}>
            <Text fontSize="20px" lineHeight="26px" fontWeight="500">
              {product.name}
            </Text>
            <Text mt="1" color="#697667" fontSize="15px" lineHeight="21px" fontWeight="500">
              {product.description}
            </Text>
            <Text mt="1" fontSize="15px" lineHeight="21px" fontWeight="500">
              {groups?.length > 0 && 'A partir de '}{formatCurrency(product.price)}
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
