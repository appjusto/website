import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Image from '../../../Image';
import Section from '../../../Section';
import Container from '../../../Container';
import Content from '../../../Content';

const RestaurantsHero: React.FC = () => {
  return (
    <Section
      id='hero'
      h={{ base: '405px', md: '800px', lg: '480px' }}
      overflow='hidden'
    >
      <Container>
        <Content mt={{base: '60px' , md: '200px', lg: '120px'}} maxW={{base: '100%', md: '600px' , lg: '960px'}}>
          <Flex flexDir='column' color='white'>
            <Text fontSize='lg' lineHeight='26px' fontWeight='700' textStyle='p'>
              Calculadora para restaurantes
            </Text>
            <Heading
              as='h1'
              fontSize={{ base: '32px', md: '56px' }}
              fontWeight='700'
              lineHeight={{ base: '38.4px', md: '64px' }}
            >
              Descubra quanto você vai economizar com o AppJusto
            </Heading>
            <Text
              mt='24px'
              fontSize={{base: '15px', md: '18px'}}
              lineHeight={{base: '21px', md: '26px'}}
              textStyle='p'
              maxW='560px'
            >
              O AppJusto criou uma calculadora para auxiliar o seu restaurante a
              saber quanto irá economizar utilizando a nossa plataforma de delivery.
              Você ganha mais, e ainda colabora com uma economia mais justa.
            </Text>
          </Flex>
        </Content>
      </Container>
      <Box position='absolute' top='0' left='0' w='full' zIndex='0'>
        <Image src='/hero-restaurants.jpg' srcMob='/hero-restaurants-mobile.jpg' w='full' eagerLoading />
      </Box>
    </Section>
  );
}

export default RestaurantsHero;
