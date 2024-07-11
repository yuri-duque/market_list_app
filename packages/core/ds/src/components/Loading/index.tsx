import React, {useMemo} from "react";
import {Modal} from "react-native";
import * as LottieFiles from "../../assets/lottie";
import * as S from "./styles";
import {LoadingProps} from "./types";

export {useLoading, LoadingProvider} from "./context";

export const Loading: React.FunctionComponent<LoadingProps> = ({
  type,
  visible,
  wrapped,
}) => {
  const Container = useMemo(
    () =>
      wrapped
        ? ({children}: {children: React.ReactNode}) => (
            <S.ContainerWrapped>{children}</S.ContainerWrapped>
          )
        : ({children}: {children: React.ReactNode}) => (
            <Modal visible={visible} animationType="fade" transparent>
              {children}
            </Modal>
          ),
    [wrapped],
  );

  return (
    visible && (
      <Container>
        <S.LoadingContent>
          <S.LottieBase
            source={LottieFiles[type as keyof typeof LottieFiles]}
            autoPlay
            loop={true}
            testID={`loading-${type}`}
          />
        </S.LoadingContent>
      </Container>
    )
  );
};
