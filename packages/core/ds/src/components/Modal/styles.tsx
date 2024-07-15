import styled from "styled-components/native";
import {BottomSheetView} from "@gorhom/bottom-sheet";

export const ModalContent = styled(BottomSheetView)`
  flex: 1;
  padding: ${({theme}) => theme.sizeVariations.XS}px;
`;
