import {useEffect, useState} from "react";
import Toast from "react-native-toast-message";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Button, Input, QuantityInput, useLoading} from "@core/ds";
import {maskValue} from "@core/ds/src/utils";
import {ProductListService} from "../../services";
import {Product} from "../../types";
import {BaseProductSelect} from "./BaseProductSelect";
import * as S from "./styles";

export enum ProductFormFields {
  name = "name",
  price = "price",
  quantity = "quantity",
}

type ProductFormProps = {
  listId: string;
  formType: "save" | "addToCart" | "edit";
  product?: Product;
  onSubmit?: () => void;
};

export const ProductForm = ({
  listId,
  formType,
  product,
  onSubmit,
}: ProductFormProps) => {
  const loading = useLoading();
  const productListService = new ProductListService(listId);

  const [newProduct, setNewProduct] = useState<Product | undefined>(product);

  useEffect(() => {
    setProductPrice();
  }, [newProduct]);

  useEffect(() => {
    if(product){
      setNewProduct(product);
      setValues({
        name: product.name,
        price: maskValue((product?.price || 0).toString(), "currency"),
        quantity: product.quantity || 1,
      });
    }
  }, [product]);

  const setProductPrice = () => {
    if (newProduct) {
      const price = (newProduct.price || newProduct.basePrice || 0) * 100;

      setValues({
        name: newProduct.name,
        price: maskValue((price || 0).toString(), "currency"),
        quantity: newProduct.quantity || 1,
      });
    } else {
      setValues({
        name: values.name,
        price: maskValue((0).toString(), "currency"),
        quantity: values.quantity,
      });
    }
  };

  const initialValues = {
    name: "",
    price: "",
    quantity: 1,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    price: Yup.string().required("Price is required"),
    quantity: Yup.number().integer().required("Quantity is required"),
  });

  const handleSave = async () => {
    loading.setVisible(true);
    try {
      const data: Product = {
        ...newProduct,
        name: values.name,
        price: Number(values.price.replace(/\D/g, "")) / 100,
        quantity: Number(values.quantity),
      };

      if (formType === "addToCart") {
        data.addedToCart = true;
      }

      if (formType === "save") {
        await productListService.save(data);
      } else {
        await productListService.update(data);
      }

      onSubmit?.();
    } catch (error: any) {
      Toast.show({type: "", text1: "Error to add product."});
    }
    loading.setVisible(false);
  };

  const {values, errors, setFieldValue, handleSubmit, setValues} = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSave,
  });

  return (
    <S.Container>
      <S.InputsContainer>
        {["save", "edit"].includes(formType) && (
          <BaseProductSelect
            value={values.name}
            onChange={value => setFieldValue(ProductFormFields.name, value)}
            product={newProduct}
            updateProduct={setNewProduct}
          />
        )}
        <Input
          label="Price"
          value={values.price}
          error={errors.price}
          onChangeText={value => setFieldValue(ProductFormFields.price, value)}
          type="numeric"
          mask="currency"
        />
        <QuantityInput
          label="Quantity"
          value={values.quantity}
          error={errors.quantity}
          onChange={value => setFieldValue(ProductFormFields.quantity, value)}
          negative={false}
        />
      </S.InputsContainer>

      <Button
        text="Add product"
        onPress={handleSubmit}
        textProps={{weight: "bold"}}
      />
    </S.Container>
  );
};
