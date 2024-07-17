import {styled} from "styled-components/native";

export const DivisorStyled = styled.View<{size?: number; color?: string}>`
  width: 100%;
  height: ${({size}) => size || 2}px;
  background-color: ${({theme, color}) => color || theme.colors.light};
`;
