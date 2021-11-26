import { Box, Button, Image, Stack, Text } from '@chakra-ui/react'
import Section from "../../Section";
import Container from '../../Container';
import SectionHeading from '../../SectionHeading';
import CustomLinkButton from '../../CustomLinkButton';

const Invest: React.FC = () => {
  return (
    <Section mt="4" id="invest" h="auto">
      <Container pt={{base: '8', lg: '16'}} pb={{base: '10', lg: '2'}} >
        <Stack direction={{base: 'column', md: 'row'}} spacing={8} h="100%">
          <Box mt={{base: '8' , lg: '0'}} w="100%">
            <Box maxW={{lg: '648px'}}>
              <Box>
                <Image src="/icon-spark-yellow.svg" w="48px" h="48px"/>
              </Box>
              <SectionHeading mt="8" highlighted>
                100% do investimento será reinvestido na empresa
              </SectionHeading>
              <Text mt="10" textStyle="p">
                Nosso objetivo com o investimento será destinado ao fortalecimento da rede, cadastro de 3.000 restaurantes,
                5.000 entregadores, e alcançar 800.000 transações mensais nos próximos 14 meses.
              </Text>
              <CustomLinkButton
                mt="10"
                w="auto"
                px="6"
                h="64px"
                fontSize="20px"
                variant="primary"
                link=""
                linkLabel="Quero investir a partir de R$ 100"
              />
            </Box>
          </Box>
          <Box w="100%" pl={{lg: '8'}}>
            <Box>
              <Image src="/invest-graphic.jpeg" w="100%" />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Section>
  );
}

export default Invest;
