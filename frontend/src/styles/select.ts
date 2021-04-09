export default {
  parts: ["control", "label", "select"],
  baseStyle: {
    control: {
      position: "relative",
      zIndex: "1"
    },
    label: {
      position: "absolute",
      fontFamily: "Barlow",
      fontSize: "16px",
      color: "#2F855A",
      top: "8px",
      left: "16px",
      zIndex: "1000"
    },
    select: {
      fontFamily: "Barlow",
      width:"100%",
      fontSize: "16px",
      height: "60px",
      color: "#697667",
      borderColor: "#C8D7CB",
      display: "flex",
      alignItems: "flex-end",
      pt: "30px",
      pb: "9px",
      zIndex: "1"
    }

  },
}
