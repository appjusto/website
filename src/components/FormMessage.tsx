import { useContext } from 'react'
import { Flex, Text } from '@chakra-ui/react'

import PageContext from '../context'

const FormMessage: React.FC = () => {
  const { 
    registrationMsg, 
    setRegistrationMsg 
  } = useContext(PageContext)
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
    <Text 
      as="span"
      textStyle="p"
      cursor="pointer"
      fontSize="15px"
      ml="8px"
      border="1px solid grey"
      borderRadius="8px"
      p="0 12px 2px 11px" 
      //m="-12px 0 0 8px" 
      onClick={() => setRegistrationMsg({status: false, message: ""})}
      >x</Text>
  </Flex>
  );
}

export default FormMessage;