import { Box, Button, Center, Flex, Image, Link, Text } from "@chakra-ui/react";
import { BaseTopic } from "../../BaseTopic";
import { SectionTopic } from "../../SectionTopic";

export const S4Topic3 = () => {
  return (
    <BaseTopic>
      <Flex
        mt={{ lg: "12" }}
        position="relative"
        flexDir={{ base: "column", md: "row" }}
      >
        <Center
          position="absolute"
          top="-160px"
          right="0"
          display={{ base: "none", lg: "flex" }}
          // mr={{ lg: "32" }}
        >
          <Image
            mt="8"
            w="236px"
            src="/dw/section4-img2.png"
            alt="seção 4 background"
          />
        </Center>
        <Box maxW={{ md: "360px", lg: "580px" }} zIndex="10" mr={{ lg: "32" }}>
          <SectionTopic
            section="GESTÃO"
            topic="AppJusto é intolerante com a intolerância"
          />
          <Text mt="6">
            Nossos termos de uso proíbem qualquer pessoa do nosso time ou que
            use a plataforma cometer qualquer ato de discriminação sob pena de
            banimento da plataforma. Denúncias podem ser por formulário web ou
            diretamente pelo aplicativo.
          </Text>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdno6pL4SfxBysVONVROn6xslvITLaC-0aWc_LBpn4sYt0OYQ/viewform"
            isExternal
          >
            <Button mt="8" px="10" w="fit-content" variant="outlineDark">
              Acessar formulário
            </Button>
          </Link>
        </Box>
        <Box
          maxW="580px"
          zIndex="10"
          mt={{ base: "24", md: "0" }}
          ml={{ md: "8", lg: "0" }}
          mr={{ lg: "32" }}
        >
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
      </Flex>
    </BaseTopic>
  );
};
