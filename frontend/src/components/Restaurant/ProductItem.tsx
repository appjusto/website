import { Link } from "@chakra-ui/next-js";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { Product, WithId } from "../../types";
import { getDownloadURLByPath } from "../../utils/businesses";
import { formatCurrency } from "../../utils/index";

interface ProductItemProps {
  businessId: string;
  product: WithId<Product>;
}

export const ProductItem = ({ businessId, product }: ProductItemProps) => {
  // router
  const { asPath, query } = useRouter();
  // state
  const [imageUrl, setImageUrl] = React.useState<string | null>();
  // helpers
  const mode = query.mode;
  const basePath = mode ? asPath.split("?")[0] : asPath;
  const productLink = mode
    ? `${basePath}/p/${product.id}?mode=${mode}`
    : `${basePath}/p/${product.id}`;
  // side effects
  React.useEffect(() => {
    if (!product?.id) return;
    if (!product.imageExists) return;
    getDownloadURLByPath(
      `businesses/${businessId}/products/${product.id}_288x288.jpg`,
      setImageUrl
    );
  }, [businessId, product?.id, product?.imageExists]);
  // UI
  return (
    <Link href={productLink}>
      <Flex
        w="100%"
        py="3"
        justifyContent="space-between"
        borderTop="1px solid #F6F6F6"
        cursor="pointer"
      >
        <Box maxW={{ base: "228px", lg: "400px" }}>
          <Text fontSize="md" lineHeight="1.25rem">
            {product.name}
          </Text>
          <Text color="#697667" fontSize="sm" lineHeight="1.5rem">
            {product.description}
          </Text>
          <Text fontSize="md" lineHeight="1.25rem">
            {formatCurrency(product.price)}
          </Text>
        </Box>
        {imageUrl && (
          <Box
            position="relative"
            w="80px"
            h="80px"
            bgColor="#F6F6F6"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image src={imageUrl} w="80px" h="80px" />
          </Box>
        )}
      </Flex>
    </Link>
  );
};
