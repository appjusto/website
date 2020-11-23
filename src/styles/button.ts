export default {
  baseStyle: {
    fontFamily: "Barlow",
    fontSize: "16px",
    border: "2px solid black",
    radii: "md",
    w: "100%",
  },
  variants: {
    white:{
      bg: "white",
      fontSize: "15px",
      h: "48px",
      maxW: "220px"
    },
    secondary: {
      bg: "secondary",
      h: "60px",
      fontSize: "18px",
    },
    secondaryLight: {
      bg: "secondaryLight",
      h: "48px",
      fontSize: "15px"
    },
  },
  defaultProps: {
    variants: "white"
  },
}