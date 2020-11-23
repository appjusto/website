import { Flex, FlexboxProps } from '@chakra-ui/react'

const Container: React.FC<FlexboxProps> = (props) => {
  return (
    <Flex
      w={["100%", "90%"]}
      maxW="1136px"
      {...props}
    >
      {props.children}
    </Flex>
  );
}

export default Container;