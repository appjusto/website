import { Flex, Box, Heading, Text, Stack } from "@chakra-ui/react";
import Container from "../../Container";
import Section from "../../Section";
import InfoBox from './InfoBox';

import Line from '../../../../public/line-vector-g.svg'
import WeAre from '../../../../public/alternativa.svg'
import Couriers from '../../../../public/infobox-entregadores.png'
import Restaurants from '../../../../public/infobox-restaurantes.png'
import Clients from '../../../../public/infobox-clientes.png'

const Alternative: React.FC = () => {
  return (
    <Section
      id="alternative"
    >
      <Container
        flexDir="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        pt={["48px", null, null, "64px"]} 
        pb="64px" 
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
              maxW="420px"
              mb="-6px"  
            >
              <img 
                src={WeAre} 
                width={429} 
                height={43} 
                alt="Nós somos a alternativa"  
              />
            </Box>
            <Heading 
              as="h1" 
              fontSize={["24px", null, null, "48px"]}  
              lineHeight={["28,8px", null, null, "48px"]} 
            >
              Uma plataforma onde o ganho é compartilhado.
              <Box 
                position="relative"
                maxW={["180px", null, "280px", "540px"]}
                ml={["0", null, "226px", "456px"]}
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
            <Text textStyle="p" fontSize="20px" lineHeight="26px" mt="16px">
              Nosso propósito é promover relações justas e equilibradas na 
              economia de plataforma:
            </Text>
          </Flex>
        </Flex>
        <Stack
          direction="row"
          spacing={0}
          w="100%"
          overflowX="auto"
          p="48px 0 8px"
          mb={["38px", null, null, "0"]}
        >
          <InfoBox 
            image={Couriers}
            altImg="Entregador numa bicicleta"
            title="Entregadores"
            textArray={["Regras transparentes", "Atendimento direto", "Sem suspensões injustas", "Autonomia para criar frotas", "Definição de taxas e regras próprias"]}
          />
          <InfoBox 
            image={Restaurants}
            altImg="Mãos segurando um pode de comida"
            title="Restaurantes"
            textArray={["Menores taxas do mercado", "Logística inclusa", "Acesso direto ao cliente", "Visualização igualitária", "Gestão de frotas próprias"]} 
          />
          <InfoBox 
            image={Clients}
            altImg="Pessoa segurando um hamburguer"
            title="Clientes"
            textArray={["Pagar o preço do cardápio", "Entrega mais barata de encomendas", "Consciência de apoiar um modelo mais justo"]}
          />
        </Stack>
      </Container>
    </Section>
  );
}

export default Alternative;