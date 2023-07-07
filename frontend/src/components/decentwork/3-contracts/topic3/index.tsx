import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { BaseTopic } from "../../BaseTopic";
import { SectionTopic } from "../../SectionTopic";

export const S3Topic3 = () => {
  return (
    <BaseTopic>
      <Flex
        position="relative"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        minH={{ md: "500px", lg: "600px" }}
        // overflow="hidden"
      >
        <Box
          w="100vw"
          position="absolute"
          display={{ base: "none", lg: "initial" }}
        >
          <Image src="/dw/section3-bg.png" alt="background" />
        </Box>
        <Center
          mt={{ base: "-10", md: "none" }}
          w="100%"
          display={{ base: "flex", lg: "none" }}
          pb="10"
        >
          <Image
            w={{ base: "40px", md: "60px" }}
            src="/dw/section3-img-mob.png"
            alt="background mobile"
          />
        </Center>
        <Box w="100%" maxW="545px" zIndex="10">
          <SectionTopic
            section="CONTRATOS"
            topic="Não há contratação de operadores logísticos (OL), mas há a contratação de empresas caso não haja disponibilidade de entregadores na rede"
            color="white"
          />
          <Text mt="6" color="white">
            O AppJusto não contrata nenhum OL com objetivo de exigir o
            cumprimento de horário, localização ou nada do tipo. Caso não haja
            entregadores disponíveis no AppJusto para fazer a corrida,
            contratamos uma empresa para realizar aquela entrega específica. Se
            houver sobra de valor, nós repassaremos aos entregadores que se
            cadastram na plataforma.
          </Text>
        </Box>
        <Box
          w="100vw"
          position="absolute"
          bottom="-520px"
          display={{ base: "flex", md: "none" }}
          zIndex="1"
        >
          <Image src="/dw/section3-bg-mob.png" alt="background mobile" />
        </Box>
      </Flex>
    </BaseTopic>
  );
};
