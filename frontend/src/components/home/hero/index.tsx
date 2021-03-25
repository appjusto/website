import { Box, Flex, Heading } from '@chakra-ui/react'
import Image from '../../Image';
import Section from "../../Section";
import Container from '../../Container';
import Content from '../../Content';

const Hero: React.FC = () => {
  return (
    <Section h={{ base: '600px', md: '680px', lg: '600px' }} overflow="hidden">
      <Container zIndex="100">
        <Content mt={{base: '60px' , md: '200px'}}>
          <Flex flexDir="column">
            <Heading
              as="h1"
              maxW="464px"
              color="white"
              fontSize={{ base: '32px', md: '48px' }}
              fontWeight="700"
              lineHeight={{ base: '38.4px', md: '56px' }}
            >
              Um movimento por relações mais justas e transparentes
            </Heading>
          </Flex>
        </Content>
      </Container>
      <Box position="absolute" top="0" left="0" w="full" zIndex="0">
        <Image src="/hero-bg.jpg" srcMob="/hero-bg-mobile.jpg" w="full" eagerLoading />
      </Box>
    </Section>
  );
}

export default Hero;
