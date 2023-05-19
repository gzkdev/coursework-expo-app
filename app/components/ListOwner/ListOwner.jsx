import { View, Image, StyleSheet } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";

const ListOwner = ({ title, subTitle, image }) => {
  return (
    <View style={styles.box}>
      <Image style={styles.image} source={image} />
      <View style={styles.details}>
        <AppText title={title} style={styles.name} />
        <AppText title={subTitle} style={styles.subTitle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    padding: 16,
    gap: 8,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 70,
  },
  name: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
});

export default ListOwner;
