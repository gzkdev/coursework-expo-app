// import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import AppButton from "./app/components/AppButton/AppButton";
import AppText from "./app/components/AppText";
import Card from "./app/components/Card/Card";
import ListOwner from "./app/components/ListOwner/ListOwner";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
    //   {/* <Text>Hello React Native, Let's go!!!</Text>
    //   <TouchableWithoutFeedback onPress={() => console.log("pressed")}>
    //     <Image
    //       source={{
    //         width: 200,
    //         height: 200,
    //         uri: "https://picsum.photos/200",
    //       }}
    //       resizeMode="contain"
    //     />
    //   </TouchableWithoutFeedback>
    //   <Button title="Click me" /> */}
    //   <View style={styles.topBox}>
    //     <Image style={styles.logo} source={require(".app/assets/icon.png")} />
    //     <Text>Sell what you don't need</Text>
    //   </View>
    //   <View></View>
    //   <View style={styles.bottomBox}>
    //     <TouchableWithoutFeedback>
    //       <View
    //         style={{
    //           backgroundColor: "yellow",
    //           height: 40,
    //           width: "100%",
    //           alignItems: "center",
    //           justifyContent: "center",
    //         }}
    //       >
    //         <Text>Hello</Text>
    //       </View>
    //     </TouchableWithoutFeedback>
    //     <TouchableWithoutFeedback>
    //       <View
    //         style={{
    //           backgroundColor: "green",
    //           height: 40,
    //           width: "100%",
    //           alignItems: "center",
    //           justifyContent: "center",
    //         }}
    //       >
    //         <Text>Hello</Text>
    //       </View>
    //     </TouchableWithoutFeedback>
    //   </View>
    //   <StatusBar style="auto" />
    // </SafeAreaView>
    // <SafeAreaView style={{ flex: 1 }}>

    // </SafeAreaView>
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <SafeAreaView style={{ flex: 1 }}>
    // <View
    //   style={{
    //     flex: 1,
    //     backgroundColor: "#f8f4f4",
    //     padding: 20,
    //     paddingTop: 80,
    //   }}
    // >
    //   <Card
    //     title="Red Jacket for sale!"
    //     subTitle="$100"
    //     image={require("./app/assets/jacket.jpg")}
    //   />
    //   <ListOwner />
    //   <AppButton title="LOGIN"></AppButton>
    // </View>
    // <ListingDetailsScreen />
    // </SafeAreaView>

    <ViewImageScreen />
    // <SafeAreaView
    //   style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    // >
    //   {/* <View
    //     style={{
    //       backgroundColor: "dodgerblue",
    //       width: 100,
    //       height: 100,
    //       borderWidth: 10,
    //       borderColor: "royalblue",
    //       borderRadius: 50,
    //     }}
    //   /> */}
    //   {/* <View
    //     style={{
    //       backgroundColor: "dodgerblue",
    //       width: 100,
    //       height: 100,
    //     }}
    //   />
    //   <AppText>Hey React Native</AppText> */}
    //   {/* <AppButton color="secondary">LOGIN</AppButton> */}
    //   {/* <MaterialCommunityIcons name="email" size={100} color="dodgerblue" /> */}
    // </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     display: "flex",
//     backgroundColor: "#fff",
//   },
//   topBox: {
//     position: "absolute",
//     width: "100%",
//     top: 80,
//     left: 0,
//     alignItems: "center",
//     gap: 8,
//   },
//   bottomBox: {
//     width: "100%",
//     position: "absolute",
//     bottom: 40,
//     left: 0,
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     resizeMode: "contain",
//   },
// });
