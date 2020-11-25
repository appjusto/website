import { Button, ButtonProps } from '@chakra-ui/react'

import { useStyleConfig } from "@chakra-ui/react"

interface Props extends ButtonProps {
  label: string
  variant: string
}

const CustomInput: React.FC<Props> = ({ label, variant, ...props }) => {
  const styles = useStyleConfig("Button", {variant})
  return (
    <Button
      sx={styles}
      mt="16px"
      {...props}
      >
      {label}
    </Button>
  );
}

export default CustomInput;