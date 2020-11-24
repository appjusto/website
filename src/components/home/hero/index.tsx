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
        flexDir="column"
        pt="120px"
        zIndex="10"  
      >
        <Heading 
          as="h1" 
          color="white" 
          fontSize={["40px", "40px", "40px", "56px"]}
          lineHeight={["48px", "48px", "48px", "68px"]}   
        >
          Mais do que um app de entregas.
        </Heading>
        <Heading 
          as="h2" 
          color="white"
          fontSize={["24px", "24px", "24px", "56px"]}
          lineHeight={["28,8px", "28,8px", "28,8px", "68px"]} 
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
          display={{base: "inherit", sm: "inherit", md: "inherit", lg: "none"}}
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
          display={{base: "none", sm: "none", md: "none", lg: "inherit"}}
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