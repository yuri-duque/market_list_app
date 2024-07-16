import {Keyboard} from "react-native";
import Toast from "react-native-toast-message";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Button, Input, useLoading} from "@core/ds";
import {ProductListService} from "../../../services";
import {Product} from "../../../types";
import * as S from "./styles";

export type AddProductModalProps = {
  listId: string;
  onCloseModal: () => void;
};

export const AddProductOnListModal = ({
  listId,
  onCloseModal,
}: AddProductModalProps) => {
  const loading = useLoading();
  const productListService = new ProductListService(listId);

  const fieldName = {
    name: "name",
    quantity: "quantity",
  };

  const initialValues = {
    name: "",
    quantity: "1",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    quantity: Yup.number().integer().required("Quantity is required"),
  });

  const onSubmit = async () => {
    Keyboard.dismiss();
    loading.setVisible(true);
    try {
      const product: Product = {
        name: values.name,
        quantity: Number(values.quantity),
        addedAtCart: false,
      };

      await productListService.save(product);
      onCloseModal();
    } catch (error: any) {
      Toast.show({type: "", text1: "Error to add product."});
    }
    loading.setVisible(false);
  };

  const {values, errors, setFieldValue, handleSubmit} = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <S.Container>
      <S.InputsContainer>
        <Input
          label="Name"
          value={values.name}
          error={errors.name}
          onChangeText={value => setFieldValue(fieldName.name, value)}
        />
        <Input
          type="numeric"
          label="Quantity"
          value={values.quantity}
          error={errors.quantity}
          onChangeText={value => setFieldValue(fieldName.quantity, value)}
        />
      </S.InputsContainer>

      <S.ButtonsContainer>
        <Button text="Add product" onPress={handleSubmit} />
      </S.ButtonsContainer>
    </S.Container>
  );
};
