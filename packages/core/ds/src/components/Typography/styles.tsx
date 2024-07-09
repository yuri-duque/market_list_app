import styled from "styled-components/native";
import {AppThemeType} from "../../theme/types";
import {TypographyProps} from "./types";

type TextProps = Omit<TypographyProps, "text">;

const getFontFamily = (
  theme: AppThemeType,
  family?: keyof AppThemeType["fontFamily"],
  italic?: boolean,
) => {
  let font = family ? theme.fontFamily[family] : theme.fontFamily.roboto;

  if (italic) {
    font = `${font}Italic`;
  }
  return font;
};

export const Text = styled.Text<TextProps>`
  color: ${({theme, color}) =>
    color ? theme.colors[color] : theme.colors.dark};

  font-family: ${({theme, family, italic}) =>
    getFontFamily(theme, family, italic)};

  font-size: ${({theme, size}) =>
    size ? theme.fontSizes[size] : theme.fontSizes.M}px;

  font-weight: ${({theme, weight}) =>
    weight ? theme.fontWeight[weight] : theme.fontWeight.medium};

  text-align: ${({align}) => align ?? "left"};
`;
