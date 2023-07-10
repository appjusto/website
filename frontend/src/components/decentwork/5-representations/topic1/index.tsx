import { Box, Flex, Image, Link, Stack, Text } from "@chakra-ui/react";
import { BaseTopic } from "../../BaseTopic";
import { SectionTopic } from "../../SectionTopic";
import { Span } from "@/components/Span";

export const S5Topic1 = () => {
  return (
    <BaseTopic>
      <Flex
        mt={{ lg: "12" }}
        position="relative"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          w="100vw"
          position="absolute"
          display={{ base: "none", lg: "initial" }}
        >
          <Image src="/dw/section4-bg3.png" alt="background" />
        </Box>
      </Flex>
      <Flex
        mt={{ lg: "0" }}
        position="relative"
        justifyContent="center"
        alignItems="center"
      >
        <Box ml={{ lg: "6" }} maxW="545px" zIndex="10">
          <SectionTopic
            section="REPRESENTAÇÃO"
            topic="O AppJusto favorece a autonomia e a autogestão através das frotas"
          />
          <Text mt="6">
            O principal objetivo das frotas é permitir que as pessoas possam se
            juntar e <Span bold>definir as condições do próprio trabalho</Span>,
            como distâncias máximas e o valor por quilômetro. As frotas foi o
            mecanismo de descentralização que o AppJusto criou para que as
            pessoas possam se organizar coletivamente e ter{" "}
            <Span bold>autonomia sobre o próprio trabalho</Span>.
          </Text>
        </Box>{" "}
      </Flex>
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
          <Image src="/dw/section5-bg.png" alt="background" />
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
            Para que o diálogo seja constante, nós mantemos grupos de WhatsApp
            (“Centrais de discussão”) com os entregadores e entregadoras que
            fazem entregas na plataforma. É nesses grupos que as questões do
            mercado e da plataforma são discutidas coletivamente.
          </Text>
          <Text mt="6">
            O AppJusto também mantém contato com associações e coletivos que
            representam a categoria e estará sempre aberto ao diálogo para
            discutir e negociar com todas e todos que lutam por um trabalho
            decente no delivery.
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
          <Image src="/dw/section5-bg-mob.png" alt="background mobile" />
        </Box>
      </Flex>
    </BaseTopic>
  );
};
