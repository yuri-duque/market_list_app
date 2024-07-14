import styled from "styled-components/native";

export const IconContainer = styled.TouchableOpacity<{added?: boolean}>`
  background-color: ${({theme, added}) =>
    added ? theme.colors.success : theme.colors.light};
  padding: ${({theme}) => theme.sizeVariations.M}px;
  border-radius: ${({theme}) => theme.sizeVariations.S}px;
`;
