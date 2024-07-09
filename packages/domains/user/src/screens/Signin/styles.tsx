import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${({theme}) => theme.sizeVariations.L}px;
  gap: ${({theme}) => theme.sizeVariations.S}px;
`;
