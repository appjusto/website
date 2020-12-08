import { Link, LinkProps } from '@chakra-ui/react'

interface CustomLinkProps extends LinkProps {
  link: string
}

const ShareLink: React.FC<CustomLinkProps> = ({
  link, children, ...props
}) => {
  return (
    <Link 
      href={link}
      textDecoration="underline"
      color="primaryDark"
      _hover={{color: "primary"}}
      {...props}
      isExternal
    >
      {children}
    </Link>
  );
}

export default ShareLink;