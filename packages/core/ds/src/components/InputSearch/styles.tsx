import styled from "styled-components/native";

export const InputContainer = styled.View`
  position: relative;
  z-index: 10;
`;

export const ListContainer = styled.View<{top: number; maxHeight?: number}>`
  position: absolute;
  width: 100%;
  max-height: ${({maxHeight}) => maxHeight}px;
  top: ${({top, theme}) =>
    top + theme.sizeVariations.S || theme.sizeVariations.XXL}px;
`;

export const CardContent = styled.View`
  padding: ${({theme}) => theme.sizeVariations.S}px;
`;
