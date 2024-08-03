import styled from "styled-components/native";

export const Container = styled.View<{
  top?: number;
  maxHeight?: number;
}>`
  position: absolute;
  top: ${({top}) => (top ? top : 54)}px;
  width: 100%;

  margin-top: ${({theme}) => theme.sizeVariations.XS}px;

  border: 1px solid ${({theme}) => theme.colors.light};
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 8px;

  elevation: 4;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.15;
  shadow-radius: 2px;

  max-height: ${({maxHeight}) => maxHeight ?? 200}px;
`;

export const ListItemContainer = styled.TouchableOpacity`
  padding: ${({theme}) => theme.sizeVariations.S}px
    ${({theme}) => theme.sizeVariations.S}px;
`;

export const DivisorContainer = styled.View`
  margin: 0 ${({theme}) => theme.sizeVariations.XS}px;
`;
