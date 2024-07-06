import styled from "styled-components/native";
import {TypographyProps} from "./types";

type StyledTextProps = {
  color: TypographyProps["color"];
  size: TypographyProps["size"];
  weight: TypographyProps["weight"];
  align: TypographyProps["align"];
};

export const Text = styled.Text<StyledTextProps>`
  color: ${({theme, color}) =>
    color ? theme.colors[color] : theme.colors.light};

  font-size: ${({theme, size}) =>
    size ? theme.fontSizes[size] : theme.fontSizes.M}px;

  font-weight: ${({theme, weight}) =>
    weight ? theme.fontWeight[weight] : theme.fontWeight.medium};

  text-align: ${({align}) => align ?? "left"};
`;
