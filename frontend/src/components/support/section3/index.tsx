import Container from "@/components/Container";
import Section from "@/components/Section";
import { Span } from "@/components/Span";
import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";

export const Section3 = () => {
  return (
    <Section
      id="support-ods"
      position="relative"
      minH="100vh"
      bgColor="lightGray"
    >
      <Container minH="100vh" py={{ base: "16", md: "16", lg: "32" }}>
        <Flex
          flexDir={{ base: "column", md: "row" }}
          justifyContent={{ md: "space-between" }}
        >
          <Box w="100%" maxW={{ md: "300px", lg: "492px" }}>
            <Text fontSize="2xl" fontWeight="semibold">
              Como fazemos isso?
            </Text>
            <Text mt="6">
              Construímos o AppJusto com base nos princípios cooperativistas
              relacionados a colaboração, coletividade, transparência e
              autonomia, e assim desenhamos nossa operação de forma a mantê-la
              sempre com o menor custo possível - hoje e no futuro, como um
              compromisso da nossa parte.
            </Text>
            <Text mt="6">
              Ao contrário das grandes plataformas do mercado - cuja estratégia
              de crescimento é pautada no monopólio, em investimentos
              milionários em marketing e na precarização do trabalho visando o
              lucro -, aqui no AppJusto nós focamos até hoje em desenvolver
              plataforma e operação de qualidade, e não fizemos investimentos em
              comunicação para divulgar nosso trabalho. Até agora.
            </Text>
          </Box>
          <Box
            mt={{ base: "6", md: "0" }}
            w="100%"
            maxW={{ md: "300px", lg: "492px" }}
            mr={{ lg: "24" }}
          >
            <Box mt="6">
              <HStack spacing={4} alignItems="center">
                <Image src="/support/icon-delivery.svg" alt="" w="6" h="6" />
                <Text color="gray.700">Entregadores</Text>
              </HStack>
              <Text mt="4">
                Entregadores têm <Span bold>remuneração digna</Span>, podem
                sacar seus valores em 24h a contar do serviço prestado e são{" "}
                <Span bold>segurados contra acidentes</Span> em todas as
                corridas.
              </Text>
            </Box>
            <Box mt="8">
              <HStack spacing={4} alignItems="center">
                <Image src="/support/icon-rest.svg" alt="" w="6" h="6" />
                <Text color="gray.700">Restaurantes</Text>
              </HStack>
              <Text mt="4">
                Restaurantes pagam <Span bold>taxas até 6x menores</Span> do que
                em outras plataformas; com isso, podem dar mais benefícios e{" "}
                <Span bold>descontos aos consumidores</Span> - e ainda assim ter
                maior lucratividade, garantindo
                <Span bold>sustentabilidade ao negócio</Span>.
              </Text>
            </Box>
            <Box mt="8">
              <HStack spacing={4} alignItems="center">
                <Image src="/support/icon-people.svg" alt="" w="6" h="6" />
                <Text color="gray.700">Consumidores</Text>
              </HStack>
              <Text mt="4">
                Consumidores podem ter <Span bold>benefícios e descontos</Span>{" "}
                dos restaurantes, e têm a certeza de que não há{" "}
                <Span bold>ninguém sendo explorado</Span>.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>
      <Box
        position="absolute"
        display={{ base: "none", md: "initial" }}
        bottom={{ md: "-280px", lg: "-368px" }}
        right="0"
        w={{ md: "180px", lg: "240px" }}
        // zIndex="100"
      >
        <Image src="/support/section3-spark.png" alt="faísca amarela" />
      </Box>
    </Section>
  );
};
