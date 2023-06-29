import { Box, Center, Text } from "@chakra-ui/react";

interface CommitmentBoxProps {
  header: string;
  body: {
    title: string;
    description?: string;
  }[];
}

export const CommitmentBox = ({ header, body }: CommitmentBoxProps) => {
  return (
    <Center w="100%">
      <Box
        maxW="884px"
        minW={{ lg: "884px" }}
        p="10"
        boxShadow="2px 8px 16px 2px rgba(105, 118, 103, 0.2)"
        borderRadius="lg"
        bgColor="white"
        mb="-120px"
        zIndex="100"
      >
        <Text fontSize="3xl" fontWeight="semibold">
          {header}
        </Text>
        {body.map((item) => (
          <Box
            key={item.title}
            mt="4"
            p="4"
            bgColor="green.50"
            border="1px solid"
            borderColor="primaryLight"
            borderRadius="lg"
          >
            <Text fontWeight="semibold">{item.title}</Text>
            {item.description && <Text mt="2">{item.description}</Text>}
          </Box>
        ))}
      </Box>
    </Center>
  );
};
