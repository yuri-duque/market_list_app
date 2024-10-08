import Toast from "react-native-toast-message";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Button, FormPage, Input, Spacing, useLoading} from "@core/ds";
import {useAuthStack} from "../../routes";
import {UserService} from "../../services/userService";
import {User} from "../../types/user";
import * as S from "./styles";
import {SignupFormValues} from "./types";

export const SignupScreen = () => {
  const userService = new UserService();
  const navigation = useAuthStack();
  const loading = useLoading();

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

  const onSubmit = async (values: SignupFormValues) => {
    loading.setVisible(true);
    try {
      const user = {
        username: values.username.trim(),
        email: values.email.trim(),
        password: values.password.trim(),
      } as User;

      await userService.save(user);
      Toast.show({type: "success", text1: "User created"});
      navigation.navigate("Signin");
    } catch (error: any) {
      Toast.show({type: "error", text1: "Error to create user."});
    } finally {
      loading.setVisible(false);
    }
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
        rounded={false}
      />
    );
  };

  return (
    <FormPage noSafeArea footer={<Footer />}>
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
            type="password"
          />
          <Input
            value={values.confirmPassword}
            error={errors.confirmPassword}
            onChangeText={value =>
              setFieldValue(fildNames.confirmPassword, value)
            }
            label="Configm password"
            type="password"
          />
          <Spacing size="XXL" />
        </S.InputsContainer>
      </S.Container>
    </FormPage>
  );
};
