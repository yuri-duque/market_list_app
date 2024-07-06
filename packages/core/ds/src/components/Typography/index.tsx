import * as S from "./styles";
import {TypographyProps} from "./types";

export const Typography = ({
  text,
  color,
  size,
  weight,
  align,
}: TypographyProps) => {
  return (
    console.log("TEXT COLOR", color),
    (
      <S.Text color={color} size={size} weight={weight} align={align}>
        {text}
      </S.Text>
    )
  );
};
