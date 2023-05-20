import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
        />
      )}
      <TextInput
        style={[defaultStyles.text, styles.inputBox]}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 16,
    marginVertical: 16,
    gap: 8,
  },
  inputBox: {
    flex: 1,
  },
});

export default AppTextInput;
