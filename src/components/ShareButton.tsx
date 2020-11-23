import { Button } from '@chakra-ui/react'
import { BiShareAlt  } from 'react-icons/bi'

const ShareButton: React.FC = () => {
  return (
    <Button 
      leftIcon={<BiShareAlt />} 
      colorScheme="black" 
      radii="md"
      border="2px"
      variant="outline"
      w="100%"
      maxW="220px"
      fontSize="15px"
      >
      Divulgar o AppJusto
    </Button>
  );
}

export default ShareButton;