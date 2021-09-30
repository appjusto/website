import { Box, Flex, Text } from "@chakra-ui/react";
import { formatCurrency } from "../../utils/index";
import { Product, WithId } from "../../types";
import React from 'react';
import Image from "../Image";
import { getDownloadURL, productFetcher } from "../../utils/businesses";
import { getFirebaseProjectsClient } from "../../../firebaseProjects";
import { useRouter } from "next/router";
import NextLink from 'next/link';
import useSWR from "swr";
import { useComplementsGroups } from "../../hooks/useComplementsGroups";
import { ComplementsGroupItem } from "./ComplementsGroupItem";

interface ProductDetailProps {
  businessId: string;
}

export const ProductDetail = ({ businessId }: ProductDetailProps) => {
  // router
  const { query } = useRouter();
  const productId = query.slug[2];
  // swr
  const { data: product } = useSWR<WithId<Product> | null, any>(
    '/product', () => productFetcher(businessId, productId)
  );
  // state
  const [imageUrl, setImageUrl] = React.useState<string | null>();
  const groups = useComplementsGroups(businessId, productId);
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
            <Text fontSize="15px" lineHeight="21px" fontWeight="500">
              {product.name}
            </Text>
            <Text mt="1" color="#697667" fontSize="13px" lineHeight="18px" fontWeight="500">
              {product.description}
            </Text>
            <Text mt="1" fontSize="15px" lineHeight="21px" fontWeight="500">
              A partir de {formatCurrency(product.price)}
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
