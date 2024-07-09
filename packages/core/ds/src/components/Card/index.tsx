import * as S from "./styles";
import {CardProps} from "./types";

export const Card = ({header, children}: CardProps) => {
  return (
    <S.CardStyled>
      {header && <S.CardHeader>{header}</S.CardHeader>}
      <S.CardContent>{children}</S.CardContent>
    </S.CardStyled>
  );
};
