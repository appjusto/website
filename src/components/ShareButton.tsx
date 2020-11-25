import { Button, useStyleConfig } from '@chakra-ui/react'
import { BiShareAlt  } from 'react-icons/bi'

const ShareButton: React.FC = () => {
  const variant = "white"
  const styles = useStyleConfig("Button", {variant})
  return (
    <Button 
      leftIcon={<BiShareAlt />} 
      sx={styles}
      maxW="220px"
      >
      Divulgar o AppJusto
    </Button>
  );
}

export default ShareButton;