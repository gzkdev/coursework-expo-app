import { View, Image, StyleSheet } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";

const Card = ({ image, title, subTitle }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={image} resizeMode="cover" />
      <View style={styles.cardDetails}>
        <AppText title={title} style={styles.cardTitle} numberOfLines={1} />
        <AppText
          title={subTitle}
          style={styles.cardSubTitle}
          numberOfLines={1}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: colors.white,
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  cardDetails: {
    padding: 16,
    gap: 8,
  },
  cardTitle: {
    fontSize: 18,
  },
  cardSubTitle: {
    fontSize: 16,
    color: colors.secondary,
  },
});

export default Card;
