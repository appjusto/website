import { usePageContext } from "@/context";
import { Button, ButtonProps } from "@chakra-ui/react";
import { BiShareAlt } from "react-icons/bi";

const ShareButton: React.FC<ButtonProps> = ({ ...props }) => {
  const { setShowSharingModal } = usePageContext();
  return (
    <Button
      leftIcon={<BiShareAlt />}
      maxW="220px"
      onClick={() => setShowSharingModal(true)}
      {...props}
    >
      Divulgar o AppJusto
    </Button>
  );
};

export default ShareButton;
