import { Heading } from "@chakra-ui/react";

interface TextProps {
  text: string;
}

const RoleTitle: React.FC<TextProps> = ({ text }) => {
  return (
    <Heading as="h3" fontSize="lg" lineHeight="1.5rem">
      {text}
    </Heading>
  );
};

export default RoleTitle;
