import { useContext } from 'react'
import { 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react'

import PageContext from '../context/'

const ModalConfirmation: React.FC = () => {
  const { showModalConfirmation, handleModals } = useContext(PageContext)
  return (
    <Modal 
      id="ModalConfirmation"
      blockScrollOnMount={true} 
      isOpen={showModalConfirmation} 
      onClose={() => handleModals("confirmation")}
      closeOnOverlayClick={true}
      isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <button onClick={() => handleModals("confirmation")}>Fechar</button>
          </ModalBody>
        </ModalContent>
      </Modal>
  );
}

export default ModalConfirmation;