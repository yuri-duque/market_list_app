import styled, {css} from "styled-components/native";
import {ButtonProps} from "../types";

const buttonSizeVariations = {
  S: css`
    padding: 5px 5px;
  `,
  M: css`
    padding: 10px 20px;
  `,
  L: css`
    padding: 36px 20px;
  `,
};

export const ButtonContainer = styled.View<{
  size: ButtonProps["size"];
}>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
  ${({size}) => buttonSizeVariations[size ?? "M"]}
`;
