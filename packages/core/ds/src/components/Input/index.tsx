import {View} from "react-native";
import {Label} from "../Label";
import {Typography} from "../Typography";
import {InputContainer, getPlaceholderTextColor} from "./InputContainer/styles";
import {InputSize} from "./InputSize/styles";
import * as S from "./styles";
import {InputProps} from "./types";

export const Input = ({
  value,
  onChangeText,
  placeholder,
  variation,
  size,
  disabled,
  label,
  required,
  error,
  secureTextEntry,
  keyboardType,
  returnKeyType,
  onSubmitEditing,
}: InputProps) => {
  return (
    <View>
      {label && (
        <S.LabelContainer>
          <Label text="test" required={required} />
        </S.LabelContainer>
      )}

      <InputContainer variation={variation} disabled={disabled}>
        <InputSize size={size}>
          <S.Input
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            onSubmitEditing={onSubmitEditing}
            placeholderTextColor={getPlaceholderTextColor(variation)}
          />
        </InputSize>
      </InputContainer>

      {error && (
        <S.ErrorContainer>
          <Typography text={error} size="XS" color="danger" />
        </S.ErrorContainer>
      )}
    </View>
  );
};
