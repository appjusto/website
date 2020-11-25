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
        pb={["62px", "62px", "62px", "53px"]} 
      >
        <Heading 
          as="h2"
        >
          Quem está com a gente nessa:
        </Heading>
        <Stack 
          w="100%"
          direction="row"
          spacing={2}
          overflowX="scroll"
        >
          <PartnerBox image="/logoAbrasel.png" width={147} height={64} />
          <PartnerBox image="/logoIugu.png" width={132} height={54} />
          <PartnerBox image="/logoColetivoPinheiros.png" width={107} height={105} />
          <CallBox />
        </Stack>
        <Text>
          Além dessas empresas, o AppJusto surgiu do esforço de várias pessoas, 
          entre sócios, colaboradores e voluntários.
        </Text>
        <NextLink href="/" passHref>
          <Link _hover={{opacity: 0.9}}>
            Conheça a nossa rede completa
          </Link>
        </NextLink>
        <Heading 
          as="h2"
        >
          Estamos em busca de mais apoio.
        </Heading>
        <Text>
          O AppJusto está em fase de captação de investimentos e montando uma rede 
          de apoiadores por todo país. Quer nos ajudar nessa missão?
        </Text>
        <Flex
          flexDir={["column", "column", "column", "row"]}
          w="100%"
        >
          <CustomButton label="Entre em contato" variant="secondaryLight"/>
          <CustomButton label="Quero ser um parceiro" variant="white"/>
          <CustomButton label="Quero trabalhar com vocês" variant="white"/>
        </Flex>
      </Container>
    </Section>
  );
}

export default Partners;