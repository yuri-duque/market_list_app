import {Typography} from "../Typography";
import {ButtonContainer, getTextColor} from "./ButtonContainer/styles";
import {ButtonSize} from "./ButtonSize/styles";
import {ButtonProps} from "./types";

export const Button = ({
  text,
  textProps,
  onPress,
  color,
  variation,
  size,
  disabled,
}: ButtonProps) => {
  return (
    <ButtonContainer
      onPress={onPress}
      color={color}
      variation={variation}
      disabled={disabled}>
      <ButtonSize size={size}>
        <Typography
          {...textProps}
          text={text}
          color={getTextColor(color, variation)}
        />
      </ButtonSize>
    </ButtonContainer>
  );
};
