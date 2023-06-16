import {
  Box,
  Button,
  Flex,
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

const Section1: React.FC = () => {
  return (
    <Section id="dw-section1" minH="100vh">
      <Container h="100vh">
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
        <Flex justifyContent="space-between" alignItems="flex-end">
          <SectionTopic section="REMUNERAÇÃO" topic="Principais indicadores " />
          <Text fontSize="lg" fontWeight="500">
            Atualizado: 16/06/2023
          </Text>
        </Flex>
      </Container>
    </Section>
  );
};

export default Section1;
