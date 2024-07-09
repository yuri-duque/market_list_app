import {css} from "styled-components/native";
import {AppThemeType} from "../../../theme/types";
import {ButtonColors} from "../types";

export const buttonOutilinedColors = {
  primary: css`
    background-color: ${({theme}) => theme.colors.white};
    border-color: ${({theme}) => theme.colors.primary};
  `,
  secondary: css`
    background-color: ${({theme}) => theme.colors.white};
    border-color: ${({theme}) => theme.colors.light};
  `,
  success: css`
    background-color: ${({theme}) => theme.colors.white};
    border-color: ${({theme}) => theme.colors.success};
  `,
  danger: css`
    background-color: ${({theme}) => theme.colors.white};
    border-color: ${({theme}) => theme.colors.danger};
  `,
  warning: css`
    background-color: ${({theme}) => theme.colors.white};
    border-color: ${({theme}) => theme.colors.warning};
  `,
  info: css`
    background-color: ${({theme}) => theme.colors.white};
    border-color: ${({theme}) => theme.colors.info};
  `,
  light: css`
    background-color: ${({theme}) => theme.colors.white};
    border-color: ${({theme}) => theme.colors.light};
  `,
  dark: css`
    background-color: ${({theme}) => theme.colors.white};
    border-color: ${({theme}) => theme.colors.dark};
  `,
  white: css`
    background-color: ${({theme}) => theme.colors.white};
    border-color: ${({theme}) => theme.colors.white};
  `,
  background: css``,
};

export const buttonContainedColors = {
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
  background: css``,
};

export const textContainedColors: {
  [key in ButtonColors]: keyof AppThemeType["colors"];
} = {
  primary: "white",
  danger: "white",
  secondary: "white",
  success: "white",
  warning: "white",
  info: "white",
  light: "dark",
  dark: "white",
  white: "dark",
  background: "dark",
};

export const textOutlinedColors: {
  [key in ButtonColors]: keyof AppThemeType["colors"];
} = {
  primary: "primary",
  danger: "danger",
  secondary: "secondary",
  success: "success",
  warning: "warning",
  info: "info",
  light: "light",
  dark: "dark",
  white: "white",
  background: "background",
};
