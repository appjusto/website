import { Span } from "@/components/Span";
import { Box, Button, Center, Flex, Image, Link, Text } from "@chakra-ui/react";
import { BaseTopic } from "../../BaseTopic";
import { SectionTopic } from "../../SectionTopic";

export const S2Topic4 = () => {
  return (
    <BaseTopic>
      <Flex
        position="relative"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        minH={{ md: "500px", lg: "600px" }}
      >
        <Box
          w="100vw"
          position="absolute"
          display={{ base: "none", lg: "initial" }}
          zIndex="1"
        >
          <Image src="/dw/section2-bg2.png" alt="seção 2 background" />
        </Box>
        <Box w="100%" maxW="545px" zIndex="10">
          <SectionTopic
            section="CONDIÇÕES"
            topic="Corridas seguradas contra acidentes pela Iza"
          />
          <Text mt="6">
            Desde o dia 15 de fevereiro, todas as corridas feitas por
            entregadores ou entregadoras da rede AppJusto estão cobertas contra
            acidentes pelo seguro da empresa Iza, especializada nesse tipo de
            cobertura.
          </Text>
          <Link
            w="100%"
            _focus={{ outline: "none" }}
            _hover={{ textDecor: "none" }}
            href="https://seguro.iza.com.vc/plano_appjusto"
            isExternal
          >
            <Button
              mt="6"
              w="fit-content"
              variant="outlineDark"
              px="10"
              fontSize="sm"
            >
              Veja os valores da cobertura
            </Button>
          </Link>
        </Box>
        <Center mt="8" w="100vw" display={{ base: "flex", md: "none" }}>
          <Image
            src="/dw/section2-bg3-mob.png"
            alt="seção 2 background mobile"
          />
        </Center>
        <Box
          mt={{ base: "8", md: "24", lg: "32" }}
          w="100%"
          maxW="545px"
          zIndex="10"
        >
          <SectionTopic
            section="CONDIÇÕES"
            topic="Apoio à criação de uma legislação para regulamentar o trabalho por plataforma"
          />
          <Text mt="6">
            Acreditamos que grande parte dos problemas que os trabalhadores e
            trabalhadoras de plataforma enfrentam só será resolvida por meio de{" "}
            <Span bold>
              políticas públicas que criem obrigações proporcionais a todas as
              plataformas
            </Span>
            . Questões como valor mínimo, jornadas dignas, seguridade, espaços
            de descanso, etc, podem e devem ser resolvidas por meio de
            legislação garantida pelo estado.
          </Text>
          <Text mt="6">
            Um possível primeiro passo seria a criação de um cadastro único de
            trabalhadores de plataforma. O esboço desta ideia está{" "}
            <Link
              href="https://github.com/appjusto/docs/blob/main/legal/cadastro-unico.md"
              fontWeight="semibold"
              textDecor="underline"
              isExternal
            >
              disponível aqui
            </Link>
            .
          </Text>
        </Box>
      </Flex>
    </BaseTopic>
  );
};
