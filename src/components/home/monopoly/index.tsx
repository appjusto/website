import Image from 'next/image'
import { Box, Heading } from "@chakra-ui/react";
import Container from "../../Container";
import Section from "../../Section";


const Monopoly: React.FC = () => {
  return (
    <Section
      id="monopoly"
      bgColor="black"
    >
      <Container
        flexDir="column"
        zIndex="10"
        color="white"
        justifyContent="flex-end"
        alignItems="flex-start"
        minH="600px"
        pb={["62px", null, null, "53px"]} 
      >
        <Heading 
          as="h1" 
          fontSize={["24px", null, null, "56px"]} 
          mb={["16px", null, null, "42px"]}  
          lineHeight={["28,8px", null, null, "67,2px"]} 
          maxW="944px"
        >
          Os apps atuais criam monopólios, controlam o mercado, impondo suas 
          próprias taxas e regras.
        </Heading>
        <Heading 
          as="h3" 
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
          <Image 
            src="/bg-mobile-monopoly.png" 
            width={360} 
            height={240} 
            layout="responsive" 
          />
        </Box>
        <Box
          position="relative"
          w="100%"
          display={["none", null, null, "inherit"]}
        >
          <Image 
            src="/bg-monopoly.png" 
            width={1440} 
            height={600} 
            layout="responsive" 
          />
        </Box>
      </Box>
    </Section>
  );
}

export default Monopoly;