import { Heading, HeadingProps } from "@chakra-ui/react";

interface SectionHeadingProps extends HeadingProps {
  highlighted?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  highlighted = false,
  children,
  ...props
}) => {
  return (
    <Heading
      as={highlighted ? "h2" : "h3"}
      color="black"
      fontSize={
        highlighted ? { base: "3xl", lg: "5xl" } : { base: "3xl", lg: "4xl" }
      }
      lineHeight={
        highlighted
          ? { base: "33.6px", lg: "57px" }
          : { base: "33.6px", lg: "43.2px" }
      }
      fontWeight="700"
      mb="4"
      {...props}
    >
      {children}
    </Heading>
  );
};

export default SectionHeading;
