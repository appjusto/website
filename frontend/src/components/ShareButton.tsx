import { Button, useStyleConfig, ButtonProps } from '@chakra-ui/react'
import { BiShareAlt  } from 'react-icons/bi'

import { usePageContext } from '../context/'

import { modalConfOptions } from './ModalConfirmation'

const ShareButton: React.FC<ButtonProps> = ({...props}) => {
  const { contextDispatch } = usePageContext()
  const variant = "basic"
  const styles = useStyleConfig("Button", {variant})
  return (
    <Button
      leftIcon={<BiShareAlt />}
      sx={styles}
      maxW="220px"
      onClick={() => contextDispatch({
          type: "handle_modalConfirmation", payload: modalConfOptions.sharing
        })
      }
      {...props}
      >
      Divulgar o AppJusto
    </Button>
  );
}

export default ShareButton;
