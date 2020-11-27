import Link from 'next/link'
import { Button, ButtonProps } from '@chakra-ui/react'

import { useStyleConfig } from "@chakra-ui/react"

interface Props extends ButtonProps {
  label: string
  variant: string
  link?: string
  handleClick?: () => void
}

const CustomInput: React.FC<Props> = ({ 
  label, variant, link, handleClick, ...props 
}) => {
  const styles = useStyleConfig("Button", {variant})
  if(link) {
    return (
      <Link href={link}>
          <Button
          sx={styles}
          mt="16px"
          onClick={handleClick}
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
      onClick={handleClick}
      {...props}
      >
      {label}
    </Button>
  );
}

export default CustomInput;