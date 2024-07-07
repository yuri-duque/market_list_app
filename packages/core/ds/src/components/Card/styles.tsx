import styled from "styled-components/native";

export const CardStyled = styled.View`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px;

  elevation: 4;
  shadow-color: ${prop => prop.theme.colors.dark};
  shadow-offset: 2px 2px;
  shadow-opacity: 0.5;
  shadow-radius: 4px;
`;

export const CardHeader = styled.View`
  margin-bottom: 16px;
`;

export const CardContent = styled.View`
  flex: auto;
`;
