import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import Image from '../../Image';
import Section from "../../Section";
import Container from '../../Container';
import Content from '../../Content';

const Hero: React.FC = () => {
  return (
    <Section id="hero" mt="-64px" overflow="hidden">
      <Container>
        <Flex direction={{base: 'column', md: 'row'}} h="100vh" maxH="800px">
          <Flex flexDir="column" justifyContent="center" w="100%">
            <Heading
                as="h1"
                maxW="648px"
                fontSize={{ base: '32px', md: '48px', lg: "64px" }}
                fontWeight="700"
                lineHeight={{ base: '38.4px', md: '56px', lg: "76px" }}
              >
                Já pensou em ser sócio do App? Agora você pode!
              </Heading>
            <Heading
              mt="8"
              as="h2"
              maxW="648px"
              fontSize="20px"
              fontWeight="500"
              lineHeight="26px"
            >
              Participe do{' '}
              <Text as="mark" bgColor="#FFE493">investimento coletivo</Text>
              {' '}a partir de R$100 e seja parte desse movimento por relações mais justas e transparentes no delivery.
            </Heading>
            <Button
              mt="8"
              maxW="328px"
              variant="primary"
              fontSize="18px"
              fontWeight="700"
              lineHeight="24px">
              Quero investir a partir de R$ 100
            </Button>
          </Flex>
          <Flex flexDir="column" justifyContent="center" alignItems="flex-end" w="100%">
            <Image src="/crowd-hero.png" w="100%" />
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
}

export default Hero;
