import styled from "styled-components/native";

export const Container = styled.View<Pick<PageProps, "noPadding">>`
  width: 100%;
  height: 100%;
  padding: ${({noPadding, theme}) =>
    noPadding ? 0 : theme.sizeVariations.S}px;
  background-color: ${({theme}) => theme.colors.background};
`;
