import { StyleSheet } from "react-native";
import { height, width } from "../../constants/measures";
import { colors } from "../../themes/colors";

const styles = StyleSheet.create({
  Button: {
    width: width * 0.1,
    height: height * 0.1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: colors.background,
  },
  NumberText: {
    color: colors.text,
    fontSize: 20,
  },
});

export default styles;