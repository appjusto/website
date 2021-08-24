import { Box, BoxProps, Heading, HStack, Image } from '@chakra-ui/react';

interface TopicProps extends BoxProps {
  label: string;
  size?: 'sm' | 'md' | 'lg';
}

const Topic: React.FC<TopicProps> = ({ label, size = 'lg', ...props }) => {
  return (
    <HStack mt="3" spacing={4} alignItems="center" {...props}>
      <Image src="/green-check.svg" width={size === 'lg' ? '24px' : '15px'} height={size === 'lg' ? '48px' : '26px'} />
      <Box color="black">
        <Heading
          as="h2"
          fontSize={size}
          fontWeight="500"
          lineHeight={size}
        >
          {label}
        </Heading>
      </Box>
    </HStack>
  );
};

export default Topic;
