import styled from "styled-components/native";

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: ${({theme}) => theme.sizeVariations.XS}px;
  padding: ${({theme}) => theme.sizeVariations.XS}px;
`;

export const ButtonFinishList = styled.View`
  flex: 1;
`;

export const ButtonAddProduct = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.primary};
  padding: ${({theme}) => theme.sizeVariations.XS}px;
  border-radius: ${({theme}) => theme.sizeVariations.S}px;
`;
