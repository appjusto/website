import { NextLink } from "@/components/NextLink";
import { Link, LinkProps } from "@chakra-ui/react";

interface CustomLinkProps extends LinkProps {
  name: string;
  link: string;
  linkLabel?: string;
  isUnderline?: boolean;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  name,
  link,
  linkLabel,
  isUnderline,
  isExternal,
  children,
  ...props
}) => {
  if (!isExternal) {
    return (
      <NextLink
        href={link}
        textDecoration={isUnderline ? "underline" : "none"}
        _focus={{ outline: "none" }}
        {...props}
      >
        {linkLabel}
      </NextLink>
    );
  }
  return (
    <Link
      href={link}
      textDecoration={isUnderline ? "underline" : "none"}
      _focus={{ outline: "none" }}
      {...props}
      isExternal
    >
      {linkLabel ? linkLabel : children}
    </Link>
  );
};

export default CustomLink;
