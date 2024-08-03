import {TouchableOpacity} from "react-native";
import Toast from "react-native-toast-message";
import {Card, useLoading} from "@core/ds";
import {useMarketStack} from "../../routes";
import {ProductListService} from "../../services";
import {ProductItemActions} from "./Actions";
import {ProductItemAddButton} from "./AddButton";
import {ProductItemDetails} from "./Details";
import * as S from "./styles";
import {ProductItemProps} from "./types";

export const ProductItem = ({
  listId,
  product,
  refreshList,
}: ProductItemProps) => {
  const loading = useLoading();
  const navigate = useMarketStack();
  const productListService = new ProductListService(listId);

  const onDeleteProduct = async () => {
    loading.setVisible(true);
    try {
      await productListService.delete(product.id as string);
      refreshList();
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
          <ProductItemAddButton
            listId={listId}
            product={product}
            refreshList={refreshList}
          />

          <ProductItemDetails product={product} />

          <ProductItemActions onDeleteProduct={onDeleteProduct} />
        </S.CardContent>
      </Card>
    </TouchableOpacity>
  );
};
