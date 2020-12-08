import { useContext } from 'react'
import { Button, useStyleConfig, ButtonProps } from '@chakra-ui/react'
import { BiShareAlt  } from 'react-icons/bi'

import PageContext from '../context'

const ShareButton: React.FC<ButtonProps> = ({...props}) => {
  const { handleModalSharing, handleModalConfirmation } = useContext(PageContext)
  const variant = "basic"
  const styles = useStyleConfig("Button", {variant})
  const handleClick = () => {
    handleModalSharing()
    return handleModalConfirmation("")
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