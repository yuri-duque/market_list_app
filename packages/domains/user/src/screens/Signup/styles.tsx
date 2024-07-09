import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({theme}) => theme.sizeVariations.S}px;
`;
