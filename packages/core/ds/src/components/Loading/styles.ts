import {View} from "react-native";
import LottieView from "lottie-react-native";
import styled from "styled-components/native";

export const LoadingContent = styled.View`
  background-color: ${({theme}) => theme.opacity.black30};
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const LottieBase = styled(LottieView)`
  flex: 1;
  opacity: 0.8;
`;

export const ContainerWrapped = styled(View)`
  position: absolute;
  elevation: 999999;
  width: 100%;
  height: 100%;
`;
