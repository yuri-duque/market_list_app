import styled from "styled-components/native";
import {ThemeType} from "../../../theme/types";
import {ButtonColors, ButtonVariations} from "../types";
import {
  buttonContainedColors,
  buttonOutilinedColors,
  textContainedColors,
  textOutlinedColors,
} from "./colors";

export const getColor = (color: ButtonColors, variation: ButtonVariations) => {
  if (variation === "outlined") {
    return buttonOutilinedColors[color];
  }

  return buttonContainedColors[color];
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

export const ButtonContainer = styled.TouchableOpacity<{
  color?: ButtonColors;
  variation?: ButtonVariations;
}>`
  width: 100%;
  border-radius: 8px;
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
