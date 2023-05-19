import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

const AppScreen = ({ children }) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default AppScreen;
