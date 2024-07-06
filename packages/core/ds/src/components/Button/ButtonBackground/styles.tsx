import styled, {css} from "styled-components/native";
import {ThemeType} from "../../../theme/types";
import {ButtonProps, ButtonVariations} from "../types";

const buttonVariations = {
  primary: css`
    background-color: ${({theme}) => theme.colors.primary};
    border-color: ${({theme}) => theme.colors.primary};
  `,
  secondary: css`
    background-color: ${({theme}) => theme.colors.secondary};
    border-color: ${({theme}) => theme.colors.secondary};
  `,
  success: css`
    background-color: ${({theme}) => theme.colors.success};
    border-color: ${({theme}) => theme.colors.success};
  `,
  danger: css`
    background-color: ${({theme}) => theme.colors.danger};
    border-color: ${({theme}) => theme.colors.danger};
  `,
  warning: css`
    background-color: ${({theme}) => theme.colors.warning};
    border-color: ${({theme}) => theme.colors.warning};
  `,
  info: css`
    background-color: ${({theme}) => theme.colors.info};
    border-color: ${({theme}) => theme.colors.info};
  `,
  light: css`
    background-color: ${({theme}) => theme.colors.light};
    border-color: ${({theme}) => theme.colors.light};
  `,
  dark: css`
    background-color: ${({theme}) => theme.colors.dark};
    border-color: ${({theme}) => theme.colors.dark};
  `,
  white: css`
    background-color: ${({theme}) => theme.colors.white};
    border-color: ${({theme}) => theme.colors.white};
  `,
};

export const getTextColor = (variation?: ButtonVariations) => {
  const variationTexts: {[key in ButtonVariations]: keyof ThemeType["colors"]} =
    {
      primary: "white",
      danger: "white",
      secondary: "white",
      success: "white",
      warning: "white",
      info: "white",
      light: "dark",
      dark: "white",
      white: "dark",
    };

  return variationTexts[variation ?? "primary"];
};

export const ButtonBackground = styled.TouchableOpacity<{
  variation: ButtonProps["variation"];
}>`
  border-radius: 8px;
  border: 1px solid;
  elevation: 3;
  opacity: ${prop => (prop.disabled ? 0.5 : 1)};
  shadow-color: ${prop => prop.theme.colors.dark};
  shadow-offset: 2px 2px;
  shadow-opacity: 1;
  shadow-radius: 4px;
  ${({variation}) => buttonVariations[variation ?? "primary"]};
`;
