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
  }, [product]);

  useEffect(() => {
    if (product) {
      setNewProduct(product);
      setValues({
        name: product.name,
        price: maskValue((product?.price || 0).toString(), "currency"),
        quantity: product.quantity || 1,
      });
    }
  }, [product]);

  const handleButtonText = () => {
    switch (formType) {
      case "addToCart":
        return "Add to cart";
      case "save":
        return "Save product";
      case "edit":
        return "Edit product";
    }
  };

  const setProductPrice = () => {
    if (product) {
      const price = product.price || product.basePrice || 0;

      setValues({
        name: product.name,
        price: (price || 0).toString(),
        quantity: product.quantity || 1,
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
      const price =
        typeof values.price === "string"
          ? Number(values.price.replace(/R\$|\.| /g, "").replace(",", "."))
          : Number(values.price);

      const data: Product = {
        ...newProduct,
        name: values.name,
        price: price,
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
    } finally {
      loading.setVisible(false);
    }
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
        text={handleButtonText()}
        onPress={handleSubmit}
        textProps={{weight: "bold"}}
      />
    </S.Container>
  );
};
