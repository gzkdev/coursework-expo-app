import { TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";

const AppButton = ({ title, color = "primary", onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <AppText title={title} style={styles.text} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 16,
    width: "100%",
    borderRadius: 24,
  },
  text: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "600",
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.secondary,
  },
});

export default AppButton;
