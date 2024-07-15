import {Button, Input} from "@core/ds";
import * as S from "./styles";

export type AddProductModalProps = {
  listId: string;
  refreshList: () => void;
};

export const AddProductOnListModal = ({
  listId,
  refreshList,
}: AddProductModalProps) => {
  return (
    <S.Container>
      <S.InputsContainer>
        <Input label="Name" value="" onChangeText={() => {}} />
        <Input
          label="Quantity"
          value=""
          onChangeText={() => {}}
          type="numeric"
        />
      </S.InputsContainer>

      <S.ButtonsContainer>
        <Button text="Add product" onPress={() => {}} />
      </S.ButtonsContainer>
    </S.Container>
  );
};
