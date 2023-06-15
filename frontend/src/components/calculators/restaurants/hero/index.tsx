import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import Section from "src/components/Section";
import Container from "src/components/Container";

const RestaurantsHero: React.FC = () => {
  return (
    <Section
      id="hero"
      h={{ base: "405px", md: "800px", lg: "480px" }}
      overflow="hidden"
    >
      <Container zIndex="100">
        <Flex
          flexDir="column"
          color="white"
          mt={{ base: "60px", md: "200px", lg: "120px" }}
          maxW={{ base: "100%", md: "600px", lg: "960px" }}
        >
          <Text fontSize="lg" lineHeight="26px" fontWeight="700" color="white">
            Calculadora para restaurantes
          </Text>
          <Heading
            as="h1"
            fontSize={{ base: "32px", md: "56px" }}
            fontWeight="700"
            lineHeight={{ base: "38.4px", md: "64px" }}
          >
            Descubra quanto você vai economizar com o AppJusto
          </Heading>
          <Text
            mt="24px"
            fontSize={{ base: "15px", md: "18px" }}
            lineHeight={{ base: "21px", md: "26px" }}
            color="white"
            maxW="560px"
          >
            O AppJusto criou uma calculadora para auxiliar o seu restaurante a
            saber quanto irá economizar utilizando a nossa plataforma de
            delivery. Você ganha mais, e ainda colabora com uma economia mais
            justa.
          </Text>
        </Flex>
      </Container>
      <Box position="absolute" top="0" left="0" w="full" zIndex="0">
        <picture>
          <source
            srcSet="/hero-restaurants-mobile.jpg"
            media="(max-width: 1024px)"
          />
          <source srcSet="/hero-restaurants.jpg" media="(min-width: 1024px)" />
          <img
            src="/hero-restaurants.jpg"
            alt="pratos sendo servidos"
            width="100%"
          />
        </picture>
      </Box>
    </Section>
  );
};

export default RestaurantsHero;
