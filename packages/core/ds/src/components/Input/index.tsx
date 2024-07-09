import {useState} from "react";
import {KeyboardTypeOptions, View} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {Label} from "../Label";
import {Spacing} from "../Spacing";
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
  type,
  returnKeyType,
  onSubmitEditing,
}: InputProps) => {
  const [hideText, setHideText] = useState(type === "password");

  return (
    <View>
      {label && (
        <S.LabelContainer>
          <Label text={label} required={required} />
          <Spacing size="XXXS" />
        </S.LabelContainer>
      )}

      <InputContainer variation={variation} disabled={disabled}>
        <InputSize size={size}>
          <S.Input
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={hideText}
            keyboardType={type as KeyboardTypeOptions}
            returnKeyType={returnKeyType}
            onSubmitEditing={onSubmitEditing}
            placeholderTextColor={getPlaceholderTextColor(variation)}
          />
          <MaterialIcon
            name={"chevron-left"}
            size={20}
            onPress={() => setHideText(!hideText)}
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
