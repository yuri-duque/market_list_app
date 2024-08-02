import Toast from "react-native-toast-message";
import {Card, useLoading} from "@core/ds";
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
  const productListService = new ProductListService(listId);

  const onDeleteProduct = async () => {
    loading.setVisible(true);
    try {
      await productListService.delete(product.id as string);
      refreshList();
    } catch (error: any) {
      Toast.show({type: "error", text1: "Error to delete product."});
    }
    loading.setVisible(false);
  };

  return (
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
  );
};
