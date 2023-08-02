import { Link } from "@chakra-ui/next-js";
import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import Section from "../Section";

export const SupportFooter = () => {
  return (
    <Section>
      <Center
        w="100%"
        position="relative"
        minH={{ base: "540px", md: "340px", lg: "618px" }}
        overflow="hidden"
        zIndex="2"
      >
        <Flex
          position="relative"
          mt={{ base: "0", md: "12", lg: "8" }}
          px={{ base: "4", md: "0" }}
          maxW={{ base: "100%", md: "600px", lg: "1090px" }}
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          zIndex="20"
        >
          <Box maxW="60px">
            <Image src="/support/footer-spark.png" alt="" />
          </Box>
          <Text
            mt="4"
            fontSize={{ base: "2xl", lg: "5xl" }}
            fontWeight="bold"
            textAlign="center"
          >
            Conheça mais sobre o AppJusto
          </Text>
          <Text
            mt={{ base: "4", md: "4", lg: "6" }}
            fontSize="lg"
            color="gray.900"
            fontWeight="normal"
            textAlign="center"
          >
            Assista depoimentos de quem faz parte, veja onde já saímos na mídia,
            FAQ.
          </Text>
          <Link href="/">
            <Button
              mt="8"
              w="fit-content"
              minW="220px"
              variant="primary"
              px="10"
              fontSize="sm"
            >
              Conhecer
            </Button>
          </Link>
        </Flex>
      </Center>
    </Section>
  );
};
