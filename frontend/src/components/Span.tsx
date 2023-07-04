import { Text, TextProps } from "@chakra-ui/react";

interface SpanProps extends TextProps {
  bold?: boolean;
  mx?: string;
}

export const Span = ({ bold, mx, children, ...props }: SpanProps) => {
  return (
    <Text
      as="span"
      mx={mx}
      fontSize="inherit"
      fontWeight={bold ? "semibold" : "medium"}
      {...props}
    >
      {children}
    </Text>
  );
};
