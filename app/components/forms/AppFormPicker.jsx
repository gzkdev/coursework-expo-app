import { View } from "react-native";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import { ErrorMessage } from ".";

const AppFormPicker = ({ items, name, placeholder }) => {
  const { setFieldValue, values, errors, touched } = useFormikContext();
  return (
    <View>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched.category} />
    </View>
  );
};

export default AppFormPicker;
