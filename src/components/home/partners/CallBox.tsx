import Image from 'next/image'
import NextLink from 'next/link'
import { Flex, Box, Text, Link } from '@chakra-ui/react'

const CallBox: React.FC = () => {
  return (
    <Flex
      flexDir="row"
      justifyContent="center"
      alignItems="center"
      border="2px solid black"
      borderRadius="8px"
      bg="secondaryLight"
      minW="268px"
      h="160px"
      p="0 24px"
    >
      <Box
        position="relative"
        w="70px"
        h="70px"
        mr="13px"
      >
        <Image src="/illustration-delivery.svg" width={70} height={70} />
      </Box>
      <Flex
        flexDir="column"
        justifyContent="space-between"
        alignItems="flex-start"
        w="100%"
        h="70px"
      >
        <Text
          textStyle="p"
          fontSize="15px"
          lineHeight="21px"
        >
          Seja um parceiro <br/>
          do AppJusto
        </Text>
        <NextLink href="/" passHref>
          <Link 
            fontSize="15px"
            lineHeight="22px"
            fontWeight="700"
            textDecoration="underline"
            _hover={{opacity: 0.9}}
          >
            Entre em contato
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  );
}

export default CallBox;