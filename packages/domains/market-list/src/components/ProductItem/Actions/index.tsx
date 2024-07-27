import {TouchableOpacity} from "react-native";
import {Icon} from "@core/ds";
import * as S from "./styles";

type ProductItemActionsProps = {
  onDeleteProduct: () => void;
};

export const ProductItemActions = ({
  onDeleteProduct,
}: ProductItemActionsProps) => {
  return (
    <S.ActionsContainer>
      <TouchableOpacity onPress={onDeleteProduct}>
        <S.TrashIconContainer>
          <Icon name="trash-can-outline" iconSize="XM" color="secondary" />
        </S.TrashIconContainer>
      </TouchableOpacity>
    </S.ActionsContainer>
  );
};
