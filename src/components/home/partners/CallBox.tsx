import { Flex, Box, Text } from '@chakra-ui/react'
import Link from '../../CustomLink'

import Delivery from '../../../../public/illustration-delivery.svg'

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
        minW="72px"
        h="72px"
        mr="13px"
      >
        <img
          src={Delivery}
          alt="Ilustração de motocicleta de delivery"
          width={72}
          height={72}
        />
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
        <Link
          name="call-box-contact"
          link="/"
          linkLabel="Entre em contato"
          internal={true}
          fontSize="15px"
          lineHeight="22px"
          fontWeight="700"
        />
      </Flex>
    </Flex>
  );
}

export default CallBox;
