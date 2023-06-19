import { usePageContext } from "@/context";
import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import Container from "./Container";

const VideoModal: React.FC = () => {
  // context
  const { videoModalConfig, setVideoModalConfig } = usePageContext();
  // helpers
  const link = `https://www.youtube-nocookie.com/embed/${
    videoModalConfig.videoId ?? ""
  }?autoplay=1&controls=0&modestbranding=1`;
  // UI
  return (
    <Modal
      id="video-modal"
      size="full"
      blockScrollOnMount={true}
      isOpen={videoModalConfig.isOpen}
      onClose={() => setVideoModalConfig({ isOpen: false })}
      closeOnOverlayClick={true}
      isCentered
    >
      <ModalOverlay />
      <ModalContent bg="transparent" borderRadius="24px">
        <ModalBody>
          <Container
            h="100vh"
            display="flex"
            flexDir="column"
            justifyContent="center"
          >
            <Flex justifyContent="flex-end" pb="4">
              <CloseIcon
                w={{ base: "20px", lg: "24px" }}
                h={{ base: "20px", lg: "24px" }}
                cursor="pointer"
                _hover={{ opacity: 0.6 }}
                onClick={() => setVideoModalConfig({ isOpen: false })}
              />
            </Flex>
            <Box
              position="relative"
              bgColor="black"
              w={{ base: "100%", md: "100%", lg: "100%" }}
              h={{ base: "296px", md: "400px", lg: "700px" }}
            >
              <iframe
                width="100%"
                height="100%"
                src={link}
                title={videoModalConfig.title ?? "YouTube video player"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Box>
          </Container>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default VideoModal;
