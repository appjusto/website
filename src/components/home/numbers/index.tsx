import Image from 'next/image'
import { Flex, Heading, Text } from '@chakra-ui/react'

import Section from "../../Section";
import Container from '../../Container';
import NumberBox from './NumberBox';

const Hero: React.FC = () => {
  return (
    <Section 
      id="numbers"
      bgColor="primary" 
      minHeight="100vh"
    >
      <Container 
        flexDir="column"
        pt={["220px", "220px", "220px", "20px"]}
      >
        <Heading 
          as="h1" 
          fontSize="24px"
          display={["block", "block", "block", "none"]}
        >
          Se todos colaborarem, este projeto vai dar certo e será melhor a todos. 
          Faça a sua parte divulgando agora.
        </Heading>
        <Heading 
          as="h1" 
          fontSize="24px"
          display={["none", "none", "none", "block"]}
        >
          Se todos colaborarem, este projeto vai dar certo e será melhor a todos. <br/> 
          Faça a sua parte divulgando agora.
        </Heading>
        <Text mt="30px" textStyle="p">
          Pré-cadastros até o momento:
        </Text>
        <Flex
          w="100%"
          flexDir={["column", "column", "column", "row"]}
        >
          <Flex
            w="100%"
            flexDir="row"
          >
            <NumberBox icon="/shield.svg" number={500} label="Cidades" />
            <NumberBox icon="/bike.svg" number={800} label="Entregadores" />
          </Flex>
          <Flex
            w="100%"
            flexDir="row"
          >
            <NumberBox icon="/cutlery.svg" number={500} label="Restaurantes" />
            <NumberBox icon="/happy.svg" number={800} label="Consumidores" />
          </Flex>
        </Flex>
      </Container>
      
    </Section>
  );
}

export default Hero;