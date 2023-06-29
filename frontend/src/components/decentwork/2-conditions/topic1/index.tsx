import { Box, Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { BaseTopic } from "../../BaseTopic";
import { SectionTopic } from "../../SectionTopic";

export const S2Topic1 = () => {
  return (
    <BaseTopic>
      <Flex flexDir={{ base: "column", md: "row" }}>
        <Box maxW={{ md: "360px", lg: "620px" }}>
          <SectionTopic
            section="CONDIÇÕES"
            topic="O AppJusto exige que os entregadores tenham MEI"
          />
          <Text mt="6">
            Como forma de mitigar alguns dos riscos específicos da atividade dos
            entregadores, como por exemplo, risco de acidentes e lesões, o
            AppJusto exige que os entregadores sejam inscritos como MEI, o que
            confere aos entregadores diversos benefícios.
          </Text>
          <Text mt="6">Entregador, aproveite e crie o seu MEI!</Text>
        </Box>
        <Box ml={{ base: "0", md: "6" }} p="6">
          <Wrap spacing={6} justify="center">
            <WrapItem
              py="4"
              px="6"
              bgColor="white"
              borderRadius="lg"
              fontSize="xl"
              fontWeight="semibold"
            >
              Aposentadoria por idade
            </WrapItem>
            <WrapItem
              py="4"
              px="6"
              bgColor="white"
              borderRadius="lg"
              fontSize="xl"
              fontWeight="semibold"
            >
              Salário-maternidade
            </WrapItem>
            <WrapItem
              py="4"
              px="6"
              bgColor="white"
              borderRadius="lg"
              fontSize="xl"
              fontWeight="semibold"
            >
              Auxílio-doença
            </WrapItem>
            <WrapItem
              py="4"
              px="6"
              bgColor="white"
              borderRadius="lg"
              fontSize="xl"
              fontWeight="semibold"
            >
              Aposentadoria por invalidez
            </WrapItem>
            <WrapItem
              py="4"
              px="6"
              bgColor="white"
              borderRadius="lg"
              fontSize="xl"
              fontWeight="semibold"
            >
              Auxílio-reclusão
            </WrapItem>
            <WrapItem
              py="4"
              px="6"
              bgColor="white"
              borderRadius="lg"
              fontSize="xl"
              fontWeight="semibold"
            >
              Pensão por morte
            </WrapItem>
          </Wrap>
        </Box>
      </Flex>
    </BaseTopic>
  );
};
