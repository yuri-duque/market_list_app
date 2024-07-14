import styled from "styled-components/native";

export const CardContent = styled.View<{added?: boolean}>`
  margin: ${({theme}) => theme.sizeVariations.S}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 68px;
`;
