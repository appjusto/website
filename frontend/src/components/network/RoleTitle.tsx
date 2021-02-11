import { Heading } from '@chakra-ui/react'

interface TextProps {
  text: string
}

const RoleTitle: React.FC<TextProps> = ({text}) => {
  return (
    <Heading 
      as="h3"
      fontSize="16px"
      lineHeight="22px"
    >
      {text}
    </Heading> 
  );
}

export default RoleTitle