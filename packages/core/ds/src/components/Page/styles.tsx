import styled from "styled-components/native";
import {PageProps} from "./types";

export const Container = styled.View<Pick<PageProps, "noPadding">>`
  width: 100%;
  height: 100%;
  padding: ${({noPadding, theme}) =>
    noPadding ? 0 : theme.sizeVariations.XS}px;
`;
