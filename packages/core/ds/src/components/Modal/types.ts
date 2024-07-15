import {RefObject} from "react";
import {BottomSheetModalMethods} from "@gorhom/bottom-sheet/lib/typescript/types";

export type ModalProps = {
  modalRef: RefObject<BottomSheetModalMethods>;
  children: React.ReactNode;
  snapPoints: string;
  snapIndex?: number;
};
