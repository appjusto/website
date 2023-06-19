export default {
  parts: ["container", "imgBox"],
  baseStyle: {
    container: {
      position: "relative",
      w: "100%",
      h: "600px",
      overflow: "hidden",
    },
    imgBox: {
      as: "div",
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      transition: "opacity ease 1s",
    },
  },
};
