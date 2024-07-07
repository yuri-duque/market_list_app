import styled, {css} from "styled-components/native";
import {InputProps} from "../types";

const inputSizeVariations = {
  S: css`
    padding: 4px 10px;
  `,
  M: css`
    padding: 8px 10px;
  `,
  L: css`
    padding: 16px 10px;
  `,
};

export const InputSize = styled.View<{
  size: InputProps["size"];
}>`
  ${({size}) => inputSizeVariations[size ?? "M"]}
`;
