import styled from "styled-components/native";

export const ActionsContainer = styled.View`
  height: 100%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

export const TrashIconContainer = styled.View`
  background-color: ${({theme}) => theme.colors.light};
  border-radius: ${({theme}) => theme.sizeVariations.XS}px;
  padding: ${({theme}) => theme.sizeVariations.XXS}px;
`;
