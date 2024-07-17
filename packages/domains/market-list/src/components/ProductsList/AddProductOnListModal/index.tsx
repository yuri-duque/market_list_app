import {useEffect, useState} from "react";
import {Keyboard} from "react-native";
import Toast from "react-native-toast-message";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Button, Input, InputSearch, useLoading} from "@core/ds";
import {BaseProductService, ProductListService} from "../../../services";
import {BaseProduct, Product, ProductHistory} from "../../../types";
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
  const baseProductService = new BaseProductService();

  const [baseProducts, setBaseProducts] = useState<BaseProduct[]>([]);
  const [filteredBaseProducts, setFilteredBaseProducts] = useState<
    BaseProduct[]
  >([]);
  const [baseProductSelected, setBaseProductSelected] = useState<
    BaseProduct | undefined
  >();

  useEffect(() => {
    getBaseProducts();
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

  const onSearchBaseProducts = (value: string) => {
    if (value) {
      const filtered = baseProducts.filter(product =>
        product.name.toLowerCase().includes(value.toLowerCase()),
      );

      setFilteredBaseProducts(filtered);
    } else {
      setFilteredBaseProducts([]);
    }
  };

  const onSelectBaseProduct = (product: BaseProduct) => {
    setFilteredBaseProducts([]);
    setFieldValue(fieldName.name, product.name);
    setBaseProductSelected(product);
  };

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
      let product: Product;

      if (baseProductSelected) {
        product = {
          ...baseProductSelected,
          id: undefined,
          baseProductId: baseProductSelected.id,
        };
      } else {
        product = {
          name: values.name,
        };
      }
      product.quantity = Number(values.quantity);
      product.addedAtCart = false;

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
        <InputSearch
          value={values.name}
          onChange={value => setFieldValue(fieldName.name, value)}
          data={filteredBaseProducts}
          dataKey="name"
          onSearch={onSearchBaseProducts}
          onItemClick={onSelectBaseProduct}
          maxHeight={250}
          inputProps={{label: "name"}}
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
