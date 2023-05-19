import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../../config/colors";
import AppText from "../AppText";

/** It is recommennded you uuse expo to install react-native-gesture-handler so that expo will make it compatible with the version on expo you're using on your project. This applies to some other react native libraries you may use in the future **/

const ListOwner = ({ title, subTitle, image, onPress, renderRightActions }) => {
  return (
    // The TouchableHighlght component won't work without the onPress prop
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.box}>
          <Image style={styles.image} source={image} />
          <View style={styles.details}>
            <AppText title={title} style={styles.name} />
            <AppText title={subTitle} style={styles.subTitle} />
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
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
