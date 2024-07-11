import styled from "styled-components/native";
import {
  buttonContainedColors,
  buttonOutilinedColors,
  textContainedColors,
  textOutlinedColors,
} from "./colors";
import {ButtonColors, ButtonVariations, ButtoncontainerProps} from "./types";

export const getColor = (color: ButtonColors, variation: ButtonVariations) => {
  if (variation === "outlined") {
    return buttonOutilinedColors[color];
  }

  return buttonContainedColors[color] ?? buttonContainedColors.primary;
};

export const getTextColor = (
  color?: ButtonColors,
  variation?: ButtonVariations,
) => {
  if (variation === "outlined") {
    return textOutlinedColors[color ?? "primary"];
  }

  return textContainedColors[color ?? "primary"];
};

export const ButtonContainer = styled.TouchableOpacity<ButtoncontainerProps>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: ${({rounded}) => (rounded === false ? 0 : 9)}px;
  border: 1px solid;

  opacity: ${prop => (prop.disabled ? 0.5 : 1)};

  elevation: 4;
  shadow-color: ${prop => prop.theme.colors.dark};
  shadow-offset: 2px 2px;
  shadow-opacity: 0.5;
  shadow-radius: 4px;

  ${({color, variation}) =>
    getColor(color ?? "primary", variation ?? "contained")};
`;
