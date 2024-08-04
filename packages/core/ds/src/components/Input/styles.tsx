import styled from "styled-components/native";

export const InputContent = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const InputLabel = styled.View`
  flex: auto;
  flex-direction: column;
  gap: 4px;
`;

export const LabelContainer = styled.View`
  position: absolute;
  z-index: 1;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding: 0px;
  margin: 0px;
  font-family: ${({theme}) => theme.fontFamily.roboto};
  color: ${({theme}) => theme.colors.dark};
  font-size: ${({theme}) => theme.fontSizes.S}px;
`;

export const ErrorContainer = styled.View`
  padding-top: 4px;
  padding-left: 4px;
`;
