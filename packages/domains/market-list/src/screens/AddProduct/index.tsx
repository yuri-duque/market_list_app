import {useEffect, useState} from "react";
import Toast from "react-native-toast-message";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Button, InputSearch, Page, QuantityInput, useLoading} from "@core/ds";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {MarketStackParamList} from "../../routes";
import {BaseProductService, ProductListService} from "../../services";
import {BaseProduct, Product} from "../../types";
import * as S from "./styles";

interface Props
  extends NativeStackScreenProps<MarketStackParamList, "AddProduct"> {}

export const AddProductScreen = ({route, navigation}: Props) => {
  const {listId} = route.params;

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
    quantity: 1,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    quantity: Yup.number().integer().required("Quantity is required"),
  });

  const onSubmit = async () => {
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

      navigation.navigate("List");
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
    <Page>
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
          <QuantityInput
            label="Quantity"
            value={values.quantity}
            error={errors.quantity}
            onChange={value => setFieldValue(fieldName.quantity, value)}
            negative={false}
          />
        </S.InputsContainer>

        <Button
          text="Add product"
          onPress={handleSubmit}
          textProps={{weight: "bold"}}
        />
      </S.Container>
    </Page>
  );
};
