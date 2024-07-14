import styled from "styled-components/native";

export const DetailsContainer = styled.View`
  flex: 1;
  padding-left: ${({theme}) => theme.sizeVariations.S}px;
`;

export const PriceContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  gap: ${({theme}) => theme.sizeVariations.XXS}px;
`;
