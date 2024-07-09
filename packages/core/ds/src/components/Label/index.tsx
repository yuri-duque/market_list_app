import {Typography} from "../Typography";
import * as S from "./styles";
import {LabelProps} from "./types";

export const Label = ({text, required, size}: LabelProps) => {
  return (
    <S.LabelContainer>
      <Typography text={text} size={size} color="secondary" />
      {required && (
        <Typography text="*" size={size} color="danger" weight="bold" />
      )}
    </S.LabelContainer>
  );
};
