import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const IconBox = ({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: size * 0.5,
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
};

export default IconBox;
