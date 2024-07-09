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
};

const buttonLinkColors = {
  primary: css`
    background-color: ${({theme}) => theme.colors.white};
    border-color: ${({theme}) => theme.colors.white};
  `,
  secondary: css`
    background-color: ${({theme}) => theme.colors.white};
    border-color: ${({theme}) => theme.colors.white};
  `,
  success: css`
    background-color: ${({theme}) => theme.colors.white};
    border-color: ${({theme}) => theme.colors.white};
  `,
  danger: css`
    background-color: ${({theme}) => theme.colors.white};
    border-color: ${({theme}) => theme.colors.white};
  `,
};

export const textContainedColors: {
  [key in ButtonColors]: keyof AppThemeType["colors"];
} = {
  primary: "white",
  danger: "white",
  secondary: "white",
  success: "white",
};

export const textOutlinedColors: {
  [key in ButtonColors]: keyof AppThemeType["colors"];
} = {
  primary: "primary",
  danger: "danger",
  secondary: "secondary",
  success: "success",
};
