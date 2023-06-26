import { Text, TextProps } from "@chakra-ui/react";

interface SpanProps extends TextProps {
  bold?: boolean;
}

export const Span = ({ bold, children, ...props }: SpanProps) => {
  return (
    <Text
      as="span"
      mx="4px"
      fontSize="inherit"
      fontWeight={bold ? "semibold" : "medium"}
      {...props}
    >
      {children}
    </Text>
  );
};
