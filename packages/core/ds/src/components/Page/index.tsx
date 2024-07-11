import {SafeAreaView} from "react-native-safe-area-context";
import * as S from "./styles";
import {PageProps} from "./types";

export const Page = ({children, noPadding}: PageProps) => {
  return (
    <SafeAreaView>
      <S.Container noPadding={noPadding}>{children}</S.Container>
    </SafeAreaView>
  );
};
