import {Icon, useLoading} from "@core/ds";
import {ProductListService} from "../../../services";
import {ProductItemProps} from "../types";
import * as S from "./styles";

export const ProductItemAddButton = ({
  listId,
  product,
  refreshList,
}: ProductItemProps) => {
  const loading = useLoading();
  const productListService = new ProductListService(listId);

  const onChangeProductStatus = async () => {
    loading.setVisible(true);

    await productListService.update({
      ...product,
      addedAtCart: !product.addedAtCart,
    });
    refreshList();

    loading.setVisible(false);
  };

  return (
    <S.IconContainer
      added={product.addedAtCart}
      onPress={onChangeProductStatus}>
      <Icon
        name={product.addedAtCart ? "cart-arrow-up" : "cart-arrow-down"}
        size={"XL"}
        color={product.addedAtCart ? "white" : "secondary"}
      />
    </S.IconContainer>
  );
};
