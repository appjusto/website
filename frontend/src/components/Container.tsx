import { Container, ContainerProps } from "@chakra-ui/react";
import React from "react";

const CustomContainer = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, ...props }, ref) => {
    return (
      <Container
        ref={ref}
        w={{ base: "100%", md: "95%" }}
        maxW="1460px"
        h="100%"
        pt="10"
        {...props}
      >
        {children}
      </Container>
    );
  }
);

export default CustomContainer;
