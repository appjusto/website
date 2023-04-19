import { Flex, Heading, Image, Text, Button } from "@chakra-ui/react";
//import Image from '../../Image';
import Section from "../../Section";
import Container from "../../Container";
import { usePageContext } from "../../../context";
import * as fbq from "../../../utils/fpixel";

const Hero: React.FC = () => {
  // context
  const { setShowAppsModal } = usePageContext();
  // UI
  return (
    <Section
      id="hero"
      mt={{ base: "44px", lg: "-24px" }}
      h={{ lg: "100vh" }}
      maxH={{ lg: "900px" }}
    >
      <Container>
        <Flex direction={{ base: "column", lg: "row" }} h="100%">
          <Flex flexDir="column" justifyContent="center" w="100%">
            <Heading
              as="h1"
              maxW={{ base: "311px", md: "480px", lg: "648px" }}
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="700"
              lineHeight={{ base: "2.6rem", md: "3.5rem", lg: "4.75rem" }}
            >
              Um movimento por relações mais justas no delivery
            </Heading>
            <Heading
              mt="8"
              as="h2"
              maxW="648px"
              fontSize="xl"
              lineHeight="1.62rem"
              fontWeight="500"
            >
              No AppJusto,{" "}
              <Text as="span" fontWeight="700">
                entregadores
              </Text>{" "}
              ganham mais e podem definir o valor do próprio trabalho,{" "}
              <Text as="span" fontWeight="700">
                restaurantes
              </Text>{" "}
              pagam taxas menores e são mais valorizados, e{" "}
              <Text as="span" fontWeight="700">
                consumidores
              </Text>{" "}
              participam de uma economia justa de verdade, pagando até 20% a
              menos nos pratos.
            </Heading>
            <Button
              mt="10"
              maxW="328px"
              variant="primary"
              h="64px"
              fontSize="1.25rem"
              fontWeight="700"
              onClick={() => {
                setShowAppsModal(true);
                fbq.event("Click hero callToAction");
              }}
            >
              Baixe o app e faça parte
            </Button>
          </Flex>
          <Flex
            mt={{ base: "8", lg: "0" }}
            flexDir="column"
            justifyContent="center"
            alignItems="flex-end"
            w="100%"
          >
            <Image
              src="/crowd-hero@2x.jpeg"
              w="100%"
              maxW="648px"
              alt="entregador de delivery"
            />
          </Flex>
        </Flex>
      </Container>
      <Flex
        display={{ base: "none", lg: "flex" }}
        position="absolute"
        bottom="-70px"
        w="100%"
        justifyContent="center"
        alignItems="center"
        zIndex="900"
      >
        <Image
          src="/decorative-lines-yellow.svg"
          w={{ md: "360px", lg: "560px" }}
          alt="ilustração de linha amarela"
        />
      </Flex>
    </Section>
  );
};

export default Hero;
