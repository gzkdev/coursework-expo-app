import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

const AppScreen = ({ children }) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

export default AppScreen;
