import {ScrollView} from "react-native";
import {PageSafeArea, PageSafeAreaProps} from "../SaveArea";
import * as S from "./styles";

export type PageProps = PageSafeAreaProps & {
  noPadding?: boolean;
};

export const Page = (props: PageProps) => {
  return (
    <PageSafeArea {...props}>
      <S.Container noPadding={props.noPadding}>{props.children}</S.Container>
    </PageSafeArea>
  );
};
