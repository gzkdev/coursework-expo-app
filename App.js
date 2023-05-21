// import LoginScreen from "./app/screens/LoginScreen";
import AppScreen from "./app/components/AppScreen/AppScreen";
import ListItemDeleteAction from "./app/components/ListItemDeleteAction";
import ListOwner from "./app/components/ListOwner/ListOwner";
import EditListingScreen from "./app/screens/EditListingScreen";
import MessageScreen from "./app/screens/MessageScreen";
// import RegisterScreen from "./app/screens/RegisterScreen";

export default function App() {
  return (
    // <AppScreen>
    //   <ListOwner
    //     title="T1"
    //     subTitle="D1"
    //     image={require("./app/assets/mosh.jpg")}
    //     onPress={() => console.log("T1")}
    //     renderRightActions={() => <ListItemDeleteAction />}
    //   />
    //   <ListOwner
    //     title="T2"
    //     subTitle="D2"
    //     image={require("./app/assets/mosh.jpg")}
    //     onPress={() => console.log("T2")}
    //     renderRightActions={() => <ListItemDeleteAction />}
    //   />
    // </AppScreen>
    // <MessageScreen />
    <EditListingScreen />
  );
}
