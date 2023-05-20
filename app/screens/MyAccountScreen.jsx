import {
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  FlatList,
} from "react-native";
import AppScreen from "../components/AppScreen/AppScreen";
import AppText from "../components/AppText";
import colors from "../config/colors";
import IconBox from "../components/IconBox";

const actions = [
  {
    id: 1,
    iconName: "format-list-bulleted",
    iconSize: 40,
    backgroundColor: colors.primary,
    title: "My Listings",
  },
  {
    id: 2,
    iconName: "email",
    iconSize: 40,
    backgroundColor: colors.secondary,
    title: "My Messages",
  },
];

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
      <FlatList
        style={styles.actionsContainer}
        data={actions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableHighlight
            style={styles.action}
            onPress={() => {}}
            underlayColor={colors.light}
          >
            <View style={styles.actionWrapper}>
              <IconBox
                name={item.iconName}
                size={item.iconSize}
                backgroundColor={item.backgroundColor}
              />
              <AppText style={styles.actionTitle} title={item.title} />
            </View>
          </TouchableHighlight>
        )}
      />
      {/* <View style={styles.actionsContainer}>
        <TouchableHighlight
          style={styles.action}
          onPress={() => {}}
          underlayColor={colors.light}
        >
          <View style={styles.actionWrapper}>
            <IconBox
              name="format-list-bulleted"
              size={40}
              backgroundColor={colors.primary}
            />
            <AppText style={styles.actionTitle} title="My Listings" />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.action}
          onPress={() => {}}
          underlayColor={colors.light}
        >
          <View style={styles.actionWrapper}>
            <IconBox
              name="email"
              size={40}
              backgroundColor={colors.secondary}
            />
            <AppText style={styles.actionTitle} title="My Messages" />
          </View>
        </TouchableHighlight>
      </View> */}
      <View style={styles.actionsContainer}>
        <TouchableHighlight
          style={styles.action}
          onPress={() => {}}
          underlayColor={colors.light}
        >
          <View style={styles.actionWrapper}>
            <IconBox name="logout" size={40} backgroundColor={colors.logout} />
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
