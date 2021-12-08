import { Box, Button, Flex, Image, Link, Stack } from '@chakra-ui/react'
import Section from "../../Section";
import Container from '../../Container';
import SectionHeading from '../../SectionHeading';
import NextLink from 'next/link';
import CustomLinkButton from '../../CustomLinkButton';
import CustomLink from '../../CustomLink';
import { usePageContext } from '../../../context';

const Crowdfunding: React.FC = () => {
  // context
  const { kriaLink } = usePageContext();
  // UI
  return (
    <Section mt="4" id="crowdfunding" h="auto">
      <Container pt={{base: '8', lg: '16'}} pb={{base: '10', lg: '2'}} >
        <Stack direction={{base: 'column', md: 'row'}} spacing={8} h="100%">
          <Flex flexDir="column" alignItems="center" maxW={{lg: '648px'}}>
            <SectionHeading mt="8" textAlign="center">
              Preparado para participar do financiamento coletivo no futuro do delivery?
            </SectionHeading>
            <CustomLinkButton
                mt="8"
                variant="primary"
                h="60px"
                px="6"
                fontSize="20px"
                link={kriaLink}
                linkLabel="Quero investir a partir de R$ 100"
                isExternal
            />
            <CustomLink
              mt="10"
              name="invest-page-link"
              textDecor="underline"
              fontSize="20px"
              lineHeight="26px"
              textAlign="center"
              link={kriaLink}
              linkLabel="Saiba mais do financiamento coletivo"
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
