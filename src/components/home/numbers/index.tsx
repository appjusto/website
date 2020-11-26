import Image from 'next/image'
import { Flex, Heading, Text, Link } from '@chakra-ui/react'
import { useStyleConfig } from "@chakra-ui/react"

import Section from "../../Section";
import Container from '../../Container';
import NumberBox from './NumberBox';
import HelpBox from './HelpBox'
import Button from "../../CustomButton" 

const variant = "secondaryLight"

const Hero: React.FC = () => {
  const styles = useStyleConfig("Button", {variant})
  return (
    <Section 
      id="numbers"
      bgColor="primary" 
      minHeight="100vh"
    >
      <Container 
        flexDir="column"
        pt={["220px", null, null, "20px"]}
        pb="64px"
      >
        <Heading 
          as="h1" 
          fontSize="24px"
          display={["block", null, null, "none"]}
        >
          Se todos colaborarem, este projeto vai dar certo e será melhor a todos. 
          Faça a sua parte divulgando agora.
        </Heading>
        <Heading 
          as="h1" 
          fontSize={["24px", null, null, "32px"]}
          display={["none", null, null, "block"]}
        >
          Se todos colaborarem, este projeto vai dar certo e será melhor a todos. <br/> 
          Faça a sua parte divulgando agora.
        </Heading>
        <Text 
          mt="30px" 
          textStyle="p"
          fontSize={["16px", null, null, "18px"]}>
          Pré-cadastros até o momento:
        </Text>
        <Flex
          w="100%"
          flexDir={["column", null, null, "row"]}
        >
          <Flex
            w="100%"
            flexDir="row"
          >
            <NumberBox icon="/icon-shield.svg" number={500} label="Cidades" />
            <NumberBox icon="/icon-bike.svg" number={800} label="Entregadores" />
          </Flex>
          <Flex
            w="100%"
            flexDir="row"
          >
            <NumberBox icon="/icon-cutlery.svg" number={500} label="Restaurantes" />
            <NumberBox icon="/icon-happy.svg" number={800} label="Consumidores" />
          </Flex>
        </Flex>
        <Heading
          mt="32px"
          mb={["8px", null, null, "30px"]}  
          as="h1" 
          fontSize={["24px", null, null, "32px"]}
        >
          Formas de ajudar
        </Heading>
        <Text 
          textStyle="p"
          fontSize={["16px", null, null, "18px"]}>
          Entenda como você pode ajudar o AppJusto a chegar mais longe:
        </Text>
        <Flex
          flexDir={["column", null, null, "row"]}
        >
          <HelpBox 
            icon="/icon-promotion.svg"
            title="Indique o AppJusto"
            text="Indique o AppJusto para amigos, entregadores, restaurantes, e todos que desejam um modelo mais justo."
            isLast={false}
          >
            <Button label="Indicar o AppJusto" variant="secondaryLight"/>
          </HelpBox>
          <HelpBox 
            icon="/icon-high-five.svg"
            title="Faça parte do AppJusto"
            text="Estamos em busca de voluntários, empresas parceiras, investidores, e todos que podem colaborar ativamente com esse movimento."
            isLast={false}
          >
            <Button label="Quero ser parceiro" variant="secondaryLight"/>
          </HelpBox>
          <HelpBox 
            icon="/icon-chat-bubble.svg"
            title="Responda a pesquisa"
            text="Estamos ouvindo entregadores e restaurantes para criar uma plataforma pensada desde o início para todos."
            isLast={true}
          >
            <Link 
              href="/"
              isExternal
              sx={styles}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              Sou Entregador
            </Link>
            <Link 
              href="/"
              isExternal
              sx={styles}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              Sou Restaurante
            </Link>
          </HelpBox>
        </Flex>
      </Container>
    </Section>
  );
}

export default Hero;