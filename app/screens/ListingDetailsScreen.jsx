import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import ListOwner from "../components/ListOwner/ListOwner";

import colors from "../config/colors";

const ListingDetails = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} title="Red Jacket for sale"></AppText>
        <AppText style={styles.price} title="$100" />
        <View style={styles.ownerContainer}>
          <ListOwner
            title="Mosh Hamedani"
            subTitle="5 Listings"
            image={require("../assets/mosh.jpg")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
    gap: 8,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
  },
  ownerContainer: {
    marginVertical: 20,
  },
});

export default ListingDetails;
