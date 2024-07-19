import {Keyboard} from "react-native";
import Toast from "react-native-toast-message";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Button, Input, QuantityInput, useLoading} from "@core/ds";
import {ProductListService} from "../../../services";
import {Product} from "../../../types";
import * as S from "./styles";

type AddProductModalProps = {
  listId: string;
  product: Product;
  onCloseModal: () => void;
};

export const AddProductOnCartModal = ({
  listId,
  product,
  onCloseModal,
}: AddProductModalProps) => {
  const loading = useLoading();
  const productListService = new ProductListService(listId);

  const fieldName = {
    price: "price",
    quantity: "quantity",
  };

  const initialValues = {
    price: product.price?.toString() || "",
    quantity: product.quantity || 0,
  };

  const validationSchema = Yup.object().shape({
    price: Yup.string().required("Price is required"),
    quantity: Yup.number().integer().required("Quantity is required"),
  });

  const onSubmit = async () => {
    Keyboard.dismiss();
    loading.setVisible(true);
    try {
      const newPrice = values.price.replace(/\D/g, "");

      const newProduct: Product = {
        ...product,
        price: Number(newPrice) / 100,
        quantity: Number(values.quantity),
        addedAtCart: true,
      };

      await productListService.update(newProduct);

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
          label="Price"
          value={values.price}
          error={errors.price}
          onChangeText={value => setFieldValue(fieldName.price, value)}
          type="numeric"
          mask="currency"
        />
        <QuantityInput
          label="Quantity"
          value={values.quantity}
          error={errors.quantity}
          onChange={value => setFieldValue(fieldName.quantity, value)}
          negative={false}
        />
      </S.InputsContainer>

      <Button
        text="Put on cart"
        onPress={handleSubmit}
        color="success"
        icon="cart"
      />
    </S.Container>
  );
};
