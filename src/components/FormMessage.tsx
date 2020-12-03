import { useContext } from 'react'
import { Flex, Text } from '@chakra-ui/react'

import PageContext from '../context'

const FormMessage: React.FC = () => {
  const { registrationMsg } = useContext(PageContext)
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
    <Text textStyle="p">{registrationMsg.message}</Text>
  </Flex>
  );
}

export default FormMessage;