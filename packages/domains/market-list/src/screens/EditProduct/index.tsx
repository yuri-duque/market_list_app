import {useEffect, useState} from "react";
import {Page, useLoading} from "@core/ds";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {ProductForm} from "../../components";
import {MarketStackParamList} from "../../routes";
import {ProductListService} from "../../services";
import {Product} from "../../types";

interface Props
  extends NativeStackScreenProps<MarketStackParamList, "EditProduct"> {}

export const EditProductScreen = ({route, navigation}: Props) => {
  const loading = useLoading();
  const {listId, productId} = route.params;
  const productService = new ProductListService(listId);

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    getProduct();
  }, [productId]);

  const getProduct = async () => {
    if (productId) {
      loading.setVisible(true);
      try {
        const product = await productService.getById(productId);
        setProduct(product);
      } finally {
        loading.setVisible(false);
      }
    }
  };

  const onSubmit = () => {
    navigation.navigate("List");
  };

  return (
    <Page hasHeader>
      <ProductForm
        listId={listId}
        formType={"edit"}
        onSubmit={onSubmit}
        product={product}
      />
    </Page>
  );
};
