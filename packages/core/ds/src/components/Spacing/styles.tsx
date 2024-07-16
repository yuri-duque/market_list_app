import styled from "styled-components/native";
import {SpacingProps} from "./types";

export const Spacing = styled.View<SpacingProps>`
  ${({size, theme}) => ({
    height: theme.sizeVariations[size],
    width: theme.sizeVariations[size],
  })}
`;
