import * as S from "./styles";
import {TextProps} from "./types";

export const Text = ({
  text,
  color = "text",
  size = "M",
  weight = "normal",
  align = "left",
}: TextProps) => {
  return (
    <S.Text color={color} size={size} weight={weight} align={align}>
      {text}
    </S.Text>
  );
};
