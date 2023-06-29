import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
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
        >
          <Image src="/dw/section2-bg2.png" alt="seção 2 background" />
        </Box>
        <Box w="100%" maxW="545px">
          <SectionTopic
            section="CONDIÇÕES"
            topic="Todas as corridas estão seguradas contra acidentes pelo seguro Iza"
          />
          <Text mt="6">
            Já iniciamos a integração com o seguro contra acidentes da empresa
            Iza, especializada nesse tipo de cobertura. Desde "X de mês" todos
            as corridas feitas por entregadores dentro da rede AppJusto estão
            cobertos contra acidentes pela empresa Iza, seguradora especializada
            nesse tipo de cobertura. Veja os valores da cobertura aqui.
          </Text>
        </Box>
        <Center mt="8" w="100vw" display={{ base: "flex", md: "none" }}>
          <Image
            src="/dw/section2-bg3-mob.png"
            alt="seção 2 background mobile"
          />
        </Center>
        <Box mt={{ base: "8", md: "24", lg: "32" }} w="100%" maxW="545px">
          <SectionTopic
            section="CONDIÇÕES"
            topic="Apoio à criação de uma legislação para regulamentar o trabalhador por plataforma"
          />
          <Text mt="6">
            Acreditamos que grande parte dos problemas que os trabalhadores de
            plataforma enfrentam só será resolvida através de políticas públicas
            que criem obrigações proporcionais a todas as plataformas. Questões
            como valor mínimo, jornadas exaustivas, seguridade, espaços de
            descanso, etc, podem e devem ser resolvidas através de legislação
            garantida pelo estado.
          </Text>
          <Text mt="6">
            Um possível primeiro passo seria a criação de um cadastro único de
            trabalhadores de plataforma. O esboço desta ideia está disponível
            aqui. Lançaremos uma página com mais detalhes e tentaremos iniciar
            um debate com os interessados.
          </Text>
        </Box>
      </Flex>
    </BaseTopic>
  );
};
