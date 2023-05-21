import { TouchableOpacity } from "react-native";
import AppText from "./AppText";
// import IconBox from "./IconBox";

const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText title={item.label} style={{ padding: 10 }} />
    </TouchableOpacity>
  );
};

export default PickerItem;
