import styled from "styled-components/native";

export const Input = styled.TextInput`
  padding: 0px;
  margin: 0px;
  font-family: ${({theme}) => theme.fontFamily.robotoMedium};
`;

export const LabelContainer = styled.View`
  padding-left: 8px;
`;

export const ErrorContainer = styled.View`
  padding-top: 4px;
  padding-left: 4px;
`;
