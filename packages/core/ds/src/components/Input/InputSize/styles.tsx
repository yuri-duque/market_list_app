import styled, {css} from "styled-components/native";
import {InputProps} from "../types";

const inputSizeVariations = {
  S: css`
    height: 40px;
  `,
  M: css`
    height: 48px;
  `,
  L: css`
    height: 54px;
  `,
};

export const InputSize = styled.View<{
  size: InputProps["size"];
}>`
  flex-direction: row;
  padding: 4px 12px;
  height: 48px;
`;
