import styled, {css} from "styled-components/native";
import {ThemeDefault} from "../../../theme/theme";
import {InputProps, InputVariations} from "../types";

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
    primary: ThemeDefault.colors.secondary,
    danger: ThemeDefault.colors.danger,
  };

  return variationTexts[variation ?? "primary"];
};

export const InputContainer = styled.View<{
  variation?: InputVariations;
  disabled?: InputProps["disabled"];
}>`
  width: 100%;
  border: 1px solid;
  background-color: #fff;
  border-radius: 8px;

  opacity: ${prop => (prop.disabled ? 0.5 : 1)};

  elevation: 4;
  shadow-offset: 2px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;

  ${({variation}) => inputVariations[variation ?? "primary"]};
`;
