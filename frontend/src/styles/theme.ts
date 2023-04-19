import { extendTheme } from "@chakra-ui/react";
import { Barlow } from "next/font/google";
import { colors } from "./colors";
import Select from "./select";
import Input from "./input";
import Button from "./button";
import Carousel from "./carousel";
import Checkbox from "./checkbox";

const barlow = Barlow({
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const fonts = {
  body: barlow.style.fontFamily,
  heading: barlow.style.fontFamily,
  mono: barlow.style.fontFamily,
};

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

const customTheme = extendTheme({
  breakpoints,
  fonts,
  colors,
  components: {
    Select,
    Input,
    Button,
    Carousel,
    Checkbox,
  },
  textStyles: {
    p: {
      fontFamily: barlow.style.fontFamily,
      fontSize: "1.25rem",
      lineHeight: "1.62rem",
      fontWeight: "400",
    },
  },
});

export default customTheme;
