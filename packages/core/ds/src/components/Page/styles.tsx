import styled from "styled-components/native";
import {PageProps} from "./types";

export const ScrollView = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const Container = styled.View<Pick<PageProps, "noPadding">>`
  flex: 1;
  padding: ${({noPadding, theme}) =>
    noPadding ? 0 : theme.sizeVariations.S}px;
  background-color: ${({theme}) => theme.colors.background};
`;
