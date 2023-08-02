import Container from "@/components/Container";
import Section from "@/components/Section";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

export const Section4 = () => {
  return (
    <Section id="support-ods" minH="100vh" overflow="hidden">
      <Container minH="100vh" py={{ base: "16", md: "16", lg: "32" }}>
        <Box>
          <Text fontSize="4xl" fontWeight="semibold" maxW="1148px">
            Você usa aplicativo de delivery e deseja uma sociedade menos
            desigual? Então faça parte desse movimento por um delivery mais
            humano!
          </Text>
          <Text mt="4">
            Além de usar o serviço e divulgá-lo pra quem você conhece, você
            também pode apoiar o movimento de outras maneiras.
          </Text>
        </Box>
        <Flex mt={{ lg: "24" }} flexDir={{ base: "column", md: "row" }}>
          <Box maxW="438px" mr={{ lg: "32" }}>
            <Flex>
              <Box w="2" h="78px" bgColor="primary" mr="4" />
              <Text fontSize="3xl">
                Apoie mensalmente e converta o valor em frete nos pedidos
              </Text>
            </Flex>
            <Box ml="6" mt="2">
              <Text>
                A partir de R$ 100/mês, você apoia a plataforma para
                continuarmos a lutar por um delivery de respeito e dignidade.
                Você poderá converter 100% deste valor em abatimento de frete ao
                fazer pedidos no AppJusto.
              </Text>
              <Button
                mt="6"
                variant="outlineDark"
                size="lg"
                fontSize="md"
                px="8"
              >
                Saber como funciona
              </Button>
            </Box>
          </Box>
          <Box maxW="438px">
            <Flex>
              <Box w="2" h="78px" bgColor="primary" mr="4" />
              <Text fontSize="3xl">
                Invista no negócio: compre cotas de participação
              </Text>
            </Flex>
            <Box ml="6" mt="2">
              <Text>
                Estamos construindo um bem coletivo, e periodicamente abrimos a
                oportunidade de investimento no projeto. Clicando abaixo, você
                pode manifestar seu interesse em saber sobre uma próxima rodada
                de captação.
              </Text>
              <Button
                mt="6"
                variant="outlineDark"
                fontSize="md"
                size="lg"
                px="8"
              >
                Avise-me sobre captação
              </Button>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Section>
  );
};
