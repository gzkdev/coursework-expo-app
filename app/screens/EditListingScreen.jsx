import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import AppScreen from "../components/AppScreen/AppScreen";
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
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
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
          />
          <AppFormPicker
            items={categories}
            name="category"
            placeholder="Category"
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
