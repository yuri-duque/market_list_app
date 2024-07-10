import styled, {css} from "styled-components/native";
import {ButtonSizeProps} from "./types";

const buttonSizeVariations = {
  S: css`
    height: 40px;
  `,
  M: css`
    height: 48px;
  `,
  L: css`
    height: 56px;
  `,
};

export const ButtonSize = styled.View<ButtonSizeProps>`
  ${({size}) => buttonSizeVariations[size ?? "M"]}
`;
