import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import AppButton from "../components/AppButton/AppButton";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={{ fontSize: 24, fontWeight: "600" }}>
          Sell what you don't need
        </Text>
      </View>
      {/* <View style={styles.loginButton}></View> */}
      <View style={styles.buttonContainer}>
        <AppButton>LOGIN</AppButton>
        <AppButton color="secondary">GET STARTED</AppButton>
      </View>
      {/* <View style={styles.registerButton}></View> */}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  buttonContainer: {
    width: "100%",
    paddingBottom: 60,
    paddingHorizontal: 20,
    gap: 20,
  },
});

export default WelcomeScreen;
