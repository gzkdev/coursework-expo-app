import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import AppScreen from "../components/AppScreen/AppScreen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  decription: Yup.string().label("Decription"),
});

const categories = [
  { label: "Furniture", value: 1, iconName: "floor-lamp", color: "#fc5c65" },
  { label: "Cars", value: 2, iconName: "car", color: "#fd9644" },
  { label: "Cameras", value: 3, iconName: "camera", color: "#fed330" },
  { label: "Games", value: 4, iconName: "cards", color: "#26de81" },
  { label: "Clothing", value: 5, iconName: "shoe-heel", color: "#2bcbba" },
  { label: "Sports", value: 6, iconName: "basketball", color: "#45aaf2" },
  {
    label: "Movies & Music",
    value: 7,
    iconName: "headphones",
    color: "#4b7bec",
  },
];

const EditListingScreen = () => {
  return (
    <AppScreen>
      <View style={styles.container}>
        <AppForm
          initialValues={{
            title: "",
            price: "",
            category: null,
            decription: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            maxLength={255}
            name="title"
            placeholder="Title" //specific for ios, enables app to load details from cache
          />
          <AppFormField
            keyboardType="numeric"
            maxLength={8}
            name="price"
            placeholder="Price"
            style={{ width: "50%" }}
          />
          <AppFormPicker
            items={categories}
            name="category"
            numberOfColumns={3}
            PickerItemComponent={CategoryPickerItem}
            placeholder="Category"
            style={{ width: "70%" }}
          />
          <AppFormField
            autoCapitalize="none"
            multiline
            autoCorrect={false}
            name="description"
            numberOfLines={3} // this only works on android
            placeholder="Description"
          />
          <SubmitButton title="POST" />
        </AppForm>
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
});

export default EditListingScreen;
