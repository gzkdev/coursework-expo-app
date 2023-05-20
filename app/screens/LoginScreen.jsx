import { Image, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton/AppButton";
import AppScreen from "../components/AppScreen/AppScreen";
import AppTextInput from "../components/AppTextInput";
import { Formik } from "formik";

const LoginScreen = () => {
  return (
    <AppScreen>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleSubmit }) => (
            <>
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                keyBoardType="email-address"
                onChangeText={handleChange("email")}
                placeholder="Email"
                textContentType="emailAddress" //specific for ios, enables app to load details from cache
              />
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                onChangeText={handleChange("password")}
                placeholder="Password"
                secureTextEntry={true}
                textContentType="password"
              />
              <AppButton title="Login" onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
});

export default LoginScreen;
