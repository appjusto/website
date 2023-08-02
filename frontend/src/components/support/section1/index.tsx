import Container from "@/components/Container";
import Section from "@/components/Section";
import { Span } from "@/components/Span";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

export const Section1 = () => {
  return (
    <Section id="support-ods" minH="100vh" overflow="hidden">
      <Container minH="100vh" py={{ base: "16", md: "16", lg: "32" }}>
        <Flex flexDir={{ base: "column", md: "row" }}>
          <Box w="100%" maxW="664px">
            <Text mt="6" fontSize="4xl" fontWeight="semibold">
              Somos uma start-up brasileira de tecnologia que nasceu para gerar{" "}
              <Span bgColor="green.500" fontSize="lg" px="1">
                <Span fontSize="4xl" bold>
                  impacto social positivo
                </Span>
              </Span>{" "}
              no mercado de entregas rápidas
            </Text>
            <Text mt="6">
              O AppJusto foi fundado em 2020 como uma{" "}
              <Span bold>alternativa transparente, digna e justa</Span> para
              entregadores e entregadoras autônomos, após paralisações da
              categoria reivindicando melhores condições de trabalho e
              remuneração decente.
            </Text>
            <Text mt="6">
              Somos norteados pelos{" "}
              <Span bold>
                Objetivos de Desenvolvimento Sustentável (ODS) 8 e 10 da ONU
              </Span>
              , e nossa missão é oferecer um serviço de plataforma que seja
              realmente bom pra todos que fazem parte dele:{" "}
              <Span bold>a melhor qualidade</Span>
              possível pelo <Span bold>menor custo</Span> possível para
              restaurantes e consumidores, pagando a{" "}
              <Span bold>maior remuneração</Span> possível aos entregadores -
              alinhada às reivindicações.
            </Text>
          </Box>
          <Flex
            w="100%"
            mt={{ base: "8", md: "0" }}
            maxW={{ md: "280px", lg: "720px" }}
            justifyContent="flex-end"
          >
            <Image
              src="/support/ods.png"
              alt="ODSs 8 e 10"
              mr={{ base: "-16%", md: "0", lg: "-140px" }}
            />
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
};
