import {useEffect, useState} from "react";
import Toast from "react-native-toast-message";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Button, Input, InputSearch, QuantityInput, useLoading} from "@core/ds";
import {maskValue} from "@core/ds/src/utils";
import {BaseProductService, ProductListService} from "../../services";
import {BaseProduct, Product} from "../../types";
import * as S from "./styles";

export enum ProductFormFields {
  name = "name",
  price = "price",
  quantity = "quantity",
}

type ProductFormProps = {
  listId: string;
  product?: Product;
  onSubmit?: () => void;
  addOnCart?: boolean;
  fields?: ProductFormFields[];
};

export const ProductForm = ({
  listId,
  product,
  onSubmit,
  addOnCart = false,
  fields = [
    ProductFormFields.name,
    ProductFormFields.price,
    ProductFormFields.quantity,
  ],
}: ProductFormProps) => {
  const loading = useLoading();
  const productListService = new ProductListService(listId);
  const baseProductService = new BaseProductService();

  const [baseProducts, setBaseProducts] = useState<BaseProduct[]>([]);
  const [baseProductSelected, setBaseProductSelected] = useState<
    BaseProduct | undefined
  >();

  useEffect(() => {
    getBaseProducts();
    setProductValues(product);
  }, []);

  const getBaseProducts = async () => {
    loading.setVisible(true);
    try {
      const products = await baseProductService.getAll();
      setBaseProducts(products);
    } catch (error: any) {
      Toast.show({type: "", text1: "Error to get products."});
    }
    loading.setVisible(false);
  };

  const setProductValues = (newProduct?: BaseProduct | Product) => {
    if (newProduct) {
      const price = (newProduct.price || newProduct.basePrice || 0) * 100;
      setValues({
        name: newProduct.name,
        price: maskValue((price || 0).toString(), "currency"),
        quantity: newProduct.quantity || 1,
      });
      setBaseProductSelected;
    }
  };

  const onSelectBaseProduct = (selectedProduct: BaseProduct) => {
    setProductValues(selectedProduct);
    setBaseProductSelected(selectedProduct);
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
      let newProduct = product;

      newProduct = {
        ...baseProductSelected,
        ...product,
        id: product ? product.id : undefined,
        baseProductId: product
          ? product.baseProductId
          : baseProductSelected?.id,
        name: values.name,
        addedAtCart: addOnCart ? addOnCart : product?.addedAtCart || false,
      };

      if (!fields.includes(ProductFormFields.name)) {
        newProduct.name = product?.name || "";
      }
      if (fields.includes(ProductFormFields.price)) {
        newProduct.price = Number(values.price.replace(/\D/g, "")) / 100;
      }
      if (fields.includes(ProductFormFields.quantity)) {
        newProduct.quantity = Number(values.quantity);
      }

      if (!product) {
        console.log("SAVE");
        await productListService.save(newProduct);
      } else {
        console.log("UPDATE");
        await productListService.update(newProduct);
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
        {fields.includes(ProductFormFields.name) && (
          <InputSearch
            value={"teste"}
            data={baseProducts}
            onChange={value => setFieldValue(ProductFormFields.name, value)}
            onSelectItem={onSelectBaseProduct}
          />
        )}
        {fields.includes(ProductFormFields.quantity) && (
          <Input
            label="Price"
            value={values.price}
            error={errors.price}
            onChangeText={value =>
              setFieldValue(ProductFormFields.price, value)
            }
            type="numeric"
            mask="currency"
          />
        )}
        {fields.includes(ProductFormFields.price) && (
          <QuantityInput
            label="Quantity"
            value={values.quantity}
            error={errors.quantity}
            onChange={value => setFieldValue(ProductFormFields.quantity, value)}
            negative={false}
          />
        )}
      </S.InputsContainer>

      <Button
        text="Add product"
        onPress={handleSubmit}
        textProps={{weight: "bold"}}
      />
    </S.Container>
  );
};
