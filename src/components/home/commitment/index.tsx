import Image from 'next/image'
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import Container from "../../Container";
import Section from "../../Section";
import Item from './Item';


const Commitment: React.FC = () => {
  return (
    <Section
      id="commitment"
    >
      <Container
        flexDir="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        pb={["62px", null, null, "64px"]} 
      >
        <Heading 
          as="h2"
          fontSize="32px"
          lineHeight="48px"
          mb="24px"
        >
          Nosso compromisso é com a sociedade.
        </Heading>
        <Text 
          fontSize="20px"
          lineHeight="26px"
          textStyle="p"
          maxW="656px"
          mb="32px"
        >
          Nosso propósito é impactar positivamente a sociedade para pensar e
          agir de maneira mais coletiva, onde todos ganham mais. Descubra como:
        </Text>
        <Flex
          w="100%"
          flexDir="row"
          justifyContent="space-between"
        >
          <Flex
            w="100%"
            flexDir="column"
            maxW="656px"
          >
            <Item 
              image="/icon-bike.svg" 
              altImg="Ícone de entregador numa moto"
              title="Autonomia e participação" 
              text="Entregador e restaurantes ditam as regras e tem mais controle 
                do seu trabalho com a criação de frotas próprias"
            />
            <Item 
              image="/item-monetization.svg" 
              altImg="Ícone de moeda"
              title="Compromisso de preço justo para todos" 
              text="Restaurantes, entregadores e clientes ganham mais, tanto no 
                bolso, quanto em qualidade"
            />
            <Item 
              image="/item-thumb.svg" 
              altImg="Ícone de curtir"
              title="Eficiência e sustentabilidade financeira" 
              text="O nosso crescimento está atrelado ao crescimento da rede"
              link="/sobre-o-appjusto"
              linkLabel="Saiba mais sobre o AppJusto"
            />
            <Item 
              image="/item-domain.svg" 
              altImg="Ícone de prédios"
              title="Criação de um bem coletivo" 
              text="Permitimos que os participantes não estejam presos à plataforma 
                e tornamos livre qualquer código produzido"
            />
            <Item 
              image="/item-blur.svg" 
              altImg="Ícone de pontos"
              title="Transparência em toda a plataforma" 
              text="Desde a definiação das regras até os preços cobrados"
              //link="/transparencia"
              //linkLabel="Saiba mais sobre Transparência"
            />
            <Item 
              image="/item-world.svg" 
              altImg="Ícone de planeta"
              title="Objetivos de Desenvolvimento Sustentáveis" 
              text="Seguimos os Objetivos de Desenvolvimento Sustentáveis da ONU"
              ods={true}
            />
          </Flex>
          <Box
            position="relative"
            display={["none", null, null, "block"]}
          >
            <Image 
              src="/commitment-route.svg" 
              alt="Rota do pedido" 
              width={368} 
              height={669} 
            />
          </Box>
        </Flex>
      </Container>
    </Section>
  );
}

export default Commitment;