import { Flex, Box, Stack, Heading, Text } from "@chakra-ui/react";
import Image from 'next/image'
import Container from "../../Container";
import Section from "../../Section";
import Link from '../../CustomLink'
import PartnerBox from './PartnerBox';
import CustomLinkButton from "../../CustomLinkButton";


const Partners: React.FC = () => {
  return (
    <Section
      id="partners"
    >
      <Container
        flexDir="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        pb={["62px", null, null, "64px"]} 
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
          spacing={0}
          overflowX="auto"
          p="8px 0"
          mb="24px"
        >
          <PartnerBox 
            image="/logoAbrasel.png" 
            altImg="Logo Abrasel"
            width={147} 
            height={64} 
          />
          <PartnerBox 
            image="/logoIugu.png" 
            altImg="Logo Iugu"
            width={132} 
            height={54} 
          />
          <PartnerBox 
            image="/logoColetivoPinheiros.png" 
            altImg="Logo Coletivo Pinheiros"
            width={107} 
            height={105} 
          />
        </Stack>
        <Text
          fontSize="18px"
          lineHeight="26px"
          textStyle="p"
        >
          Além dessas empresas, o AppJusto surgiu do esforço de várias pessoas, 
          entre sócios, colaboradores e voluntários.
        </Text>
        <Link 
          link="/conheca-a-rede"
          linkLabel="Conheça a nossa rede completa"
          internal={true}
          fontSize="18px"
          lineHeight="26px"
          fontWeight="700"
          width="100%"
        />
        <Heading 
          as="h2"
          m="66px 0 8px"
        >
          Estamos em busca de mais apoio.
          <Box 
            position="relative"
            maxW={["164px", null, "200px", "360px"]}
            mt={["-26px", null, "-30px", "-26px"]}
            ml={["0", null, "340px", "180px"]}
            color="white"
          >
            <Image 
              src="/line-vector-g.svg"
              alt="Linha verde" 
              width={544} 
              height={20} 
            />
          </Box>
        </Heading>
        <Text 
          fontSize="18px"
          lineHeight="26px"
          textStyle="p"
          mb="32px"
        >
          O AppJusto está em fase de captação de investimentos e montando uma 
          rede de apoiadores por todo país. Associações que querem unir forças, 
          ou empresas que querem patrocinar, ou que tenham algum benefício para 
          entregadores ou restaurantes, nós queremos conhecer vocês.
        </Text>
        <Flex
          flexDir={["column", null, null, "row"]}
          w="100%"
        >
          <CustomLinkButton 
            link="mailto:parceiros@appjusto.com.br"
            linkLabel="Quero ser um parceiro" 
            variant="basic"
            bg="white"    
            maxW={["100%", null, "220px"]}
            mr={["0", "0", "0", "16px"]}
          />
          <CustomLinkButton
            link="mailto:vagas@appjusto.com.br" 
            linkLabel="Quero trabalhar com vocês" 
            variant="basic"
            bg="white"      
            maxW={["100%", null, "220px"]}
          />
        </Flex>
      </Container>
    </Section>
  );
}

export default Partners;