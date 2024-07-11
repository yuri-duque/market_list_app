import styled from "styled-components/native";
import {FormPageProps} from "./types";

export const Container = styled.View<Pick<FormPageProps, "noPadding">>`
  padding: ${({noPadding, theme}) =>
    noPadding ? 0 : theme.sizeVariations.S}px;

  padding-top: ${({noPadding, theme}) =>
    noPadding ? 0 : theme.sizeVariations.M}px;

  background-color: ${({theme}) => theme.colors.background};
`;
