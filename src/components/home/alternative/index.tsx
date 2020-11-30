import Image from 'next/image'
import { Flex, Box, Heading, Stack } from "@chakra-ui/react";
import Container from "../../Container";
import Section from "../../Section";
import InfoBox from './InfoBox';
import InfoButtons from './InfoButtons';


const Alternative: React.FC = () => {
  return (
    <Section
      id="alternative"
    >
      <Container
        flexDir="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        pt={["80px", null, null, "54px"]} 
        pb={["64px", null, null, "53px"]} 
      >
        <Flex
          flexDir="row"
          justifyContent="space-between"
          alignItems="flex-end" 
          mb={["42px", null, null, "51px"]}  
        >
          <Flex
            flexDir="column"
            w="100%"
          >
            <Box
              position="relative"
              w="100%"
              mb="-12px"  
            >
              <Image src="/alternativa.svg" width={429} height={43} />
            </Box>
            <Heading 
              as="h1" 
              fontSize={["24px", null, null, "48px"]}  
              lineHeight={["28,8px", null, null, "48px"]} 
            >
              Uma plataforma onde o ganho é compartilhado.
            </Heading>
          </Flex>
          <InfoButtons display={["none", null, null, "flex"]}/>
        </Flex>
        <Stack
          direction="row"
          spacing={2}
          w="100%"
          overflowX="auto"
          p="8px 0"
          mb={["38px", null, null, "0"]}
        >
          <InfoBox 
            image="/infobox-entregadores.png"
            title="Entregadores"
            text="Maiores ganhos nas corridas, regras transparentes, atendimento 
              direto, sem suspensões injustas, autonomia na criação de frotas com 
              taxas e próprias."
          />
          <InfoBox 
            image="/infobox-restaurantes.png"
            title="Restaurantes"
            text="Menores taxas que a concorrência, logística inclusa, acesso ao 
              cliente, exibição igualitária, gestão de frotas próprias, participação 
              na  plataforma."
          />
          <InfoBox 
            image="/infobox-clientes.png"
            title="Clientes"
            text="Pagar o preço do cardápio, sem entregas roteirizadas, entrega de 
              encomendas mais baratas, consciência de fazer parte de uma economia 
              mais justa."
          />
        </Stack>
        <InfoButtons display={["flex", null, null, "none"]}/>
      </Container>
    </Section>
  );
}

export default Alternative;