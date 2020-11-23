import { Flex, Stack, Text, Icon } from '@chakra-ui/react'
import { BiUpArrowAlt  } from 'react-icons/bi'
import { Link as ScrollLink } from "react-scroll";
import Container from './Container'
import ShareButton from './ShareButton';

const ShareFooter: React.FC = () => {
  return (
    <Flex
      as="div"
      w="100%"
      h="64px"
      p={["4px 0"]}
      justifyContent="center"
      alignItems="center"
      fontFamily="Barlow"
    >
      <Container
        flexDir="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack 
          direction="row"
          w="100%" 
          spacing={4} 
          align="center">
          <ShareButton />
          <Text 
            fontSize="15px"
            fontWeight="500"
            display={{base: "none", sm: "none", md: "none", lg: "inherit"}}  
          >
            Quanto mais você divulgar, mais rápido o AppJusto chegará até você!
          </Text>
        </Stack>
        <ScrollLink
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Flex 
            direction="row" 
            w="100%"
            justifyContent="flex-end"
            alignItems="center"
            cursor="pointer"
          >
            <Text 
              display={{base: "none", sm: "none", md: "none", lg: "inherit"}}
              _focus={{outline: "none"}}
              minW="130px"
              fontWeight="700"
            >
              Voltar para o topo
            </Text>
            <Icon 
              as={BiUpArrowAlt} 
              fontWeight="700"
              width="16px"
              height="16px"
            />
          </Flex>
        </ScrollLink>
      </Container>
    </Flex>
  );
}

export default ShareFooter;