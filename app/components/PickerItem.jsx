import { TouchableOpacity } from "react-native";
import AppText from "./AppText";

const PickerItem = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText
        title={label}
        style={{
          padding: 20,
        }}
      />
    </TouchableOpacity>
  );
};

export default PickerItem;
