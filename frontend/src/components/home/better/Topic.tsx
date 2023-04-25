import {
  Box,
  BoxProps,
  Circle,
  Heading,
  HStack,
  Image,
} from "@chakra-ui/react";

interface TopicProps extends BoxProps {
  label: string;
  size?: "sm" | "md" | "lg";
  check?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}

const Topic: React.FC<TopicProps> = ({
  label,
  size = "lg",
  check,
  children,
  ...props
}) => {
  return (
    <HStack mt="4" spacing={4} align="flex-start" {...props}>
      {check ? (
        <Image
          src="/green-check.svg"
          alt="ícone de marcador verde"
          width={size === "lg" ? "24px" : "15px"}
          height={size === "lg" ? "48px" : "26px"}
        />
      ) : (
        <Circle mt="3" size="4px" bg="black" />
      )}
      <Box color="black">
        <Heading as="h3" fontSize={size} fontWeight="500" lineHeight={size}>
          {label}
        </Heading>
        {children}
      </Box>
    </HStack>
  );
};

export default Topic;
