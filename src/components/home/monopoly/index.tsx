import Image from 'next/image'
import { Box, Heading } from "@chakra-ui/react";
import Container from "../../Container";
import Section from "../../Section";

import Line from '../../../../public/line-vector-y.svg'
import Bg from '../../../../public/bg-monopoly.png'
import BgMob from '../../../../public/bg-mobile-monopoly.png'

const Monopoly: React.FC = () => {
  return (
    <Section
      id="monopoly"
      bgColor="black"
      h="600px"
      overflow="hidden"
    >
      <Container
        h="100%"
        flexDir="column"
        zIndex="10"
        color="white"
        justifyContent="flex-end"
        alignItems="flex-start"
        pb={["62px", null, null, "53px"]} 
      >
        <Heading 
          as="h1"
          position="relative" 
          fontSize={["24px", null, null, "56px"]} 
          mb={["16px", null, null, "42px"]}  
          lineHeight={["28,8px", null, null, "62px"]} 
          maxW="944px"
        >
          Os apps atuais criam monopólios, controlam o mercado, impondo suas 
          próprias taxas e regras.
          <Box 
            position="absolute"
            maxW={["130px", null, null, "460px"]}
            top={["48px", null, "12px", "26px"]}
            left={["0", null, "220px", "360px"]}
          >
            <img 
              src={Line}
              alt="Linha amarela"
              width={544} 
              height={20} 
            />
          </Box>
        </Heading>
        <Heading 
          as="h4" 
          fontSize={["16px", null, null, "20px"]}  
          fontWeight="500" 
          lineHeight={["22px", null, null, "32px"]} 
          maxW="944px"
        >
          Hoje, os apps são fonte de renda para 3.8 milhões de autônomos no Brasil. 
          Este modelo é dificil de ser combatido e contribui para aumento das 
          desigualdades sociais. O AppJusto é uma alternativa para todos ganharem 
          mais, com autonomia e respeito.
        </Heading>
      </Container>
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        zIndex="0"
      >
        <Box
          position="relative"
          w="100%"
          display={["inherit", null, null, "none"]}
        >
          <img 
            src={BgMob}
            alt="Entregador de capacete, retirando um pedido no balcão de um restaurante" 
            width={360} 
            height={240}  
          />
        </Box>
        <Box
          position="relative"
          w="100%"
          display={["none", null, null, "inherit"]}
        >
          <img 
            src={Bg} 
            alt="Entregador de capacete, retirando um pedido no balcão de um restaurante"
            width={1440} 
            height={600}  
          />
        </Box>
      </Box>
    </Section>
  );
}

export default Monopoly;