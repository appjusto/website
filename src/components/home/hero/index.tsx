import Image from 'next/image'
import { Box, Heading } from '@chakra-ui/react'

import Section from "../../Section";
import Container from '../../Container';
import RegistrationBox from './RegistrationBox';
import HeroSlider from './HeroSlider';

import Line from '../../../../public/line-vector-y.svg'

const Hero: React.FC = () => {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    fade: true,
    infinite: true,
    variableWidth: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Section
      position="relative" 
      id="hero"
      bgColor="black"
      overflow="hidden"
      h={["auto", null, null, "560px", "560px", "600px"]} 
    >
      <Container 
        h="100%"
        flexDir="column"
        justifyContent="flex-end"
        pt={["132px", null, null, "0"]}
        pb="16px"
        zIndex="100"  
      >
        <Heading 
          as="h1" 
          color="white" 
          fontSize={["40px", null, null, "52px"]}
          lineHeight={["48px", null, null, "62px"]}   
        >
          Mais do que um app de entregas.
          <Box 
            display={["block", null, "none"]}
            maxW="300px"
            mt="-34px"
          >
            <Image 
              src={Line}
              alt="Linha amarela" 
              width={544} 
              height={20} 
            />
          </Box>
        </Heading>
        <Heading 
          position="relative"
          as="h2" 
          color="white"
          fontSize={["24px", null, null, "52px"]}
          lineHeight={["28,8px", null, null, "62px"]} 
          mb="36px"   
        >
        Somos um movimento por relações mais justas e transparentes.
        <Box 
          display={["none", null, "block"]}
          position="absolute"
          top={[null, "12px", null, "20px"]}
          left="0"
          maxW={[null, "240px", null, "510px"]}
        >
          <Image 
            src="/line-vector-y.svg" 
            alt="Linha amarela" 
            width={544} 
            height={20} 
          />
        </Box>
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
        <HeroSlider />
      </Box>
    </Section>
  );
}

export default Hero;