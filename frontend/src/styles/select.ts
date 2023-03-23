export default {
  parts: ["control", "label", "select"],
  baseStyle: {
    control: {
      position: "relative",
      zIndex: "1",
    },
    label: {
      position: "absolute",
      fontSize: "16px",
      color: "#2F855A",
      top: "8px",
      left: "16px",
      zIndex: "1000",
    },
    select: {
      width: "100%",
      fontSize: "16px",
      height: "60px",
      color: "#697667",
      border: "1px solid",
      borderColor: "#C8D7CB",
      borderRadius: "8px",
      display: "flex",
      alignItems: "flex-end",
      px: "16px",
      pt: "30px",
      pb: "9px",
      zIndex: "1",
    },
  },
};
