import { Flex, Box, Text } from '@chakra-ui/react';
import Container from '../../Container';
import Section from '../../Section';
import Image from '../../Image';
import Content from '../../Content';
import SectionHeading from '../../SectionHeading';

const Alternative: React.FC = () => {
  return (
    <Section id="alternative">
      <Container pt="24">
        <Content>
          <SectionHeading>
            As plataformas de entrega atuais operam monopólios e controlam o mercado
            de maneira agressiva, impondo taxas e regras em benefício próprio
          </SectionHeading>
        </Content>
      </Container>
      <Container pt="4" px={{base: '0', md: '1rem'}}>
        <Content maxW={{base:'100%', md: '312px', lg: '480px', xl: '656px'}}>
          <Flex position="relative" w="100%" >
            <Box width={{base: '100%', md: '336px'}}>
              <Image src="/alternative.jpg" width={{base: '100%', md: '336px'}} eagerLoading />
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
                Hoje, as plataformas digitais são fonte de renda para mais de
                3.8 Milhões de autônomos no Brasil. Muitos profissionais se tornaram
                reféns desse modelo de trabalho.
              </Text>
              <Text mt="8"
                textStyle="p"
                color={{base: 'white', lg: 'black'}}
                fontSize={{base: '1rem', md: 'lg'}}
                lineHeight="22px"
              >
                No delivery, entregadores são mal remunerados e tem que arcar sozinhos
                com todos os riscos e custos, enquanto os restaurantes perderam espaço
                com as altas taxas cobradas.
              </Text>
              <Text mt="8"
                textStyle="p"
                color={{base: 'white', lg: 'black'}}
                fontSize={{base: '1rem', md: 'lg'}}
                lineHeight="22px"
              >
                O AppJusto é uma alternativa na qual a tecnologia veio para servir
                as pessoas e fazer com que todos ganhem, com mais autonomia e respeito.
                Somos a favor de uma economia de plataforma que favorece a justiça social.
              </Text>
            </Box>
          </Flex>
        </Content>
      </Container>
    </Section>
  );
}

export default Alternative;
