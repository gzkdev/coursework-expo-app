import { useFormikContext } from "formik";
import AppButton from "../AppButton/AppButton";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} />;
};

export default SubmitButton;
