import { View } from "react-native";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import { ErrorMessage } from ".";

const AppFormPicker = ({
  items,
  name,
  numberOfColumns = 1,
  PickerItemComponent,
  placeholder,
  style,
}) => {
  const { setFieldValue, values, errors, touched } = useFormikContext();
  return (
    <View>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        style={style}
      />
      <ErrorMessage error={errors[name]} visible={touched.category} />
    </View>
  );
};

export default AppFormPicker;
