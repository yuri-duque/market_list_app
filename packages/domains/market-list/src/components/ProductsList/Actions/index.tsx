import {Button, Icon} from "@core/ds";
import * as S from "./styles";

export type ProductListActionsProps = {
  onOpenModal: () => void;
  onFinishList: () => void;
};

export const ProductListActions = ({
  onOpenModal,
  onFinishList,
}: ProductListActionsProps) => {
  return (
    <>
      <S.ButtonsContainer>
        <S.ButtonFinishList>
          <Button
            text="Finish"
            onPress={onFinishList}
            color="success"
            icon="check-bold"
            textProps={{size: "L"}}
            iconProps={{size: "L"}}
          />
        </S.ButtonFinishList>

        <S.ButtonAddProduct onPress={onOpenModal}>
          <Icon name="plus" size="XL" color="white" />
        </S.ButtonAddProduct>
      </S.ButtonsContainer>
    </>
  );
};
