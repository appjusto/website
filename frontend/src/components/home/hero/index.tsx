import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import Image from '../../Image';
import Section from "../../Section";
import Container from '../../Container';

const Hero: React.FC = () => {
  return (
    <Section id="hero" mt={{base: '44px', lg: '-24px'}}>
      <Container>
        <Flex direction={{base: 'column', md: 'row'}} h="100%">
          <Flex flexDir="column" justifyContent="center" w="100%">
            <Heading
                as="h1"
                maxW={{base: '311px', lg: '648px'}}
                fontSize={{ base: '28px', md: '48px', lg: "64px" }}
                fontWeight="700"
                lineHeight={{ base: '30px', md: '56px', lg: "76px" }}
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
          <Flex mt={{base: '8', md: '0'}} flexDir="column" justifyContent="center" alignItems="flex-end" w="100%">
            <Image src="/crowd-hero.jpeg" w="100%" />
          </Flex>
        </Flex>
      </Container>
      <Flex
        display={{base: 'none', lg: 'flex'}}
        position="absolute"
        bottom='-70px'
        w="100%"
        justifyContent="center"
        alignItems="center"
        zIndex="900"
      >
        <Image src="/decorative-lines-yellow.svg" w={{md: '360px', lg: '560px'}} />
      </Flex>
    </Section>
  );
}

export default Hero;
