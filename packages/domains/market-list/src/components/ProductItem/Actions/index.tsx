import {TouchableOpacity} from "react-native";
import * as S from "./styles";
import { Product } from "../../../types";

type ProductItemActionsProps = {
  product: Product;
  onDeleteProduct: () => void;
};

export const ProductItemActions = ({
  product,
  onDeleteProduct,
}: ProductItemActionsProps) => {
  return (
    <S.ActionsContainer>
      <TouchableOpacity onPress={onDeleteProduct}>
        <S.TrashIcon name="trash-can-outline" size="M" color="secondary" />
      </TouchableOpacity>
    </S.ActionsContainer>
  );
};
