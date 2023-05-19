import { Text, StyleSheet, Platform } from "react-native";

const AppText = ({ title, style }) => {
  return <Text style={[styles.text, style]}>{title}</Text>;
};

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
        fontSize: 14,
      },
      android: {
        fontFamily: "Roboto",
        fontSize: 16,
      },
    }),
  },
});

export default AppText;
