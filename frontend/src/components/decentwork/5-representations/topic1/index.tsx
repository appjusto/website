import { Box, Flex, Image, Link, Stack, Text } from "@chakra-ui/react";
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
            topic="AppJusto mantém diálogo constante com as pessoas que fazem entregas"
          />
          <Text mt="6">
            O AppJusto nasceu em resposta às paralisações promovidas por
            entregadores e entregadoras em 2020. Todas as principais
            reivindicações (mínimo de R$ 10 por corrida, fim de bloqueios sem
            direito de defesa e código de confirmação em todas as corridas) já
            foram incorporadas à plataforma desde o começo.
          </Text>
          <Text mt="6">
            Para que o diálogo com a categoria seja constante, nós mantemos
            grupos de WhatsApp (“Centrais de discussão”) e contato associações e
            coletivos que representam a categoria.
          </Text>
          <Box mt="16">
            <Text>Associações e coletivos</Text>
            <Stack mt="6">
              <Box maxW="210px">
                <Link href="https://www.amabr.net/" isExternal>
                  <Image src="/dw/logo-amabr.png" alt="Logo AMABR" />
                </Link>
              </Box>
            </Stack>
          </Box>
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
