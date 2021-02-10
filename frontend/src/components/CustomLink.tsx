import NextLink from 'next/link'
import { Link, LinkProps } from '@chakra-ui/react'

interface CustomLinkProps extends LinkProps {
  name: string
  link: string
  linkLabel?: string
  internal?: boolean
}

const CustomLink: React.FC<CustomLinkProps> = ({
  name, link, linkLabel, internal, children, ...props
}) => {

  if(internal) {
    return (
      <NextLink href={link} passHref>
        <Link
          textDecoration="underline"
          _hover={{color: "#055AFF"}}
          {...props}
        >
          {linkLabel}
        </Link>
      </NextLink>
    )
  }
  return (
    <Link
      href={link}
      textDecoration="underline"
      _hover={{color: "#055AFF"}}
      _focus={{outline: "none"}}
      {...props}
      isExternal
    >
      {
        linkLabel ? linkLabel : children
      }
    </Link>
  );
}

export default CustomLink;
