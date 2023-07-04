import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { BaseTopic } from "../../BaseTopic";
import { SectionTopic } from "../../SectionTopic";

export const S4Topic3 = () => {
  return (
    <BaseTopic>
      <Flex
        mt={{ lg: "12" }}
        position="relative"
        flexDir={{ lg: "row" }}
        justifyContent={{ md: "center", lg: "space-between" }}
      >
        <Box ml={{ lg: "32" }} maxW="545px" zIndex="10" mr={{ lg: "32" }}>
          <SectionTopic
            section="GESTÃO"
            topic="O AppJusto oferece comunicação direta"
          />
          <Text mt="6">
            Sempre que há problemas na validação do cadastro ou durante pedidos,
            o entregador ou entregadora pode se comunicar com nosso time de
            atendimento de forma direta, sem intermediação de bots.
          </Text>
        </Box>
        <Flex display={{ base: "none", lg: "flex" }} mr={{ lg: "32" }}>
          <Image
            mt="8"
            w="236px"
            src="/dw/section4-img1.png"
            alt="seção 4 background"
          />
        </Flex>
      </Flex>
    </BaseTopic>
  );
};
