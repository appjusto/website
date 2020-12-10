import { Link, LinkProps } from '@chakra-ui/react'
import { useStyleConfig } from "@chakra-ui/react"

interface CustomLinkButtonProps extends LinkProps {
  link: string
  linkLabel: string
  variant: string
}

const CustomLinkButton: React.FC<CustomLinkButtonProps> = ({
  link, linkLabel, variant, ...props
}) => {
  const styles = useStyleConfig("Button", {variant})
  return (
    <Link 
      href={link}
      sx={styles}
      display="inline-flex"
      justifyContent="center"
      alignItems="center"
      mt="16px"
      {...props}
      isExternal
    >
      {linkLabel}
    </Link>
  );
}

export default CustomLinkButton;