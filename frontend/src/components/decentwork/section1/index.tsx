import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Section from "src/components/Section";
import Container from "src/components/Container";
import React from "react";
import { SectionHeader } from "../SectionHeader";
import { SectionTopic } from "../SectionTopic";
import { IndicatorBox } from "./IndicatorBox";

const Section1: React.FC = () => {
  return (
    <Section id="dw-section1" minH="100vh">
      <Container minH="100vh">
        <SectionHeader
          sectionNumber={1}
          title="Remuneração"
          description={
            <Text>
              Garantia que o trabalhador tenha pelo menos{" "}
              <strong>um salário digno</strong> (salário mínimo com base na
              região) descontados os custos/gastos para trabalhar.
            </Text>
          }
        />
        <Flex
          mt={{ base: "6", md: "12" }}
          flexDir={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ base: "flex-start", md: "flex-end" }}
        >
          <SectionTopic section="REMUNERAÇÃO" topic="Principais indicadores " />
          <Text mt={{ base: "4", md: "0" }} fontSize="lg" fontWeight="500">
            Atualizado: 16/06/2023
          </Text>
        </Flex>
        <Flex
          mt={{ base: "6", md: "14" }}
          flexDir={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ md: "center" }}
          py={{ base: "6", md: "12" }}
          px={{ base: "4", md: "16" }}
          boxShadow="2px 8px 16px 2px rgba(105, 118, 103, 0.2)"
          borderRadius="lg"
        >
          <Box maxW="452px">
            <Text
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="700"
              lineHeight="4rem"
              color="body"
            >
              R$18,10 por hora
            </Text>
            <Text>
              É o que os entregadores ganham em média,{" "}
              <strong>sem considerar as gorjetas.</strong>
            </Text>
          </Box>
          <Box
            mt={{ base: "4", md: "0" }}
            p="4"
            maxW="440px"
            border="1px solid"
            borderColor="green.300"
            borderRadius="lg"
            bgColor="green.50"
          >
            <Text fontSize="lg">
              O valor é cerca de 3,3x <strong>maior</strong> que o mínimo local
              e cerca de <strong>65% do valor ideal</strong> calculado pelo
              DIEESE.
            </Text>
          </Box>
        </Flex>
        <Box
          mt={{ base: "6", md: "14" }}
          maxW="100vw"
          overflowX={{ base: "scroll", md: "unset" }}
        >
          <Flex
            w={{ base: "100%", md: "100%" }}
            flexDir={{ base: "row", md: "column" }}
            justify="space-between"
          >
            <HStack spacing={6}>
              <IndicatorBox
                title="31,38 min"
                description="Tempo média  de entrega"
              />
              <IndicatorBox
                title="6,29 km*"
                description="Distância média percorrida"
              />
              <IndicatorBox title="R$1,56**" description="Gasto por corrida" />
            </HStack>
            <HStack mt={{ md: "6" }} ml={{ base: "6", md: "0" }} spacing={6}>
              <IndicatorBox
                title="R$11,21"
                description="Ganho bruto por corrida"
              />
              <IndicatorBox
                title="R$9,65"
                description="Ganho líquido por corrida"
              />
              <IndicatorBox
                title="R$18,26"
                description="Ganho líquido médio por hora"
              />
            </HStack>
          </Flex>
        </Box>
      </Container>
    </Section>
  );
};

export default Section1;
