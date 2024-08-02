import styled from "styled-components/native";
import {SpacingProps} from "./types";

export const Spacing = styled.View<SpacingProps>`
  height: ${({size, theme}) => theme.sizeVariations[size]}px;
  width: ${({size, theme}) => theme.sizeVariations[size]}px;
`;
