import { extendTheme } from "@chakra-ui/react";
import Button from "./button";
import Carousel from "./carousel";
import Checkbox from "./checkbox";
import { colors } from "./colors";
import Heading from "./heading";
import Input from "./input";
import Select from "./select";
import Text from "./text";
import { fonts, fontSize } from "./typography";

const breakpoints = {
  "sm": "30em",
  "md": "48em",
  "lg": "62em",
  "xl": "80em",
  "2xl": "96em",
};

const customTheme = extendTheme({
  breakpoints,
  fonts,
  fontSize,
  colors,
  components: {
    Select,
    Input,
    Button,
    Carousel,
    Checkbox,
    Heading,
    Text,
  },
});

export default customTheme;
