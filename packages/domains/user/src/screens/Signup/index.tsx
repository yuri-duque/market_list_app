import {useFormik} from "formik";
import * as Yup from "yup";
import {Button, Input, Page, Spacing} from "@core/ds";
import {useAuthStack} from "../../routes";
import * as S from "./styles";
import {SignupFormValues} from "./types";

export const SignupScreen = () => {
  const navigation = useAuthStack();

  const fildNames = {
    username: "username",
    email: "email",
    password: "password",
    confirmPassword: "confirmPassword",
  };

  const initialValues: SignupFormValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Username is required"),

    email: Yup.string().email("Invalid email").required("Email is required"),

    password: Yup.string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const onSubmit = (values: SignupFormValues) => {
    console.log(values);
    navigation.navigate("Signin");
  };

  const {values, errors, setFieldValue, handleSubmit} = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    validateOnChange: false,
  });

  const Footer = () => {
    return (
      <Button
        text="Register"
        onPress={handleSubmit}
        textProps={{weight: "semiBold"}}
        size="L"
      />
    );
  };

  return (
    <Page noSafeArea footer={<Footer />}>
      <S.Container>
        <S.InputsContainer>
          <Input
            value={values.username}
            error={errors.username}
            onChangeText={value => setFieldValue(fildNames.username, value)}
            label="Username"
          />
          <Input
            value={values.email}
            error={errors.email}
            onChangeText={value => setFieldValue(fildNames.email, value)}
            label="Email"
          />
          <Input
            value={values.password}
            error={errors.password}
            onChangeText={value => setFieldValue(fildNames.password, value)}
            label="Password"
          />
          <Input
            value={values.confirmPassword}
            error={errors.confirmPassword}
            onChangeText={value =>
              setFieldValue(fildNames.confirmPassword, value)
            }
            label="Configm password"
          />
          <Spacing size="XXL" />
        </S.InputsContainer>
      </S.Container>
    </Page>
  );
};
