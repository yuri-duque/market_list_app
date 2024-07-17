import {DivisorStyled} from "./styles";

export const Divisor = ({size, color}: {size?: number; color?: string}) => (
  <DivisorStyled color={color} size={size} testID="divisor" />
);
