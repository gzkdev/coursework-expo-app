import { Text } from "react-native";
import defualtStyles from "../config/styles";

const AppText = ({ title, style }) => {
  return <Text style={[defualtStyles.text, style]}>{title}</Text>;
};

// const styles = StyleSheet.create({
//   text: {
//     ...Platform.select({
//       ios: {
//         fontFamily: "Avenir",
//         fontSize: 14,
//       },
//       android: {
//         fontFamily: "Roboto",
//         fontSize: 16,
//       },
//     }),
//   },
// });

export default AppText;
