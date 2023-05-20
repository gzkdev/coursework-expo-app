import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";

import defaultStyles from "../config/styles";
import { useState } from "react";
import AppScreen from "./AppScreen/AppScreen";
import PickerItem from "./PickerItem";

const AppPicker = ({
  icon,
  items,
  onSelectItem,
  placeholder,
  selectedItem,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
            />
          )}
          <AppText
            title={selectedItem ? selectedItem.label : placeholder}
            style={styles.text}
          />
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <AppScreen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </AppScreen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: defaultStyles.colors.light,
    width: "100%",
    padding: 16,
    marginVertical: 10,
    borderRadius: 10,
    gap: 10,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
