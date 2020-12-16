import { Button, useStyleConfig, ButtonProps } from '@chakra-ui/react'
import { BiShareAlt  } from 'react-icons/bi'

import { usePageContext } from '../context/'

const ShareButton: React.FC<ButtonProps> = ({...props}) => {
  const { contextDispatch, safeAnalytics  } = usePageContext()
  const variant = "basic"
  const styles = useStyleConfig("Button", {variant})
  return (
    <Button
      leftIcon={<BiShareAlt />}
      sx={styles}
      maxW="220px"
      onClick={() => {
        safeAnalytics("share_button")
        return contextDispatch({type: "handle_modalConfirmation", payload: "sharing"})
      }
      }
      {...props}
      >
      Divulgar o AppJusto
    </Button>
  );
}

export default ShareButton;
