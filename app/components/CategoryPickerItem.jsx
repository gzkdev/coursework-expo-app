import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import IconBox from "./IconBox";

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <IconBox backgroundColor={item.color} name={item.iconName} size={80} />
      <AppText title={item.label} style={styles.label} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
