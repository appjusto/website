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
      _hover: {bg: "primary", color: "primaryDark", borderColor: "primaryDark"}
    },
    secondary: {
      bg: "secondary",
      h: "60px",
      fontSize: "18px",
      _hover: {bg: "#FF7F22"}
    },
    secondaryLight: {
      bg: "secondaryLight",
      h: "48px",
      fontSize: "15px",
      padding: "0",
      _hover: {bg: "#FFC093"}
    },
  },
  defaultProps: {
    variants: "white"
  },
}

/*
 variants: {
  white:{
    bg: "white",
    fontSize: "15px",
    h: "48px",
    _hover: {bg: "primary", color: "primaryDark", borderColor: "primaryDark"}
  },
  secondary: {
    bg: "secondary",
    h: "60px",
    fontSize: "18px",
    _hover: {bg: "primary", color: "primaryDark", borderColor: "primaryDark"}
  },
  secondaryLight: {
    bg: "secondaryLight",
    h: "48px",
    fontSize: "15px",
    padding: "0",
    _hover: {bg: "primary", color: "primaryDark", borderColor: "primaryDark"}
  },
},
*/