import { Box, Button, Flex, Image, Link, Stack } from '@chakra-ui/react'
import Section from "../../Section";
import Container from '../../Container';
import SectionHeading from '../../SectionHeading';
import NextLink from 'next/link';

const Crowdfunding: React.FC = () => {
  return (
    <Section mt="4" id="crowdfunding" h="auto">
      <Container pt={{base: '8', lg: '16'}} pb={{base: '10', lg: '2'}} >
        <Stack direction={{base: 'column', md: 'row'}} spacing={8} h="100%">
          <Flex flexDir="column" alignItems="center" maxW={{lg: '648px'}}>
            <SectionHeading mt="8" textAlign="center">
              Preparado para participar do financiamento coletivo no futuro do delivery?
            </SectionHeading>
            <Link href="/" isExternal>
              <Button
                mt="8"
                variant="primary"
                h="60px"
                w={{base: '100%', md: 'auto'}}
                maxW={{ md: '325px'}}
                px="6"
                fontSize="20px"
                lineHeight="24px"
              >
                Quero investir a partir de R$ 100
              </Button>
            </Link>
            <NextLink href="/investimento-coletivo" passHref>
              <Link
                mt="10"
                textDecor="underline"
                fontSize="18px"
                lineHeight="26px"
                fontWeight="500"
                textAlign="center"
              >
                Saiba mais do financiamento coletivo
              </Link>
            </NextLink>
          </Flex>
          <Box w="100%" pl={{lg: '8'}}>
            <Box>
              <Image src="/crowd-green-ending.jpeg" w="100%" />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Section>
  );
}

export default Crowdfunding;
