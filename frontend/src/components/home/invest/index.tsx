import { Box, Image, Stack, Text } from '@chakra-ui/react'
import Section from "../../Section";
import Container from '../../Container';
import SectionHeading from '../../SectionHeading';
import CustomLinkButton from '../../CustomLinkButton';
import { usePageContext } from '../../../context';

const Invest: React.FC = () => {
  // context
  const { kriaLink } = usePageContext();
  // UI
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
                maxW={{ lg: '328px'}}
                px="6"
                h="64px"
                fontSize="20px"
                variant="primary"
                link={kriaLink}
                linkLabel="Quero investir a partir de R$ 100"
                isExternal
              />
            </Box>
          </Box>
          <Box w="100%" pl={{lg: '8'}}>
            <Box>
              <Image src="/invest-graphic@2x.jpeg" w="100%" maxW="674px" />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Section>
  );
}

export default Invest;
