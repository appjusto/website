import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import Container from "../../Container";
import Section from "../../Section";
import Item from './Item';
import InfoButtons from './InfoButtons';
import Image from '../../Image'
import Line from '../../Line'

const Commitment: React.FC = () => {
  return (
    <Section
      id="commitment"
    >
      <Container
        flexDir="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        pt={["52px", null, null, "54px"]}
        pb={["62px", null, null, "64px"]}
      >
        <Heading
          as="h2"
          fontSize={["24px", null, null, "56px"]}
          lineHeight={["28,8px", null, null, "67,2px"]}
          mb={["64px", null, "24px"]}
        >
          Nosso compromisso é com a sociedade.
          <Line
            color="green"
            maxW={["220px", null, "220px","520px"]}
            mt={["-38px", null, "-4px","-8px"]}
          />
        </Heading>
        <Flex
          w="100%"
          flexDir="row"
          justifyContent="space-between"
        >
          <Box
            position="relative"
            w="100%"
            display={["none", null, null, "block"]}
          >
            <Image src="/bg-commitment.png" alt="Celular com appjusto na tela" />
          </Box>
          <Flex
            w="100%"
            flexDir="column"
            maxW="656px"
          >
            <InfoButtons />
            <Item
              image="/icon-bike.svg"
              altImg="Ícone de entregador numa moto"
              title="Autonomia e participação"
            />
            <Item
              image="/item-monetization.svg"
              altImg="Ícone de moeda"
              title="Preço justo para todos"
            />
            <Item
              image="/item-thumb.svg"
              altImg="Ícone de curtir"
              title="Eficiência e sustentabilidade financeira"
            />
            <Item
              image="/item-domain.svg"
              altImg="Ícone de prédios"
              title="Criação de um bem coletivo"
            />
            <Item
              image="/item-blur.svg"
              altImg="Ícone de pontos"
              title="Transparência em toda a plataforma"
            />
            <Item
              image="/item-world.svg"
              altImg="Ícone de planeta"
              title="Objetivos de Desenvolvimento Sustentáveis"
              ods={true}
            />
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
}

export default Commitment;
