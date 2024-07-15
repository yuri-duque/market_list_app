import * as S from "./styles";
import {CardProps} from "./types";

export const Card = ({
  header,
  children,
  backgroundColor,
  radius,
  flex,
}: CardProps) => {
  return (
    <S.CardStyled backgroundColor={backgroundColor} radius={radius} flex={flex}>
      {header && <S.CardHeader>{header}</S.CardHeader>}
      <S.CardContent>{children}</S.CardContent>
    </S.CardStyled>
  );
};
