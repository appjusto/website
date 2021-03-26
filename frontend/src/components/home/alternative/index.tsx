import { Flex, Box, Text } from '@chakra-ui/react';
import Container from '../../Container';
import Section from '../../Section';
import Image from '../../Image';
import Content from '../../Content';

const Alternative: React.FC = () => {
  return (
    <Section id="alternative">
      <Container pt="24" px={{base: '0', md: 'auto'}}>
        <Content maxW={{base:'100%', md: '312px', lg: '480px', xl: '656px'}}>
          <Flex position="relative" w="100%" >
            <Box width={{base: '100%', md: '336px'}}>
              <Image src="/alternative.jpg" width={{base: '100%', md: '336px'}} />
            </Box>
            <Box
              maxW={{base: '100%', md: '272px'}}
              ml={{base: '0', lg: '12'}}
              position={{base: 'absolute', lg: 'relative'}}
              p={{base: '6', lg: '0'}}
            >
              <Text
                textStyle="p"
                color={{base: 'white', lg: 'black'}}
                fontSize={{base: '1rem', md: 'lg'}}
                lineHeight="22px"
              >
                Hoje, os apps são fonte de renda para 3.8 milhões de autônomos no Brasil. Este modelo é dificil de ser combatido e contribui para o aumento das desigualdades sociais.
              </Text>
              <Text mt="8"
                textStyle="p"
                color={{base: 'white', lg: 'black'}}
                fontSize={{base: '1rem', md: 'lg'}}
                lineHeight="22px"
              >
                O AppJusto é uma alternativa para todos ganharem mais, com autonomia e respeito.
              </Text>
            </Box>
          </Flex>
        </Content>
      </Container>
    </Section>
  );
}

export default Alternative;
