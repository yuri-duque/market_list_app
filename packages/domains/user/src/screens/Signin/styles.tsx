import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const InputsGroup = styled.View`
  flex-direction: column;
  gap: ${({theme}) => theme.sizeVariations.S}px;
`;

export const ForgotPasswordContainer = styled.TouchableOpacity`
  margin: ${({theme}) => theme.sizeVariations.M}px 0;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${({theme}) => theme.sizeVariations.L}px;
  gap: ${({theme}) => theme.sizeVariations.S}px;
`;

export const ButtonContainer = styled.View`
  flex: 1;
`;
