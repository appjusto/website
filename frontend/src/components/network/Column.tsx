import { Flex, FlexProps } from "@chakra-ui/react";

const Column: React.FC<FlexProps> = ({ children, ...props }) => {
  return (
    <Flex
      w="100%"
      flexDir="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Column;
