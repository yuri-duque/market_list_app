import {TouchableOpacity} from "react-native";
import Toast from "react-native-toast-message";
import {Card, useLoading} from "@core/ds";
import {useListContext} from "../../context";
import {useMarketStack} from "../../routes";
import {ProductListService} from "../../services";
import {Product} from "../../types";
import {ProductItemActions} from "./Actions";
import {ProductItemAddButton} from "./AddButton";
import {ProductItemDetails} from "./Details";
import * as S from "./styles";

type ProductItemProps = {
  product: Product;
};

export const ProductItem = ({product}: ProductItemProps) => {
  const loading = useLoading();
  const navigate = useMarketStack();
  const {listId, getProducts} = useListContext();

  const onDeleteProduct = async () => {
    const productListService = new ProductListService(listId);

    loading.setVisible(true);
    try {
      await productListService.delete(product.id as string);
      getProducts();
    } catch (error: any) {
      Toast.show({type: "error", text1: "Error to delete product."});
    } finally {
      loading.setVisible(false);
    }
  };

  const goToEditProduct = () => {
    navigate.navigate("EditProduct", {
      listId,
      productId: product.id,
    });
  };

  return (
    <TouchableOpacity onPress={goToEditProduct}>
      <Card>
        <S.CardContent>
          <ProductItemAddButton product={product} />
          <ProductItemDetails product={product} />
          <ProductItemActions onDeleteProduct={onDeleteProduct} />
        </S.CardContent>
      </Card>
    </TouchableOpacity>
  );
};
