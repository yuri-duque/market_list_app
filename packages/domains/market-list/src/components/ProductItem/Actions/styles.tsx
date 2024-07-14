import styled from "styled-components/native";
import {Icon} from "@core/ds";

export const ActionsContainer = styled.View`
  height: 100%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

export const TrashIcon = styled(Icon)`
  background-color: ${({theme}) => theme.colors.light};
  padding: ${({theme}) => theme.sizeVariations.XXS}px;
  border-radius: ${({theme}) => theme.sizeVariations.XS}px;
`;
