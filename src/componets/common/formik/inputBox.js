import { ErrorMessage, Field, useField } from "formik";
import { Label, Input } from "reactstrap";

const InputBox = (props) => {
  const { name, label, ...rest } = props;
  console.log("name");
  console.log(name);
  const abc = useField(name);

  return (
    <div>
      <Label component="legend">{label}</Label>
      {/* <Field {...field} {...rest} as={Input} /> */}
      {/* <ErrorMessage name={name} /> */}
    </div>
  );
};

export default InputBox;
