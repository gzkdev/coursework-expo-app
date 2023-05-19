import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import AppScreen from "../components/AppScreen/AppScreen";
import AppText from "../components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const MyAccountScreen = () => {
  return (
    <AppScreen style={styles.screen}>
      <View style={styles.userContainer}>
        <Image
          style={styles.userImage}
          source={require("../assets/mosh.jpg")}
        />
        <View>
          <AppText style={styles.userName} title="Mosh Hamedani"></AppText>
          <AppText
            style={styles.userEmail}
            title="programmingwithmosh@gmail.com"
          ></AppText>
        </View>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableHighlight style={styles.action}>
          <View style={styles.actionWrapper}>
            <View style={[styles.actionIcon, styles.utilsPrimary]}>
              <MaterialCommunityIcons
                name="format-list-bulleted"
                color={colors.white}
                size={20}
              />
            </View>
            <AppText style={styles.actionTitle} title="My Listings" />
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.action}>
          <View style={styles.actionWrapper}>
            <View style={[styles.actionIcon, styles.utilsMessages]}>
              <MaterialCommunityIcons
                name="email"
                color={colors.white}
                size={20}
              />
            </View>
            <AppText style={styles.actionTitle} title="My Messages" />
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableHighlight style={styles.action}>
          <View style={styles.actionWrapper}>
            <View style={[styles.actionIcon, styles.utilsLogout]}>
              <MaterialCommunityIcons
                name="logout"
                color={colors.white}
                size={20}
              />
            </View>
            <AppText style={styles.actionTitle} title="Logout" />
          </View>
        </TouchableHighlight>
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  action: {
    width: "100%",
  },
  actionWrapper: {
    width: "100%",
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 10,
  },
  actionsContainer: {
    marginVertical: 20,
  },
  actionIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
  },
  screen: {
    backgroundColor: colors.light,
  },
  userContainer: {
    flexDirection: "row",
    gap: 8,
    padding: 20,
    backgroundColor: colors.white,
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 70,
  },
  userName: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 8,
  },
  userEmail: {
    color: colors.medium,
  },
  utilsPrimary: {
    backgroundColor: colors.primary,
  },
  utilsMessages: {
    backgroundColor: colors.secondary,
  },
  utilsLogout: {
    backgroundColor: colors.logout,
  },
});

export default MyAccountScreen;
