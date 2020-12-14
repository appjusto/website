import { Button, useStyleConfig, ButtonProps } from '@chakra-ui/react'
import { BiShareAlt  } from 'react-icons/bi'

import { usePageContext } from '../context/'

const ShareButton: React.FC<ButtonProps> = ({...props}) => {
  const { 
    handleModalSharing, handleModalConfirmation, showModalConfirmation 
  } = usePageContext()
  const variant = "basic"
  const styles = useStyleConfig("Button", {variant})
  const handleClick = () => {
    if(showModalConfirmation.show) {
      handleModalConfirmation("")
    }
    return handleModalSharing()
  }
  return (
    <Button 
      leftIcon={<BiShareAlt />} 
      sx={styles}
      maxW="220px"
      onClick={handleClick}
      {...props}
      >
      Divulgar o AppJusto
    </Button>
  );
}

export default ShareButton;