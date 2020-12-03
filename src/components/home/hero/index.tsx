import Image from 'next/image'
import { Box, Heading } from '@chakra-ui/react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Section from "../../Section";
import Container from '../../Container';
import RegistrationBox from './RegistrationBox';

const Hero: React.FC = () => {
  return (
    <Section 
      id="hero"
      bgColor="black"
      h={["auto", null, null, "560px", "560px", "600px"]} 
    >
      <Container 
        h="100%"
        flexDir="column"
        justifyContent="flex-end"
        pt={["132px", null, null, "0"]}
        pb="16px"
        zIndex="10"  
      >
        <Heading 
          as="h1" 
          color="white" 
          fontSize={["40px", null, null, "52px"]}
          lineHeight={["48px", null, null, "62px"]}   
        >
          Mais do que um app de entregas.
        </Heading>
        <Heading 
          as="h2" 
          color="white"
          fontSize={["24px", null, null, "52px"]}
          lineHeight={["28,8px", null, null, "62px"]} 
          mb="36px"   
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
          <Carousel 
            autoPlay
            infiniteLoop
            interval={2000}
            transitionTime={1000}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
          >
            <Box as="div" w="100%" h="100%">
              <Image 
              src="/bg-mobile-hero1.png" 
              width={360} 
              height={482}  
              layout="responsive" 
              loading="eager"
            />
            </Box>
            <Box as="div" w="100%" h="100%">
              <Image 
              src="/bg-mobile-hero2.png" 
              width={360} 
              height={482}  
              layout="responsive" 
              loading="eager"
            />
            </Box>
            <Box as="div" w="100%" h="100%">
              <Image 
              src="/bg-mobile-hero3.png" 
              width={360} 
              height={482}  
              layout="responsive" 
              loading="eager"
            />
            </Box>
          </Carousel>
        </Box>
        <Box
          position="relative"
          w="100%"
          h="600px"
          overflow="hidden"
          display={["none", null, null, "inherit"]}
        >
          <Carousel 
            autoPlay
            infiniteLoop
            interval={2500}
            transitionTime={1000}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
          >
            <Box as="div" w="100%" h="100%">
              <Image 
              src="/bg-hero1.png" 
              width={1440} 
              height={600} 
              layout="responsive" 
              loading="eager"
            />
            </Box>
            <Box as="div" w="100%" h="100%">
              <Image 
              src="/bg-hero2.png" 
              width={1440} 
              height={600} 
              layout="responsive" 
              loading="eager"
            />
            </Box>
            <Box as="div" w="100%" h="100%">
              <Image 
              src="/bg-hero3.png" 
              width={1440} 
              height={600} 
              layout="responsive" 
              loading="eager"
            />
            </Box>
          </Carousel>
        </Box>
      </Box>
    </Section>
  );
}

export default Hero;