import { Button, useStyleConfig, ButtonProps } from '@chakra-ui/react'
import { BiShareAlt  } from 'react-icons/bi'

import { usePageContext } from '../context/'

const ShareButton: React.FC<ButtonProps> = ({...props}) => {
  const { contextState, contextDispatch  } = usePageContext()
  const variant = "basic"
  const styles = useStyleConfig("Button", {variant})
  const handleClick = () => {
    if(contextState.showModalConfirmation.show) {
      contextDispatch({type: "handle_modalConfirmation", payload: ""})
    }
    return contextDispatch({type: "handle_modalSharing"})
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