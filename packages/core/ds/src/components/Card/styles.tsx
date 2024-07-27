import styled from "styled-components/native";
import {CardProps} from "./types";

export const CardStyled = styled.View<{
  radius?: CardProps["radius"];
  backgroundColor?: CardProps["backgroundColor"];
  flex?: CardProps["flex"];
  margin?: CardProps["margin"];
  padding?: CardProps["margin"];
}>`
  flex: ${({flex}) => (flex ? 1 : "none")};

  background-color: ${({theme, backgroundColor}) =>
    backgroundColor ? theme.colors[backgroundColor] : theme.colors.white};
  border-radius: ${({radius, theme}) =>
    radius ? theme.sizeVariations[radius] : theme.sizeVariations.S}px;
  shadow-color: ${prop => prop.theme.colors.dark};

  margin: 0
    ${({margin, theme}) => (margin ? theme.sizeVariations[margin] : 8)}px;

  padding: ${({padding, theme}) =>
    padding ? theme.sizeVariations[padding] : 0}px;

  elevation: 4;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.15;
  shadow-radius: 2px;
`;

export const CardHeader = styled.View`
  margin-bottom: 16px;
`;

export const CardContent = styled.View`
  flex: auto;
`;
