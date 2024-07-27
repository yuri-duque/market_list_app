import {Button, Icon} from "@core/ds";
import {useMarketStack} from "../../../routes";
import * as S from "./styles";

export type ProductListActionsProps = {
  listId: string;
  onFinishList: () => void;
};

export const ProductListActions = ({
  listId,
  onFinishList,
}: ProductListActionsProps) => {
  const navigation = useMarketStack();

  const goToAddProduct = () => {
    navigation.navigate("AddProduct", {listId});
  };

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
            iconProps={{iconSize: "L"}}
          />
        </S.ButtonFinishList>

        <S.ButtonAddProduct onPress={goToAddProduct}>
          <Icon name="plus" iconSize="XL" color="white" />
        </S.ButtonAddProduct>
      </S.ButtonsContainer>
    </>
  );
};
