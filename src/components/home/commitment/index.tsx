import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import Container from "../../Container";
import Section from "../../Section";
import Item from './Item';
import InfoButtons from './InfoButtons';

import Line from '../../../../public/line-vector-g.svg'
import Bg from '../../../../public/bg-commitment.webp'
import IconBike from '../../../../public/icon-bike.svg'
import IconMon from '../../../../public/item-monetization.svg'
import IconThumb from '../../../../public/item-thumb.svg'
import IconDom from '../../../../public/item-domain.svg'
import IconBlur from '../../../../public/item-blur.svg'
import IconWorld from '../../../../public/item-world.svg'

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
          <Box
            position="relative"
            maxW={["220px", null, "220px","520px"]}
            mt={["-38px", null, "-4px","-8px"]}
            color="white"
          >
            <img
              src={Line}
              alt="Linha verde"
              width={544}
              height={20}
            />
          </Box>
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
            <img
              src={Bg}
              alt="Celular com appjusto na tela"
              width={499}
              height={480}
            />
          </Box>
          <Flex
            w="100%"
            flexDir="column"
            maxW="656px"
          >
            <InfoButtons />
            <Item
              image={IconBike}
              altImg="Ícone de entregador numa moto"
              title="Autonomia e participação"
            />
            <Item
              image={IconMon}
              altImg="Ícone de moeda"
              title="Preço justo para todos"
            />
            <Item
              image={IconThumb}
              altImg="Ícone de curtir"
              title="Eficiência e sustentabilidade financeira"
            />
            <Item
              image={IconDom}
              altImg="Ícone de prédios"
              title="Criação de um bem coletivo"
            />
            <Item
              image={IconBlur}
              altImg="Ícone de pontos"
              title="Transparência em toda a plataforma"
            />
            <Item
              image={IconWorld}
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
