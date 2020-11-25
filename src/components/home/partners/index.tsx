import Image from 'next/image'
import NextLink from 'next/link'
import { Flex, Box, Heading, Stack, Text, Link } from "@chakra-ui/react";
import Container from "../../Container";
import Section from "../../Section";
import CustomButton from '../../CustomButton'
import PartnerBox from './PartnerBox';
import CallBox from './CallBox';


const Partners: React.FC = () => {
  return (
    <Section
      id="alternative"
      minH="100vh" 
    >
      <Container
        flexDir="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        pt={["80px", "80px", "80px", "54px"]} 
        pb={["62px", "62px", "62px", "64px"]} 
      >
        <Heading 
          as="h2"
          mb="24px"
        >
          Quem está com a gente nessa:
        </Heading>
        <Stack 
          w="100%"
          direction="row"
          spacing={2}
          overflowX="auto"
          p="8px 0"
          mb="24px"
        >
          <PartnerBox image="/logoAbrasel.png" width={147} height={64} />
          <PartnerBox image="/logoIugu.png" width={132} height={54} />
          <PartnerBox image="/logoColetivoPinheiros.png" width={107} height={105} />
          <CallBox />
        </Stack>
        <Text
          fontSize="18px"
          lineHeight="26px"
          textStyle="p"
        >
          Além dessas empresas, o AppJusto surgiu do esforço de várias pessoas, 
          entre sócios, colaboradores e voluntários.
        </Text>
        <NextLink href="/" passHref>
          <Link 
            fontSize="18px"
            lineHeight="26px"
            fontWeight="700"
            textDecoration="underline"
            _hover={{opacity: 0.9}}
          >
            Conheça a nossa rede completa
          </Link>
        </NextLink>
        <Heading 
          as="h2"
          m="66px 0 48px"
        >
          Estamos em busca de mais apoio.
        </Heading>
        <Text 
          fontSize="18px"
          lineHeight="26px"
          textStyle="p"
          mb="32px"
        >
          O AppJusto está em fase de captação de investimentos e montando uma rede 
          de apoiadores por todo país. Quer nos ajudar nessa missão?
        </Text>
        <Flex
          flexDir={["column", "column", "column", "row"]}
          w="100%"
        >
          <CustomButton 
            label="Entre em contato" 
            variant="secondaryLight"
            maxW={["100%", "100%", "220px", "220px"]}
            mr={["0", "0", "0", "16px"]}
          />
          <CustomButton 
            label="Quero ser um parceiro" 
            variant="white"    
            maxW={["100%", "100%", "220px", "220px"]}
            mr={["0", "0", "0", "16px"]}
          />
          <CustomButton 
            label="Quero trabalhar com vocês" 
            variant="white"    
            maxW={["100%", "100%", "220px", "220px"]}
          />
        </Flex>
      </Container>
    </Section>
  );
}

export default Partners;