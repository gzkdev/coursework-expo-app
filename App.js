// import MessageScreen from "./app/screens/MessageScreen";
// import AppScreen from "./app/components/AppScreen/AppScreen";
import { useState } from "react";
import { Text, TextInput } from "react-native";
import { Switch } from "react-native-gesture-handler";
import AppPicker from "./app/components/AppPicker";
import AppScreen from "./app/components/AppScreen/AppScreen";
import AppTextInput from "./app/components/AppTextInput";
// import AppText from "./app/components/AppText";
// import MyAccountScreen from "./app/screens/MyAccountScreen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  // const [firstName, setFirstName] = useState("");
  const [isNew, setIsNew] = useState(false);
  const [category, setCategory] = useState(categories[0]);
  // return <MyAccountScreen />;
  return (
    <AppScreen>
      <AppTextInput placeholder="Username" icon="email" />
      {/* <Switch value={isNew} onValueChange={(value) => setIsNew(value)} /> */}
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        placeholder="Category"
        icon="apps"
        items={categories}
      />
    </AppScreen>
  );
}
