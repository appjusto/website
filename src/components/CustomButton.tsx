import Link from 'next/link'
import { Button, ButtonProps } from '@chakra-ui/react'

import { useStyleConfig } from "@chakra-ui/react"

interface Props extends ButtonProps {
  label: string
  variant: string
  link?: string
  isSubmiting?: boolean
  handleClick?: () => void
}

const CustomButton: React.FC<Props> = ({
  label,
  variant,
  link,
  isSubmiting,
  handleClick,
  ...props
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
  if(isSubmiting) {
    return (
      <Button
      sx={styles}
      mt="16px"
      isLoading
      loadingText="Enviando"
      {...props}
      >
      {label}
    </Button>
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

export default CustomButton;
