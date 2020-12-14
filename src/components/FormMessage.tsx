import { Flex, Text, Icon } from '@chakra-ui/react'
import { FaExclamation } from 'react-icons/fa'

import { usePageContext } from '../context'

const FormMessage: React.FC = () => {
  const { registrationMsg } = usePageContext()
  return (
    <Flex
    w="100%"
    bg="secondaryLight"
    borderRadius="8px"
    flexDir="row"
    justifyContent="center"
    alignItems="center"
    mt="16px"
    p="8px 16px"
  >
    <Icon as={FaExclamation} mr="8px" w="12px" h="12px"/>
    <Text textStyle="p">{registrationMsg.message}</Text>
  </Flex>
  );
}

export default FormMessage;