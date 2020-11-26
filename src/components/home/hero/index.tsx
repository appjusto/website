import Image from 'next/image'
import { Box, Heading } from '@chakra-ui/react'

import Section from "../../Section";
import Container from '../../Container';
import RegistrationBox from './RegistrationBox';

const Hero: React.FC = () => {
  return (
    <Section 
      id="hero"
      bgColor="primary" 
      h="100vh"
    >
      <Container 
        h={["auto", null, null, "100vh"]}
        flexDir="column"
        justifyContent="flex-end"
        pt={["132px", null, null, "0"]}
        pb={["24px", null, null, "2.6rem", null,"16rem"]}
        zIndex="10"  
      >
        <Heading 
          as="h1" 
          color="white" 
          fontSize={["40px", null, null, "56px"]}
          lineHeight={["48px", null, null, "68px"]}   
        >
          Mais do que um app de entregas.
        </Heading>
        <Heading 
          as="h2" 
          color="white"
          fontSize={["24px", null, null, "56px"]}
          lineHeight={["28,8px", null, null, "68px"]} 
          mb="48px"   
        >
        Somos um movimento por relações mais justas e transparentes.
        </Heading>
        <RegistrationBox />
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
            src="/mobile-hero.png" 
            width={360} 
            height={482} 
            layout="responsive"
            loading="eager" 
          />
        </Box>
        <Box
          position="relative"
          w="100%"
          h="600px"
          overflow="hidden"
          display={["none", null, null, "inherit"]}
        >
          <Image 
            src="/hero.png" 
            width={1440} 
            height={600} 
            layout="responsive" 
            loading="eager"
          />
        </Box>
      </Box>
    </Section>
  );
}

export default Hero;