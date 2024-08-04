import styled from "styled-components/native";

export const HeaderList = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: ${({theme}) => theme.sizeVariations.S}px;
  background-color: ${({theme}) => theme.colors.white};
`;
