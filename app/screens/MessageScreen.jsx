import { FlatList, StyleSheet } from "react-native";
import ListOwner from "../components/ListOwner/ListOwner";
import AppScreen from "../components/AppScreen/AppScreen";
import ListItemSeparator from "../components/ListItemSeparator";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

const MessageScreen = () => {
  return (
    <AppScreen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListOwner
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
      />
    </AppScreen>
  );
};

const styles = StyleSheet.create({});

export default MessageScreen;
