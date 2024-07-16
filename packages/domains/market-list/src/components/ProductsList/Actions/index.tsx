import {Button, Icon, Modal} from "@core/ds";
import {BottomSheetModalMethods} from "@gorhom/bottom-sheet/lib/typescript/types";
import * as S from "./styles";

export type ProductListActionsProps = {
  listId: string;
  modalRef: React.RefObject<BottomSheetModalMethods>;
  onOpenModal: () => void;
};

export const ProductListActions = ({onOpenModal}: ProductListActionsProps) => {
  return (
    <>
      <S.ButtonsContainer>
        <S.ButtonFinishList>
          <Button
            text="Finish"
            onPress={() => {}}
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
