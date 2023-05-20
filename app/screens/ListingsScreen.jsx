import { StyleSheet, View } from "react-native";
import AppScreen from "../components/AppScreen/AppScreen";
import Card from "../components/Card/Card";
import colors from "../config/colors";

const ListingsScreen = () => {
  return (
    <AppScreen style={styles.screen}>
      <View style={styles.cardContainer}>
        <Card
          title="Red Jacket for sale"
          subTitle="$100"
          image={require("../assets/jacket.jpg")}
        />
        <Card
          title="Couch in great condition"
          subTitle="$1000"
          image={require("../assets/couch.jpg")}
        />
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  cardContainer: {
    padding: 20,
    gap: 40,
  },
});

export default ListingsScreen;
