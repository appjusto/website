import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import Image from '../../Image';
import Section from "../../Section";
import Container from '../../Container';
import CustomLinkButton from '../../CustomLinkButton';
import { usePageContext } from '../../../context';

const Hero: React.FC = () => {
  // context
  const { kriaLink } = usePageContext();
  // UI
  return (
    <Section id="hero" mt={{base: '44px', lg: '-24px'}} h={{ lg: '100vh' }} maxH={{ lg: '900px'}}>
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
                Já pensou em ser dono do App? Agora você pode!
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
            <CustomLinkButton
              mt="8"
              maxW="328px"
              variant="primary"
              h="64px"
              fontSize="20px"
              lineHeight="24px"
              fontWeight="700"
              linkLabel="Quero investir a partir de R$ 100"
              link={kriaLink}
              isExternal
            />
          </Flex>
          <Flex mt={{base: '8', md: '0'}} flexDir="column" justifyContent="center" alignItems="flex-end" w="100%">
            <Image src="/crowd-hero@2x.jpeg" w="100%" maxW="648px" />
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
