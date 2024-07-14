import styled from "styled-components/native";
import {Icon} from "@core/ds";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const ListContainer = styled.View`
  flex: 1;
  flex-direction: column;
  gap: ${({theme}) => theme.sizeVariations.XS}px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: ${({theme}) => theme.sizeVariations.XS}px;
`;

export const ButtonAddProduct = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.primary};
  padding: ${({theme}) => theme.sizeVariations.XS}px;
  border-radius: ${({theme}) => theme.sizeVariations.S}px;
`;

export const ButtonFinishList = styled.View`
  flex: 1;
`;
