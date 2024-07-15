import {Icon} from "../Icon";
import {Typography} from "../Typography";
import {ButtonContainer, getTextColor} from "./ButtonContainer/styles";
import {ButtonSize} from "./ButtonSize/styles";
import * as S from "./styles";
import {ButtonProps} from "./types";

export const Button = ({
  text,
  textProps,
  onPress,
  color,
  variation,
  size,
  disabled,
  rounded = true,
  icon,
  iconProps,
}: ButtonProps) => {
  return (
    <ButtonSize size={size}>
      <ButtonContainer
        onPress={onPress}
        color={color}
        variation={variation}
        disabled={disabled}
        rounded={rounded}>
        {icon && (
          <S.ButtonContainer>
            <Icon
              {...iconProps}
              name={icon}
              color={getTextColor(color, variation)}
            />
          </S.ButtonContainer>
        )}
        <Typography
          {...textProps}
          text={text}
          color={getTextColor(color, variation)}
        />
      </ButtonContainer>
    </ButtonSize>
  );
};
