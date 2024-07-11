import {useEffect} from "react";
import {ToastAndroid} from "react-native";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Button, FormPage, Input, Spacing, useLoading} from "@core/ds";
import {createUser} from "@core/integration";
import firestore from "@react-native-firebase/firestore";
import {useAuthStack} from "../../routes";
import * as S from "./styles";
import {SignupFormValues} from "./types";

export const SignupScreen = () => {
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
      console.log("CREATE", {values});
      const user = await createUser(values.email, values.password);
      console.log("SUCCESS", user);
      // navigation.navigate("Signin");
    } catch (error: any) {
      console.log("ERROR", error);
      ToastAndroid.show(error.message, 1000);
    }
    loading.setVisible(false);
  };

  const getUsers = async () => {
    try {
      const users = await firestore().collection("users").get();
      const data = users.docs.map(doc => doc.data());
      console.log("users", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

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
    </FormPage>
  );
};
