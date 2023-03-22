import { Link, LinkProps } from "@chakra-ui/react";
import BaseNextLink from "next/link";

export const NextLink: React.FC<LinkProps> = (props) => (
  <Link as={BaseNextLink} {...props} />
);
