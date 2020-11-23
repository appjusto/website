import { Flex, BoxProps } from '@chakra-ui/react'

const Container: React.FC<BoxProps> = (props) => {
  return (
    <Flex
      as="div"
      w={["100%", "90%"]}
      maxW="1136px"
      pr="16px"
      pl="16px"
      {...props}
    >
      {props.children}
    </Flex>
  );
}

export default Container;