import {useState} from "react";
import {ToastAndroid} from "react-native";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Button, Card, Input, Page, Typography, useLoading} from "@core/ds";
import {useAuthStack} from "../../routes";
import {UserService} from "../../service/userService";
import * as S from "./styles";
import {SigninFormValues} from "./types";

export const SigninScreen = () => {
  const userService = new UserService();
  const navigation = useAuthStack();
  const loading = useLoading();

  const fildNames = {
    email: "email",
    password: "password",
  };

  const initialValues: SigninFormValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum"),
    confirmPassword: Yup.string(),
  });

  const onLogin = async () => {
    loading.setVisible(true);
    try {
      const user = await userService.login(values.email, values.password);
      console.log("SUCESSO", user);
    } catch (error: any) {
      ToastAndroid.show(error.message, 1000);
    }
    loading.setVisible(false);
  };

  const {values, errors, setFieldValue, handleSubmit} = useFormik({
    initialValues,
    validationSchema,
    onSubmit: onLogin,
    validateOnChange: false,
  });

  const goToRegister = () => {
    navigation.navigate("Signup");
  };

  const goToForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <Page>
      <S.Container>
        <Card
          header={
            <Typography
              text="Login"
              weight="bold"
              align="center"
              color="secondary"
              size="L"
            />
          }>
          <S.InputsGroup>
            <Input
              value={values.email}
              onChangeText={value => setFieldValue(fildNames.email, value)}
              error={errors.email}
              label="Email"
            />
            <Input
              value={values.password}
              onChangeText={value => setFieldValue(fildNames.password, value)}
              error={errors.password}
              label="Password"
              type="password"
            />
          </S.InputsGroup>

          <S.ForgotPasswordContainer onPress={goToForgotPassword}>
            <Typography
              text="forgot password"
              align="right"
              size="S"
              color="primary"
            />
          </S.ForgotPasswordContainer>

          <S.ButtonsContainer>
            <S.ButtonContainer>
              <Button
                text="Register"
                onPress={goToRegister}
                color="primary"
                variation="outlined"
                textProps={{weight: "semiBold", size: "M"}}
              />
            </S.ButtonContainer>
            <S.ButtonContainer>
              <Button
                text="Login"
                onPress={handleSubmit}
                textProps={{weight: "semiBold"}}
              />
            </S.ButtonContainer>
          </S.ButtonsContainer>
        </Card>
      </S.Container>
    </Page>
  );
};
