import { Box, Button, Flex, Image, Text, Stack } from '@chakra-ui/react'
import Section from "../../Section";
import Container from '../../Container';
import SectionHeading from '../../SectionHeading';
import CustomLinkButton from '../../CustomLinkButton';
import { usePageContext } from '../../../context';

const Crowdfunding: React.FC = () => {
  // context
  const { kriaLink } = usePageContext();
  // UI
  return (
    <Section mt="4" id="crowdfunding" h="auto">
      <Container pt={{base: '8', lg: '16'}} pb={{base: '10', lg: '2'}} >
        <Stack direction={{base: 'column', md: 'row'}} spacing={8} h="100%">
          <Flex flexDir="column" w="full" maxW={{lg: '648px'}}>
          <Box>
                <Image src="/icon-spark-yellow.svg" w="48px" h="48px" alt="ilustração spark amarela"/>
              </Box>
            <SectionHeading mt="8" fontSize="48" lineHeight="56px">
              O maior equity crowdfunding do Brasil
            </SectionHeading>
            <Text mt="10" textStyle="p">
              Com mais de 1000 investidores que decidiram apoiar esse movimento, o AppJusto superou em 130% a meta de financiamento estabelecida, possibilitando que nossa proposta alcance ainda mais pessoas no futuro. Muito obrigado a todos os que participaram dessa conquista conosco ❤️
            </Text>
            <CustomLinkButton
                mt="8"
                w={{base: '100%', md:'328px'}}
                variant="primary"
                h="60px"
                px="6"
                fontSize="20px"
                link={kriaLink}
                linkLabel="Ver página do financiamento"
                isExternal
            />
          </Flex>
          <Box w="100%" pl={{lg: '8'}}>
            <Box mt={{base: '6', md: '0'}}>
              <Image src="/crowd-green-ending.jpeg" w="100%" alt="entregador de delivery de perfil" />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Section>
  );
}

export default Crowdfunding;
