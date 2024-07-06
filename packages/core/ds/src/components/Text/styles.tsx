import styled from "styled-components/native";

import {TextProps} from "./types";

type StyledTextProps = Pick<TextProps, "color" | "size" | "weight" | "align">;

export const Text = styled.Text<StyledTextProps>`
  color: ${({theme, color}) =>
    color ? theme.colors[color] : theme.colors.textDark};

  font-size: ${({theme, size}) =>
    size ? theme.fontSizes[size] : theme.fontSizes.M}px;

  font-weight: ${({theme, weight}) =>
    weight ? theme.fontWeight[weight] : theme.fontWeight.medium};

  text-align: ${({align}) => align ?? "left"};
`;
