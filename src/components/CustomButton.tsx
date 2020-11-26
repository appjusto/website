import Link from 'next/link'
import { Button, ButtonProps } from '@chakra-ui/react'

import { useStyleConfig } from "@chakra-ui/react"

interface Props extends ButtonProps {
  label: string
  variant: string
  link?: string
}

const CustomInput: React.FC<Props> = ({ label, variant, link, ...props }) => {
  const styles = useStyleConfig("Button", {variant})
  if(link) {
    return (
      <Link href={link}>
          <Button
          sx={styles}
          mt="16px"
          {...props}
          >
          {label}
        </Button>
      </Link>
    )
  }
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