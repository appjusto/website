import Container from "@/components/Container";
import Section from "@/components/Section";
import { Span } from "@/components/Span";
import {
  Box,
  Center,
  CenterProps,
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

interface DataItemProps extends CenterProps {
  data: string;
}

const DataItem = ({ data, children, ...props }: DataItemProps) => {
  return (
    <GridItem>
      <Center
        flexDir="column"
        border="1px solid"
        borderColor="primary"
        borderRadius="lg"
        bgColor="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="100%"
        minH="216px"
        px="8"
        py="12"
        {...props}
      >
        <Text fontSize="4xl" fontWeight="semibold">
          {data}
        </Text>
        {children}
      </Center>
    </GridItem>
  );
};

export const Section2 = () => {
  return (
    <Section
      id="support-data"
      minH="100vh"
      bgColor="lightGray"
      overflow="hidden"
    >
      <Container minH="100vh" py={{ base: "16", md: "16", lg: "32" }}>
        <Flex
          flexDir={{ base: "column", md: "row" }}
          justifyContent="space-between"
        >
          <Box maxW="426px">
            <Text fontSize="6xl" fontWeight="semibold">
              <Span bgColor="green.500" fontSize="3xl" px="2">
                <Span fontSize="6xl" bold>
                  +XX0.000
                </Span>
              </Span>{" "}
            </Text>
            <Text>
              Instalações do app feitas por entregadores, restaurantes e
              consumidores
            </Text>
          </Box>
          <Flex mt={{ base: "6", md: "0" }} position="relative">
            <Stack
              direction={{ base: "column", lg: "row" }}
              w={{ base: "100%" }}
              bgColor="white"
              border="1px solid"
              borderColor="yellow"
              borderRadius="lg"
              p="10"
              spacing={12}
            >
              <Center flexDir="column">
                <Text fontSize="4xl" fontWeight="semibold">
                  100
                </Text>
                <Text mt="2">Entregadores</Text>
              </Center>
              <Center flexDir="column">
                <Text fontSize="4xl" fontWeight="semibold">
                  300
                </Text>
                <Text mt="2">Consumidores</Text>
              </Center>
              <Center flexDir="column">
                <Text fontSize="4xl" fontWeight="semibold">
                  1000
                </Text>
                <Text mt="2">Restaurantes</Text>
              </Center>
            </Stack>
            <Box
              position="absolute"
              top={{ base: "-4", lg: "-8" }}
              right={{ base: "-4", lg: "-8" }}
              w="8"
              h="8"
            >
              <Image src="/support/section2-spark.png" alt="faísca amarela" />
            </Box>
          </Flex>
        </Flex>
        <Grid mt="6" templateColumns={{ lg: "repeat(3, 1fr)" }} gap={6}>
          <DataItem data="41.806">
            <Text mt="4" textAlign="center" fontSize="md">
              pedidos entregues: delivery comida + entregas rápidas
            </Text>
          </DataItem>
          <DataItem data="R$500.000">
            <Text mt="4" textAlign="center" fontSize="md">
              diferença estimada em economia feita pelos restaurantes que estão
              conosco considerando valores regulares de outras plataformas
            </Text>
          </DataItem>
          <DataItem data="R$4.443.603">
            <Text mt="4" textAlign="center" fontSize="md">
              movimentados em pedidos de comida
            </Text>
          </DataItem>
        </Grid>
        <Grid mt="6" templateColumns={{ lg: "repeat(3, 1fr)" }} gap={6}>
          <DataItem data="R$147.000" minH={{ lg: "306px" }}>
            <Text mt="4" textAlign="center" fontSize="md">
              a mais no bolso dos entregadores: estimativa do total incremental
              pago aos entregadores comparando o valor pago pelo AppJusto vs
              outras plataformas
            </Text>
            <Text mt="4" textAlign="center" fontSize="md">
              Considera média de R$ 6,50 como valor mínimo pago por corrida por
              outras plataformas vs R$ 10,00 pago pelo AppJusto
            </Text>
          </DataItem>
          <DataItem data="R$4.443.603" minH={{ lg: "306px" }}>
            <Text mt="4" textAlign="center" fontSize="md">
              movimentados em pedidos de comida
            </Text>
          </DataItem>
        </Grid>
      </Container>
    </Section>
  );
};
