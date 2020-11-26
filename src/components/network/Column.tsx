import { Flex } from '@chakra-ui/react'

const Column: React.FC = ({children}) => {
  return (
    <Flex
      w="100%"
      flexDir="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      {children}
    </Flex> 
  );
}

export default Column
