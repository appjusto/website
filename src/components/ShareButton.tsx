import { Button, useStyleConfig, ButtonProps } from '@chakra-ui/react'
import { BiShareAlt  } from 'react-icons/bi'

const ShareButton: React.FC<ButtonProps> = ({...props}) => {
  const variant = "white"
  const styles = useStyleConfig("Button", {variant})
  return (
    <Button 
      leftIcon={<BiShareAlt />} 
      sx={styles}
      maxW="220px"
      {...props}
      >
      Divulgar o AppJusto
    </Button>
  );
}

export default ShareButton;