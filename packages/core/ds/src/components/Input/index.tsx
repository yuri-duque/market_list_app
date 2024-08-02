import {useState} from "react";
import {KeyboardTypeOptions, View} from "react-native";
import {maskValue} from "../../utils";
import {Icon} from "../Icon";
import {Label} from "../Label";
import {Typography} from "../Typography";
import {InputContainer, getPlaceholderTextColor} from "./InputContainer/styles";
import {InputSize} from "./InputSize/styles";
import * as S from "./styles";
import {InputProps} from "./types";

export const Input = ({
  value,
  onChangeText,
  variation,
  size,
  disabled,
  label,
  required,
  error,
  type,
  mask,
  onTouchStart,
  iconProps,
  returnKeyType,
  onSubmitEditing,
}: InputProps) => {
  const [hideText, setHideText] = useState(type === "password");

  const onChange = (newValue: string) => {
    if (mask) {
      newValue = maskValue(newValue, mask);
    }
    onChangeText(newValue);
  };

  return (
    <View>
      <InputContainer variation={variation} disabled={disabled}>
        <InputSize size={size}>
          <S.InputContent>
            <S.InputLabel>
              {value && label && (
                <Label text={label} required={required} size="S" />
              )}

              <S.Input
                value={value}
                onChangeText={onChange}
                placeholder={label}
                secureTextEntry={hideText}
                keyboardType={type as KeyboardTypeOptions}
                returnKeyType={returnKeyType}
                onSubmitEditing={onSubmitEditing}
                placeholderTextColor={getPlaceholderTextColor(variation)}
                readOnly={disabled}
                onTouchStart={onTouchStart}
              />
            </S.InputLabel>

            {type === "password" && (
              <Icon
                name={hideText ? "eye-off" : "eye"}
                iconSize={"L"}
                onPress={() => setHideText(!hideText)}
              />
            )}

            {iconProps && <Icon {...iconProps} />}
          </S.InputContent>
        </InputSize>
      </InputContainer>

      {error && (
        <S.ErrorContainer>
          <Typography text={error} size="S" color="danger" />
        </S.ErrorContainer>
      )}
    </View>
  );
};
