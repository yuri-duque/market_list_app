import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.red};
  padding: ${({theme}) => theme.sizeVariations.S}px;
  border-radius: 8px;
`;
