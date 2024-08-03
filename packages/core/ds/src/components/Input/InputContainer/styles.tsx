import styled, {css} from "styled-components/native";
import {AppTheme} from "../../../theme/theme";
import {InputContainerProps, InputVariations} from "./types";

const inputVariations = {
  primary: css`
    border-color: ${({theme}) => theme.colors.light};
    shadow-color: ${prop => prop.theme.colors.dark};
  `,
  danger: css`
    border-color: ${({theme}) => theme.colors.danger};
    shadow-color: ${prop => prop.theme.colors.danger};
  `,
};

export const getPlaceholderTextColor = (variation?: InputVariations) => {
  const variationTexts = {
    primary: AppTheme.colors.secondary,
    danger: AppTheme.colors.danger,
  };

  return variationTexts[variation ?? "primary"];
};

export const InputContainer = styled.View<InputContainerProps>`
  z-index: 1;
  border: 1px solid;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 8px;

  opacity: ${prop => (prop.disabled ? 0.5 : 1)};

  elevation: 4;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.15;
  shadow-radius: 2px;

  ${({variation}) => inputVariations[variation ?? "primary"]};
`;
