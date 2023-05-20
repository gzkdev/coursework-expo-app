import { Image, StyleSheet, View } from "react-native";
import * as Yup from "yup";

import AppScreen from "../components/AppScreen/AppScreen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <AppScreen>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyBoardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress" //specific for ios, enables app to load details from cache
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry={true}
            textContentType="password"
          />
          <SubmitButton title="Login" />
        </AppForm>
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
