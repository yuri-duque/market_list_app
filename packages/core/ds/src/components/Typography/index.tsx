import * as S from "./styles";
import {TypographyProps} from "./types";

export const Typography = ({
  text,
  color,
  size,
  weight,
  align,
  family,
  italic,
  decotarion,
}: TypographyProps) => {
  return (
    <S.Text
      color={color}
      size={size}
      weight={weight}
      align={align}
      family={family}
      italic={italic}
      decotarion={decotarion}>
      {text}
    </S.Text>
  );
};
