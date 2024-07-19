import {Button} from "../Button";
import {Input} from "../Input";
import * as S from "./styles";

type QuantityInputProps = {
  value: number;
  onChange: (value: number) => void;
  label?: string;
  error?: string;
  negative?: boolean;
};

export const QuantityInput = ({
  value,
  onChange,
  label,
  error,
  negative,
}: QuantityInputProps) => {
  const onIncrement = () => {
    onChange(value + 1);
  };

  const onDecrement = () => {
    const newValue = value - 1;
    if (!negative && newValue <= 0) {
      onChange(0);
      return;
    }
    onChange(newValue);
  };

  const onChangeText = (value: string) => {
    const quantity = Number(value);

    if ((!negative && quantity <= 0) || isNaN(quantity)) {
      onChange(0);
      return;
    }
    onChange(quantity);
  };

  return (
    <S.Container>
      <S.ButtonContainer>
        <Button icon="minus" onPress={onDecrement} iconProps={{size: "L"}} />
      </S.ButtonContainer>
      <S.InputContainer>
        <Input
          label={label}
          value={value.toString()}
          onChangeText={onChangeText}
          error={error}
          type="numeric"
        />
      </S.InputContainer>

      <S.ButtonContainer>
        <Button icon="plus" onPress={onIncrement} iconProps={{size: "L"}} />
      </S.ButtonContainer>
    </S.Container>
  );
};
