import { Box, Flex, Text } from "@chakra-ui/react";
import { formatCurrency } from "../../utils/index";
import { Product, WithId } from "../../types";
import React from 'react';
import Image from "../Image";
import { getDownloadURL } from "../../utils/businesses";
import { getFirebaseProjectsClient } from "../../../firebaseProjects";
import { useRouter } from "next/router";
import NextLink from 'next/link';

interface ProductDetailProps {
  businessId: string;
  product: WithId<Product>;
}

export const ProductDetail = ({ businessId, product }: ProductDetailProps) => {
  // router
  const { asPath } = useRouter();
  // state
  const [imageUrl, setImageUrl] = React.useState<string | null>();
  // side effects
  React.useEffect(() => {
    if(!product?.id) return;
    (async () => {
      const { storage } = await getFirebaseProjectsClient();
      const imageRef = storage.ref().child(`businesses/${businessId}/products/${product.id}_1008x720.jpg`);
      getDownloadURL(imageRef).then(uri => {
        if(!uri || uri === 'not_found') setImageUrl(null);
        else setImageUrl(uri);
      });
    })();
  }, [businessId, product?.id]);
  // UI
  return (
    <Box>
      <Flex flexDir={{base: 'column', lg: 'row'}} alignItems={{lg: 'flex-end'}}>
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
        <Flex w="100%" ml={{lg: '4'}} py={{base: '3', lg: '0'}} justifyContent="space-between" borderTop="1px solid #F6F6F6" cursor="pointer">
          <Box maxW={{base: '228px', lg: '400px'}}>
            <Text fontSize="15px" lineHeight="21px" fontWeight="500">
              {product.name}
            </Text>
            <Text mt="1" color="#697667" fontSize="13px" lineHeight="18px" fontWeight="500">
              {product.description}
            </Text>
            <Text mt="1" fontSize="15px" lineHeight="21px" fontWeight="500">
              {formatCurrency(product.price)}
            </Text>
          </Box>
        </Flex>

      </Flex>
    </Box>
  )
}
