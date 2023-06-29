import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { BaseTopic } from "../../BaseTopic";
import { SectionTopic } from "../../SectionTopic";

export const S5Topic1 = () => {
  return (
    <BaseTopic>
      <Flex
        mt={{ lg: "24" }}
        position="relative"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          w="100vw"
          position="absolute"
          display={{ base: "none", lg: "initial" }}
        >
          <Image src="/dw/section5-bg.png" alt="seção 5 background" />
        </Box>
        <Box ml={{ lg: "6" }} maxW="545px" zIndex="10">
          <SectionTopic
            section="REPRESENTAÇÃO"
            topic="AppJusto é a única plataforma de entregas que criou mecanismos de participação coletiva"
          />
          <Text mt="6">
            Temos mantido o diálogo com associações e coletivos que demonstraram
            interesse em criar suas próprias frotas para entregas de
            mercadorias. Estamos tentando firmar contratos com empresas para
            impulsionar a criação de frotas que representam cooperativas e
            coletivos.
          </Text>
        </Box>
        <Box
          w="100vw"
          position="absolute"
          bottom="-460px"
          display={{ base: "flex", md: "none" }}
          zIndex="1"
        >
          <Image
            src="/dw/section5-bg-mob.png"
            alt="seção 5 background mobile"
          />
        </Box>
      </Flex>
    </BaseTopic>
  );
};
