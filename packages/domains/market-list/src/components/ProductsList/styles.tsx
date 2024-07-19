import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const ListContainer = styled.View`
  flex: 1;
  flex-direction: column;
  gap: ${({theme}) => theme.sizeVariations.XS}px;
`;
