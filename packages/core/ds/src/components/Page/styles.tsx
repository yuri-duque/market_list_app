import styled from "styled-components/native";

export const PageStyled = styled.View<{
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}>`
  padding-top: ${({top}) => top ?? 0}px;
  padding-bottom: ${({bottom}) => bottom ?? 0}px;
  padding-left: ${({left}) => left ?? 0}px;
  padding-right: ${({right}) => right ?? 0}px;
  flex: 1;
`;
