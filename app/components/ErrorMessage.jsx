import AppText from "./AppText";

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;

  return <AppText title={error} style={{ color: "red" }} />;
};

export default ErrorMessage;
