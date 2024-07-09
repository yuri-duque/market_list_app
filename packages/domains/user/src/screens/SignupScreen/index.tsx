import {ScrollView, View} from "react-native";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Button, Input, Page, Spacing, ThemeProvider} from "@core/ds";
import {useAuthStack} from "../../routes";
import * as S from "./styles";
import {SignupFormValues} from "./types";

export const SignupScreen = () => {
  const navigation = useAuthStack();

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

  const {values, errors, handleChange, handleSubmit} = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <ThemeProvider>
      <Page>
        <ScrollView>
          <S.Container>
            <S.InputContainer>
              <Spacing size="M" />
              <Input
                value={values.username}
                error={errors.username}
                onChangeText={() => handleChange("username")}
                placeholder=""
                label="Username"
              />
              <Input
                value={values.email}
                error={errors.email}
                onChangeText={() => handleChange("email")}
                label="Email"
              />
              <Input
                value={values.password}
                error={errors.password}
                onChangeText={() => handleChange("password")}
                label="Password"
                secureTextEntry
              />
              <Input
                value={values.confirmPassword}
                error={errors.confirmPassword}
                onChangeText={() => handleChange("confirmPassword")}
                label="Password"
                secureTextEntry
              />
              <Spacing size="XXL" />
            </S.InputContainer>
            <View>
              <Button
                text="Register"
                onPress={handleSubmit}
                textProps={{weight: "semiBold"}}
              />
            </View>
          </S.Container>
        </ScrollView>
      </Page>
    </ThemeProvider>
  );
};
