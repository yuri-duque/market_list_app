import {useCallback, useMemo} from "react";
import {BottomSheetBackdrop, BottomSheetModal} from "@gorhom/bottom-sheet";
import {ModalContent} from "./styles";
import {ModalProps} from "./types";

export const Modal = ({modalRef, snapPoints, children}: ModalProps) => {
  const snapMeno = useMemo(() => [snapPoints, snapPoints], []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        opacity={0.5}
        onPress={() => modalRef.current?.close()}
        {...props}
      />
    ),
    [],
  );

  return (
    <BottomSheetModal
      ref={modalRef}
      index={1}
      snapPoints={snapMeno}
      backdropComponent={renderBackdrop}>
      <ModalContent>{children}</ModalContent>
    </BottomSheetModal>
  );
};
