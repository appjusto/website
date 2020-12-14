import { Stack, Heading, Text } from "@chakra-ui/react";
import Container from "../../Container";
import Section from "../../Section";
import Link from '../../CustomLink';
import PartnerBox from './PartnerBox';


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
      </Container>
    </Section>
  );
}

export default Partners;