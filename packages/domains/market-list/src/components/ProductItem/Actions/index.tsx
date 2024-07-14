import {TouchableOpacity} from "react-native";
import * as S from "./styles";
import {ProductItemActionsProps} from "./types";

export const ProductItemActions = ({product}: ProductItemActionsProps) => {
  return (
    <S.ActionsContainer>
      {!product.addedAtCart && (
        <TouchableOpacity onPress={() => {}}>
          <S.TrashIcon name="trash-can-outline" size="M" color="secondary" />
        </TouchableOpacity>
      )}
    </S.ActionsContainer>
  );
};
