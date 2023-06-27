import { Span } from "@/components/Span";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { BaseTopic } from "../../BaseTopic";
import { SectionTopic } from "../../SectionTopic";
import { IndicatorBox } from "./IndicatorBox";

export const S1Topic1 = () => {
  return (
    <BaseTopic>
      <Flex
        mt={{ base: "24", md: "16", lg: "24" }}
        flexDir={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ base: "flex-start", md: "flex-end" }}
      >
        <SectionTopic section="REMUNERAÇÃO" topic="Principais indicadores " />
        <Text mt={{ base: "4", md: "0" }} fontSize="lg" fontWeight="normal">
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
          <Text fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold">
            R$18,10 por hora
          </Text>
          <Text>
            É o que os entregadores ganham em média,{" "}
            <Span bold>sem considerar as gorjetas.</Span>
          </Text>
        </Box>
        <Box
          mt={{ base: "4", md: "0" }}
          p="4"
          maxW="444px"
          border="1px solid"
          borderColor="green.300"
          borderRadius="lg"
          bgColor="green.50"
        >
          <Text fontSize="lg">
            O valor é cerca de 3,3x <Span bold>maior</Span> que o mínimo local e
            cerca de <Span bold>65% do valor ideal</Span> calculado pelo DIEESE.
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
      <Box mt={{ base: "6", md: "10" }}>
        <Text fontSize="md" color="gray.600">
          * 2,39km de deslocamento até a coleta + 3,9km da coleta até a entrega
        </Text>
        <Text fontSize="md" color="gray.600">
          ** Combustível, manutenção e plano móvel, considerando 390 corridas /
          mês
        </Text>
      </Box>
    </BaseTopic>
  );
};
