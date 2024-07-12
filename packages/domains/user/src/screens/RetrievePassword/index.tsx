import Toast from "react-native-toast-message";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Button, Input, Page, useLoading} from "@core/ds";
import {Auth} from "@core/integration";
import {useNavigation} from "@react-navigation/native";
import {useAuthStack} from "../../routes";
import * as S from "./styles";

export const RetrievePassword = () => {
  const auth = new Auth();
  const navigation = useAuthStack();
  const loading = useLoading();

  const fildNames = {
    email: "email",
  };

  const initialValues: {email: string} = {
    email: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const onRetrieve = async () => {
    loading.setVisible(true);
    try {
      await auth.retrievePassword(values.email.trim());
      Toast.show({type: "success", text1: "Retrive code was send"});
      navigation.navigate("Signin");
    } catch (error: any) {
      Toast.show({type: "error", text1: error.message});
    }
    loading.setVisible(false);
  };

  const {values, errors, setFieldValue, handleSubmit} = useFormik({
    initialValues,
    validationSchema,
    onSubmit: onRetrieve,
    validateOnChange: false,
  });

  return (
    <Page>
      <S.Container>
        <S.Content>
          <Input
            value={values.email}
            onChangeText={value => setFieldValue(fildNames.email, value)}
            error={errors.email}
            label="Email"
          />
          <Button
            text="Send code"
            onPress={handleSubmit}
            textProps={{weight: "semiBold"}}
          />
        </S.Content>
      </S.Container>
    </Page>
  );
};
