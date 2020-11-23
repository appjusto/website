import { Button } from '@chakra-ui/react'

import { useStyleConfig } from "@chakra-ui/react"

interface ButtonProps {
  label: string
  variant: string
}

const CustomInput: React.FC<ButtonProps> = ({ label, variant }) => {
  const styles = useStyleConfig("Button", {variant})
  return (
    <Button
      sx={styles}
      mt="16px"
      >
      {label}
    </Button>
  );
}

export default CustomInput;