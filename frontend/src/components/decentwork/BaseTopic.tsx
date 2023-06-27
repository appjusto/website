import { Box, BoxProps } from "@chakra-ui/react";

export const BaseTopic = ({ children, ...props }: BoxProps) => {
  return (
    <Box pb={{ base: "24", md: "20", lg: "24" }} {...props}>
      {children}
    </Box>
  );
};
