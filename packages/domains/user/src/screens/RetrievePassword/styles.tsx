import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.View`
  flex-direction: column;
  gap: ${({theme}) => theme.sizeVariations.XXL};
`;

export const ButtonContainer = styled.View`
  flex: 1;
`;

export const block1 = styled.View`
  height: 50px;
  width: 50px;
  background-color: blue;
`;

export const block2 = styled.View`
  height: 50px;
  width: 50px;
  background-color: gray;
`;
