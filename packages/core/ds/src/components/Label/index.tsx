import {Typography} from "../Typography";
import * as S from "./styles";
import {LabelProps} from "./types";

export const Label = ({text, required}: LabelProps) => {
  return (
    <S.LabelContainer>
      <Typography text={text} size="S" color="secondary" />
      {required && (
        <Typography text="*" size="S" color="danger" weight="bold" />
      )}
    </S.LabelContainer>
  );
};
