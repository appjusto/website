import Container from "@/components/Container";
import Section from "@/components/Section";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export const SupportHero = () => {
  return (
    <Section id="dw-hero" minH="100vh" bgColor="gray.400" overflow="hidden">
      <Container minH="100vh" px={{ base: "0", lg: "inital" }}>
        <Flex
          position="relative"
          w="100%"
          minH="100vh"
          justifyContent="space-between"
          alignItems="center"
          py={{ base: "12", lg: "0" }}
        >
          <Flex
            maxW={{ base: "100%", lg: "640px" }}
            flexDir="column"
            minH={{ base: "84vh", lg: "auto" }}
            justifyContent={{ base: "center", lg: "flex-start" }}
            px={{ base: "4", lg: "0" }}
            zIndex="2"
          >
            <Box>
              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                maxW={{ lg: "540px" }}
              >
                Apoie o AppJusto
              </Heading>
              <Heading
                mt={{ base: "4", lg: "6" }}
                as="h2"
                maxW="648px"
                fontSize="xl"
                fontWeight="medium"
              >
                Restaurantes, Entregadores, Consumidores e Plataforma, juntos,
                construindo um delivery que seja bom pra todos - a cada pedido
              </Heading>
            </Box>
            <Wrap
              mt="6"
              spacing="12px"
              justify={{ base: "center", md: "start" }}
            >
              <WrapItem maxW={{ base: "170px", lg: "100%" }}>
                <Center
                  flexDir="column"
                  justifyContent="space-between"
                  minH="138px"
                  border="1px solid"
                  borderColor="gray.500"
                  borderRadius="lg"
                  bgColor="white"
                  p="4"
                >
                  <Center flexDir="column">
                    <Box maxW="90px">
                      <Image src="/support/logo-fairwork.png" alt="fairwork" />
                    </Box>
                    <Text
                      mt="1"
                      textAlign="center"
                      fontSize="xs"
                      color="gray.600"
                    >
                      Maior pontuação na edição de 2023
                    </Text>
                  </Center>
                  <Text fontSize="4xl">#1</Text>
                </Center>
              </WrapItem>
              <WrapItem maxW={{ base: "170px", lg: "100%" }}>
                <Center
                  flexDir="column"
                  justifyContent="space-between"
                  minH="138px"
                  border="1px solid"
                  borderColor="gray.500"
                  borderRadius="lg"
                  bgColor="white"
                  p="4"
                >
                  <Center flexDir="column">
                    <Box maxW="96px">
                      <Image
                        src="/support/logo-inovativa.png"
                        alt="inovativa"
                      />
                    </Box>
                    <Text
                      mt="1"
                      textAlign="center"
                      fontSize="xs"
                      color="gray.600"
                    >
                      Destaque Tecnologia de Inovação Social
                    </Text>
                  </Center>
                  <Text fontSize="4xl">#2</Text>
                </Center>
              </WrapItem>
              <WrapItem maxW={{ base: "170px", lg: "100%" }}>
                <Center
                  flexDir="column"
                  justifyContent="space-between"
                  minH="138px"
                  border="1px solid"
                  borderColor="gray.500"
                  borderRadius="lg"
                  bgColor="white"
                  p="4"
                >
                  <Box maxW="80px">
                    <Image
                      src="/support/logo-impact.png"
                      alt="Latam positive impact startup"
                    />
                  </Box>
                  <Text fontSize="4xl">#3</Text>
                </Center>
              </WrapItem>
            </Wrap>
            <Link href="https://github.com/sponsors/appjusto" target="_blank">
              <Button
                mt="8"
                variant="primary"
                size="lg"
                w={{ base: "100%", md: "fit-content" }}
                px="16"
              >
                Apoie a iniciativa
              </Button>
            </Link>
          </Flex>
          <Box
            display={{ base: "none", md: "initial" }}
            maxW={{ md: "300px", lg: "560px" }}
            // eslint-disable-next-line prettier/prettier
            mr={{ md: "-40px", lg: "-80px", "2xl": "0" }}
            zIndex="1"
          >
            <Image
              src="/support/hero.png"
              alt="mão erguida com punho fechado"
              // height="calc(100vh)"
            />
          </Box>
        </Flex>
      </Container>
    </Section>
  );
};
