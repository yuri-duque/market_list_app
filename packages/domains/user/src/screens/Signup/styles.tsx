import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: space-between;
`;

export const InputsContainer = styled.View`
  flex-direction: column;
  gap: ${({theme}) => theme.sizeVariations.S}px;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 0;
`;
