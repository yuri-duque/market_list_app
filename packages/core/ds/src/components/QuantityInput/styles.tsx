import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  gap: ${({theme}) => theme.sizeVariations.XS}px;
`;

export const ButtonContainer = styled.View`
  width: 50px;
`;

export const InputContainer = styled.View`
  flex: 1;
`;
