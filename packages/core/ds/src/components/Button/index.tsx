import {Typography} from "../Typography";
import {ButtonBackground, getTextColor} from "./ButtonBackground/styles";
import {ButtonContainer} from "./ButtonContainer/styles";
import {ButtonProps} from "./types";

export const Button = ({
  text,
  textProps,
  onPress,
  variation,
  size,
  disabled,
}: ButtonProps) => {
  return (
    <ButtonBackground
      onPress={onPress}
      variation={variation}
      disabled={disabled}>
      <ButtonContainer size={size}>
        <Typography
          {...textProps}
          text={text}
          color={getTextColor(variation)}
        />
      </ButtonContainer>
    </ButtonBackground>
  );
};
