import { Image, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton/AppButton";
import AppScreen from "../components/AppScreen/AppScreen";
import AppTextInput from "../components/AppTextInput";
import { Formik } from "formik";
import * as Yup from "yup";
import AppText from "../components/AppText";
import ErrorMessage from "../components/ErrorMessage";
import AppFormField from "../components/AppFormField";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <AppScreen>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <>
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                keyBoardType="email-address"
                // onBlur={() => setFieldTouched("email")}
                // onChangeText={handleChange("email")}
                name="email"
                placeholder="Email"
                textContentType="emailAddress" //specific for ios, enables app to load details from cache
              />
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                // onBlur={() => setFieldTouched("password")}
                // onChangeText={handleChange("password")}
                name="password"
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
