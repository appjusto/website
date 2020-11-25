import Image from 'next/image'
import { Flex, Box, Heading, Stack } from "@chakra-ui/react";
import Container from "../../Container";
import Section from "../../Section";
import CustomButton from '../../CustomButton'
import InfoBox from './InfoBox';
import InfoButtons from './InfoButtons';


const Alternative: React.FC = () => {
  return (
    <Section
      id="alternative"
      minH="100vh" 
    >
      <Container
        flexDir="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        pt={["80px", "80px", "80px", "54px"]} 
        pb={["62px", "62px", "62px", "53px"]} 
      >
        <Flex
          flexDir="row"
          justifyContent="space-between"
          alignItems="flex-end" 
          mb={["42px", "42px", "42px", "51px"]}  
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
              fontSize={["24px", "24px", "24px", "48px"]}  
              lineHeight={["28,8px", "28,8px", "28,8px", "48px"]} 
            >
              Uma plataforma onde o ganho é compartilhado.
            </Heading>
          </Flex>
          <InfoButtons display={["none", "none", "none", "flex"]}/>
        </Flex>
        <Stack
          direction="row"
          spacing={2}
          //overflow="hidden"
          w="100%"
          overflowX="scroll"
          mb="38px"
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
        <InfoButtons display={["flex", "flex", "flex", "none"]}/>
      </Container>
    </Section>
  );
}

export default Alternative;