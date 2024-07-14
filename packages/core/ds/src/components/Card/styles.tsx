import styled from "styled-components/native";
import {CardProps} from "./types";

export const CardStyled = styled.View<{
  radius?: CardProps["radius"];
  backgroundColor?: CardProps["backgroundColor"];
}>`
  background-color: ${({theme, backgroundColor}) =>
    backgroundColor ? theme.colors[backgroundColor] : theme.colors.white};
  border-radius: ${({radius, theme}) =>
    radius ? theme.sizeVariations[radius] : theme.sizeVariations.S}px;
  shadow-color: ${prop => prop.theme.colors.dark};

  elevation: 4;
  shadow-offset: 2px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
`;

export const CardHeader = styled.View`
  margin-bottom: 16px;
`;

export const CardContent = styled.View`
  flex: auto;
`;
