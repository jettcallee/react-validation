import React from "react";
import { Button, FormGroup, Label, Input, Form } from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

//custom Components
import InputBox from "../../componets/common/formik/inputBox";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
    },
  });

  return (
    <div className="login">
      <h2>Sign In</h2>

      <Form onSubmit={formik.handleSubmit} className="form">
        <FormGroup>
          <InputBox
            type="email"
            name="email"
            id="email"
            label="Email"
            placeholder="example@example.com"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="********"
          />
        </FormGroup>
        <Button color="primary">Sign In</Button>
      </Form>
    </div>
  );
};

export default Login;
